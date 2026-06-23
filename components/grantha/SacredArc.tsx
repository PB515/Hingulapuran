"use client";

import { motion } from "motion/react";
import { sacredArc, insetTales } from "@/lib/sacred-arc";

/* G6 — the seven-movement arc as a scroll timeline. A left gold rail with a
   numbered node per movement; cards reveal on scroll. Inset tales follow. */
export function SacredArc() {
  return (
    <div className="mt-12">
      <div className="relative">
        <div aria-hidden className="absolute bottom-3 left-4 top-3 w-px bg-gradient-to-b from-swarna/10 via-swarna/50 to-swarna/10" />
        <ol className="space-y-9">
          {sacredArc.map((m) => (
            <motion.li
              key={m.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="relative pl-14"
            >
              <span
                aria-hidden
                className="absolute left-4 top-1 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-swarna bg-raat font-[family-name:var(--font-display)] text-sm text-swarna"
              >
                {m.n}
              </span>
              <div className="rounded-[var(--radius)] border border-border bg-rakta/30 p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="font-[family-name:var(--font-display)] text-2xl text-patra">{m.deva}</p>
                  <p className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.18em] text-loha">{m.chapters}</p>
                </div>
                <p className="mt-1 font-[family-name:var(--font-display-latin)] text-base text-swarna">{m.en}</p>
                <p className="mt-3 font-[family-name:var(--font-body)] leading-relaxed text-muted">{m.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="mt-16">
        <h2 className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.28em] text-swarna">
          Inset tales, told within the arc
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {insetTales.map((t) => (
            <div key={t.name} className="rounded-[var(--radius)] border border-border bg-rakta/20 p-5">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <p className="font-[family-name:var(--font-display-latin)] text-base text-patra">{t.name}</p>
                <p className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.16em] text-loha">{t.chapters}</p>
              </div>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
