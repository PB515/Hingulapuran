"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

/* Brahmarandhra — the home section for "where the crown of the head fell".
   A dark gradient orb (maroon core → deep indigo/black) that breathes + turns,
   with floating fact-cards around it and a "know more" into the dedicated page.
   Pure CSS/transform (no WebGL). Lore copy is placeholder — refine freely. */

const FACTS = [
  { t: "The tenth gate", d: "Brahmarandhra — the aperture at the crown of the head, the dwelling of Brahman, the Dasamadvara." },
  { t: "The door to liberation", d: "Through it the prana rises along the sushumna and the soul departs into light — moksha." },
  { t: "Sati's crown", d: "When Vishnu's Sudarshan parted Sati into fifty-one, it was her brahmarandhra that fell here." },
  { t: "The seat of the gate", d: "So at Hinglaj, the very gate of liberation came to rest upon the earth." },
];

export function BrahmarandhraOrb() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden bg-raat px-6 py-28 md:py-40"
      style={{ perspective: 1000 }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.35em] text-loha">Where the crown fell</p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl text-patra md:text-7xl">ब्रह्मरंध्र</h2>
        <p className="mt-3 font-[family-name:var(--font-display-latin)] text-sm tracking-[0.12em] text-swarna">Brahmarandhra</p>

        {/* THE GATE OF LIGHT — brahmarandhra: a luminous aperture at the crown of a dark
            void, light ascending out of it (the prana rising into moksha). */}
        <div className="relative mx-auto mt-12 flex h-[clamp(320px,52vw,560px)] w-full max-w-2xl items-center justify-center">
          <motion.div style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}>
            <svg viewBox="0 0 420 560" role="img" aria-label="Brahmarandhra — the gate of light" className="h-[clamp(320px,52vw,560px)] w-auto">
              <defs>
                <radialGradient id="bgr-dome" cx="50%" cy="44%" r="60%">
                  <stop offset="0%" stopColor="#5C0A22" />
                  <stop offset="55%" stopColor="#2A0C2E" />
                  <stop offset="100%" stopColor="#12101F" />
                </radialGradient>
                <radialGradient id="bgr-ap" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF6E6" />
                  <stop offset="38%" stopColor="#F2C14E" />
                  <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="bgr-ray" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#F2C14E" stopOpacity="0" />
                  <stop offset="18%" stopColor="#F2C14E" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FFF6E6" stopOpacity="0" />
                </linearGradient>
                <filter id="bgr-soft" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="7" />
                </filter>
              </defs>

              {/* the dark crown / void */}
              <ellipse cx="210" cy="380" rx="172" ry="160" fill="url(#bgr-dome)" />
              <ellipse cx="210" cy="380" rx="172" ry="160" fill="none" stroke="#C9A227" strokeOpacity="0.18" />

              {/* the column of light rising from the aperture (static, soft) */}
              <path d="M210 300 L168 70 Q210 44 252 70 Z" fill="url(#bgr-ray)" opacity="0.7" />

              {/* the gate itself — pulses like a breath of light */}
              <motion.g
                animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx="210" cy="300" r="74" fill="#C9A227" opacity="0.16" filter="url(#bgr-soft)" />
                <ellipse cx="210" cy="300" rx="17" ry="56" fill="url(#bgr-ap)" filter="url(#bgr-soft)" />
                <ellipse cx="210" cy="300" rx="6" ry="36" fill="#FFF6E6" />
              </motion.g>

              {/* ascending sparks */}
              <circle cx="205" cy="200" r="2.5" fill="#F2C14E" opacity="0.8" />
              <circle cx="216" cy="150" r="2" fill="#F2C14E" opacity="0.6" />
              <circle cx="208" cy="104" r="1.6" fill="#FFF6E6" opacity="0.5" />
            </svg>
          </motion.div>
        </div>

        {/* floating fact-cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FACTS.map((f) => (
            <div key={f.t} className="group rounded-[var(--radius)] border border-border bg-rakta/30 p-5 text-left transition-colors hover:border-swarna/50">
              <p className="font-[family-name:var(--font-display-latin)] text-base uppercase tracking-[0.18em] text-swarna">{f.t}</p>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/brahmarandhra" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.25em] text-swarna transition-colors hover:text-kesari">
            Know more →
          </Link>
        </div>
      </div>
    </section>
  );
}
