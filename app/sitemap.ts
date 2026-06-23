import type { MetadataRoute } from "next";
import { getStoryChapters } from "@/lib/grantha-story";
import { getTranslationChapters } from "@/lib/grantha";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hingulapuran.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const routes = [
    "",
    "/grantha",
    "/grantha/story",
    "/grantha/translation",
    "/grantha/arc",
    "/grantha/genealogy",
    "/grantha/glossary",
    "/grantha/search",
    "/temples",
    "/books",
    "/blog",
    "/gallery",
    "/contact",
    "/brahmarandhra",
  ];

  const entries: MetadataRoute.Sitemap = routes.map((r) => ({ url: `${base}${r}`, lastModified: now }));

  try {
    const [story, trans] = await Promise.all([getStoryChapters(), getTranslationChapters()]);
    for (const c of story) entries.push({ url: `${base}/grantha/story/${c.num}`, lastModified: now });
    for (const c of trans) entries.push({ url: `${base}/grantha/translation/${c.num}`, lastModified: now });
  } catch {
    /* chapters unavailable at build — static routes still ship */
  }

  return entries;
}
