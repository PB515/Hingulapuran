import Link from "next/link";
import { granthaByCategory } from "@/lib/grantha";

export const metadata = {
  title: "The Grantha — Hingulapuran",
  description: "The hundred-year-old Hinglaj Puran, opened — read, indexed, and preserved.",
};

export default function GranthaIndex() {
  const groups = granthaByCategory();
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10">
      <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.35em] text-loha">The book, opened</p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl text-patra md:text-7xl">हिंगुलापुराण</h1>
      <p className="mt-5 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-patra/90">
        Most people have never heard of the <span className="text-swarna">Hinglaj Puran</span>. It is a hundred-year-old Gujarati book that tells the sacred history of the goddess <span className="text-swarna">Hinglaj Mata</span>, whose shrine stands in a cave on the Makran coast. It survives in very few copies. This is where you can read it, understand it, and help carry it forward.
      </p>
      <p className="mt-4 max-w-2xl font-[family-name:var(--font-body)] leading-relaxed text-muted">
        <span className="text-patra">New here?</span> Start with <Link href="/grantha/what-is-hinglaj-puran" className="text-swarna underline-offset-2 hover:underline">What is the Hinglaj Puran?</Link> Then choose how you want to read it. <span className="text-loha">(These are careful working drafts, awaiting a pandit&apos;s review.)</span>
      </p>

      {/* The two doors: the fast visual Story, and the complete Granth. */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Link href="/grantha/story" className="group rounded-[var(--radius)] border border-swarna/30 bg-rakta/30 p-7 transition-colors hover:border-swarna/70">
          <p className="font-[family-name:var(--font-display)] text-2xl text-patra">कथा</p>
          <p className="mt-1 font-[family-name:var(--font-display-latin)] text-xl text-swarna">The Story</p>
          <p className="mt-3 font-[family-name:var(--font-body)] leading-relaxed text-muted">
            The whole sacred history, chapter by chapter, in a picture and a few lines each. The fast way in, for when you do not have time for the whole book.
          </p>
          <span className="mt-4 inline-block font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.2em] text-loha transition-colors group-hover:text-swarna">Read the story →</span>
        </Link>
        <Link href="/grantha/translation" className="group rounded-[var(--radius)] border border-swarna/30 bg-rakta/30 p-7 transition-colors hover:border-swarna/70">
          <p className="font-[family-name:var(--font-display)] text-2xl text-patra">ग्रंथ</p>
          <p className="mt-1 font-[family-name:var(--font-display-latin)] text-xl text-swarna">The Granth</p>
          <p className="mt-3 font-[family-name:var(--font-body)] leading-relaxed text-muted">
            The complete, faithful text, chapter by chapter, beside the original. English now, Gujarati and Hindi coming. For reading the book itself.
          </p>
          <span className="mt-4 inline-block font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.2em] text-loha transition-colors group-hover:text-swarna">Read the full text →</span>
        </Link>
      </div>

      {groups.map((g) => (
        <section key={g.category} className="mt-14">
          <h2 className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.28em] text-swarna">{g.category}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {g.cards.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group rounded-[var(--radius)] border border-border bg-rakta/30 p-5 transition-colors hover:border-swarna/50"
              >
                {d.deva && <p className="font-[family-name:var(--font-display)] text-xl text-patra">{d.deva}</p>}
                <p className="font-[family-name:var(--font-display-latin)] text-base text-swarna">{d.title}</p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{d.blurb}</p>
                <span className="mt-3 inline-block font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.2em] text-loha transition-colors group-hover:text-swarna">Read →</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
