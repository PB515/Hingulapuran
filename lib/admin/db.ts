import "server-only";
import { createServiceRoleClient } from "@/lib/supabase/service-role";

/** True only when all Supabase env vars are present (admin needs the service role). */
export function hasSupabase() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

/* Service-role client, loosely typed: the new content tables (books/posts/…)
   aren't in the generated database.types yet, so we access them untyped until
   `supabase gen types` runs against the migrated DB. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function adminDb(): any {
  return createServiceRoleClient();
}
