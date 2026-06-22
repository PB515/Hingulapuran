import Link from "next/link";
import { getStoryByArc } from "@/lib/grantha-story";
import { ChapterArt } from "@/components/grantha/ChapterArt";

export const metadata = {
  title: "The Story — Hingulapuran",
  description: "The whole sacred history of Hinglaj Mata, told chapter by chapter in pictures and short readings.",
};

export default async function StoryIndex() {
  const groups = await getStoryByArc();
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-10">
      <Link href="/grantha" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
        ← The grantha
      </Link>
      <p className="mt-6 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.35em] text-loha">The story</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-6xl">कथा</h1>
      <p className="mt-5 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-patra/90">
        The whole sacred history, chapter by chapter, in a picture and a few lines each. The fast way through. Want the complete words instead? Read <Link href="/grantha/translation" className="text-swarna underline-offset-2 hover:underline">the full text</Link>, or the <Link href="/grantha/narrative-timeline" className="text-swarna underline-offset-2 hover:underline">whole story in one arc</Link>.
      </p>

      {groups.map((g) => (
        <section key={g.arc} className="mt-14">
          <h2 className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.28em] text-swarna">{g.arc}</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {g.chapters.map((c) => (
              <Link
                key={c.num}
                href={`/grantha/story/${c.num}`}
                className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-rakta/20 transition-colors hover:border-swarna/50"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <ChapterArt src={c.art} deva={c.deva} className="transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.2em] text-loha">
                    {c.num === 0 ? "Invocation" : `Adhyāy ${c.num}`}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-display-latin)] text-base leading-snug text-swarna">{c.title}</p>
                  <p className="mt-2 flex-1 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{c.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
