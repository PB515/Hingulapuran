"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";

/* Guided-tour pin: the painted Jambudvip map pins to the screen. As you scroll it
   moves through beats — first the whole distribution of the fifty-one seats lights
   up, then it focuses single sites (where Sati's body fell → Hinglaj, where the
   crown came to rest). Each active site carries a small tooltip label, and a
   "current section" card cross-fades below. Then the pin releases.
   Scroll-driven (Motion), no GSAP. (Sacred history — STYLE Rule 0; never myth/legend/story.)

   TUNING — all positions are PERCENT on the map art, nudge to land on painted sites:
   • PEETHAS = the scattered seats that all glow on the overview beat
   • STOPS[].x/.y = the focus sites (a stop with `all:true` has no point — it lights PEETHAS) */

type Stop = { deva: string; en: string; body: string; all?: boolean; x?: number; y?: number; hinglaj?: boolean };

// the scattered fifty-one (decorative distribution) — tune onto the painted map
const PEETHAS: { x: number; y: number }[] = [
  { x: 50, y: 28 }, { x: 60, y: 34 }, { x: 41, y: 36 }, { x: 56, y: 46 },
  { x: 45, y: 48 }, { x: 51, y: 58 }, { x: 35, y: 44 }, { x: 65, y: 50 },
  { x: 30, y: 38 }, { x: 68, y: 40 }, { x: 38, y: 58 }, { x: 60, y: 60 },
];

const STOPS: Stop[] = [
  {
    all: true,
    deva: "इकयावन शक्तिपीठ",
    en: "The fifty-one Shakti Peethas",
    body: "Across the whole of Jambudvip the parts of the Devi came to earth — and where each fell, a seat of power arose. Fifty-one Shakti Peethas, binding the land like beads upon one thread.",
  },
  {
    x: 50, y: 46,
    deva: "देह का विभाजन",
    en: "Where Sati fell",
    body: "Borne by grieving Shiva, Devi Sati's body was parted by Vishnu's Sudarshan, and scattered far and wide across the land.",
  },
  {
    x: 22, y: 38, hinglaj: true,
    deva: "हिंगलाज",
    en: "Hinglaj — where the crown fell",
    body: "On the Hingol, in the Makran hills, fell her brahmarandhra — the tenth gate. Of all the fifty-one, the westernmost seat, and the very door of liberation, came to rest here.",
  },
];

const MAP = "/art/stories/shaktipeeth/desktop/s5-far.webp";

/** opacity that fades in for this stop's scroll window, then out (floor = resting value). */
function useStopOpacity(p: MotionValue<number>, index: number, total: number, floor = 0) {
  const seg = 1 / total;
  const a = index * seg;
  const b = (index + 1) * seg;
  const f = seg * 0.22;
  return useTransform(p, [a, a + f, b - f, b], [floor, 1, 1, floor]);
}

/** one of the scattered seats — faint always, brightens on the overview beat (stop 0). */
function PeethaDot({ site, total, p }: { site: { x: number; y: number }; total: number; p: MotionValue<number> }) {
  const glow = useStopOpacity(p, 0, total);
  return (
    <span style={{ left: `${site.x}%`, top: `${site.y}%` }} className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2">
      <span className="block h-1.5 w-1.5 rounded-full bg-swarna/30" />
      <motion.span style={{ opacity: glow }} className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-swarna ring-2 ring-swarna/30" />
    </span>
  );
}

