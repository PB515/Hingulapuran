"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "gu" | "hi";
const TABS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "hi", label: "हिन्दी" },
];

/* Language switch for a Granth chapter. English is live; Gujarati and Hindi
   switch on the moment their text exists (passed in as non-null html). The
   choice is remembered across chapters. */
export function LangToggle({ en, gu, hi }: { en: string; gu: string | null; hi: string | null }) {
  const bodies: Record<Lang, string | null> = { en, gu, hi };
  const [lang, setLang] = useState<Lang>("en");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hp-lang") as Lang | null;
      if (saved && bodies[saved]) setLang(saved);
      const s = parseFloat(localStorage.getItem("hp-reading-scale") || "1");
      if (s >= 0.8 && s <= 1.4) setScale(s);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSize = (s: number) => {
    const v = Math.min(1.4, Math.max(0.8, Math.round(s * 100) / 100));
    setScale(v);
    try {
      localStorage.setItem("hp-reading-scale", String(v));
    } catch {}
  };

  const pick = (l: Lang) => {
    setLang(l);
    try {
      localStorage.setItem("hp-lang", l);
    } catch {}
  };

  const html = bodies[lang];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
        {TABS.map((t) => {
          const available = !!bodies[t.code];
          const active = lang === t.code;
          return (
            <button
              key={t.code}
              onClick={() => pick(t.code)}
              aria-pressed={active}
              className={[
                "rounded-full border px-4 py-1.5 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.12em] transition-colors",
                active
                  ? "border-swarna/70 bg-swarna/15 text-swarna"
                  : "border-border text-loha hover:text-swarna",
              ].join(" ")}
            >
              {t.label}
              {!available && <span className="ml-1 normal-case tracking-normal text-loha/70">· soon</span>}
            </button>
          );
        })}
        </div>

        <div className="flex items-center gap-1" role="group" aria-label="Reading size">
          <button onClick={() => setSize(scale - 0.1)} aria-label="Smaller text" className="rounded-full border border-border px-3 py-1.5 font-[family-name:var(--font-display-latin)] text-xs text-loha transition-colors hover:border-swarna/50 hover:text-swarna">A−</button>
          <button onClick={() => setSize(1)} aria-label="Reset text size" className="rounded-full border border-border px-3 py-1.5 font-[family-name:var(--font-display-latin)] text-sm text-loha transition-colors hover:border-swarna/50 hover:text-swarna">Aa</button>
          <button onClick={() => setSize(scale + 0.1)} aria-label="Larger text" className="rounded-full border border-border px-3 py-1.5 font-[family-name:var(--font-display-latin)] text-base text-loha transition-colors hover:border-swarna/50 hover:text-swarna">A+</button>
        </div>
      </div>

      {html ? (
        <div className="grantha-prose mt-8" style={{ ["--reading-scale"]: scale } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p className="mt-8 rounded-[var(--radius)] border border-border bg-rakta/20 px-5 py-4 font-[family-name:var(--font-body)] text-sm text-muted">
          This chapter is not in {lang === "gu" ? "Gujarati" : "Hindi"} yet.{" "}
          <button onClick={() => pick("en")} className="text-swarna underline-offset-2 hover:underline">
            Read it in English →
          </button>
        </p>
      )}
    </div>
  );
}
