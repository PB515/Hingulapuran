import Link from "next/link";
import { TRANSLATION, getTranslationChapters } from "@/lib/grantha";

export const metadata = {
  title: "The Full Translation — Hingulapuran",
  description: "The Hingula core of the Hinglaj Puran, translated and read one chapter at a time.",
};

export default async function TranslationIndex() {
  const chapters = await getTranslationChapters();
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-32 md:px-10">
      <Link href="/grantha" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
        ← The grantha
      </Link>
      <h1 className="mt-6 font-[family-name:var(--font-display-latin)] text-4xl leading-tight text-patra md:text-5xl">{TRANSLATION.title}</h1>
      <p className="mt-5 border-l-2 border-swarna/40 pl-5 font-[family-name:var(--font-body)] text-lg italic leading-relaxed text-patra/90">
        {TRANSLATION.intro}
      </p>
      <p className="mt-5 font-[family-name:var(--font-body)] text-sm text-loha">
        {chapters.length} of 23 chapters ready so far. The Hingula core runs from Adhyāy 65 to 87; the rest are being translated in batches.
      </p>

      <ol className="mt-10 space-y-3">
        {chapters.map((c) => (
          <li key={c.num}>
            <Link
              href={`/grantha/translation/${c.num}`}
              className="group flex items-baseline gap-4 rounded-[var(--radius)] border border-border bg-rakta/30 p-5 transition-colors hover:border-swarna/50"
            >
              <span className="shrink-0 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.18em] text-loha">Adhyāy {c.num}</span>
              <span className="flex-1">
                <span className="block font-[family-name:var(--font-display-latin)] text-lg text-swarna">{c.title}</span>
                {c.deva && <span className="mt-0.5 block font-[family-name:var(--font-display)] text-base text-patra/80">{c.deva}</span>}
              </span>
              <span className="shrink-0 self-center font-[family-name:var(--font-display-latin)] text-loha transition-colors group-hover:text-swarna">→</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
