"use client";

import { useState } from "react";
import { subscribe } from "@/app/(site)/actions";

/* Email-gated download: capture an email (builds the awareness list), then reveal
   the download. The email POST is a TODO stub — wire to Supabase/email later.
   Includes a honeypot field (bots fill it; humans don't). */
export function BookDownloadGate({ pdf, title }: { pdf?: string; title: string }) {
  const [email, setEmail] = useState("");
  const [trap, setTrap] = useState(""); // honeypot
  const [unlocked, setUnlocked] = useState(false);

  if (!pdf) {
    return (
      <p className="font-[family-name:var(--font-body)] text-sm text-kajal/60">Download coming soon.</p>
    );
  }

  if (unlocked) {
    return (
      <a
        href={pdf}
        download
        className="inline-block rounded-[var(--radius)] bg-rakta px-7 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.18em] text-patra transition-transform hover:-translate-y-0.5"
      >
        ↓ Download {title} (PDF)
      </a>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (trap) return; // bot
        await subscribe(email); // adds to the awareness list (no-op until Supabase is wired)
        setUnlocked(true);
      }}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={trap}
        onChange={(e) => setTrap(e.target.value)}
        className="hidden"
        aria-hidden
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your email to download"
        className="flex-1 rounded-[var(--radius)] border border-kajal/20 bg-white/70 px-4 py-3 font-[family-name:var(--font-body)] text-sm text-kajal placeholder:text-kajal/40 focus:border-rakta focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-[var(--radius)] bg-rakta px-6 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.16em] text-patra transition-transform hover:-translate-y-0.5"
      >
        Get the PDF
      </button>
    </form>
  );
}
