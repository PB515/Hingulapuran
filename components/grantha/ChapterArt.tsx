/* The chapter's hero panel, or a calm placeholder until the art ships.
   Server component — the page already checked the file exists on disk. */
export function ChapterArt({ src, deva, className = "" }: { src: string | null; deva?: string; className?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div className={`grid h-full w-full place-items-center bg-gradient-to-b from-rakta/50 to-raat ${className}`}>
      <span className="font-[family-name:var(--font-display)] text-3xl text-swarna/40">{deva || "॥"}</span>
    </div>
  );
}
