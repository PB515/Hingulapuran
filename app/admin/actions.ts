"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { adminDb, hasSupabase } from "@/lib/admin/db";

export async function signOut() {
  if (hasSupabase()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  redirect("/admin/login");
}

async function upsert(table: string, id: string, row: Record<string, unknown>) {
  const db = adminDb();
  if (id && id !== "new") await db.from(table).update(row).eq("id", id);
  else await db.from(table).insert(row);
}

const str = (fd: FormData, k: string) => String(fd.get(k) || "").trim();
const on = (fd: FormData, k: string) => fd.get(k) === "on";

/* ---- Blog posts ---- */
export async function savePost(fd: FormData) {
  if (!hasSupabase()) return;
  await upsert("posts", str(fd, "id"), {
    slug: str(fd, "slug"), title: str(fd, "title"), excerpt: str(fd, "excerpt"),
    body: String(fd.get("body") || ""), published: on(fd, "published"),
    published_at: on(fd, "published") ? new Date().toISOString() : null,
  });
  revalidatePath("/admin/posts"); revalidatePath("/blog");
  redirect("/admin/posts");
}
export async function deletePost(fd: FormData) {
  if (!hasSupabase()) return;
  if (str(fd, "id")) await adminDb().from("posts").delete().eq("id", str(fd, "id"));
  revalidatePath("/admin/posts"); revalidatePath("/blog");
}

/* ---- Books ---- */
export async function saveBook(fd: FormData) {
  if (!hasSupabase()) return;
  await upsert("books", str(fd, "id"), {
    slug: str(fd, "slug"), title: str(fd, "title"), title_en: str(fd, "title_en"),
    language: str(fd, "language"), year: str(fd, "year"), blurb: str(fd, "blurb"),
    cover: str(fd, "cover") || null, pdf: str(fd, "pdf") || null, published: on(fd, "published"),
  });
  revalidatePath("/admin/books"); revalidatePath("/books");
  redirect("/admin/books");
}
export async function deleteBook(fd: FormData) {
  if (!hasSupabase()) return;
  if (str(fd, "id")) await adminDb().from("books").delete().eq("id", str(fd, "id"));
  revalidatePath("/admin/books"); revalidatePath("/books");
}

/* ---- Gallery ---- */
export async function saveGallery(fd: FormData) {
  if (!hasSupabase()) return;
  await upsert("gallery_items", str(fd, "id"), {
    src: str(fd, "src"), title: str(fd, "title"), note: str(fd, "note") || null,
  });
  revalidatePath("/admin/gallery"); revalidatePath("/gallery");
  redirect("/admin/gallery");
}
export async function deleteGallery(fd: FormData) {
  if (!hasSupabase()) return;
  if (str(fd, "id")) await adminDb().from("gallery_items").delete().eq("id", str(fd, "id"));
  revalidatePath("/admin/gallery"); revalidatePath("/gallery");
}

/* ---- Temples ---- */
export async function saveTemple(fd: FormData) {
  if (!hasSupabase()) return;
  await upsert("temples", str(fd, "id"), {
    name: str(fd, "name"), place: str(fd, "place"),
    lat: parseFloat(str(fd, "lat")) || 0, lng: parseFloat(str(fd, "lng")) || 0,
    note: str(fd, "note") || null, verify: on(fd, "verify"),
  });
  revalidatePath("/admin/temples"); revalidatePath("/temples");
  redirect("/admin/temples");
}
export async function deleteTemple(fd: FormData) {
  if (!hasSupabase()) return;
  if (str(fd, "id")) await adminDb().from("temples").delete().eq("id", str(fd, "id"));
  revalidatePath("/admin/temples"); revalidatePath("/temples");
}
