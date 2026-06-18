"use client";

import { useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/gallery";

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [i, setI] = useState<number | null>(null);
  const open = i !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((p) => (p === null ? p : (p + 1) % items.length));
      if (e.key === "ArrowLeft") setI((p) => (p === null ? p : (p - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((it, idx) => (
          <button
            key={it.src}
            onClick={() => setI(idx)}
            className="group relative aspect-[3/4] overflow-hidden rounded-[var(--radius)] border border-border bg-rakta/30"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.src} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-raat/90 to-transparent p-3 text-left font-[family-name:var(--font-body)] text-xs text-patra">
              {it.title}
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div
          onClick={() => setI(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-raat/95 p-6"
        >
          <button onClick={() => setI(null)} aria-label="Close" className="absolute right-6 top-6 text-3xl text-patra/70 hover:text-patra">×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={items[i!].src} alt={items[i!].title} className="max-h-[82vh] max-w-full rounded-[var(--radius)] object-contain" onClick={(e) => e.stopPropagation()} />
          <div className="absolute inset-x-0 bottom-6 text-center font-[family-name:var(--font-body)] text-sm text-patra">
            <span className="text-patra">{items[i!].title}</span>
            {items[i!].note && <span className="text-muted"> · {items[i!].note}</span>}
          </div>
        </div>
      )}
    </>
  );
}
