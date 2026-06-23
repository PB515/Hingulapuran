import Link from "next/link";
import { site } from "@/lib/site";
import { NAV } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-rakta/30 px-6 py-14 md:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-[family-name:var(--font-display)] text-2xl text-patra">હિંગળાજ માતા</p>
        <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-display)] text-base leading-relaxed text-swarna">
          {site.mantra}
        </p>
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-5 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-muted">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-swarna">{n.en}</Link>
          ))}
        </nav>
        <p className="mt-8 font-[family-name:var(--font-body)] text-xs text-muted/70">
          {site.legalName} · {site.tagline}
        </p>
        <p className="mt-3">
          <Link href="/admin" className="font-[family-name:var(--font-body)] text-[11px] uppercase tracking-[0.2em] text-loha/70 transition-colors hover:text-swarna">
            Admin
          </Link>
        </p>
      </div>
    </footer>
  );
}
