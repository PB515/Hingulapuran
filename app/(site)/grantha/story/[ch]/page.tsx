import Link from "next/link";
import { notFound } from "next/navigation";
import { getStoryChapters, getStoryChapter } from "@/lib/grantha-story";
import { ChapterArt } from "@/components/grantha/ChapterArt";

export async function generateStaticParams() {
  const all = await getStoryChapters();
  return all.map((c) => ({ ch: String(c.num) }));
}

export async function generateMetadata({ params }: { params: Promise<{ ch: string }> }) {
  const { ch } = await params;
  const r = await getStoryChapter(Number(ch));
  return { title: r ? `${r.chapter.title} — Hingulapuran` : "The Story" };
}

export default async function StoryChapterPage({ params }: { params: Promise<{ ch: string }> }) {
  const { ch } = await params;
  const r = await getStoryChapter(Number(ch));
  if (!r) notFound();
  const { chapter, prev, next } = r;

  return (
    <main className="px-6 pb-24 pt-32 md:px-10">
      <article className="mx-auto max-w-2xl">
        <Link href="/grantha/story" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
          ← The story
        </Link>

        <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-[var(--radius)] border border-border">
          <ChapterArt src={chapter.art} deva={chapter.deva} />
        </div>

        <p className="mt-6 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.22em] text-loha">
          {chapter.num === 0 ? "Invocation" : `Adhyāy ${chapter.num}`}
        </p>
        {chapter.deva && <p className="mt-2 font-[family-name:var(--font-display)] text-3xl text-swarna">{chapter.deva}</p>}
        <h1 className="mt-1 font-[family-name:var(--font-display-latin)] text-3xl leading-tight text-patra md:text-4xl">{chapter.title}</h1>

        <p className="mt-6 font-[family-name:var(--font-body)] text-[17px] leading-[1.85] text-muted">{chapter.summary}</p>

        {chapter.translated ? (
          <Link
            href={`/grantha/translation/${chapter.num}`}
            className="mt-8 inline-block rounded-[var(--radius)] bg-accent px-6 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.15em] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Read the full chapter →
          </Link>
        ) : (
          <p className="mt-8 rounded-[var(--radius)] border border-border bg-rakta/20 px-5 py-4 font-[family-name:var(--font-body)] text-sm text-loha">
            The full word-for-word text of this chapter is being translated. This is its summary for now.
          </p>
        )}

        <nav className="mt-16 flex items-stretch justify-between gap-4 border-t border-border pt-6">
          {prev ? (
            <Link href={`/grantha/story/${prev.num}`} className="group max-w-[45%]">
              <span className="block font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.2em] text-loha">← Previous</span>
              <span className="mt-1 block font-[family-name:var(--font-body)] text-sm text-muted transition-colors group-hover:text-swarna">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/grantha/story/${next.num}`} className="group max-w-[45%] text-right">
              <span className="block font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.2em] text-loha">Next →</span>
              <span className="mt-1 block font-[family-name:var(--font-body)] text-sm text-muted transition-colors group-hover:text-swarna">{next.title}</span>
            </Link>
          ) : <span />}
        </nav>
      </article>
    </main>
  );
}
