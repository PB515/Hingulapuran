"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

/* The pothi (scroll) reel: a manuscript that unrolls sideways. The section is
   pinned; scroll pans through the scenes. Each scene is two layers (a background
   and a figure) that move at slightly different rates for a 2.5D feel. A tiling
   border runs top and bottom, spinning rod-wheels sit left and right, and the
   caption hard-swaps per scene. Missing art shows a calm placeholder. */

export type PothiScene = { bg: string; fig: string; deva: string; en: string; body: string };
export type PothiConfig = {
  scenes: PothiScene[];
  border?: string; // tiling border strip
  heightVh?: number;
};

function Img({ src, className }: { src: string; className: string }) {
  const [bad, setBad] = useState(false);
  if (bad) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" aria-hidden loading="lazy" onError={() => setBad(true)} className={className} />;
}

function RodWheel({ rotate }: { rotate: ReturnType<typeof useTransform<number, number>> }) {
  return (
    <motion.div
      style={{ rotate }}
      className="h-8 w-8 rounded-full border border-swarna/50"
      // a conic "wheel" so the rotation is visible
    >
      <div
        className="h-full w-full rounded-full"
        style={{ background: "conic-gradient(var(--swarna) 0 12%, var(--rakta) 0 25%, var(--swarna) 0 37%, var(--rakta) 0 50%, var(--swarna) 0 62%, var(--rakta) 0 75%, var(--swarna) 0 87%, var(--rakta) 0 100%)" }}
      />
    </motion.div>
  );
}

export function PothiScroll({ scenes, border = "/art/motifs/border-strip.webp", heightVh = 720 }: PothiConfig) {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const N = scenes.length;

  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", `-${(N - 1) * 100}%`]);
  const figX = useTransform(scrollYProgress, [0, 1], ["0%", `-${(N - 1) * 100 + 6}%`]); // a touch faster = parallax
  const spin = useTransform(scrollYProgress, [0, 1], [0, 900]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.max(0, Math.min(N - 1, Math.round(p * (N - 1)))));
  });

  const beat = scenes[active] ?? scenes[0];
  const borderStyle = { backgroundImage: `url(${border})`, backgroundRepeat: "repeat-x", backgroundSize: "auto 100%" };

  return (
    <section ref={wrap} style={{ height: `${heightVh}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          {/* the unrolling scroll */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[calc(var(--radius)*1.2)] shadow-[0_40px_140px_rgba(0,0,0,.65)]">
            {/* background track */}
            <motion.div style={{ x: bgX }} className="absolute inset-0 flex">
              {scenes.map((s, i) => (
                <div key={i} className="relative h-full shrink-0 grow-0 basis-full">
                  <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-rakta to-raat">
                    <span className="font-[family-name:var(--font-display)] text-6xl text-swarna/15">{s.deva}</span>
                  </div>
                  <Img src={s.bg} className="absolute inset-0 h-full w-full object-cover" />
                </div>
              ))}
            </motion.div>

            {/* figure track (parallax) */}
            <motion.div style={{ x: figX }} className="absolute inset-0 flex">
              {scenes.map((s, i) => (
                <div key={i} className="relative h-full shrink-0 grow-0 basis-full">
                  <Img src={s.fig} className="absolute inset-0 h-full w-full object-contain" />
                </div>
              ))}
            </motion.div>

            {/* pothi frame: borders + rods */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-6 md:h-7" style={borderStyle} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-6 -scale-y-100 md:h-7" style={borderStyle} />
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex w-7 flex-col items-center justify-between bg-gradient-to-r from-kajal via-swarna/70 to-kajal py-2 md:w-9">
              <RodWheel rotate={spin} />
              <RodWheel rotate={spin} />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex w-7 flex-col items-center justify-between bg-gradient-to-l from-kajal via-swarna/70 to-kajal py-2 md:w-9">
              <RodWheel rotate={spin} />
              <RodWheel rotate={spin} />
            </div>

            {/* caption */}
            <div className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-raat via-raat/80 to-transparent px-8 pb-10 pt-20 md:px-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45 }}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-patra md:text-4xl">{beat.deva}</h3>
                  <p className="mt-2 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.25em] text-swarna">{beat.en}</p>
                  <p className="mt-2 max-w-lg font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted md:text-base">{beat.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
