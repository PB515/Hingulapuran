import "server-only";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { hasSupabase } from "./db";

/* Gate for admin pages. Returns {configured:false} when Supabase isn't wired
   (page shows a setup notice); otherwise requires a logged-in user or redirects
   to the login page. */
export async function requireAdmin() {
  if (!hasSupabase()) return { configured: false as const, email: null as string | null };
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/admin/login");
  return { configured: true as const, email: data.user.email ?? null };
}
