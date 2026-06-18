import dynamic from "next/dynamic";
import { temples } from "@/lib/temples";

const TempleMap = dynamic(() => import("@/components/TempleMap").then((m) => m.TempleMap));

export const metadata = { title: "Temples — Hingulapuran" };

export default function Temples() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-10">
      <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-swarna">मंदिर · The temples</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-7xl">Temples of Hinglaj</h1>
      <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-muted">
        From the cave on the Hingol river to the shrines across Rajasthan, Gujarat and Maharashtra. Tap a marker to read more.
      </p>

      <div className="mt-12">
        <TempleMap />
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {temples.map((t) => (
          <li key={`${t.name}-${t.lat}`} className="rounded-[var(--radius)] border border-border bg-rakta/30 p-5">
            <p className="font-[family-name:var(--font-display-latin)] text-lg text-patra">{t.name}</p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-muted">{t.place}</p>
            {t.note && <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-swarna/80">{t.note}</p>}
            {t.verify && <p className="mt-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.18em] text-loha">approx · to verify</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}
