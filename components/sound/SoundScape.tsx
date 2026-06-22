"use client";

import { useEffect, useRef } from "react";
import { useSound } from "./SoundProvider";

/* Wrap a section. When it scrolls into view, crossfade to its `bed` and fire
   its `cue`(s) once. Purely additive — it wraps children in a plain div and
   never touches the section's own code. */
export function SoundScape({
  bed,
  cue,
  threshold = 0.4,
  children,
}: {
  bed?: string;
  cue?: string | string[];
  threshold?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { setBed, play } = useSound();
  const fired = useRef<Set<string>>(new Set());

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cues = cue ? (Array.isArray(cue) ? cue : [cue]) : [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          if (bed) setBed(bed);
          for (const c of cues) {
            if (!fired.current.has(c)) {
              fired.current.add(c);
              play(c);
            }
          }
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [bed, cue, threshold, setBed, play]);

  return <div ref={ref}>{children}</div>;
}