/** a focus site — lit dot + breathing halo + a small tooltip label pinned to it. */
function FocusPin({ stop, index, total, p }: { stop: Stop; index: number; total: number; p: MotionValue<number> }) {
  const opacity = useStopOpacity(p, index, total);
  return (
    <motion.div style={{ left: `${stop.x}%`, top: `${stop.y}%`, opacity }} className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2">
      {/* the label tooltip, sitting above the point */}
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-swarna/30 bg-raat/90 px-3 py-1.5 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.18em] text-patra backdrop-blur-sm">
        {stop.en}
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-swarna/30 bg-raat/90" />
      </span>
      <span className="relative flex items-center justify-center">
        <motion.span
          animate={{ scale: [1, 2, 1], opacity: [0.55, 0, 0.55] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute h-7 w-7 rounded-full ${stop.hinglaj ? "bg-kesari/60" : "bg-swarna/50"}`}
        />
        <span className={`relative h-3 w-3 rounded-full ring-4 ${stop.hinglaj ? "bg-kesari ring-kesari/25" : "bg-swarna ring-swarna/20"}`} />
      </span>
    </motion.div>
  );
}

/** the cross-fading "current section" card. */
function SectionCard({ stop, index, total, p }: { stop: Stop; index: number; total: number; p: MotionValue<number> }) {
  const opacity = useStopOpacity(p, index, total);
  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-x-6 bottom-10">
      <div className="mx-auto max-w-xl rounded-[var(--radius)] border border-swarna/25 bg-raat/85 p-5 backdrop-blur-sm md:p-6">
        <p className="font-[family-name:var(--font-display)] text-2xl text-patra md:text-3xl">{stop.deva}</p>
        <p className="mt-1 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.26em] text-swarna">{stop.en}</p>
        <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{stop.body}</p>
      </div>
    </motion.div>
  );
}

export function ShaktipeethTour() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = STOPS.length;
  const mapScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.12]);

  if (reduce) {
    // accessible fallback — the map, then the beats read top to bottom
    return (
      <section className="bg-raat px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-center font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.32em] text-swarna">The fifty-one Shakti Peethas</p>
          <figure className="relative mt-6 aspect-video overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MAP} alt="A painted map of the land where the fifty-one parts fell" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-raat/25" />
          </figure>
          <ol className="mt-8 space-y-6">
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
    <section ref={ref} className="relative bg-raat" style={{ height: `${(n + 1) * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4 py-16 md:px-10">
        {/* the pinned map stage */}
        <div className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-[calc(var(--radius)*1.5)] border border-swarna/25 shadow-[0_40px_140px_rgba(0,0,0,.65)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img src={MAP} alt="" aria-hidden style={{ scale: mapScale }} className="absolute inset-0 h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-raat/25" />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(125% 105% at 50% 42%, transparent 50%, rgba(18,16,31,.62) 100%)" }} />

          {/* the scattered fifty-one (light up together on the overview beat) */}
          {PEETHAS.map((s, k) => (
            <PeethaDot key={`p${k}`} site={s} total={n} p={scrollYProgress} />
          ))}

          {/* focus sites with their tooltip labels */}
          {STOPS.map((s, k) => (!s.all ? <FocusPin key={`f${k}`} stop={s} index={k} total={n} p={scrollYProgress} /> : null))}

          {/* kicker */}
          <div className="absolute inset-x-0 top-0 z-30 px-6 pt-6 text-center">
            <p className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.32em] text-swarna" style={{ textShadow: "0 2px 10px rgba(18,16,31,1)" }}>
              The fifty-one Shakti Peethas
            </p>
          </div>

          {/* cross-fading "current section" cards */}
          <div className="absolute inset-x-0 bottom-0 z-30">
            {STOPS.map((s, k) => (
              <SectionCard key={`c${k}`} stop={s} index={k} total={n} p={scrollYProgress} />
            ))}
          </div>

          {/* progress dots */}
          <div className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2.5 md:flex">
            {STOPS.map((_, k) => (
              <Dot key={`d${k}`} index={k} total={n} p={scrollYProgress} />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 z-40 rounded-[inherit] ring-1 ring-inset ring-swarna/15" />
        </div>
      </div>
    </section>
  );
}

function Dot({ index, total, p }: { index: number; total: number; p: MotionValue<number> }) {
  const opacity = useStopOpacity(p, index, total);
  return (
    <span className="relative block h-2 w-2">
      <span className="absolute inset-0 rounded-full bg-swarna/25" />
      <motion.span style={{ opacity }} className="absolute inset-0 rounded-full bg-kesari" />
    </span>
  );
}
