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
  const { doc, html } = rendered;

  return (
    <main className="px-6 pb-24 pt-32 md:px-10">
      <article className="mx-auto max-w-2xl">
        <Link href="/grantha" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
          ← The grantha
        </Link>
        {doc.deva && <p className="mt-6 font-[family-name:var(--font-display)] text-3xl text-swarna">{doc.deva}</p>}
        <h1 className="mt-2 font-[family-name:var(--font-display-latin)] text-4xl leading-tight text-patra md:text-5xl">{doc.title}</h1>

        <div className="grantha-prose mt-8" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
