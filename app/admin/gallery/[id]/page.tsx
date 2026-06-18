import { requireAdmin } from "@/lib/admin/guard";
import { adminDb } from "@/lib/admin/db";
import { AdminShell } from "@/components/admin/AdminShell";
import { saveGallery } from "../../actions";

const F = "rounded-[var(--radius)] border border-border bg-rakta/20 px-4 py-3 font-[family-name:var(--font-body)] text-patra placeholder:text-muted focus:border-swarna focus:outline-none";

export default async function GalleryEditor({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { configured, email } = await requireAdmin();
  if (!configured) return <AdminShell email={null}><p className="font-[family-name:var(--font-body)] text-muted">Connect Supabase first.</p></AdminShell>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let g: any = {};
  if (id !== "new") { try { g = (await adminDb().from("gallery_items").select("*").eq("id", id).single()).data ?? {}; } catch {} }

  return (
    <AdminShell email={email}>
      <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">{id === "new" ? "New image" : "Edit image"}</h1>
      <form action={saveGallery} className="mt-8 flex max-w-2xl flex-col gap-4">
        <input type="hidden" name="id" value={id} />
        <input name="src" required placeholder="Image path (/art/gallery/…)" defaultValue={g.src ?? ""} className={F} />
        <input name="title" required placeholder="Title" defaultValue={g.title ?? ""} className={F} />
        <input name="note" placeholder="Note / caption" defaultValue={g.note ?? ""} className={F} />
        <button className="self-start rounded-[var(--radius)] bg-accent px-7 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.16em] text-accent-foreground">Save</button>
      </form>
    </AdminShell>
  );
}
