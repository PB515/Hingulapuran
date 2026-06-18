"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from "motion/react";
import { site } from "@/lib/site";

/* Flip to true to show the scroll-% tuning readout. */
const TUNING = false;

/* Flagship hero: a Mata-ni-Pachedi temple door that opens as you scroll, revealing
   the cave-shrine backdrop and the goddess. Pure CSS-transform parallax on the
   layered PNGs — cheap on every device, and it degrades to "doors already open"
   for reduced-motion / no-JS. (No WebGL = no capability gate needed here.) */
export function DoorHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // doors part over the first ~40%, then the open scene + title HOLD for the long rest
  const leftX = useTransform(scrollYProgress, [0, 0.4], ["0%", "-106%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.4], ["0%", "106%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const toranY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  // The title + scrim are STATIC behind the doors; the doors sliding away reveal
  // them. (No scroll-driven opacity — that was getting stuck at 0.)

  const open = !!reduce; // reduced-motion → start open, no scroll dependency

  // tuning readout — scroll to where you want the text and read this %
  const [pct, setPct] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setPct(Math.round(v * 100)));

  return (
    <section ref={ref} className="relative h-[450vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-raat">
        {TUNING && (
          <div className="absolute right-4 top-20 z-50 rounded-md bg-black/70 px-3 py-1.5 font-mono text-sm text-swarna">
            scroll {pct}%
          </div>
        )}
        {/* backdrop — the cave + goddess, revealed behind the doors (desktop wide / mobile tall) */}
        <motion.img
          src="/art/door/desktop-backdrop.webp"
          alt="The sanctum of Hinglaj Mata"
          style={{ scale: reduce ? 1 : bgScale }}
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        />
        <motion.img
          src="/art/door/01-backdrop.webp"
          alt=""
          aria-hidden
          style={{ scale: reduce ? 1 : bgScale }}
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-raat/30" aria-hidden />

        {/* dark scrim — sits behind the doors; revealed as they open so the
            cream/gold title reads against the bright cloth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: "radial-gradient(48% 42% at 50% 44%, rgba(18,16,31,0.94), rgba(18,16,31,0) 72%)" }}
        />

        {/* title — static behind the doors, revealed as they slide away */}
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[1.05] text-patra md:text-7xl" style={{ textShadow: "0 2px 24px rgba(18,16,31,.9)" }}>
            हिंगलाज माता
          </h1>
          <p className="mx-auto mt-7 max-w-2xl font-[family-name:var(--font-display)] text-xl leading-relaxed text-swarna md:text-3xl" style={{ textShadow: "0 2px 18px rgba(18,16,31,.95)" }}>
            {site.mantra}
          </p>
        </div>

        {/* door leaves (right = mirrored). DESKTOP: wide leaf, object-cover fills cleanly. */}
        <motion.img
          src="/art/door/desktop-leaf.webp"
          alt=""
          aria-hidden
          style={{ x: open ? "-106%" : leftX }}
          className="absolute left-0 top-0 z-30 hidden h-full w-1/2 bg-rakta object-cover object-right md:block"
        />
        <motion.img
          src="/art/door/desktop-leaf.webp"
          alt=""
          aria-hidden
          style={{ x: open ? "106%" : rightX, scaleX: -1 }}
          className="absolute right-0 top-0 z-30 hidden h-full w-1/2 bg-rakta object-cover object-right md:block"
        />
        {/* MOBILE: tall leaf, object-contain so the full guardian shows. */}
        <motion.img
          src="/art/door/02-leaf.webp"
          alt=""
          aria-hidden
          style={{ x: open ? "-106%" : leftX }}
          className="absolute left-0 top-0 z-30 h-full w-1/2 bg-rakta object-contain object-right md:hidden"
        />
        <motion.img
          src="/art/door/02-leaf.webp"
          alt=""
          aria-hidden
          style={{ x: open ? "106%" : rightX, scaleX: -1 }}
          className="absolute right-0 top-0 z-30 h-full w-1/2 bg-rakta object-contain object-right md:hidden"
        />

        {/* foreground toran — DESKTOP: tiled 3× festoon; MOBILE: single */}
        <motion.div
          aria-hidden
          style={reduce ? undefined : { y: toranY }}
          className="absolute inset-x-0 top-0 z-40 hidden md:flex"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/art/door/04-foreground-toran.webp" alt="" className="w-1/3" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/art/door/04-foreground-toran.webp" alt="" className="w-1/3" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/art/door/04-foreground-toran.webp" alt="" className="w-1/3" />
        </motion.div>
        <motion.img
          src="/art/door/04-foreground-toran.webp"
          alt=""
          aria-hidden
          style={reduce ? undefined : { y: toranY }}
          className="absolute inset-x-0 top-0 z-40 w-full md:hidden"
        />

        <div className="absolute inset-x-0 bottom-6 z-40 text-center font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-patra/70">
          scroll to enter
        </div>
      </div>
    </section>
  );
}
