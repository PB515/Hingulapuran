import Link from "next/link";
import { requireAdmin } from "@/lib/admin/guard";
import { adminDb } from "@/lib/admin/db";
import { AdminShell } from "@/components/admin/AdminShell";

async function count(table: string): Promise<number | null> {
  try {
    const { count } = await adminDb().from(table).select("*", { count: "exact", head: true });
    return count ?? 0;
  } catch {
    return null;
  }
}

export default async function AdminDashboard() {
  const { configured, email } = await requireAdmin();

  if (!configured) {
    return (
      <AdminShell email={null}>
        <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">Connect Supabase to go live</h1>
        <div className="mt-6 max-w-2xl space-y-3 font-[family-name:var(--font-body)] text-sm text-muted">
          <p>The admin is fully built — it just needs a Supabase project to talk to. To activate:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Create a Supabase project.</li>
            <li>Run the schema: <code className="text-swarna">npm run db:migrate</code> (applies <code className="text-swarna">db/migrations/0002_content.sql</code>).</li>
            <li>Put the URL + anon key + service-role key into <code className="text-swarna">.env.local</code>.</li>
            <li>Create an admin user in Supabase Auth, then sign in.</li>
          </ol>
        </div>
      </AdminShell>
    );
  }

  const cards = [
    { label: "Blog posts", table: "posts", href: "/admin/posts" },
    { label: "Books", table: "books", href: "/admin/books" },
    { label: "Gallery", table: "gallery_items", href: "/admin/gallery" },
    { label: "Temples", table: "temples", href: "/admin/temples" },
    { label: "Subscribers", table: "subscribers", href: "/admin/inbox" },
    { label: "Messages", table: "messages", href: "/admin/inbox" },
  ];
  const counts = await Promise.all(cards.map((c) => count(c.table)));

  return (
    <AdminShell email={email}>
      <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">Dashboard</h1>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <Link key={c.label} href={c.href} className="rounded-[var(--radius)] border border-border bg-rakta/30 p-5 hover:border-swarna/50">
            <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.18em] text-loha">{c.label}</p>
            <p className="mt-2 font-[family-name:var(--font-display-latin)] text-3xl text-patra">{counts[i] ?? "—"}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
