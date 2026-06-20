import Link from "next/link";
import { notFound } from "next/navigation";
import { GRANTHA, getGranthaDoc, renderGrantha } from "@/lib/grantha";

export function generateStaticParams() {
  return GRANTHA.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getGranthaDoc(slug);
  return { title: doc ? `${doc.title} — Hingulapuran` : "Grantha" };
}

export default async function GranthaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rendered = await renderGrantha(slug);
  if (!rendered) notFound();
  const { doc, html, toc } = rendered;

  return (
    <main className="px-6 pb-24 pt-32 md:px-10">
      <article className="mx-auto max-w-2xl">
        <Link href="/grantha" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
          ← The grantha
        </Link>
        {doc.deva && <p className="mt-6 font-[family-name:var(--font-display)] text-3xl text-swarna">{doc.deva}</p>}
        <h1 className="mt-2 font-[family-name:var(--font-display-latin)] text-4xl leading-tight text-patra md:text-5xl">{doc.title}</h1>

        {/* plain-language framing for a reader with zero prior context */}
        <p className="mt-5 border-l-2 border-swarna/40 pl-5 font-[family-name:var(--font-body)] text-lg italic leading-relaxed text-patra/90">
          {doc.intro}
        </p>

        {/* chapter jump-nav for multi-section docs (e.g. the chapter-by-chapter transcript) */}
        {toc.length >= 3 && (
          <nav className="mt-8 rounded-[var(--radius)] border border-border bg-rakta/30 p-5">
            <p className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.25em] text-loha">On this page</p>
            <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="font-[family-name:var(--font-body)] text-sm text-muted transition-colors hover:text-swarna">{t.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="grantha-prose mt-10 scroll-smooth" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
