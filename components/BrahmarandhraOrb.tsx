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

/* yantra geometry (centre 240,240) — petals point outward (tip up), rotated into rings */
const OUTER_PETAL = "M240 92 C 250 70, 246 46, 240 36 C 234 46, 230 70, 240 92 Z";
const INNER_PETAL = "M240 174 C 263 150, 258 118, 240 104 C 222 118, 217 150, 240 174 Z";
const TRI_UP = "M240 176 L296 273 L184 273 Z";
const TRI_DOWN = "M240 304 L184 207 L296 207 Z";

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

        {/* THE SAHASRARA YANTRA — the thousand-petalled lotus / sacred geometry of the
            crown, in gold line on the dark ground, slowly turning + breathing. */}
        <div className="relative mx-auto mt-12 flex h-[clamp(320px,64vw,560px)] w-full max-w-2xl items-center justify-center">
          <motion.div style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}>
            <svg viewBox="0 0 480 480" role="img" aria-label="Brahmarandhra — the Sahasrara yantra" className="h-[clamp(320px,64vw,560px)] w-auto">
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

              {/* soft maroon halo behind the whole yantra */}
              <circle cx="240" cy="240" r="230" fill="#5C0A22" opacity="0.25" filter="url(#bgr-soft)" />

              {/* outer ring — the thousand petals (slow clockwise) */}
              <motion.g
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "240px 240px" }}
              >
                <circle cx="240" cy="240" r="212" fill="none" stroke="#C9A227" strokeOpacity="0.25" />
                <circle cx="240" cy="240" r="150" fill="none" stroke="#C9A227" strokeOpacity="0.35" />
                {Array.from({ length: 36 }).map((_, i) => (
                  <path key={i} d={OUTER_PETAL} transform={`rotate(${(i * 360) / 36} 240 240)`} fill="none" stroke="#C9A227" strokeWidth="1" strokeOpacity="0.65" />
                ))}
              </motion.g>

              {/* inner ring — the lotus (slow counter-clockwise) + the yantra triangles */}
              <motion.g
                animate={reduce ? undefined : { rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "240px 240px" }}
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <path key={i} d={INNER_PETAL} transform={`rotate(${(i * 360) / 16} 240 240)`} fill="#5C0A22" fillOpacity="0.35" stroke="#C9A227" strokeWidth="1.2" strokeOpacity="0.75" />
                ))}
                <circle cx="240" cy="240" r="68" fill="none" stroke="#C9A227" strokeOpacity="0.4" />
                <path d={TRI_UP} fill="none" stroke="#F2C14E" strokeOpacity="0.5" />
                <path d={TRI_DOWN} fill="none" stroke="#F2C14E" strokeOpacity="0.5" />
              </motion.g>

              {/* the bindu — breathes light at the centre */}
              <motion.g
                animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx="240" cy="240" r="46" fill="url(#bgr-bindu)" filter="url(#bgr-soft)" />
                <circle cx="240" cy="240" r="9" fill="#FFF6E6" />
              </motion.g>
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
