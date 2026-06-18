import Link from "next/link";
import { books } from "@/lib/books";

export const metadata = { title: "Books — Hingulapuran" };

export default function Books() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-10">
      <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-swarna">ग्रंथ · The library</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-7xl">The books</h1>
      <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-muted">
        Read online, free. Download to keep and to share — the awareness travels with the text.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {books.map((b) => (
          <Link
            key={b.slug}
            href={`/books/${b.slug}`}
            className="group rounded-[var(--radius)] border border-border bg-rakta/30 p-6 transition-colors hover:border-swarna/50"
          >
            <p className="font-[family-name:var(--font-display-guj)] text-3xl text-patra">{b.title}</p>
            <p className="mt-1 font-[family-name:var(--font-display-latin)] text-sm tracking-[0.15em] text-swarna">{b.titleEn}</p>
            <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{b.blurb}</p>
            <p className="mt-5 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-loha">
              {b.language} · {b.year} · Read →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
