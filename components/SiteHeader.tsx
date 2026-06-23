"use client";

import { useState } from "react";
import Link from "next/link";
import { SoundToggle } from "@/components/sound/SoundToggle";

export const NAV = [
  { href: "/grantha", en: "Grantha" },
  { href: "/books", en: "Books" },
  { href: "/blog", en: "Blog" },
  { href: "/gallery", en: "Gallery" },
  { href: "/temples", en: "Temples" },
  { href: "/contact", en: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-raat/80 backdrop-blur">
      <div className="flex items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 leading-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/art/brand/logo.webp" alt="Hingulapuran" className="h-9 w-9 shrink-0" />
          <span className="font-[family-name:var(--font-display-guj)] text-2xl text-patra">હિંગુળાપુરાણ</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-5 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-muted md:flex md:gap-6">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-swarna">{n.en}</Link>
          ))}
          <SoundToggle />
        </nav>

        {/* mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <SoundToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-[var(--radius)] border border-border text-patra transition-colors hover:border-swarna/60"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <nav className="border-t border-border/60 bg-raat/95 px-5 py-3 backdrop-blur md:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/40 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.2em] text-patra transition-colors hover:text-swarna"
                >
                  {n.en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
