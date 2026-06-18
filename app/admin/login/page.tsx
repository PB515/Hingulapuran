"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else {
        router.push("/admin");
        router.refresh();
      }
    } catch {
      setError("Supabase is not configured yet. Add your keys to .env.local.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-[var(--radius)] border border-border bg-rakta/30 p-8">
        <p className="font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.2em] text-swarna">Hingulapuran</p>
        <h1 className="mt-1 font-[family-name:var(--font-display-latin)] text-2xl text-patra">Admin sign in</h1>
        <div className="mt-6 flex flex-col gap-3">
          <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-[var(--radius)] border border-border bg-rakta/20 px-4 py-3 font-[family-name:var(--font-body)] text-patra placeholder:text-muted focus:border-swarna focus:outline-none" />
          <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-[var(--radius)] border border-border bg-rakta/20 px-4 py-3 font-[family-name:var(--font-body)] text-patra placeholder:text-muted focus:border-swarna focus:outline-none" />
          {error && <p className="font-[family-name:var(--font-body)] text-xs text-sindoor">{error}</p>}
          <button disabled={busy} className="mt-1 rounded-[var(--radius)] bg-accent px-6 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.16em] text-accent-foreground disabled:opacity-60">
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </div>
      </form>
    </main>
  );
}
