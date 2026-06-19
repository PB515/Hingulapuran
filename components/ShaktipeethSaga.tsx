"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent, type MotionValue } from "motion/react";
import { shaktipeethReel, type ReelScene, type ReelLayer } from "@/lib/reels";
import { buildTimeline } from "@/lib/timeline";

/* ============================================================================
   ShaktipeethSaga — the Fall of Sati chapter as ONE pinned, two-column stage.

   LAYOUT
     • LEFT  = a text panel. All titles/descriptions live here (never on the art).
     • RIGHT = the artwork frame, carrying ONLY images (no captions).

   SEQUENCE (one scroll, one weighted timeline)
     1. REEL  — scenes 1-4: the 2.5D layered reel (far/subject/near, emerge + parallax).
     2. MAP   — the painted map is revealed; beats light up site markers in turn:
                 विभाजन (centre) → इकयावन शक्तिपीठ (all dots) → हिंगलाज (the coast).
     3. FINALE— it holds on Hinglaj (no fade-to-dark). If a real temple photo is set
                 in FINALE_PHOTO, the saga closes on that photograph.

   TUNING — the only knobs:
     • PACING:  SCENE_WEIGHT / BEAT_WEIGHT / FINALE_WEIGHT (relative scroll) + VH_PER_UNIT (overall)
     • MAP:     PEETHAS[] + STOPS[].x/.y are PERCENT positions on the map art
     • FINALE:  set FINALE_PHOTO to the real Hinglaj/Balochistan photo path to close on it
   (Sacred history — STYLE Rule 0; never myth/legend/story.)
   ========================================================================== */

const MAP = "/art/stories/shaktipeeth/desktop/s5-far.webp";

// Drop the real Balochistan temple photo at this path, then set FINALE_PHOTO to it.
const FINALE_PHOTO: string | null = null; // e.g. "/art/temple/hinglaj.webp"
const FINALE_TEXT = {
  deva: "हिंगलाज माता",
  en: "The living shrine · Hingol, Balochistan",
  body: "Today pilgrims still climb to the cave-shrine on the Hingol — the seat of the fallen crown, alive across the ages.",
};

/* PACING */
const SCENE_WEIGHTS = [2.6, 2.6, 2.6, 1.4]; // per scene 1-4 — scenes 1-3 scroll longer
const SCENE_WEIGHT = 1.4;                    // fallback if a chapter has extra scenes
const BEAT_WEIGHT = 1.8;
const FINALE_WEIGHT = 1.4;
const VH_PER_UNIT = 150;

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

