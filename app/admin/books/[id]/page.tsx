import { requireAdmin } from "@/lib/admin/guard";
import { adminDb } from "@/lib/admin/db";
import { AdminShell } from "@/components/admin/AdminShell";
import { saveBook } from "../../actions";

const F = "rounded-[var(--radius)] border border-border bg-rakta/20 px-4 py-3 font-[family-name:var(--font-body)] text-patra placeholder:text-muted focus:border-swarna focus:outline-none";

export default async function BookEditor({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { configured, email } = await requireAdmin();
  if (!configured) return <AdminShell email={null}><p className="font-[family-name:var(--font-body)] text-muted">Connect Supabase first.</p></AdminShell>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let b: any = {};
  if (id !== "new") { try { b = (await adminDb().from("books").select("*").eq("id", id).single()).data ?? {}; } catch {} }

  return (
    <AdminShell email={email}>
      <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">{id === "new" ? "New book" : "Edit book"}</h1>
      <form action={saveBook} className="mt-8 flex max-w-2xl flex-col gap-4">
        <input type="hidden" name="id" value={id} />
        <input name="title" required placeholder="Title (native script)" defaultValue={b.title ?? ""} className={F} />
        <input name="title_en" required placeholder="Title (English)" defaultValue={b.title_en ?? ""} className={F} />
        <input name="slug" required placeholder="slug" defaultValue={b.slug ?? ""} className={F} />
        <div className="flex gap-4">
          <input name="language" placeholder="Language" defaultValue={b.language ?? ""} className={`${F} flex-1`} />
          <input name="year" placeholder="Year" defaultValue={b.year ?? ""} className={`${F} flex-1`} />
        </div>
        <textarea name="blurb" rows={3} placeholder="Blurb" defaultValue={b.blurb ?? ""} className={F} />
        <input name="cover" placeholder="Cover path (/art/…)" defaultValue={b.cover ?? ""} className={F} />
        <input name="pdf" placeholder="PDF path (/books/….pdf)" defaultValue={b.pdf ?? ""} className={F} />
        <label className="flex items-center gap-2 font-[family-name:var(--font-body)] text-sm text-muted"><input type="checkbox" name="published" defaultChecked={b.published ?? false} /> Published</label>
        <button className="self-start rounded-[var(--radius)] bg-accent px-7 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.16em] text-accent-foreground">Save</button>
      </form>
    </AdminShell>
  );
}
