"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent, type MotionValue } from "motion/react";
import { shaktipeethReel, type ReelScene, type ReelLayer } from "@/lib/reels";
import { buildTimeline } from "@/lib/timeline";

/* The whole fall-of-Sati chapter as ONE pinned stage: the 2.5D scene-reel plays, then
   scene 4 hands straight off (no gap) into the guided map tour — the parting → the
   fifty-one Shakti Peethas (all lit) → Hinglaj. A single sticky frame, one scroll track.
   (Sacred history — STYLE Rule 0; never myth/legend/story.)

   TUNING — percents on the map art (cream land on maroon sea):
   • PEETHAS = scattered seats that glow on the overview beat (keep on land)
   • STOPS[].x/.y = focus sites (a stop with `all:true` lights PEETHAS; one with neither is intro) */

const MAP = "/art/stories/shaktipeeth/desktop/s5-far.webp";

/* PACING — the only knobs. Raise to slow things down / lengthen the scroll. */
const SCENE_WEIGHT = 1.4; // scroll length per reel scene
const BEAT_WEIGHT = 1.7;  // scroll length per map beat (longer, to read the card)
const VH_PER_UNIT = 170;  // overall scroll density — raise for more scroll everywhere

type Stop = { deva: string; en: string; body: string; all?: boolean; x?: number; y?: number; hinglaj?: boolean };

const PEETHAS: { x: number; y: number }[] = [
  { x: 34, y: 26 }, { x: 44, y: 23 }, { x: 54, y: 24 }, { x: 62, y: 29 },
  { x: 30, y: 33 }, { x: 41, y: 36 }, { x: 50, y: 34 }, { x: 57, y: 39 },
  { x: 46, y: 45 }, { x: 52, y: 51 }, { x: 48, y: 60 }, { x: 36, y: 42 },
];

const STOPS: Stop[] = [
  { x: 50, y: 42, deva: "देह का विभाजन", en: "The body is parted", body: "Borne by grieving Shiva, Devi Sati's body was parted by Vishnu's Sudarshan — and across all of Jambudvip the parts came down to the earth." },
  { all: true, deva: "इकयावन शक्तिपीठ", en: "The fifty-one Shakti Peethas", body: "Where each part fell, a seat of power arose — fifty-one Shakti Peethas, binding the whole of the land together like beads upon one thread." },
  { x: 17, y: 27, hinglaj: true, deva: "हिंगलाज", en: "Hinglaj — where the crown fell", body: "On the Hingol, in the Makran hills, fell her brahmarandhra — the tenth gate. Of all the fifty-one, the westernmost seat, and the very door of liberation, came to rest here." },
];

const OVERVIEW = STOPS.findIndex((s) => s.all);

/** opacity that fades in across [a,b] then out (floor = resting value). */
function useWindow(p: MotionValue<number>, a: number, b: number, fade = 0.18, floor = 0) {
  const f = (b - a) * fade;
  return useTransform(p, [a, a + f, b - f, b], [floor, 1, 1, floor]);
}

function Img({ src, y, fit, z, scale, origin }: { src: ReelLayer; y: MotionValue<string>; fit: string; z: string; scale?: number; origin?: string }) {
  const cls = `pointer-events-none absolute inset-0 h-full w-full ${fit} ${z}`;
  const style = { y, scale, transformOrigin: origin };
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img src={src.d} alt="" aria-hidden loading="lazy" style={style} className={`hidden md:block ${cls}`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img src={src.m} alt="" aria-hidden loading="lazy" style={style} className={`md:hidden ${cls}`} />
    </>
  );
}

/** one reel scene, animated within its absolute [a,b] window of the shared scroll.
   `first` = already on screen when the section pins (no emerge-from-back, no scroll needed). */
