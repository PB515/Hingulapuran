import { getStoryChapters } from "./grantha-story";
import { getTranslationChapters } from "./grantha";
import { tirthas } from "./tirthas";
import { sacredArc } from "./sacred-arc";
import { getGlossary } from "./glossary";

/* One flat index across the whole grantha for the client-side search:
   story chapters, the full-text chapters, sacred places, the arc, the glossary. */
export type SearchEntry = { title: string; deva?: string; sub: string; href: string; kind: string; text: string };

export async function getSearchIndex(): Promise<SearchEntry[]> {
  const out: SearchEntry[] = [];

  const story = await getStoryChapters();
  for (const c of story) {
    out.push({ title: c.title, deva: c.deva, sub: `Story · Adhyāy ${c.num}`, href: `/grantha/story/${c.num}`, kind: "Chapter", text: c.summary });
  }

  const trans = await getTranslationChapters();
  for (const c of trans) {
    out.push({ title: c.title, deva: c.deva, sub: `Full text · Adhyāy ${c.num}`, href: `/grantha/translation/${c.num}`, kind: "Translation", text: c.title });
  }

  for (const t of tirthas) {
    out.push({ title: t.name, sub: `Place · adhyāy ${t.chapters}`, href: "/temples", kind: "Place", text: t.note });
  }

  for (const m of sacredArc) {
    out.push({ title: m.en, deva: m.deva, sub: `Sacred Arc · ${m.chapters}`, href: "/grantha/arc", kind: "Arc", text: m.body });
  }

  for (const s of getGlossary()) {
    for (const e of s.entries) {
      out.push({ title: e.aliases.join(" · "), sub: `${e.section}${e.chapters ? ` · ${e.chapters}` : ""}`, href: "/grantha/glossary", kind: "Glossary", text: `${e.aliases.join(" ")} ${e.def}` });
    }
  }

  return out;
}
