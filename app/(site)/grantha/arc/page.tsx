import Link from "next/link";
import { SacredArc } from "@/components/grantha/SacredArc";

export const metadata = {
  title: "The Sacred Arc — Hingulapuran",
  description: "The whole grantha as an ordered arc of seven movements, from the Goddess as the ground of all to the sealing of the book.",
};

export default function ArcPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <Link href="/grantha" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
        ← The grantha
      </Link>

      <p className="mt-6 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.32em] text-loha">The whole story, in one arc</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-6xl">सप्तक</h1>
      <p className="mt-2 font-[family-name:var(--font-display-latin)] text-sm tracking-[0.18em] text-swarna">The Sacred Arc</p>

      <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-patra/90">
        The grantha tells its sacred history (itihaas) as seven movements. The time is cyclic, cosmic time,
        not a dated chronology: the order is the order of the telling, from the Goddess as the ground of all
        to the closing of the book.
      </p>

      <SacredArc />

      <p className="mt-16 border-t border-border pt-6 font-[family-name:var(--font-body)] text-sm text-loha">
        A careful working reading, awaiting a pandit&apos;s review. Read it chapter by chapter in{" "}
        <Link href="/grantha/translation" className="text-swarna underline-offset-2 hover:underline">The Granth</Link>, or as a picture each in{" "}
        <Link href="/grantha/story" className="text-swarna underline-offset-2 hover:underline">The Story</Link>.
      </p>
    </main>
  );
}