function Scene({ scene, a, b, p, first, last }: { scene: ReelScene; a: number; b: number; p: MotionValue<number>; first?: boolean; last?: boolean }) {
  const reduce = useReducedMotion();
  const span = b - a;
  const f = span * 0.45; // generous overlap so a scene is always covering (no flashes / map peek)
  // the last scene keeps its fade-out INSIDE its window, so the map is fully clean once it ends
  const outA = last ? b - f : b;
  const outB = last ? b : b + f;
  const opacity = useTransform(
    p,
    first ? [a, outA, outB] : [a - f, a, outA, outB],
    first ? [1, 1, 0] : [0, 1, 1, 0],
  );
  const scale = useTransform(p, [a, (a + b) / 2, b], first ? [1, 1, 1.06] : [0.84, 1, 1.08]);
  const farY = useTransform(p, [a, b], ["-2%", "2%"]);
  const subjY = useTransform(p, [a, b], ["-6%", "6%"]);
  const nearY = useTransform(p, [a, b], ["-12%", "12%"]);

  const subjScale = scene.subjectScale ?? 1;
  const nearScale = scene.nearScale ?? 1;
  const nearFit = scene.nearAlign === "bottom" ? "object-contain object-bottom" : "object-contain";
  const nearOrigin = scene.nearAlign === "bottom" ? "center bottom" : undefined;
  const ov = scene.overlay;

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 isolate z-10 will-change-transform">
      <Img src={scene.far} y={farY} fit="object-cover" z="z-0" />
      <div className="pointer-events-none absolute inset-0 z-[5] bg-raat/35" />
      <Img src={scene.subject} y={subjY} fit="object-contain" z="z-10" scale={subjScale} origin="center bottom" />
      <Img src={scene.near} y={nearY} fit={nearFit} z="z-20" scale={nearScale} origin={nearOrigin} />
      {ov && (
        <div className="pointer-events-none absolute inset-0 z-[24] flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img src={ov.src.d} alt="" aria-hidden style={{ width: `${(ov.scale ?? 0.34) * 100}%` }} className="hidden md:block"
            animate={reduce || !ov.spin ? undefined : { rotate: 360 }} transition={ov.spin ? { duration: ov.spin, repeat: Infinity, ease: "linear" } : undefined} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img src={ov.src.m} alt="" aria-hidden style={{ width: `${(ov.scale ?? 0.34) * 100}%` }} className="md:hidden"
            animate={reduce || !ov.spin ? undefined : { rotate: 360 }} transition={ov.spin ? { duration: ov.spin, repeat: Infinity, ease: "linear" } : undefined} />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 z-20" style={{ background: "radial-gradient(125% 105% at 50% 42%, transparent 50%, rgba(18,16,31,.62) 100%)" }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2/5" style={{ background: "linear-gradient(to top, rgba(18,16,31,.95), rgba(18,16,31,.55) 42%, transparent)" }} />
      <div className="absolute inset-x-0 bottom-[7%] z-30 px-6 text-center">
        <p className="font-[family-name:var(--font-display)] text-3xl text-patra md:text-5xl" style={{ textShadow: "0 2px 22px rgba(18,16,31,.95)" }}>{scene.deva}</p>
        <p className="mt-3 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.28em] text-swarna md:text-sm" style={{ textShadow: "0 2px 14px rgba(18,16,31,1)" }}>{scene.en}</p>
      </div>
    </motion.div>
  );
}

function PeethaDot({ site, a, b, p }: { site: { x: number; y: number }; a: number; b: number; p: MotionValue<number> }) {
  const glow = useWindow(p, a, b);
  return (
    <span style={{ left: `${site.x}%`, top: `${site.y}%` }} className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2">
      <span className="block h-1.5 w-1.5 rounded-full bg-swarna/30" />
      <motion.span style={{ opacity: glow }} className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-swarna ring-2 ring-swarna/30" />
    </span>
  );
}

function FocusPin({ stop, a, b, p }: { stop: Stop; a: number; b: number; p: MotionValue<number> }) {
  const opacity = useWindow(p, a, b);
  return (
    <motion.div style={{ left: `${stop.x}%`, top: `${stop.y}%`, opacity }} className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2">
      <span className="relative flex items-center justify-center">
        <motion.span animate={{ scale: [1, 2, 1], opacity: [0.55, 0, 0.55] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute h-7 w-7 rounded-full ${stop.hinglaj ? "bg-kesari/60" : "bg-swarna/50"}`} />
        <span className={`relative h-3 w-3 rounded-full ring-4 ${stop.hinglaj ? "bg-kesari ring-kesari/25" : "bg-swarna ring-swarna/20"}`} />
      </span>
      <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-md border border-swarna/30 bg-raat/90 px-3 py-1.5 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.18em] text-patra backdrop-blur-sm">
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-swarna/30 bg-raat/90" />
        {stop.en}
      </span>
    </motion.div>
  );
}

function MapCard({ stop, a, b, p }: { stop: Stop; a: number; b: number; p: MotionValue<number> }) {
  const opacity = useWindow(p, a, b);
  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-x-6 top-6 z-30">
      <div className="mx-auto max-w-xl rounded-[var(--radius)] border border-swarna/25 bg-raat/85 p-5 text-center backdrop-blur-sm md:p-6">
        <p className="font-[family-name:var(--font-display)] text-2xl text-patra md:text-3xl">{stop.deva}</p>
        <p className="mt-1 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.26em] text-swarna">{stop.en}</p>
        <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{stop.body}</p>
      </div>
    </motion.div>
  );
}

export function ShaktipeethSaga() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const S = shaktipeethReel.length; // reel scenes
  // one weighted timeline across the whole sequence: scenes first, then map beats
  const weights = [...shaktipeethReel.map(() => SCENE_WEIGHT), ...STOPS.map(() => BEAT_WEIGHT)];
  const { heightVh, windows } = buildTimeline(weights, VH_PER_UNIT);
  const sceneWindows = windows.slice(0, S);
  const beatWindows = windows.slice(S);
  const mapStart = beatWindows[0][0]; // the map is fully revealed by here

  // two master layers that hard-switch at the boundary — the map CANNOT be obscured
  const reelOpacity = useTransform(scrollYProgress, [mapStart - 0.03, mapStart], [1, 0]);
  const mapOpacity = useTransform(scrollYProgress, [mapStart - 0.03, mapStart], [0, 1]);
  const mapScale = useTransform(scrollYProgress, [mapStart, 1], [1.03, 1.12]);
  const scrollHint = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // physically unmount the reel once past the boundary — if it's not in the DOM it cannot ghost
  const [inMap, setInMap] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => setInMap(v >= mapStart));

  if (reduce) {
    return (
      <section className="bg-raat px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {shaktipeethReel.map((s, i) => (
            <figure key={`s${i}`} className="relative aspect-video overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.far.d} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-raat/35" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.subject.d} alt={s.en} className="absolute inset-0 h-full w-full object-contain" />
              <div className="absolute inset-x-0 bottom-0 h-2/5" style={{ background: "linear-gradient(to top, rgba(18,16,31,.95), transparent)" }} />
              <figcaption className="absolute inset-x-0 bottom-4 text-center font-[family-name:var(--font-display)] text-2xl text-patra">{s.deva}</figcaption>
            </figure>
          ))}
          <figure className="relative aspect-video overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MAP} alt="A painted map of the land where the fifty-one parts fell" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-raat/25" />
          </figure>
          <ol className="space-y-6">
            {STOPS.map((s) => (
              <li key={s.en}>
                <p className="font-[family-name:var(--font-display)] text-2xl text-patra">{s.deva}</p>
                <p className="mt-1 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.26em] text-swarna">{s.en}</p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-raat" style={{ height: `${heightVh}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4 py-16 md:px-10">
        <div className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25 shadow-[0_40px_140px_rgba(0,0,0,.65)]">
          {/* REEL LAYER — scenes; fades out at the boundary AND fully unmounts past it */}
          {!inMap && (
            <motion.div style={{ opacity: reelOpacity }} className="absolute inset-0 z-10">
              {shaktipeethReel.map((s, i) => {
                const [a, b] = sceneWindows[i];
                return <Scene key={`sc${i}`} scene={s} a={a} b={b} p={scrollYProgress} first={i === 0} last={i === S - 1} />;
              })}
            </motion.div>
          )}

          {/* MAP LAYER — on top, fades fully opaque at the boundary (cannot be obscured) */}
          <motion.div style={{ opacity: mapOpacity }} className="absolute inset-0 z-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img src={MAP} alt="" aria-hidden style={{ scale: mapScale }} className="absolute inset-0 h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-raat/25" />
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(125% 105% at 50% 42%, transparent 50%, rgba(18,16,31,.62) 100%)" }} />

            {PEETHAS.map((s, k) => {
              const [a, b] = beatWindows[OVERVIEW];
              return <PeethaDot key={`pd${k}`} site={s} a={a} b={b} p={scrollYProgress} />;
            })}
            {STOPS.map((s, k) => {
              if (s.x == null) return null;
              const [a, b] = beatWindows[k];
              return <FocusPin key={`fp${k}`} stop={s} a={a} b={b} p={scrollYProgress} />;
            })}
            {STOPS.map((s, k) => {
              const [a, b] = beatWindows[k];
              return <MapCard key={`mc${k}`} stop={s} a={a} b={b} p={scrollYProgress} />;
            })}
          </motion.div>

          {/* frame rule + scroll hint */}
          <div className="pointer-events-none absolute inset-0 z-40 rounded-[inherit] ring-1 ring-inset ring-swarna/15" />
          <motion.div style={{ opacity: scrollHint }} className="absolute inset-x-0 bottom-3 z-40 text-center font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.3em] text-patra/45">
            scroll
          </motion.div>
        </div>
      </div>
    </section>
  );
}
