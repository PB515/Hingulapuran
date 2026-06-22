"use client";

import { motion, useReducedMotion } from "motion/react";

/* Sparse, faint gold kalam motifs that drift slowly in a section's negative
   space (the dark gutters around a pinned media frame), so the emptiness reads
   as composed, not blank. Render inside a positioned, overflow-hidden container;
   it sits at -z so it stays behind the content and only shows in the gutters.
   Honours prefers-reduced-motion (then it is simply static). */

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
  <path
    d="M58 14 C80 22 82 52 60 70 C46 81 28 76 26 60 C25 50 33 43 43 47 C50 50 50 59 44 61"
    strokeLinejoin="round"
    strokeLinecap="round"
  />
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

type Place = { m: keyof typeof MOTIFS; pos: string; size: number; op: number; float: number; dur: number; delay: number; spin?: boolean };

const PLACE: Place[] = [
  { m: "rosette", pos: "left-[5%] top-[14%]", size: 78, op: 0.45, float: 10, dur: 9, delay: 0, spin: true },
  { m: "sun", pos: "right-[7%] top-[12%]", size: 64, op: 0.42, float: 8, dur: 11, delay: 0.6, spin: true },
  { m: "paisley", pos: "left-[7%] top-[56%]", size: 66, op: 0.4, float: 12, dur: 10, delay: 1.2 },
  { m: "lotus", pos: "right-[5%] top-[58%]", size: 68, op: 0.42, float: 10, dur: 12, delay: 0.3 },
  { m: "diya", pos: "left-[15%] bottom-[12%]", size: 56, op: 0.45, float: 9, dur: 8, delay: 0.9 },
  { m: "rosette", pos: "right-[13%] bottom-[13%]", size: 60, op: 0.4, float: 11, dur: 10, delay: 1.6, spin: true },
];

export function AmbientMotifs({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
      {PLACE.map((p, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 100 100"
          width={p.size}
          height={p.size}
          className={`absolute text-swarna ${p.pos}`}
          style={{ opacity: p.op }}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.3}
          animate={reduce ? undefined : { y: [0, -p.float, 0], rotate: p.spin ? [0, 6, 0] : [0, 0, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {MOTIFS[p.m]}
        </motion.svg>
      ))}
    </div>
  );
}
