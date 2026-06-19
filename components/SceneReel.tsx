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
      {/* dim the busy backdrop so the cut-out subject reads */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-raat/35" />
      <ResponsiveImg src={scene.subject} y={subjY} fit="object-contain" z="z-10" />
      <ResponsiveImg src={scene.near} y={nearY} fit="object-contain" z="z-20" />
      {/* edge vignette focuses the centre */}
      <div className="pointer-events-none absolute inset-0 z-20" style={{ background: "radial-gradient(125% 105% at 50% 42%, transparent 50%, rgba(18,16,31,.62) 100%)" }} />
      {/* bottom scrim so the caption is legible over the art */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2/5" style={{ background: "linear-gradient(to top, rgba(18,16,31,.95), rgba(18,16,31,.55) 42%, transparent)" }} />
      <div className="absolute inset-x-0 bottom-[7%] z-30 px-6 text-center">
        <p className="font-[family-name:var(--font-display)] text-3xl text-patra md:text-5xl" style={{ textShadow: "0 2px 22px rgba(18,16,31,.95)" }}>
          {scene.deva}
        </p>
        <p className="mt-3 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.28em] text-swarna md:text-sm" style={{ textShadow: "0 2px 14px rgba(18,16,31,1)" }}>
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
          <figure key={i} className="relative mx-auto my-8 aspect-video max-w-5xl overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.far.d} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-raat/35" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.subject.d} alt={s.en} className="absolute inset-0 h-full w-full object-contain" />
            <div className="absolute inset-x-0 bottom-0 h-2/5" style={{ background: "linear-gradient(to top, rgba(18,16,31,.95), transparent)" }} />
            <figcaption className="absolute inset-x-0 bottom-4 text-center font-[family-name:var(--font-display)] text-2xl text-patra">{s.deva}</figcaption>
          </figure>
        ))}
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-raat" style={{ height: `${n * 130}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4 py-16 md:px-10">
        {/* the framed stage — a window onto the scene, dark page around it */}
        <div className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25 shadow-[0_40px_140px_rgba(0,0,0,.65)]">
          {scenes.map((s, i) => (
            <Scene key={i} scene={s} i={i} n={n} p={scrollYProgress} />
          ))}
          {/* thin inner gold rule for the framed-painting feel */}
          <div className="pointer-events-none absolute inset-0 z-40 rounded-[inherit] ring-1 ring-inset ring-swarna/15" />
          <div className="absolute inset-x-0 bottom-3 z-40 text-center font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.3em] text-patra/45">
            scroll
          </div>
        </div>
      </div>
    </section>
  );
}
