import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslationChapters, getTranslationChapter, getChapterBody } from "@/lib/grantha";
import { getChapterScans } from "@/lib/grantha-scans";
import { LangToggle } from "@/components/grantha/LangToggle";
import { OriginalPages } from "@/components/grantha/OriginalPages";

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
  const [gu, hi] = await Promise.all([getChapterBody(chapter.num, "gu"), getChapterBody(chapter.num, "hi")]);
  const scans = getChapterScans(chapter.num);

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

        <p className="mt-4 inline-block rounded-full border border-loha/40 px-3 py-1 font-[family-name:var(--font-display-latin)] text-[10px] uppercase tracking-[0.18em] text-loha">
          Working draft · pending a pandit&apos;s review
        </p>

        <div className="mt-8">
          <OriginalPages pages={scans} num={chapter.num} />
        </div>

        <div className="mt-8">
          <LangToggle en={chapter.bodyHtml} gu={gu} hi={hi} />
        </div>

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
