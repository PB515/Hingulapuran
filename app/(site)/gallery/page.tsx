import { gallery } from "@/lib/gallery";
import { Gallery } from "@/components/Lightbox";

export const metadata = { title: "Gallery — Hingulapuran" };

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-10">
      <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-swarna">दर्शन · The gallery</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-7xl">Darshan</h1>
      <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-muted">
        A curated gathering of Hinglaj Mata in art. Tap any piece to look closer.
      </p>
      <div className="mt-12">
        <Gallery items={gallery} />
      </div>
    </main>
  );
}
