import Link from "next/link";
import { lineages } from "@/lib/lineages";
import { LineageTree } from "@/components/grantha/LineageTree";

export const metadata = {
  title: "The Lineages — Hingulapuran",
  description: "The dynastic trees of the grantha: the Brahmakṣatriya line that became the kuldevi communities, and the Sūrya-vaṃśa of Sudarshana.",
};

export default function GenealogyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32 md:px-10">
      <Link href="/grantha" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
        ← The grantha
      </Link>

      <p className="mt-6 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.32em] text-loha">Who came from whom</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-6xl">वंशावली</h1>
      <p className="mt-2 font-[family-name:var(--font-display-latin)] text-sm tracking-[0.18em] text-swarna">The Lineages</p>

      <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-patra/90">
        The two dynastic lines the grantha traces: the Brahmakṣatriya, the warriors who survived Parashurāma and
        became the communities that still hold Hinglaj as kuldevi, and the solar-dynasty tale of Sudarshana.
      </p>

      {lineages.map((l) => (
        <section key={l.id} className="mt-16">
          <LineageTree lineage={l} />
        </section>
      ))}

      <p className="mt-16 border-t border-border pt-6 font-[family-name:var(--font-body)] text-sm text-loha">
        A careful working reading, awaiting a pandit&apos;s review. See also{" "}
        <Link href="/grantha/community-origins" className="text-swarna underline-offset-2 hover:underline">the communities</Link> and{" "}
        <Link href="/grantha/arc" className="text-swarna underline-offset-2 hover:underline">the sacred arc</Link>.
      </p>
    </main>
  );
}
