import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} — Hingulapuran` : "Post" };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="px-6 pb-24 pt-32 md:px-10">
      <article className="mx-auto max-w-2xl">
        <Link href="/blog" className="font-[family-name:var(--font-display-latin)] text-xs uppercase tracking-[0.2em] text-loha transition-colors hover:text-swarna">
          ← All writings
        </Link>
        <p className="mt-6 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-loha">
          {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display-latin)] text-4xl leading-tight text-patra md:text-5xl">{post.title}</h1>

        {/* Reading surface — parchment, dark ink, for legibility */}
        <div
          className="mt-8 rounded-[var(--radius)] border border-border bg-patra px-7 py-8 font-[family-name:var(--font-body)] text-[17px] leading-[1.8] text-kajal [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>
    </main>
  );
}
