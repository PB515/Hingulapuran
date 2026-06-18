"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/* The legend of Hingul as a Mata-ni-Pachedi cloth that scrolls sideways while the
   section is pinned. Panel widths are set by aspect-ratio (not image load), so the
   track width is deterministic — no cold-load measurement bug. Panels load eager so
   the off-screen ones are ready as they slide in. Reduced-motion → vertical stack. */

const PANELS = [
  { src: "/art/legend/a-tapasya.webp", cap: "The penance of Hingul" },
  { src: "/art/legend/b-conquest.webp", cap: "The conquest of the heavens" },
  { src: "/art/legend/c-vow.webp", cap: "The vow of the Devi" },
  { src: "/art/legend/d-light.webp", cap: "The unprecedented light" },
  { src: "/art/legend/e-vardan.webp", cap: "The boon — Hinglaj" },
];

export function LegendScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [dist, setDist] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (reduce) {
    // accessible fallback: read the cloth top-to-bottom
    return (
      <section className="bg-raat px-6 py-20">
        <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-4xl text-patra">हिंगुल की कथा</h2>
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {PANELS.map((p) => (
            <figure key={p.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.cap} className="w-full rounded-[var(--radius)] border border-border" />
              <figcaption className="mt-2 text-center font-[family-name:var(--font-body)] text-sm text-muted">{p.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[520vh] bg-raat">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute left-0 right-0 top-24 z-10 text-center">
          <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.35em] text-swarna">The legend</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl text-patra md:text-5xl">हिंगुल की कथा</h2>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center will-change-transform">
          {PANELS.map((p, i) => (
            <figure key={p.src} className="relative h-[62vh] shrink-0" style={{ aspectRatio: "8 / 3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.cap} loading="eager" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-6 font-[family-name:var(--font-display-latin)] text-sm tracking-[0.15em] text-patra" style={{ textShadow: "0 1px 10px rgba(18,16,31,.9)" }}>
                <span className="text-swarna">{String(i + 1).padStart(2, "0")}</span> · {p.cap}
              </figcaption>
            </figure>
          ))}
        </motion.div>

        <div className="absolute inset-x-0 bottom-8 text-center font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-patra/60">
          scroll — the festival moves past you
        </div>
      </div>
    </section>
  );
}
