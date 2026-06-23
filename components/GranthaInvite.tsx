import Link from "next/link";

/* H1 — the home's invitation into /grantha, the conservation north star. The
   home tells her story; this hands the reader the whole book. */
export function GranthaInvite() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36">
      <div aria-hidden className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url(/art/motifs/cloth-texture.webp)" }} />
      <div aria-hidden className="absolute inset-0 bg-raat/85" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.35em] text-loha">
          The hundred-year-old grantha, conserved
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl text-patra md:text-6xl">हिंगुलापुराण</h2>
        <p className="mt-3 font-[family-name:var(--font-display-latin)] text-sm tracking-[0.18em] text-swarna">Read the grantha</p>

        <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-muted">
          The whole grantha of Hinglaj Mata, kept and conserved: all eighty-seven chapters as a readable story,
          and the original text translated faithfully, chapter by chapter.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.22em] text-loha">
          <span>87 chapters</span>
          <span className="text-swarna/40">·</span>
          <span>a century old</span>
          <span className="text-swarna/40">·</span>
          <span>conserved whole</span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/grantha"
            className="rounded-[var(--radius)] bg-accent px-8 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.18em] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Enter the grantha
          </Link>
          <Link
            href="/grantha/story"
            className="rounded-[var(--radius)] border border-swarna/40 px-7 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.15em] text-swarna transition-colors hover:bg-rakta"
          >
            The story
          </Link>
          <Link
            href="/grantha/translation"
            className="font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.15em] text-loha underline-offset-4 transition-colors hover:text-swarna hover:underline"
          >
            The full text →
          </Link>
        </div>
      </div>
    </section>
  );
}
