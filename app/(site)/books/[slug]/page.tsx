import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBook } from "@/lib/books";
import { BookDownloadGate } from "@/components/BookDownloadGate";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBook(slug);
  return { title: book ? `${book.titleEn} — Hingulapuran` : "Book" };
}

export default async function BookDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  return (
    <main className="px-6 pb-24 pt-32 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/books" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
          ← All books
        </Link>

        <div className="mt-6 text-center">
          <p className="font-[family-name:var(--font-display-guj)] text-5xl text-patra md:text-7xl">{book.title}</p>
          <p className="mt-2 font-[family-name:var(--font-display-latin)] text-lg tracking-[0.12em] text-swarna">{book.titleEn}</p>
          <p className="mt-3 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-muted">{book.language} · {book.year}</p>
          <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-body)] leading-relaxed text-muted">{book.blurb}</p>
        </div>

        {/* Online reader — restraint tier: fast + legible, on a parchment frame */}
        <section className="mt-12">
          <h2 className="mb-4 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.25em] text-swarna">Read online</h2>
          <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-patra">
            {book.pdf ? (
              <iframe src={book.pdf} title={`${book.titleEn} reader`} className="h-[80vh] w-full" />
            ) : (
              <div className="flex h-[60vh] items-center justify-center font-[family-name:var(--font-body)] text-sm text-kajal/60">
                The PDF will appear here once added to /public/books/.
              </div>
            )}
          </div>
        </section>

        {/* Email-gated download — builds the awareness list */}
        <section className="mt-12 rounded-[var(--radius)] border border-border bg-rakta/30 p-8 text-center">
          <h2 className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.25em] text-swarna">Take it with you</h2>
          <p className="mx-auto mt-3 max-w-md font-[family-name:var(--font-body)] text-sm text-muted">
            Download the book and share it freely — that is how the awareness spreads.
          </p>
          <div className="mt-6 flex justify-center">
            <BookDownloadGate pdf={book.pdf} title={book.titleEn} />
          </div>
        </section>
      </div>
    </main>
  );
}
