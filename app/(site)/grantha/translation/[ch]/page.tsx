import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslationChapters, getTranslationChapter } from "@/lib/grantha";

export async function generateStaticParams() {
  const chapters = await getTranslationChapters();
  return chapters.map((c) => ({ ch: String(c.num) }));
}

export async function generateMetadata({ params }: { params: Promise<{ ch: string }> }) {
  const { ch } = await params;
  const r = await getTranslationChapter(Number(ch));
  return { title: r ? `Adhyāy ${r.chapter.num}: ${r.chapter.title} — Hingulapuran` : "The Full Translation" };
}

export default async function ChapterPage({ params }: { params: Promise<{ ch: string }> }) {
  const { ch } = await params;
  const r = await getTranslationChapter(Number(ch));
  if (!r) notFound();
  const { chapter, prev, next } = r;

  return (
    <main className="px-6 pb-24 pt-32 md:px-10">
      <article className="mx-auto max-w-2xl">
        <Link href="/grantha/translation" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
          ← The Full Translation
        </Link>

        <p className="mt-6 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.22em] text-loha">
          Adhyāy {chapter.num} <span className="text-loha/60">· of 65 to 87</span>
        </p>
        {chapter.deva && <p className="mt-3 font-[family-name:var(--font-display)] text-3xl text-swarna">{chapter.deva}</p>}
        <h1 className="mt-2 font-[family-name:var(--font-display-latin)] text-3xl leading-tight text-patra md:text-4xl">{chapter.title}</h1>

        <div className="grantha-prose mt-8" dangerouslySetInnerHTML={{ __html: chapter.bodyHtml }} />

        <nav className="mt-16 flex items-stretch justify-between gap-4 border-t border-border pt-6">
          {prev ? (
            <Link href={`/grantha/translation/${prev.num}`} className="group max-w-[45%]">
              <span className="block font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.2em] text-loha">← Previous</span>
              <span className="mt-1 block font-[family-name:var(--font-body)] text-sm text-muted transition-colors group-hover:text-swarna">Adhyāy {prev.num}. {prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/grantha/translation/${next.num}`} className="group max-w-[45%] text-right">
              <span className="block font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.2em] text-loha">Next →</span>
              <span className="mt-1 block font-[family-name:var(--font-body)] text-sm text-muted transition-colors group-hover:text-swarna">Adhyāy {next.num}. {next.title}</span>
            </Link>
          ) : <span />}
        </nav>
      </article>
    </main>
  );
}
