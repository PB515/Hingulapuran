"use server";

import { adminDb, hasSupabase } from "@/lib/admin/db";

/* Public form writes. Use the service-role client (RLS allows anon insert anyway,
   but this keeps it server-only). No-ops gracefully until Supabase is connected. */

export async function subscribe(email: string): Promise<{ ok: boolean }> {
  if (!email || !hasSupabase()) return { ok: true }; // graceful no-op pre-Supabase
  try {
    await adminDb().from("subscribers").upsert({ email, source: "book-download" }, { onConflict: "email" });
  } catch {
    /* swallow — never block the download */
  }
  return { ok: true };
}

export async function sendMessage(input: { name: string; email: string; message: string }): Promise<{ ok: boolean }> {
  if (!hasSupabase()) return { ok: true };
  try {
    await adminDb().from("messages").insert(input);
  } catch {
    return { ok: false };
  }
  return { ok: true };
}
