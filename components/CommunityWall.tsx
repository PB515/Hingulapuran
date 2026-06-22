"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { communities } from "@/lib/communities";

/* The closing home section: the living lineage. After Parashurama, the surviving
   Kshatriyas became her people; from that line came the communities who still
   keep Hinglaj as kuldevi. Cloth-and-gold wall, cards reveal on scroll. */
export function CommunityWall() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-10 md:py-36">
      <div aria-hidden className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/art/motifs/cloth-texture.webp)" }} />
      <div aria-hidden className="absolute inset-0 bg-raat/70" />

      <div className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.35em] text-loha">Her people, today</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl text-patra md:text-6xl">उनकी कुलदेवी</h2>
          <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-patra/90">
            After Parashurama swept the earth of its warriors, the survivors took refuge at Hingula. She made them her own, and from that line came the communities who still call her Mother.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((c, i) => (
            <motion.div
              key={c.en}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[var(--radius)] border border-swarna/30 bg-rakta/70 p-6 backdrop-blur-sm transition-colors hover:border-swarna/70"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl text-patra">{c.deva}</p>
              <p className="mt-1 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.18em] text-swarna">{c.en}</p>
              <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{c.line}</p>
              <p className="mt-3 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.16em] text-loha">{c.where}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-swarna md:text-3xl">
            The grantha does not end in the past. It ends in them.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/grantha/community-origins"
              className="rounded-[var(--radius)] bg-accent px-7 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.15em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              The communities
            </Link>
            <Link
              href="/grantha/genealogy"
              className="rounded-[var(--radius)] border border-swarna/40 px-7 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.15em] text-swarna transition-colors hover:bg-rakta"
            >
              The lineages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
