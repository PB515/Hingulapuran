import Link from "next/link";
import { requireAdmin } from "@/lib/admin/guard";
import { adminDb } from "@/lib/admin/db";
import { AdminShell } from "@/components/admin/AdminShell";
import { deleteTemple } from "../actions";

type Row = { id: string; name: string; place: string; verify: boolean };

export default async function AdminTemples() {
  const { configured, email } = await requireAdmin();
  if (!configured) return <AdminShell email={null}><p className="font-[family-name:var(--font-body)] text-muted">Connect Supabase — see the Dashboard.</p></AdminShell>;

  let rows: Row[] = [];
  try { rows = (await adminDb().from("temples").select("id,name,place,verify").order("created_at")).data ?? []; } catch {}

  return (
    <AdminShell email={email}>
      <div className="flex items-center justify-between">
        <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">Temples</h1>
        <Link href="/admin/temples/new" className="rounded-[var(--radius)] bg-accent px-5 py-2.5 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.16em] text-accent-foreground">+ New temple</Link>
      </div>
      <div className="mt-8 divide-y divide-border rounded-[var(--radius)] border border-border">
        {rows.length === 0 && <p className="p-6 font-[family-name:var(--font-body)] text-sm text-muted">No temples yet.</p>}
        {rows.map((t) => (
          <div key={t.id} className="flex items-center justify-between gap-4 p-4">
            <div><p className="font-[family-name:var(--font-body)] text-patra">{t.name}</p><p className="font-[family-name:var(--font-body)] text-xs text-loha">{t.place}{t.verify ? " · to verify" : ""}</p></div>
            <div className="flex items-center gap-3">
              <Link href={`/admin/temples/${t.id}`} className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] text-swarna">Edit</Link>
              <form action={deleteTemple}><input type="hidden" name="id" value={t.id} /><button className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] text-sindoor">Delete</button></form>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
