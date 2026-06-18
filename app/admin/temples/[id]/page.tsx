import { requireAdmin } from "@/lib/admin/guard";
import { adminDb } from "@/lib/admin/db";
import { AdminShell } from "@/components/admin/AdminShell";
import { saveTemple } from "../../actions";

const F = "rounded-[var(--radius)] border border-border bg-rakta/20 px-4 py-3 font-[family-name:var(--font-body)] text-patra placeholder:text-muted focus:border-swarna focus:outline-none";

export default async function TempleEditor({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { configured, email } = await requireAdmin();
  if (!configured) return <AdminShell email={null}><p className="font-[family-name:var(--font-body)] text-muted">Connect Supabase first.</p></AdminShell>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let t: any = {};
  if (id !== "new") { try { t = (await adminDb().from("temples").select("*").eq("id", id).single()).data ?? {}; } catch {} }

  return (
    <AdminShell email={email}>
      <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">{id === "new" ? "New temple" : "Edit temple"}</h1>
      <form action={saveTemple} className="mt-8 flex max-w-2xl flex-col gap-4">
        <input type="hidden" name="id" value={id} />
        <input name="name" required placeholder="Temple name" defaultValue={t.name ?? ""} className={F} />
        <input name="place" required placeholder="Place (city, state, country)" defaultValue={t.place ?? ""} className={F} />
        <div className="flex gap-4">
          <input name="lat" required type="number" step="any" placeholder="Latitude" defaultValue={t.lat ?? ""} className={`${F} flex-1`} />
          <input name="lng" required type="number" step="any" placeholder="Longitude" defaultValue={t.lng ?? ""} className={`${F} flex-1`} />
        </div>
        <input name="note" placeholder="Note" defaultValue={t.note ?? ""} className={F} />
        <label className="flex items-center gap-2 font-[family-name:var(--font-body)] text-sm text-muted"><input type="checkbox" name="verify" defaultChecked={t.verify ?? false} /> Coordinates approximate — flag to verify</label>
        <button className="self-start rounded-[var(--radius)] bg-accent px-7 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.16em] text-accent-foreground">Save</button>
      </form>
    </AdminShell>
  );
}
