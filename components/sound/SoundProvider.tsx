"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { SOUNDS } from "@/lib/sound/manifest";

/* The audio engine. Default MUTED (browser autoplay policy + reverence).
   The header toggle is the user gesture that unlocks sound; after that,
   scrolling into a section crossfades its bed and fires its cues. The user's
   choice is remembered. Missing audio files are a silent no-op.

   Every bed element is tracked in `beds` so muting stops ALL of them — including
   any still crossfading — and there are no orphaned loops. `current` is assigned
   synchronously (not in a play() callback) so rapid setBed() calls during a
   scroll always fade out the right element. */

type SoundCtx = {
  muted: boolean;
  toggle: () => void;
  setBed: (id: string | null) => void;
  play: (id: string) => void;
};

const Ctx = createContext<SoundCtx | null>(null);
export const useSound = (): SoundCtx =>
  useContext(Ctx) ?? { muted: true, toggle: () => {}, setBed: () => {}, play: () => {} };

const FADE_MS = 1100;

type FadeEl = HTMLAudioElement & { _fi?: ReturnType<typeof setInterval> | null };

function fade(el: FadeEl, to: number, ms: number, done?: () => void) {
  if (el._fi) clearInterval(el._fi);
  const from = el.volume;
  const steps = Math.max(1, Math.round(ms / 40));
  let i = 0;
  el._fi = setInterval(() => {
    i++;
    el.volume = Math.min(1, Math.max(0, from + (to - from) * (i / steps)));
    if (i >= steps) {
      if (el._fi) clearInterval(el._fi);
      el._fi = null;
      done?.();
    }
  }, 40);
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(true);
  const mutedRef = useRef(true);
  const desiredBed = useRef<string | null>("bed-base");
  const beds = useRef<Set<FadeEl>>(new Set());
  const current = useRef<{ id: string; el: FadeEl } | null>(null);

  const stopAllBeds = useCallback(() => {
    beds.current.forEach((el) => {
      if (el._fi) clearInterval(el._fi);
      el._fi = null;
      try {
        el.pause();
      } catch {}
    });
    beds.current.clear();
    current.current = null;
  }, []);

  const startBed = useCallback((id: string | null) => {
    if (mutedRef.current) return;
    if (current.current?.id === id) return;

    // fade out + stop the current bed (it stays tracked until the fade ends)
    const old = current.current;
    if (old) {
      fade(old.el, 0, FADE_MS, () => {
        try {
          old.el.pause();
        } catch {}
        beds.current.delete(old.el);
      });
    }

    if (!id) {
      current.current = null;
      return;
    }
    const def = SOUNDS[id];
    if (!def) {
      current.current = null;
      return;
    }

    const el = new Audio(def.src) as FadeEl;
    el.loop = def.loop ?? true;
    el.volume = 0;
    beds.current.add(el);
    current.current = { id, el }; // assign synchronously so the next setBed fades THIS one
    el.play()
      .then(() => {
        if (mutedRef.current) {
          el.pause();
          beds.current.delete(el);
          return;
        }
        fade(el, def.volume, FADE_MS);
      })
      .catch(() => {
        beds.current.delete(el);
        if (current.current?.el === el) current.current = null;
      });
  }, []);

  const setBed = useCallback(
    (id: string | null) => {
      desiredBed.current = id;
      startBed(id);
    },
    [startBed],
  );

  const play = useCallback((id: string) => {
    if (mutedRef.current) return;
    const def = SOUNDS[id];
    if (!def) return;
    const el = new Audio(def.src);
    el.volume = def.volume;
    el.play().catch(() => {});
  }, []);

  const toggle = useCallback(() => {
    setMuted((m) => {
      const nm = !m;
      mutedRef.current = nm;
      try {
        localStorage.setItem("hp-sound", nm ? "off" : "on");
      } catch {}
      if (nm) {
        stopAllBeds(); // kill every bed, tracked or crossfading
      } else {
        startBed(desiredBed.current);
      }
      return nm;
    });
  }, [startBed, stopAllBeds]);

  // restore the user's prior choice (and resume its bed)
  useEffect(() => {
    try {
      if (localStorage.getItem("hp-sound") === "on") {
        mutedRef.current = false;
        setMuted(false);
        startBed(desiredBed.current);
      }
    } catch {}
  }, [startBed]);

  // stop all audio on unmount
  useEffect(() => stopAllBeds, [stopAllBeds]);

  return <Ctx.Provider value={{ muted, toggle, setBed, play }}>{children}</Ctx.Provider>;
}
