import { requireAdmin } from "@/lib/admin/guard";
import { adminDb } from "@/lib/admin/db";
import { AdminShell } from "@/components/admin/AdminShell";

async function rows(table: string, cols: string) {
  try {
    const { data } = await adminDb().from(table).select(cols).order("created_at", { ascending: false });
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function Inbox() {
  const { configured, email } = await requireAdmin();
  if (!configured) {
    return <AdminShell email={null}><p className="font-[family-name:var(--font-body)] text-muted">Connect Supabase to see submissions — see the Dashboard.</p></AdminShell>;
  }

  const subs = (await rows("subscribers", "email,created_at")) as { email: string; created_at: string }[];
  const msgs = (await rows("messages", "name,email,message,created_at")) as { name: string; email: string; message: string; created_at: string }[];

  return (
    <AdminShell email={email}>
      <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">Inbox</h1>

      <h2 className="mt-8 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-swarna">Subscribers ({subs.length})</h2>
      <ul className="mt-3 rounded-[var(--radius)] border border-border divide-y divide-border">
        {subs.length === 0 && <li className="p-4 font-[family-name:var(--font-body)] text-sm text-muted">None yet.</li>}
        {subs.map((s, i) => (
          <li key={i} className="flex justify-between p-3 font-[family-name:var(--font-body)] text-sm">
            <span className="text-patra">{s.email}</span>
            <span className="text-loha">{new Date(s.created_at).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-swarna">Messages ({msgs.length})</h2>
      <ul className="mt-3 space-y-3">
        {msgs.length === 0 && <li className="rounded-[var(--radius)] border border-border p-4 font-[family-name:var(--font-body)] text-sm text-muted">None yet.</li>}
        {msgs.map((m, i) => (
          <li key={i} className="rounded-[var(--radius)] border border-border bg-rakta/30 p-4 font-[family-name:var(--font-body)] text-sm">
            <p className="text-patra">{m.name} · <span className="text-loha">{m.email}</span></p>
            <p className="mt-2 text-muted">{m.message}</p>
          </li>
        ))}
      </ul>
    </AdminShell>
  );
}
