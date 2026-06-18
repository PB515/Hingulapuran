import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata = { title: "Blog — Hingulapuran" };

export default function Blog() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-10">
      <p className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.3em] text-swarna">कथा · The blog</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-patra md:text-7xl">Stories &amp; history</h1>

      <ul className="mt-12 divide-y divide-border/60">
        {posts.map((p) => (
          <li key={p.slug} className="py-7">
            <Link href={`/blog/${p.slug}`} className="group block">
              <p className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-loha">
                {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display-latin)] text-2xl text-patra transition-colors group-hover:text-swarna md:text-3xl">
                {p.title}
              </h2>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-muted">{p.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
