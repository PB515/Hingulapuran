import Link from "next/link";
import { site } from "@/lib/site";
import { DoorHero } from "@/components/DoorHero";
import { LegendScroll } from "@/components/LegendScroll";
import { ParshuramClimax } from "@/components/ParshuramClimax";
import { BrahmarandhraOrb } from "@/components/BrahmarandhraOrb";
import { SceneBand } from "@/components/SceneBand";
import { SceneReel } from "@/components/SceneReel";
import { ShaktipeethTour } from "@/components/ShaktipeethTour";
import { shaktipeethReel } from "@/lib/reels";

export default function Home() {
  return (
    <main>
      {/* Flagship: the temple door opens on scroll to reveal the sanctum. */}
      <DoorHero />

      {/* Intro — after the door, the invitation. */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
        <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.35em] text-loha">
          {site.tagline}
        </p>
        <h2 className="mt-5 font-[family-name:var(--font-display-latin)] text-4xl leading-tight text-patra md:text-5xl">
          The goddess of war, the keeper of the vow.
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-body)] leading-relaxed text-muted">
          One of the 51 Shakti Peethas, a cave shrine on the Hingol river, and the kuldevi of the
          Kshatriya. Read her hundred-year-old grantha, walk her history, and carry the awareness forward.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/books" className="rounded-[var(--radius)] bg-accent px-8 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.18em] text-accent-foreground transition-transform hover:-translate-y-0.5">
            ગ્રંથ વાંચો · Read the book
          </Link>
          <Link href="/temples" className="rounded-[var(--radius)] border border-swarna/40 px-8 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.18em] text-swarna transition-colors hover:bg-rakta">
            Temples of Hinglaj
          </Link>
        </div>
      </section>

      {/* The fall of Sati — the fifty-one Shakti Peethas, as a 2.5D scene-reel. */}
      <SceneReel scenes={shaktipeethReel} />

      {/* Guided-tour pin: the map of the land, sites lighting up to Hinglaj. */}
      <ShaktipeethTour />

      {/* Flagship: the history of Hingul as a horizontal scroll-painting. */}
      <LegendScroll />

      {/* Brahmarandhra — where the crown of the head fell (the 3D orb). */}
      <BrahmarandhraOrb />

      {/* Climax: Parshuram lays his sword at her feet. */}
      <ParshuramClimax />

      {/* Scene band — the Hingol river / mool sthan */}
      <SceneBand src="/art/scene/hingol-river.webp" line="हिंगोल नदी के तट पर" sub="The cave on the Hingol — the mool sthan" />
    </main>
  );
}
