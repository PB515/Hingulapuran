"use client";

import { useState } from "react";

/* G2 — the original manuscript page(s) beside the translation. Framed
   thumbnails that open to a full-size lightbox. When no scan exists yet, a calm
   placeholder keeps the promise visible. */
export function OriginalPages({ pages, num }: { pages: string[]; num: number }) {
  const [open, setOpen] = useState<number | null>(null);
  const many = pages.length > 1;

  if (pages.length === 0) {
    return (
      <div className="rounded-[var(--radius)] border border-dashed border-border bg-rakta/15 px-5 py-4 text-center">
        <p className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.22em] text-loha">The original page</p>
        <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-muted/80">
          The 1915 manuscript page for this chapter will appear here as the scans are added.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius)] border border-border bg-rakta/15 px-5 py-4">
      <p className="font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.22em] text-loha">
        The original {many ? "pages" : "page"} · 1915
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {pages.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpen(i)}
            className="overflow-hidden rounded border border-swarna/30 transition-transform hover:-translate-y-0.5 hover:border-swarna/70"
            aria-label={`View original page ${i + 1} of Adhyāy ${num}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Adhyāy ${num}, manuscript page ${i + 1}`} loading="lazy" className="h-40 w-auto" />
          </button>
        ))}
      </div>
      <p className="mt-2 font-[family-name:var(--font-body)] text-xs text-muted/70">Tap a page to view the original full size.</p>

      {open !== null && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-raat/95 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pages[open]}
            alt={`Adhyāy ${num}, manuscript page ${open + 1}`}
            className="max-h-[92vh] max-w-[94vw] rounded border border-swarna/30 object-contain shadow-[0_40px_140px_rgba(0,0,0,.7)]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setOpen(null)}
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-swarna/40 text-2xl leading-none text-swarna transition-colors hover:bg-rakta"
            aria-label="Close"
          >
            ×
          </button>
          {many && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + pages.length) % pages.length); }}
                className="absolute left-5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-swarna/40 text-2xl leading-none text-swarna transition-colors hover:bg-rakta"
                aria-label="Previous page"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % pages.length); }}
                className="absolute right-5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-swarna/40 text-2xl leading-none text-swarna transition-colors hover:bg-rakta"
                aria-label="Next page"
              >
                ›
              </button>
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-[family-name:var(--font-display-latin)] text-xs tracking-[0.2em] text-muted">
                {open + 1} / {pages.length}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
