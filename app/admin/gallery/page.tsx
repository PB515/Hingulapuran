import Link from "next/link";
import { requireAdmin } from "@/lib/admin/guard";
import { adminDb } from "@/lib/admin/db";
import { AdminShell } from "@/components/admin/AdminShell";
import { deleteGallery } from "../actions";

type Row = { id: string; title: string; src: string };

export default async function AdminGallery() {
  const { configured, email } = await requireAdmin();
  if (!configured) return <AdminShell email={null}><p className="font-[family-name:var(--font-body)] text-muted">Connect Supabase — see the Dashboard.</p></AdminShell>;

  let rows: Row[] = [];
  try { rows = (await adminDb().from("gallery_items").select("id,title,src").order("sort")).data ?? []; } catch {}

  return (
    <AdminShell email={email}>
      <div className="flex items-center justify-between">
        <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">Gallery</h1>
        <Link href="/admin/gallery/new" className="rounded-[var(--radius)] bg-accent px-5 py-2.5 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.16em] text-accent-foreground">+ New image</Link>
      </div>
      <div className="mt-8 divide-y divide-border rounded-[var(--radius)] border border-border">
        {rows.length === 0 && <p className="p-6 font-[family-name:var(--font-body)] text-sm text-muted">No images yet.</p>}
        {rows.map((g) => (
          <div key={g.id} className="flex items-center justify-between gap-4 p-4">
            <div><p className="font-[family-name:var(--font-body)] text-patra">{g.title}</p><p className="font-[family-name:var(--font-body)] text-xs text-loha">{g.src}</p></div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/gallery/${g.id}`} className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] text-swarna">Edit</Link>
              <form action={deleteGallery}><input type="hidden" name="id" value={g.id} /><button className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] text-sindoor">Delete</button></form>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
