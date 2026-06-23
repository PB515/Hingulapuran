import Link from "next/link";
import { getSearchIndex } from "@/lib/grantha-search";
import { GranthaSearch } from "@/components/grantha/GranthaSearch";

export const metadata = {
  title: "Search the grantha — Hingulapuran",
  description: "Search across every chapter, name, place and term of the Hinglaj Puran.",
};

export default async function SearchPage() {
  const index = await getSearchIndex();
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-32 md:px-10">
      <Link href="/grantha" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
        ← The grantha
      </Link>

      <p className="mt-6 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.32em] text-loha">One box over the whole book</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-6xl">खोज</h1>
      <p className="mt-2 mb-8 font-[family-name:var(--font-display-latin)] text-sm tracking-[0.18em] text-swarna">Search the grantha</p>

      <GranthaSearch index={index} />
    </main>
  );
}
