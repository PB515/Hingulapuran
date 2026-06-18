import Link from "next/link";
import { signOut } from "@/app/admin/actions";

const LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/posts", label: "Blog posts" },
  { href: "/admin/books", label: "Books" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/temples", label: "Temples" },
  { href: "/admin/inbox", label: "Inbox" },
];

export function AdminShell({ email, children }: { email: string | null; children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 shrink-0 border-r border-border bg-rakta/30 p-6">
        <p className="font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.2em] text-swarna">Hingulapuran</p>
        <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-muted">Admin</p>
        <nav className="mt-8 flex flex-col gap-1 font-[family-name:var(--font-body)] text-sm">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-[var(--radius)] px-3 py-2 text-patra hover:bg-rakta/60">{l.label}</Link>
          ))}
        </nav>
        <div className="mt-8 border-t border-border pt-4">
          {email && <p className="mb-3 truncate font-[family-name:var(--font-body)] text-xs text-muted">{email}</p>}
          <form action={signOut}>
            <button className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] text-loha hover:text-swarna">Sign out →</button>
          </form>
          <Link href="/" className="mt-3 block font-[family-name:var(--font-body)] text-xs text-loha hover:text-swarna">View site ↗</Link>
        </div>
      </aside>
      <main className="flex-1 p-8 md:p-12">{children}</main>
    </div>
  );
}
