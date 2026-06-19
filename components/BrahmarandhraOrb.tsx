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

        {/* THE GODDESS + HER CROWN-GATE — Hinglaj Mata's face in minimal divine line,
            the brahmarandhra lotus turning + a bindu breathing light at her crown. */}
        <div className="relative mx-auto mt-12 flex h-[clamp(360px,68vw,600px)] w-full max-w-2xl items-center justify-center">
          <motion.div style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}>
            <svg viewBox="0 0 420 560" role="img" aria-label="Hinglaj Mata and the gate at her crown" className="h-[clamp(360px,68vw,600px)] w-auto">
              <defs>
                <radialGradient id="bgr-bindu" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF6E6" />
                  <stop offset="45%" stopColor="#F2C14E" />
                  <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
                </radialGradient>
                <filter id="bgr-soft" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>

              {/* soft maroon halo */}
              <circle cx="210" cy="150" r="185" fill="#5C0A22" opacity="0.22" filter="url(#bgr-soft)" />

              {/* light rising from the crown */}
              <g stroke="#F2C14E" strokeWidth="1.4" opacity="0.6">
                <line x1="210" y1="40" x2="210" y2="8" />
                <line x1="184" y1="48" x2="174" y2="20" />
                <line x1="236" y1="48" x2="246" y2="20" />
              </g>

              {/* crown lotus — the brahmarandhra gate, slowly turning */}
              <motion.g
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "210px 112px" }}
              >
                <circle cx="210" cy="112" r="58" fill="none" stroke="#C9A227" strokeOpacity="0.4" />
                {Array.from({ length: 16 }).map((_, i) => (
                  <path key={i} d="M210 62 C219 50 219 34 210 24 C201 34 201 50 210 62 Z" transform={`rotate(${(i * 360) / 16} 210 112)`} fill="#5C0A22" fillOpacity="0.3" stroke="#C9A227" strokeWidth="1.1" strokeOpacity="0.7" />
                ))}
              </motion.g>

              {/* the gate's bindu — breathes light */}
              <motion.g
                animate={reduce ? undefined : { opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx="210" cy="112" r="42" fill="url(#bgr-bindu)" filter="url(#bgr-soft)" />
                <circle cx="210" cy="112" r="7" fill="#FFF6E6" />
              </motion.g>

              {/* the Goddess's face — minimal divine line (gold + sindoor) */}
              <g fill="none" stroke="#C9A227" strokeLinecap="round">
                {/* third-eye tilak */}
                <path d="M210 170 C219 184 219 204 210 216 C201 204 201 184 210 170 Z" fill="#B5302A" fillOpacity="0.85" strokeWidth="1.4" />
                {/* brows */}
                <path d="M150 248 Q180 234 214 252" strokeWidth="2" />
                <path d="M270 248 Q240 234 206 252" strokeWidth="2" />
                {/* left eye */}
                <path d="M134 278 Q170 254 202 282" strokeWidth="2.4" />
                <path d="M134 278 Q168 292 202 282" strokeWidth="1.6" />
                <path d="M134 278 L120 270" strokeWidth="2.4" />
                {/* right eye */}
                <path d="M286 278 Q250 254 218 282" strokeWidth="2.4" />
                <path d="M286 278 Q252 292 218 282" strokeWidth="1.6" />
                <path d="M286 278 L300 270" strokeWidth="2.4" />
                {/* nose + nath */}
                <path d="M210 284 Q205 322 216 334" strokeWidth="1.4" />
                <circle cx="230" cy="336" r="11" strokeWidth="1.6" />
              </g>
              <circle cx="168" cy="280" r="9" fill="#1A1110" />
              <circle cx="252" cy="280" r="9" fill="#1A1110" />
              <circle cx="210" cy="228" r="4" fill="#B5302A" />
              {/* lips */}
              <path d="M182 374 Q210 364 238 374 Q210 390 182 374 Z" fill="#B5302A" stroke="#C9A227" strokeWidth="1" />
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
