"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { AmbientMotifs } from "@/components/AmbientMotifs";

/* The pothi (scroll) reel — a manuscript that unrolls sideways. Layout:
   a headline above; a framed stage (scroll-rods in the gutters left/right, a
   continuous border top and bottom); inside, the scenes pan horizontally with a
   vertical seam between each; the caption sits BELOW the stage, so the bright art
   is never darkened. One image per scene (merge bg+figure in art); a scene may
   instead carry bg(+fig) which render flat until the merged image lands. Missing
   art shows a calm placeholder. */

export type PothiScene = { img?: string; bg?: string; fig?: string; deva: string; en: string; body: string };
export type PothiConfig = {
  scenes: PothiScene[];
  border?: string;
  rod?: string;
  bg?: string; // static cloth ground behind the scroll
  title?: string;
  titleEn?: string;
  heightVh?: number;
};

function Img({ src, className }: { src: string; className: string }) {
  const [bad, setBad] = useState(false);
  if (!src || bad) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" aria-hidden loading="eager" onError={() => setBad(true)} className={className} />;
}

export function PothiScroll({ scenes, border = "/art/motifs/border-strip.webp", rod, bg, title, titleEn, heightVh = 760 }: PothiConfig) {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const N = scenes.length;

  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", `-${(N - 1) * 100}%`]);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.max(0, Math.min(N - 1, Math.round(p * (N - 1)))));
  });

  const s = scenes[active] ?? scenes[0];
  const borderStyle = { backgroundImage: `url(${border})`, backgroundRepeat: "repeat-x", backgroundSize: "auto 100%" } as const;
  const seam = "linear-gradient(90deg, rgba(26,17,16,0), #C9A227 38%, #E7D7B8 50%, #C9A227 62%, rgba(26,17,16,0))";

  return (
    <section ref={wrap} style={{ height: `${heightVh}vh` }} className="relative">
      <div
        className="sticky top-0 flex h-screen flex-col items-center justify-center gap-8 overflow-hidden px-4 pt-20 md:px-8"
        style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
      >
        <AmbientMotifs offset={1} />
        {(title || titleEn) && (
          <div className="relative z-10 text-center">
            {title && <h2 className="font-[family-name:var(--font-display)] text-4xl leading-none text-patra md:text-5xl">{title}</h2>}
            {titleEn && <p className="mt-2 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.32em] text-loha">{titleEn}</p>}
          </div>
        )}

        {/* stage: top border / 16:9 viewport (no crop) / bottom border; rods straddle the edges */}
        <div className="relative z-10 w-full max-w-4xl">
          <div className="flex flex-col">
            <div className="h-7 md:h-9" style={borderStyle} />
            <div className="relative aspect-[2/1] w-full overflow-hidden bg-rakta">
              <motion.div style={{ x: trackX }} className="absolute inset-0 flex">
                {scenes.map((sc, i) => (
                  <div key={i} className="relative h-full shrink-0 grow-0 basis-full">
                    <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-rakta to-raat">
                      <span className="font-[family-name:var(--font-display)] text-6xl text-swarna/15">{sc.deva}</span>
                    </div>
                    <Img src={sc.img ?? sc.bg ?? ""} className="absolute inset-0 h-full w-full object-cover" />
                    {!sc.img && sc.fig ? <Img src={sc.fig} className="absolute inset-0 h-full w-full object-contain" /> : null}
                    {i < N - 1 && <div className="absolute inset-y-0 right-0 z-10 w-3 md:w-4" style={{ background: seam }} />}
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="h-7 -scale-y-100 md:h-9" style={borderStyle} />
          </div>

          {/* scroll-rods: natural shape, straddling each edge, knobs protruding above + below (static) */}
          {rod ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={rod} alt="" aria-hidden style={{ height: "155%" }} className="pointer-events-none absolute left-0 top-1/2 z-30 w-auto -translate-x-1/2 -translate-y-1/2" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={rod} alt="" aria-hidden style={{ height: "155%" }} className="pointer-events-none absolute right-0 top-1/2 z-30 w-auto -translate-y-1/2 translate-x-1/2 -scale-x-100" />
            </>
          ) : null}
        </div>

        {/* caption below the scroll */}
        <div className="relative z-10 min-h-[96px] w-full max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-patra md:text-3xl">{s.deva}</h3>
              <p className="mt-1 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.25em] text-swarna">{s.en}</p>
              <p className="mx-auto mt-2 max-w-xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted md:text-base">{s.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
