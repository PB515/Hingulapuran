import Link from "next/link";
import { getGlossary } from "@/lib/glossary";

export const metadata = {
  title: "Glossary & Who's Who — Hingulapuran",
  description: "Every deity, asura, sage, king, place and key term of the Hinglaj Puran, identified with the chapters where it figures.",
};

export default function GlossaryPage() {
  const sections = getGlossary();
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10">
      <Link href="/grantha" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
        ← The grantha
      </Link>

      <p className="mt-6 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.32em] text-loha">Every name, identified</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-6xl">शब्दकोश</h1>
      <p className="mt-2 font-[family-name:var(--font-display-latin)] text-sm tracking-[0.18em] text-swarna">Glossary &amp; Who&apos;s Who</p>

      <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-patra/90">
        Every deity, asura, sage, king, place, community and key term of the grantha, with a one-line identification
        and the chapters where it figures. Looking for something specific? Try{" "}
        <Link href="/grantha/search" className="text-swarna underline-offset-2 hover:underline">the search</Link>.
      </p>

      {sections.map((s) => (
        <section key={s.section} className="mt-12">
          <h2 className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.28em] text-swarna">{s.section}</h2>
          <dl className="mt-5 space-y-4">
            {s.entries.map((e, i) => (
              <div key={i} className="rounded-[var(--radius)] border border-border bg-rakta/20 p-5">
                <dt className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-[family-name:var(--font-display-latin)] text-base text-patra">{e.aliases.join(" · ")}</span>
                  {e.chapters && <span className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.16em] text-loha">{e.chapters}</span>}
                </dt>
                {e.def && <dd className="mt-1.5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{e.def}</dd>}
              </div>
            ))}
          </dl>
        </section>
      ))}

      <p className="mt-16 border-t border-border pt-6 font-[family-name:var(--font-body)] text-sm text-loha">
        A careful working reading. Names marked (?) await a pandit&apos;s review.
      </p>
    </main>
  );
}
