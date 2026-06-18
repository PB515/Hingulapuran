import { requireAdmin } from "@/lib/admin/guard";
import { adminDb } from "@/lib/admin/db";
import { AdminShell } from "@/components/admin/AdminShell";
import { savePost } from "../../actions";

type Post = { id: string; slug: string; title: string; excerpt: string; body: string; published: boolean };

export default async function PostEditor({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { configured, email } = await requireAdmin();
  if (!configured) {
    return <AdminShell email={null}><p className="font-[family-name:var(--font-body)] text-muted">Connect Supabase first — see the Dashboard.</p></AdminShell>;
  }

  let post: Partial<Post> = {};
  if (id !== "new") {
    try {
      const { data } = await adminDb().from("posts").select("*").eq("id", id).single();
      post = data ?? {};
    } catch {
      post = {};
    }
  }

  const f = "rounded-[var(--radius)] border border-border bg-rakta/20 px-4 py-3 font-[family-name:var(--font-body)] text-patra placeholder:text-muted focus:border-swarna focus:outline-none";

  return (
    <AdminShell email={email}>
      <h1 className="font-[family-name:var(--font-display-latin)] text-3xl text-patra">{id === "new" ? "New post" : "Edit post"}</h1>
      <form action={savePost} className="mt-8 flex max-w-2xl flex-col gap-4">
        <input type="hidden" name="id" value={id} />
        <input name="title" required placeholder="Title" defaultValue={post.title ?? ""} className={f} />
        <input name="slug" required placeholder="slug-in-kebab-case" defaultValue={post.slug ?? ""} className={f} />
        <textarea name="excerpt" rows={2} placeholder="Excerpt" defaultValue={post.excerpt ?? ""} className={f} />
        <textarea name="body" rows={12} placeholder="Body (HTML)" defaultValue={post.body ?? ""} className={f} />
        <label className="flex items-center gap-2 font-[family-name:var(--font-body)] text-sm text-muted">
          <input type="checkbox" name="published" defaultChecked={post.published ?? false} /> Published
        </label>
        <button className="self-start rounded-[var(--radius)] bg-accent px-7 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.16em] text-accent-foreground">Save</button>
      </form>
    </AdminShell>
  );
}
