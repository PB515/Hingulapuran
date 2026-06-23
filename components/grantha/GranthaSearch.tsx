"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { SearchEntry } from "@/lib/grantha-search";

/* G5 — client-side search over the whole grantha index (chapters, names,
   places, the arc, the glossary). Plain substring match, grouped by kind. */
export function GranthaSearch({ index }: { index: SearchEntry[] }) {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (term.length < 2) return [];
    return index
      .filter((e) => `${e.title} ${e.deva ?? ""} ${e.sub} ${e.text}`.toLowerCase().includes(term))
      .slice(0, 80);
  }, [term, index]);

  return (
    <div>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search chapters, names, places, terms…"
        autoFocus
        className="w-full rounded-[var(--radius)] border border-swarna/40 bg-rakta/20 px-5 py-4 font-[family-name:var(--font-body)] text-lg text-patra outline-none transition-colors placeholder:text-muted/60 focus:border-swarna"
      />

      {term.length >= 2 && (
        <p className="mt-3 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.18em] text-loha">
          {results.length} {results.length === 1 ? "result" : "results"}
        </p>
      )}

      <ul className="mt-5 space-y-3">
        {results.map((r, i) => (
          <li key={i}>
            <Link
              href={r.href}
              className="group flex items-baseline gap-4 rounded-[var(--radius)] border border-border bg-rakta/20 p-4 transition-colors hover:border-swarna/50"
            >
              <span className="flex-1">
                <span className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-[family-name:var(--font-display-latin)] text-base text-swarna">{r.title}</span>
                  {r.deva && <span className="font-[family-name:var(--font-display)] text-base text-patra/80">{r.deva}</span>}
                </span>
                <span className="mt-1 block font-[family-name:var(--font-body)] text-sm leading-snug text-muted">{r.text.slice(0, 160)}{r.text.length > 160 ? "…" : ""}</span>
                <span className="mt-1 block font-[family-name:var(--font-display-latin)] text-[11px] uppercase tracking-[0.16em] text-loha">{r.sub}</span>
              </span>
              <span className="shrink-0 self-center rounded-full border border-swarna/30 px-2 py-0.5 font-[family-name:var(--font-display-latin)] text-[10px] uppercase tracking-[0.14em] text-loha">{r.kind}</span>
            </Link>
          </li>
        ))}
      </ul>

      {term.length >= 2 && results.length === 0 && (
        <p className="mt-6 font-[family-name:var(--font-body)] text-muted">No matches. Try a name, a place, or a chapter title.</p>
      )}
    </div>
  );
}
