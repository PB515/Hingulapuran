import { PothiScroll } from "@/components/PothiScroll";
import { hingulScroll } from "@/lib/hingul-scroll";

/* Preview of the new Hingul pothi-scroll engine. Lives off the live home so it
   can be iterated with placeholders; the home keeps its current section until
   the art (HINGUL-SCROLL-PROMPTS.md) lands, then it swaps in. noindex. */
export const metadata = { title: "Preview — Hingul scroll", robots: { index: false } };

export default function HingulScrollPreview() {
  return (
    <main className="pt-20">
      <p className="mx-auto max-w-6xl px-6 pt-6 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-loha md:px-10">
        Engine preview · placeholders until the art lands
      </p>
      <PothiScroll {...hingulScroll} />
    </main>
  );
}
