"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";

/* Scroll-scrubbed video in the framed box. The section is pinned; scroll
   progress drives video.currentTime (Raang-style), and the caption hard-swaps
   to the beat for that progress. The ornate border is baked into the video, so
   no overlay frame here. Reduced-motion / load failure shows the poster still. */

export type ScrollVideoBeat = { from: number; to: number; deva: string; en: string; body: string };
export type ScrollVideoConfig = {
  src: string;
  poster: string;
  beats: ScrollVideoBeat[];
  heightVh?: number;
};

export function ScrollVideo({ src, poster, beats, heightVh = 360 }: ScrollVideoConfig) {
  const wrap = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const dur = useRef(0);
  const target = useRef(0);
  const raf = useRef(0);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = beats.findIndex((b) => p >= b.from && p < b.to);
    setActive(i === -1 ? (p >= 1 ? beats.length - 1 : 0) : i);
    if (reduce) return;
    target.current = p;
    if (!raf.current) {
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        const v = vid.current;
        if (!v || !dur.current) return;
        const t = Math.max(0, Math.min(dur.current - 0.05, target.current * dur.current));
        if (Math.abs(v.currentTime - t) > 0.02) {
          try {
            v.currentTime = t;
          } catch {}
        }
      });
    }
  });

  const beat = beats[active] ?? beats[0];

  return (
    <section ref={wrap} style={{ height: reduce ? undefined : `${heightVh}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-10">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[0.85fr_1.5fr]">
          {/* caption */}
          <div className="min-h-[22vh] md:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-patra md:text-5xl">{beat.deva}</h3>
                <p className="mt-3 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.28em] text-swarna">{beat.en}</p>
                <p className="mt-4 max-w-sm font-[family-name:var(--font-body)] leading-relaxed text-muted">{beat.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* video box (border is baked into the footage) */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[calc(var(--radius)*1.5)] shadow-[0_40px_140px_rgba(0,0,0,.65)]">
            {reduce ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <video
                ref={vid}
                src={src}
                poster={poster}
                muted
                playsInline
                preload="auto"
                onLoadedMetadata={(e) => {
                  dur.current = e.currentTarget.duration || 0;
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
