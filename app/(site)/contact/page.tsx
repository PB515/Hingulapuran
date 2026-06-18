import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Contact — Hingulapuran" };

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-swarna">संपर्क · Reach us</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-7xl">Contact</h1>
      <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-muted">
        For the book, the temples, or to help spread the awareness — write to us.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4 font-[family-name:var(--font-body)] text-sm">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-loha">Email</p>
            <a href={`mailto:${site.contact.email}`} className="text-patra hover:text-swarna">{site.contact.email}</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-loha">Phone</p>
            <a href={`tel:${site.contact.phone}`} className="text-patra hover:text-swarna">{site.contact.phone}</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-loha">WhatsApp</p>
            <a href={`https://wa.me/${site.contact.whatsapp}`} className="text-patra hover:text-swarna">Message on WhatsApp</a>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
