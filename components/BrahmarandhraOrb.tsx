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

        {/* the orb */}
        <div className="relative mx-auto mt-16 flex h-[clamp(260px,42vw,460px)] w-full max-w-2xl items-center justify-center">
          <motion.div style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative">
            <motion.div
              aria-hidden
              animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="h-[clamp(220px,34vw,380px)] w-[clamp(220px,34vw,380px)] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 38% 32%, #C0392B 0%, #5C0A22 28%, #2A0C2E 58%, #12101F 100%)",
                boxShadow: "0 0 120px 10px rgba(181,48,42,0.35), inset 0 0 80px 10px rgba(18,16,31,0.8)",
              }}
            />
            {/* slow turning sheen */}
            <motion.div
              aria-hidden
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full mix-blend-screen"
              style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(201,162,39,0.22) 18%, transparent 38%, transparent 100%)" }}
            />
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
