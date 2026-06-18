import Link from "next/link";
import { requireAdmin } from "@/lib/admin/guard";
import { adminDb } from "@/lib/admin/db";
import { AdminShell } from "@/components/admin/AdminShell";
import { deletePost } from "../actions";

type Row = { id: string; title: string; slug: string; published: boolean };

export default async function AdminPosts() {
  const { configured, email } = await requireAdmin();
  if (!configured) {
    return <AdminShell email={null}><p className="font-[family-name:var(--font-body)] text-muted">Connect Supabase to manage posts — see the Dashboard.</p></AdminShell>;
  }

  let rows: Row[] = [];
  try {
    const { data } = await adminDb().from("posts").select("id,title,slug,published").order("created_at", { ascending: false });
    rows = data ?? [];
  } catch {
    rows = [];
  }

  return (
    <AdminShell email={email}>
      <div className="flex items-center justify-between">
        <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">Blog posts</h1>
        <Link href="/admin/posts/new" className="rounded-[var(--radius)] bg-accent px-5 py-2.5 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.16em] text-accent-foreground">+ New post</Link>
      </div>

      <div className="mt-8 divide-y divide-border rounded-[var(--radius)] border border-border">
        {rows.length === 0 && <p className="p-6 font-[family-name:var(--font-body)] text-sm text-muted">No posts yet.</p>}
        {rows.map((p) => (
          <div key={p.id} className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="font-[family-name:var(--font-body)] text-patra">{p.title}</p>
              <p className="font-[family-name:var(--font-body)] text-xs text-loha">/{p.slug} · {p.published ? "published" : "draft"}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/posts/${p.id}`} className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] text-swarna">Edit</Link>
              <form action={deletePost}>
                <input type="hidden" name="id" value={p.id} />
                <button className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] text-sindoor">Delete</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
