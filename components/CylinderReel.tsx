"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { shaktipeethReel, type ReelScene } from "@/lib/reels";

/* DEMO — 3D cylindrical carousel: the scenes are projected onto a virtual cylinder
   (each panel rotateY'd out + pushed back by translateZ), and the whole cylinder
   rotates with scroll so each scene swings to the front in turn. Flat panels (no
   2.5D depth) — this is the "browse" alternative to the cinematic reel.
   (Sacred history — STYLE Rule 0.) */

const PANEL_W = 640; // px — the stage is scaled down on small screens
const PANEL_H = 360;

function Panel({ scene, k, angle, radius }: { scene: ReelScene; k: number; angle: number; radius: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25 shadow-[0_30px_90px_rgba(0,0,0,.6)]"
      style={{
        width: PANEL_W,
        height: PANEL_H,
        marginLeft: -PANEL_W / 2,
        marginTop: -PANEL_H / 2,
        transform: `rotateY(${k * angle}deg) translateZ(${radius}px)`,
        backfaceVisibility: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={scene.far.d} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-raat/35" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={scene.subject.d} alt={scene.en} className="absolute inset-0 h-full w-full object-contain" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={scene.near.d} alt="" aria-hidden className="absolute inset-0 h-full w-full object-contain" />
      <div className="absolute inset-x-0 bottom-0 h-2/5" style={{ background: "linear-gradient(to top, rgba(18,16,31,.95), transparent)" }} />
      <div className="absolute inset-x-0 bottom-4 px-5 text-center">
        <p className="font-[family-name:var(--font-display)] text-2xl text-patra md:text-3xl">{scene.deva}</p>
        <p className="mt-1 font-[family-name:var(--font-display-latin)] text-[10px] uppercase tracking-[0.26em] text-swarna">{scene.en}</p>
      </div>
    </div>
  );
}

export function CylinderReel({ scenes = shaktipeethReel }: { scenes?: ReelScene[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const n = scenes.length;
  const angle = 360 / n;
  // radius so panels sit on a clean cylinder, with a little breathing gap
  const radius = Math.round((PANEL_W / 2) / Math.tan(Math.PI / n)) + 60;
  // rotate from the first panel round to the last (negative = panels swing in from the right)
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -(n - 1) * angle]);

  if (reduce) {
    return (
      <section className="bg-raat px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          {scenes.map((s, i) => (
            <figure key={i} className="relative aspect-video overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.far.d} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-raat/35" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.subject.d} alt={s.en} className="absolute inset-0 h-full w-full object-contain" />
              <figcaption className="absolute inset-x-0 bottom-3 text-center font-[family-name:var(--font-display)] text-xl text-patra">{s.deva}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-raat" style={{ height: `${(n + 1) * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden" style={{ perspective: 1600 }}>
        {/* scale the whole 3D stage down on small screens (translateZ is in px) */}
        <div className="scale-[0.42] sm:scale-[0.6] md:scale-90 lg:scale-100">
          <motion.div className="relative" style={{ width: PANEL_W, height: PANEL_H, transformStyle: "preserve-3d", rotateY }}>
            {scenes.map((s, k) => (
              <Panel key={k} scene={s} k={k} angle={angle} radius={radius} />
            ))}
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-6 text-center font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.3em] text-patra/45">
          scroll to rotate
        </div>
      </div>
    </section>
  );
}
