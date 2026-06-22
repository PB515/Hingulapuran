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
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border/60 bg-raat/80 px-6 py-4 backdrop-blur md:px-10">
      <Link href="/" className="flex items-center gap-3 leading-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/art/brand/logo.webp" alt="Hingulapuran" className="h-9 w-9 shrink-0" />
        <span className="font-[family-name:var(--font-display-guj)] text-2xl text-patra">હિંગુળાપુરાણ</span>
      </Link>
      <nav className="flex items-center gap-5 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-muted md:gap-6">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className="transition-colors hover:text-swarna">{n.en}</Link>
        ))}
        <SoundToggle />
      </nav>
    </header>
  );
}