/** opacity for a scroll window. `first` = visible from the very start; `hold` = stays to the end. */
function useWindow(p: MotionValue<number>, a: number, b: number, opts?: { fade?: number; hold?: boolean; first?: boolean }) {
  const fade = opts?.fade ?? 0.2;
  const f = (b - a) * fade;
  let stops: number[];
  let out: number[];
  if (opts?.first) { stops = [a, b - f, b]; out = [1, 1, 0]; }
  else if (opts?.hold) { stops = [a, a + f, 1]; out = [0, 1, 1]; }
  else { stops = [a, a + f, b - f, b]; out = [0, 1, 1, 0]; }
  return useTransform(p, stops, out);
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

/** one reel scene (artwork only). `first` = on screen the instant the section pins. */
function Scene({ scene, a, b, p, first, last }: { scene: ReelScene; a: number; b: number; p: MotionValue<number>; first?: boolean; last?: boolean }) {
  const reduce = useReducedMotion();
  const span = b - a;
  const f = span * 0.45; // overlap so a scene is always covering (no flashes / map peek)
  const outA = last ? b - f : b;
  const outB = last ? b : b + f;
  const opacity = useTransform(p, first ? [a, outA, outB] : [a - f, a, outA, outB], first ? [1, 1, 0] : [0, 1, 1, 0]);
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
    <motion.div style={{ opacity, scale }} className="absolute inset-0 isolate will-change-transform">
      <Img src={scene.far} y={farY} fit="object-cover" z="z-0" />
      <div className="pointer-events-none absolute inset-0 z-[5] bg-raat/20" />
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
      <div className="pointer-events-none absolute inset-0 z-[26]" style={{ background: "radial-gradient(125% 110% at 50% 45%, transparent 62%, rgba(18,16,31,.4) 100%)" }} />
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

/** a glowing site marker on the map (no label — the title is in the left panel). */
function FocusPin({ stop, a, b, p, hold }: { stop: Stop; a: number; b: number; p: MotionValue<number>; hold?: boolean }) {
  const opacity = useWindow(p, a, b, { hold });
  return (
    <motion.div style={{ left: `${stop.x}%`, top: `${stop.y}%`, opacity }} className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2">
      <span className="relative flex items-center justify-center">
        <motion.span animate={{ scale: [1, 2, 1], opacity: [0.55, 0, 0.55] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute h-7 w-7 rounded-full ${stop.hinglaj ? "bg-kesari/60" : "bg-swarna/50"}`} />
        <span className={`relative h-3 w-3 rounded-full ring-4 ${stop.hinglaj ? "bg-kesari ring-kesari/25" : "bg-swarna ring-swarna/20"}`} />
      </span>
    </motion.div>
  );
}

export function ShaktipeethSaga() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const S = shaktipeethReel.length;
  const B = STOPS.length;
  const hasPhoto = !!FINALE_PHOTO;
  const weights = [
    ...shaktipeethReel.map((_, i) => SCENE_WEIGHTS[i] ?? SCENE_WEIGHT),
    ...STOPS.map(() => BEAT_WEIGHT),
    ...(hasPhoto ? [FINALE_WEIGHT] : []),
  ];
  const { heightVh, windows } = buildTimeline(weights, VH_PER_UNIT);
  const sceneWindows = windows.slice(0, S);
  const beatWindows = windows.slice(S, S + B);
  const finaleWindow = hasPhoto ? windows[S + B] : null;
  const mapStart = beatWindows[0][0];

  const reelOpacity = useTransform(scrollYProgress, [mapStart - 0.03, mapStart], [1, 0]);
  const mapOpacity = useTransform(scrollYProgress, [mapStart - 0.03, mapStart], [0, 1]);
  const mapScale = useTransform(scrollYProgress, [mapStart, 1], [1.02, 1.06]);
  const photoOpacity = useTransform(scrollYProgress, finaleWindow ? [finaleWindow[0] - 0.03, finaleWindow[0]] : [0.98, 1], [0, hasPhoto ? 1 : 0]);
  const scrollHint = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // discrete state from scroll: unmount the reel past the boundary, and pick the ONE
  // active text item (hard swap — no cross-fade, so panel text can never overlap)
  const [inMap, setInMap] = useState(false);
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setInMap(v >= mapStart);
    let idx = 0;
    for (let i = 0; i < windows.length; i++) if (v >= windows[i][0]) idx = i;
    setActive(idx);
  });

  const lastBeat = B - 1;
  const textItems = [
    ...shaktipeethReel.map((s, i) => ({ key: `s${i}`, win: sceneWindows[i], deva: s.deva, en: s.en, body: undefined as string | undefined, first: i === 0, hold: false })),
    ...STOPS.map((s, k) => ({ key: `b${k}`, win: beatWindows[k], deva: s.deva, en: s.en, body: s.body as string | undefined, first: false, hold: !hasPhoto && k === lastBeat })),
    ...(hasPhoto && finaleWindow ? [{ key: "fin", win: finaleWindow, deva: FINALE_TEXT.deva, en: FINALE_TEXT.en, body: FINALE_TEXT.body as string | undefined, first: false, hold: true }] : []),
  ];

  if (reduce) {
    return (
      <section className="bg-raat px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {shaktipeethReel.map((s, i) => (
            <figure key={`s${i}`} className="relative aspect-video overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.far.d} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-raat/25" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.subject.d} alt={s.en} className="absolute inset-0 h-full w-full object-contain" />
              <figcaption className="absolute inset-x-0 bottom-4 text-center font-[family-name:var(--font-display)] text-2xl text-patra">{s.deva}</figcaption>
            </figure>
          ))}
          <figure className="relative aspect-video overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FINALE_PHOTO ?? MAP} alt="The land where the fifty-one parts fell" className="absolute inset-0 h-full w-full object-cover" />
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
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl items-stretch gap-8 md:grid-cols-[minmax(0,320px)_1fr]">
          {/* LEFT — text panel (one item at a time, hard swap, no overlap) */}
          <div className="flex min-h-[24vh] flex-col justify-center md:min-h-0">
            <div key={textItems[active]?.key} className="flex flex-col justify-center">
              <p className="font-[family-name:var(--font-display)] text-4xl leading-tight text-patra md:text-5xl">{textItems[active]?.deva}</p>
              <p className="mt-2 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.26em] text-swarna">{textItems[active]?.en}</p>
              {textItems[active]?.body && (
                <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted md:text-base">{textItems[active]?.body}</p>
              )}
            </div>
          </div>

          {/* RIGHT — artwork only */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25 shadow-[0_40px_140px_rgba(0,0,0,.65)]">
            {/* REEL — scenes; fades out at the boundary AND unmounts past it */}
            {!inMap && (
              <motion.div style={{ opacity: reelOpacity }} className="absolute inset-0 z-10">
                {shaktipeethReel.map((s, i) => {
                  const [a, b] = sceneWindows[i];
                  return <Scene key={`sc${i}`} scene={s} a={a} b={b} p={scrollYProgress} first={i === 0} last={i === S - 1} />;
                })}
              </motion.div>
            )}

            {/* MAP — on top, fully opaque past the boundary; stays lit to the end */}
            <motion.div style={{ opacity: mapOpacity }} className="absolute inset-0 z-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img src={MAP} alt="" aria-hidden style={{ scale: mapScale }} className="absolute inset-0 h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-raat/12" />
              <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(130% 110% at 50% 45%, transparent 58%, rgba(18,16,31,.42) 100%)" }} />
              {PEETHAS.map((s, k) => {
                const [a, b] = beatWindows[OVERVIEW];
                return <PeethaDot key={`pd${k}`} site={s} a={a} b={b} p={scrollYProgress} />;
              })}
              {STOPS.map((s, k) => {
                if (s.x == null) return null;
                const [a, b] = beatWindows[k];
                return <FocusPin key={`fp${k}`} stop={s} a={a} b={b} p={scrollYProgress} hold={!hasPhoto && k === lastBeat} />;
              })}
            </motion.div>

            {/* FINALE — close on the real temple photo (only if provided) */}
            {hasPhoto && (
              <motion.div style={{ opacity: photoOpacity }} className="absolute inset-0 z-30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={FINALE_PHOTO!} alt="The Hinglaj Mata shrine on the Hingol, Balochistan" className="absolute inset-0 h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(130% 110% at 50% 45%, transparent 60%, rgba(18,16,31,.45) 100%)" }} />
              </motion.div>
            )}

            <div className="pointer-events-none absolute inset-0 z-40 rounded-[inherit] ring-1 ring-inset ring-swarna/15" />
            <motion.div style={{ opacity: scrollHint }} className="absolute inset-x-0 bottom-3 z-40 text-center font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.3em] text-patra/45">
              scroll
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
