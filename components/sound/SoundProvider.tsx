"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { SOUNDS } from "@/lib/sound/manifest";

/* The audio engine. Default MUTED (browser autoplay policy + reverence).
   The header toggle is the user gesture that unlocks sound; after that,
   scrolling into a section crossfades its bed and fires its cues. The user's
   choice is remembered. Missing audio files are a silent no-op. */

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

function ramp(el: HTMLAudioElement, to: number, ms: number, done?: () => void) {
  const from = el.volume;
  const steps = Math.max(1, Math.round(ms / 40));
  let i = 0;
  const iv = setInterval(() => {
    i++;
    el.volume = Math.min(1, Math.max(0, from + (to - from) * (i / steps)));
    if (i >= steps) {
      clearInterval(iv);
      done?.();
    }
  }, 40);
  return iv;
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(true);
  const mutedRef = useRef(true);
  const desiredBed = useRef<string | null>("bed-base");
  const current = useRef<{ id: string; el: HTMLAudioElement; fade?: ReturnType<typeof setInterval> } | null>(null);

  // restore the user's prior choice
  useEffect(() => {
    try {
      if (localStorage.getItem("hp-sound") === "on") {
        mutedRef.current = false;
        setMuted(false);
      }
    } catch {}
  }, []);

  const startBed = useCallback((id: string | null) => {
    if (mutedRef.current) return;
    if (current.current?.id === id) return;

    const old = current.current;
    if (old) {
      if (old.fade) clearInterval(old.fade);
      old.fade = ramp(old.el, 0, FADE_MS, () => old.el.pause());
    }
    current.current = null;
    if (!id) return;

    const def = SOUNDS[id];
    if (!def) return;
    const el = new Audio(def.src);
    el.loop = def.loop ?? true;
    el.volume = 0;
    el.play()
      .then(() => {
        current.current = { id, el, fade: ramp(el, def.volume, FADE_MS) };
      })
      .catch(() => {});
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
        const c = current.current;
        if (c) {
          if (c.fade) clearInterval(c.fade);
          c.fade = ramp(c.el, 0, 400, () => c.el.pause());
        }
        current.current = null;
      } else {
        startBed(desiredBed.current);
      }
      return nm;
    });
  }, [startBed]);

  // stop everything on unmount
  useEffect(() => {
    return () => {
      const c = current.current;
      if (c) {
        if (c.fade) clearInterval(c.fade);
        c.el.pause();
      }
    };
  }, []);

  return <Ctx.Provider value={{ muted, toggle, setBed, play }}>{children}</Ctx.Provider>;
}
