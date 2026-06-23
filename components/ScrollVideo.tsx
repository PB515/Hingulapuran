"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { AmbientMotifs } from "@/components/AmbientMotifs";

/* Scroll-scrubbed video in the framed box. The section is pinned; scroll
   progress drives video.currentTime (Raang-style), and the caption hard-swaps
   to the beat for that progress. The ornate border is baked into the video.

   Two things make scrubbing actually paint reliably:
   - the video is "primed" (a muted play→pause) once it can play, or many
     browsers leave it stuck on the poster and never render seeked frames;
   - duration is read live from the element each frame, not cached, so we never
     depend on a single onLoadedMetadata firing.
   We always render and scrub the video (no reduced-motion poster freeze — that
   looked broken: a still frame while the captions advanced). */

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
  const target = useRef(0);
  const raf = useRef(0);
  const primed = useRef(false);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });

  const seek = () => {
    const v = vid.current;
    if (!v) return;
    const d = v.duration;
    if (!d || !isFinite(d)) return;
    const t = Math.max(0, Math.min(d - 0.05, target.current * d));
    if (Math.abs((v.currentTime || 0) - t) > 0.03) {
      try {
        v.currentTime = t;
      } catch {}
    }
  };

  // a muted play→pause unlocks frame rendering on seek in most browsers
  const prime = () => {
    const v = vid.current;
    if (!v || primed.current) return;
    primed.current = true;
    const done = () => {
      v.pause();
      seek();
    };
    const p = v.play();
    if (p && typeof p.then === "function") p.then(done).catch(() => seek());
    else done();
  };

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = beats.findIndex((b) => p >= b.from && p < b.to);
    setActive(i === -1 ? (p >= 1 ? beats.length - 1 : 0) : i);
    target.current = p;
    if (!raf.current) {
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        seek();
      });
    }
  });

  const beat = beats[active] ?? beats[0];

  return (
    <section ref={wrap} style={{ height: `${heightVh}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 md:px-10">
        <AmbientMotifs offset={0} />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[0.85fr_1.5fr]">
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
            <video
              ref={vid}
              src={src}
              poster={poster}
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={seek}
              onLoadedData={prime}
              onCanPlay={prime}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
