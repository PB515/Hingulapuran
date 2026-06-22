"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { AmbientMotifs } from "@/components/AmbientMotifs";

/* A vertical hard-cut reel: the section is pinned, and as you scroll DOWN the
   full-frame scenes cut (not pan) from one to the next, building to a held
   climax (the last scene occupies a wider band of the scroll, so it lingers).
   Caption hard-swaps per scene. Missing art shows a calm placeholder. */

export type CutScene = { src: string; deva: string; en: string; body: string };
export type CutReelConfig = { scenes: CutScene[]; heightVh?: number; holdLast?: number };

function Img({ src, className }: { src: string; className: string }) {
  const [bad, setBad] = useState(false);
  if (bad) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" aria-hidden loading="eager" onError={() => setBad(true)} className={className} />;
}

export function CutReel({ scenes, heightVh = 680, holdLast = 2.2 }: CutReelConfig) {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const N = scenes.length;

  // scroll-progress bounds: equal bands, last one wider so the climax holds
  const weights = scenes.map((_, i) => (i === N - 1 ? holdLast : 1));
  const total = weights.reduce((a, b) => a + b, 0);
  const bounds: number[] = [0];
  let acc = 0;
  for (const w of weights) {
    acc += w;
    bounds.push(acc / total);
  }

  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    let idx = N - 1;
    for (let i = 0; i < N; i++) {
      if (p >= bounds[i] && p < bounds[i + 1]) {
        idx = i;
        break;
      }
    }
    setActive(idx);
  });

  const s = scenes[active] ?? scenes[0];
  const climax = active === N - 1;
  const radius = "rounded-[calc(var(--radius)*1.2)]";

  return (
    <section ref={wrap} style={{ height: `${heightVh}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-10">
        <AmbientMotifs />
        <div className="mx-auto w-full max-w-6xl">
          <div className={`relative aspect-video w-full overflow-hidden bg-rakta shadow-[0_40px_140px_rgba(0,0,0,.65)] ${radius}`}>
            {/* preloaded stack — every scene mounts (eager) so a cut never flashes a blank */}
            {scenes.map((sc, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: i === active ? 1 : 0 }}
                transition={{ duration: 0.18 }}
                style={{ zIndex: i === active ? 2 : 1 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-rakta to-raat">
                  <span className="font-[family-name:var(--font-display)] text-7xl text-swarna/15">{sc.deva}</span>
                </div>
                <Img src={sc.src} className="absolute inset-0 h-full w-full object-cover" />
              </motion.div>
            ))}

            {/* hairline frame + climax accent */}
            <div className={`pointer-events-none absolute inset-0 z-10 border border-swarna/25 ${radius}`} />
            <div
              className={`pointer-events-none absolute inset-0 z-10 border-2 transition-colors duration-500 ${radius}`}
              style={{ borderColor: climax ? "rgba(201,162,39,.6)" : "transparent" }}
            />

            {/* counter + progress rail */}
            <div className="absolute right-4 top-3 z-20 font-[family-name:var(--font-display-latin)] text-xs tracking-[0.12em] text-muted">
              {active + 1} / {N}
            </div>
            <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2">
              {scenes.map((_, i) => (
                <span key={i} className={`h-1.5 w-1.5 rounded-full transition-colors ${i === active ? "bg-swarna" : "bg-swarna/30"}`} />
              ))}
            </div>

            {/* caption */}
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-raat via-raat/80 to-transparent px-8 pb-9 pt-20 md:px-12">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-patra md:text-4xl">{s.deva}</h3>
                  <p className="mt-2 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.25em] text-swarna">{s.en}</p>
                  <p className="mt-2 max-w-lg font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted md:text-base">{s.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
