"use client";

import { useState } from "react";
import { sendMessage } from "@/app/(site)/actions";

/* Contact form with a honeypot. Submit is a TODO stub — wire to Supabase/email
   later. On success it shows a thank-you; no data leaves the page yet. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [trap, setTrap] = useState("");

  if (sent) {
    return (
      <p className="rounded-[var(--radius)] border border-swarna/40 bg-rakta/30 px-6 py-5 font-[family-name:var(--font-body)] text-patra">
        🙏 Thank you — your message has been received. We will reply soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (trap) return; // bot
        const fd = new FormData(e.currentTarget);
        await sendMessage({
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          message: String(fd.get("message") || ""),
        });
        setSent(true);
      }}
      className="flex flex-col gap-4"
    >
      <input type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} className="hidden" aria-hidden />
      <input name="name" required placeholder="Your name" className="rounded-[var(--radius)] border border-border bg-rakta/20 px-4 py-3 font-[family-name:var(--font-body)] text-patra placeholder:text-muted focus:border-swarna focus:outline-none" />
      <input name="email" required type="email" placeholder="Your email" className="rounded-[var(--radius)] border border-border bg-rakta/20 px-4 py-3 font-[family-name:var(--font-body)] text-patra placeholder:text-muted focus:border-swarna focus:outline-none" />
      <textarea name="message" required rows={5} placeholder="Your message" className="rounded-[var(--radius)] border border-border bg-rakta/20 px-4 py-3 font-[family-name:var(--font-body)] text-patra placeholder:text-muted focus:border-swarna focus:outline-none" />
      <button type="submit" className="self-start rounded-[var(--radius)] bg-accent px-7 py-3 font-[family-name:var(--font-display-latin)] text-sm uppercase tracking-[0.16em] text-accent-foreground transition-transform hover:-translate-y-0.5">
        Send
      </button>
    </form>
  );
}
