import { CylinderReel } from "@/components/CylinderReel";

export const metadata = { title: "Carousel demo — Hingulapuran" };

export default function Demo() {
  return (
    <main>
      <section className="mx-auto max-w-2xl px-6 pt-32 text-center">
        <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.35em] text-loha">Experiment</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-patra md:text-5xl">3D Cylindrical Carousel</h1>
        <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">
          The fall-of-Sati scenes projected onto a rotating cylinder — scroll to turn it. A browsing alternative to the cinematic reel; not wired into the home.
        </p>
      </section>
      <CylinderReel />
    </main>
  );
}
