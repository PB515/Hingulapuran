"use client";

import { motion } from "motion/react";

/* The emotional peak for the Kshatriya audience: Parshuram lays his sword at
   Hinglaj Mata's feet. The plate reveals + scales gently on scroll; the story
   staggers in beside it. Reduced-motion just shows it composed. */
export function ParshuramClimax() {
  return (
    <section className="relative overflow-hidden bg-rakta/40 px-6 py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* the plate */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md overflow-hidden rounded-[var(--radius)] border-2 border-swarna/40"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/art/parshuram/full.webp" alt="Parshuram lays his sword at the feet of Hinglaj Mata" className="w-full" />
        </motion.figure>

        {/* the story */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.35em] text-swarna"
          >
            The Kshatriya kuldevi
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight text-patra md:text-6xl"
          >
            जहाँ तलवार झुकी
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 font-[family-name:var(--font-body)] leading-relaxed text-muted"
          >
            When Parshuram had emptied the earth of Kshatriyas, the survivors took
            <span className="text-patra"> sharan</span> at the feet of Hinglaj Mata. The Mother stayed his hand —
            and his borrowed power drained away, for it was <span className="text-patra">her</span> Shakti all along.
            Guru Dattatreya revealed the truth; the warrior bowed, and
            <span className="text-swarna"> laid his sword at her feet.</span> From that day she became the
            kuldevi of the Kshatriya — goddess of war, and keeper of the vow.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 border-l-2 border-swarna/50 pl-5 font-[family-name:var(--font-display)] text-xl leading-relaxed text-swarna md:text-2xl"
          >
            प्राण जाये पर वचन न जाये
          </motion.p>
        </div>
      </div>
    </section>
  );
}
