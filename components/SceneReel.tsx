"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import type { ReelScene, ReelLayer } from "@/lib/reels";

/* 2.5D Scene-Reel: a pinned, scroll-scrubbed reel of itihaas scenes. Each scene is
   three layered cut-outs (far / subject / near) that parallax at different depths
   and EMERGE from the back (scale + fade) as you scroll. Responsive desktop/mobile
   art. Reduced-motion → a static, readable stack. (Sacred history — see STYLE Rule 0.) */

function ResponsiveImg({ src, y, fit, z }: { src: ReelLayer; y: MotionValue<string>; fit: string; z: string }) {
  const cls = `pointer-events-none absolute inset-0 h-full w-full ${fit} ${z}`;
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img src={src.d} alt="" aria-hidden loading="lazy" style={{ y }} className={`hidden md:block ${cls}`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img src={src.m} alt="" aria-hidden loading="lazy" style={{ y }} className={`md:hidden ${cls}`} />
    </>
  );
}

function Scene({ scene, i, n, p }: { scene: ReelScene; i: number; n: number; p: MotionValue<number> }) {
  const start = i / n;
  const mid = (i + 0.5) / n;
  const end = (i + 1) / n;
  // emerge-from-back + cross-fade across this scene's slot
  const opacity = useTransform(p, [start, mid - 0.04, mid + 0.04, end], [0, 1, 1, 0]);
  const scale = useTransform(p, [start, mid, end], [0.84, 1, 1.08]);
  // layer parallax — far drifts least, near most (depth)
  const farY = useTransform(p, [start, end], ["-2%", "2%"]);
  const subjY = useTransform(p, [start, end], ["-6%", "6%"]);
  const nearY = useTransform(p, [start, end], ["-12%", "12%"]);

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 will-change-transform">
      <ResponsiveImg src={scene.far} y={farY} fit="object-cover" z="z-0" />
      <ResponsiveImg src={scene.subject} y={subjY} fit="object-contain" z="z-10" />
      <ResponsiveImg src={scene.near} y={nearY} fit="object-contain" z="z-20" />
      <div className="absolute inset-x-0 bottom-[8%] z-30 px-6 text-center">
        <p className="font-[family-name:var(--font-display)] text-3xl text-patra md:text-5xl" style={{ textShadow: "0 2px 22px rgba(18,16,31,.9)" }}>
          {scene.deva}
        </p>
        <p className="mt-3 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.28em] text-swarna md:text-sm" style={{ textShadow: "0 2px 14px rgba(18,16,31,.95)" }}>
          {scene.en}
        </p>
      </div>
    </motion.div>
  );
}

export function SceneReel({ scenes }: { scenes: ReelScene[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = scenes.length;

  if (reduce) {
    // accessible fallback — composited stills, read top to bottom
    return (
      <section className="bg-raat">
        {scenes.map((s, i) => (
          <figure key={i} className="relative mx-auto aspect-video max-w-5xl overflow-hidden border-b border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.far.d} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.subject.d} alt={s.en} className="absolute inset-0 h-full w-full object-contain" />
            <figcaption className="absolute inset-x-0 bottom-4 text-center font-[family-name:var(--font-display)] text-2xl text-patra">{s.deva}</figcaption>
          </figure>
        ))}
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-raat" style={{ height: `${n * 130}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {scenes.map((s, i) => (
          <Scene key={i} scene={s} i={i} n={n} p={scrollYProgress} />
        ))}
        <div className="absolute inset-x-0 bottom-4 z-40 text-center font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.3em] text-patra/45">
          scroll
        </div>
      </div>
    </section>
  );
}
