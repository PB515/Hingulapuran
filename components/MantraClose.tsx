/* H2 — the final calm beat before the footer: the seva. The footer carries the
   full mantra on every page, so here we close on "carry her forward" instead of
   repeating it. A soft gold glow + a single diya. */
export function MantraClose() {
  return (
    <section className="relative overflow-hidden px-6 py-32 text-center md:py-44">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 z-0 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,162,39,0.14), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* diya */}
        <svg viewBox="0 0 100 100" width={40} height={40} className="mx-auto text-swarna" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path d="M50 26 C56 38 54 50 50 56 C46 50 44 38 50 26 Z" fill="currentColor" fillOpacity="0.25" strokeLinejoin="round" />
          <path d="M24 60 C32 76 68 76 76 60 Z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>

        <p className="mt-6 font-[family-name:var(--font-display)] text-2xl text-swarna md:text-3xl">जय हिंगलाज माता</p>

        <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl leading-snug text-patra md:text-4xl">
          Read her. Remember her. Carry her forward.
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-body)] leading-relaxed text-muted">
          This archive is a seva: a hundred-year-old grantha kept whole, so the next generation can find
          her in their own tongue. Share it, and the awareness lives on.
        </p>
      </div>
    </section>
  );
}
