"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

/* Sparse, faint gold kalam motifs drifting in a section's negative space (the
   dark gutters around a pinned media frame), so the emptiness reads as composed.
   Like the math-glyph field on the tutoring site: each motif floats on its own
   AND the whole field leans with the cursor (per-motif depth = parallax). A pool
   is rotated per section via `offset` so adjacent sections never match.
   Desktop only (phones stay clean), aria-hidden, reduced-motion safe. */

const SHIFT = 16; // max px the field leans with the cursor

const Rosette = (
  <g>
    {[0, 45, 90, 135].map((a) => (
      <ellipse key={a} cx="50" cy="28" rx="6.5" ry="17" transform={`rotate(${a} 50 50)`} />
    ))}
    {[22.5, 67.5, 112.5, 157.5].map((a) => (
      <ellipse key={a} cx="50" cy="32" rx="5" ry="13" transform={`rotate(${a} 50 50)`} />
    ))}
    <circle cx="50" cy="50" r="6.5" />
  </g>
);
const Sun = (
  <g strokeLinecap="round">
    <circle cx="50" cy="50" r="11" />
    {Array.from({ length: 12 }).map((_, k) => (
      <line key={k} x1="50" y1="20" x2="50" y2="31" transform={`rotate(${k * 30} 50 50)`} />
    ))}
  </g>
);
const Paisley = (
  <path d="M58 14 C80 22 82 52 60 70 C46 81 28 76 26 60 C25 50 33 43 43 47 C50 50 50 59 44 61" strokeLinejoin="round" strokeLinecap="round" />
);
const Diya = (
  <g strokeLinejoin="round" strokeLinecap="round">
    <path d="M26 58 C34 72 66 72 74 58 Z" />
    <path d="M50 30 C56 40 54 50 50 55 C46 50 44 40 50 30 Z" />
  </g>
);
const Lotus = (
  <g strokeLinejoin="round" strokeLinecap="round">
    <path d="M50 30 C58 44 58 56 50 64 C42 56 42 44 50 30 Z" />
    <path d="M50 64 C40 60 30 62 24 70 C34 74 44 72 50 64 Z" />
    <path d="M50 64 C60 60 70 62 76 70 C66 74 56 72 50 64 Z" />
  </g>
);

const MOTIFS = { rosette: Rosette, sun: Sun, paisley: Paisley, diya: Diya, lotus: Lotus } as const;
const POOL: (keyof typeof MOTIFS)[] = ["rosette", "sun", "paisley", "lotus", "diya"];

// gutter slots, ordered for a balanced spread; first `count` are used.
type Slot = { pos: string; size: number; depth: number; op: number; float: number; dur: number; delay: number; tablet?: boolean };
const SLOTS: Slot[] = [
  { pos: "left-[5%] top-[14%]", size: 78, depth: 1.3, op: 0.44, float: 10, dur: 9, delay: 0, tablet: true },
  { pos: "right-[6%] top-[12%]", size: 64, depth: 1.3, op: 0.42, float: 8, dur: 11, delay: 0.6, tablet: true },
  { pos: "left-[7%] top-[57%]", size: 66, depth: 1.1, op: 0.4, float: 12, dur: 10, delay: 1.2 },
  { pos: "right-[5%] top-[59%]", size: 68, depth: 1.1, op: 0.42, float: 10, dur: 12, delay: 0.3 },
  { pos: "left-[15%] bottom-[12%]", size: 56, depth: 0.75, op: 0.44, float: 9, dur: 8, delay: 0.9 },
  { pos: "right-[13%] bottom-[13%]", size: 60, depth: 0.75, op: 0.4, float: 11, dur: 10, delay: 1.6 },
];

export function AmbientMotifs({ offset = 0, count = 6 }: { offset?: number; count?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty("--px", `${tx.toFixed(1)}px`);
      el.style.setProperty("--py", `${ty.toFixed(1)}px`);
    };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      if (r.height === 0) return;
      const mx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const my = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      tx = Math.max(-1, Math.min(1, mx)) * -SHIFT;
      ty = Math.max(-1, Math.min(1, my)) * -SHIFT;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const n = Math.max(0, Math.min(count, SLOTS.length));
  const items = SLOTS.slice(0, n).map((slot, k) => ({
    ...slot,
    m: POOL[(offset * 2 + k) % POOL.length],
    spin: (offset + k) % 2 === 0,
  }));

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block">
      {items.map((it, i) => (
        <span
          key={i}
          className={`absolute ${it.pos} ${it.tablet ? "" : "hidden lg:block"} transition-transform duration-500 ease-out`}
          style={{ transform: `translate(calc(var(--px, 0px) * ${it.depth}), calc(var(--py, 0px) * ${it.depth}))` }}
        >
          <motion.svg
            viewBox="0 0 100 100"
            width={it.size}
            height={it.size}
            className="block text-swarna"
            style={{ opacity: it.op }}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.3}
            animate={reduce ? undefined : { y: [0, -it.float, 0], rotate: it.spin ? [0, 6, 0] : [0, 0, 0] }}
            transition={{ duration: it.dur, delay: it.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {MOTIFS[it.m]}
          </motion.svg>
        </span>
      ))}
    </div>
  );
}
