/* Full-width scene band — a pachedi backdrop with a dark overlay and a centered
   line. Used to place the scene/* art (Hingol river, cave shrine) between sections. */
export function SceneBand({ src, line, sub }: { src: string; line: string; sub?: string }) {
  return (
    <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-raat/60" aria-hidden />
      <div className="relative z-10 px-6 text-center">
        <p className="font-[family-name:var(--font-display)] text-4xl text-patra md:text-6xl" style={{ textShadow: "0 2px 20px rgba(18,16,31,.9)" }}>
          {line}
        </p>
        {sub && (
          <p className="mt-5 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-swarna">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
