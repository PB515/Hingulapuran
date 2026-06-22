import { CutReel } from "@/components/CutReel";
import { parshuramCut } from "@/lib/parshuram-cut";

/* Preview of the Parashurama vertical hard-cut reel. Lives off the live home so
   it can be tuned with placeholders; the home keeps its current Parashurama
   section until the art (PARSHURAM-CUT-PROMPTS.md) lands, then it swaps in. */
export const metadata = { title: "Preview — Parashurama reel", robots: { index: false } };

export default function ParshuramPreview() {
  return (
    <main className="pt-20">
      <p className="mx-auto max-w-6xl px-6 pt-6 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-loha md:px-10">
        Engine preview · placeholders until the art lands
      </p>
      <CutReel {...parshuramCut} />
    </main>
  );
}
