"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";

/* Guided-tour pin: the painted Jambudvip map pins to the screen, and as you scroll
   the sacred sites light up one by one while info-cards cross-fade — the fall of Sati
   → the fifty-one Shakti Peethas → Hinglaj, where her crown came to rest. Then the
   pin releases to the next section. Pure scroll-driven (Motion), no GSAP.
   (Sacred history — see STYLE Rule 0. Never myth/legend/story.)

   TUNING: STOPS[].x / .y are PERCENT positions on the map art — nudge them to land
   exactly on the painted sites. Add/remove stops freely; the section auto-sizes. */

type Stop = { x: number; y: number; deva: string; en: string; body: string; hinglaj?: boolean };

const STOPS: Stop[] = [
  {
    x: 50, y: 44,
    deva: "देह का विभाजन",
    en: "The body is parted",
    body: "Borne by grieving Shiva, Devi Sati's body was parted by Vishnu's Sudarshan — and across all of Jambudvip the parts came down to the earth.",
  },
  {
    x: 56, y: 54,
    deva: "इकयावन शक्तिपीठ",
    en: "The fifty-one Shakti Peethas",
    body: "Where each part fell, a seat of the Devi arose — fifty-one Shakti Peethas, binding the whole of the land together like beads upon one thread.",
  },
  {
    x: 22, y: 38,
    deva: "हिंगलाज",
    en: "Hinglaj — where the crown fell",
    body: "On the Hingol, in the Makran hills, fell her brahmarandhra — the tenth gate. Of all the fifty-one, the very door of liberation came to rest here.",
    hinglaj: true,
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

function Pin({ stop, index, total, p }: { stop: Stop; index: number; total: number; p: MotionValue<number> }) {
  const opacity = useStopOpacity(p, index, total);
  return (
    <motion.div
      style={{ left: `${stop.x}%`, top: `${stop.y}%`, opacity }}
      className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
    >
      <span className="relative flex items-center justify-center">
        {/* breathing halo */}
        <motion.span
          animate={{ scale: [1, 2, 1], opacity: [0.55, 0, 0.55] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute h-7 w-7 rounded-full ${stop.hinglaj ? "bg-kesari/60" : "bg-swarna/50"}`}
        />
        <span className={`relative h-3 w-3 rounded-full ring-4 ${stop.hinglaj ? "bg-kesari ring-kesari/25" : "bg-swarna ring-swarna/20"}`} />
      </span>
      {stop.hinglaj && (
        <span
          className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-display)] text-lg text-patra"
          style={{ textShadow: "0 2px 12px rgba(18,16,31,1)" }}
        >
          हिंगलाज
        </span>
      )}
    </motion.div>
  );
}

function TourCard({ stop, index, total, p }: { stop: Stop; index: number; total: number; p: MotionValue<number> }) {
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

function Dot({ index, total, p }: { index: number; total: number; p: MotionValue<number> }) {
  const opacity = useStopOpacity(p, index, total);
  return (
    <span className="relative block h-2 w-2">
      <span className="absolute inset-0 rounded-full bg-swarna/25" />
      <motion.span style={{ opacity }} className="absolute inset-0 rounded-full bg-kesari" />
    </span>
  );
}

export function ShaktipeethTour() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = STOPS.length;
  const mapScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.12]);

  if (reduce) {
    // accessible fallback — the map, then the sites read top to bottom
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

          {STOPS.map((s, k) => (
            <Pin key={k} stop={s} index={k} total={n} p={scrollYProgress} />
          ))}

          {/* kicker */}
          <div className="absolute inset-x-0 top-0 z-30 px-6 pt-6 text-center">
            <p className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.32em] text-swarna" style={{ textShadow: "0 2px 10px rgba(18,16,31,1)" }}>
              The fifty-one Shakti Peethas
            </p>
          </div>

          {/* cross-fading cards */}
          <div className="absolute inset-x-0 bottom-0 z-30">
            {STOPS.map((s, k) => (
              <TourCard key={k} stop={s} index={k} total={n} p={scrollYProgress} />
            ))}
          </div>

          {/* progress dots */}
          <div className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2.5 md:flex">
            {STOPS.map((_, k) => (
              <Dot key={k} index={k} total={n} p={scrollYProgress} />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 z-40 rounded-[inherit] ring-1 ring-inset ring-swarna/15" />
        </div>
      </div>
    </section>
  );
}
