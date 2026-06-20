import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/* The public grantha archive — renders the curated docs from /docs into READER-
   facing pages. The docs carry production scaffolding meant for the build (notes
   to the agent, JSON map data, .pdf/.md cross-refs, Tier-A/B/C / Progress markers);
   all of that is stripped here. Each page opens with a plain-language `intro` for a
   visitor with zero prior knowledge, and long docs get a chapter jump-nav. */

export type GranthaDoc = { slug: string; file: string; title: string; deva?: string; category: string; blurb: string; intro: string };

export const GRANTHA: GranthaDoc[] = [
  {
    slug: "what-is-hinglaj-puran", file: "WHAT-IS-HINGLAJ-PURAN.md", title: "What is the Hinglaj Puran?", category: "Begin here",
    blurb: "Never heard of any of this? Start here.",
    intro: "A first introduction for anyone. Who Hinglaj Mata is, what this hundred-year-old book actually holds, and why a small team is working to save it before it is lost.",
  },
  {
    slug: "faq", file: "FAQ.md", title: "Questions & Answers", category: "Begin here",
    blurb: "Quick answers to the obvious questions.",
    intro: "Short, plain answers to the questions a first-time reader tends to ask.",
  },
  {
    slug: "narrative-timeline", file: "NARRATIVE-TIMELINE.md", title: "The Story, Start to End", deva: "कथा-क्रम", category: "Read the story",
    blurb: "The whole grantha as one story, in order.",
    intro: "The best place to actually read the grantha: its sacred history told as one arc in seven movements, from the Goddess at the beginning of the world to the founding of the communities who still call her mother.",
  },
  {
    slug: "chapter-index", file: "CHAPTER-INDEX.md", title: "Every Chapter", deva: "अनुक्रमणिका", category: "Read the story",
    blurb: "What is inside, chapter by chapter. All 87.",
    intro: "A map of the whole book. All 87 chapters in plain English, across its two halves. Skim it to see the shape of the text; the full word-for-word readings live under “The Full Translation.”",
  },
  {
    slug: "glossary", file: "GLOSSARY.md", title: "Who’s Who", deva: "पात्र-परिचय", category: "Look things up",
    blurb: "Every god, demon, sage, king, place and term.",
    intro: "Lost in a name? Every deity, asura, sage, king, place and key term in the grantha, each in a line, with where it appears.",
  },
  {
    slug: "tirtha-gazetteer", file: "TIRTHA-GAZETTEER.md", title: "The Sacred Places", category: "Look things up",
    blurb: "Where the story happens, on the land.",
    intro: "The holy places the grantha names, and where each event is held to have happened, from Mount Hingula to the rivers of the Sindhu country.",
  },
  {
    slug: "community-origins", file: "COMMUNITY-ORIGINS.md", title: "The Communities", category: "Look things up",
    blurb: "The peoples who call her their mother.",
    intro: "How whole living communities trace their beginning to this Goddess: a warrior people remade as the Brahmakshatriya, and the Lohana, Bhatia, Khatri and Pushkarna who descend from them.",
  },
  {
    slug: "genealogy", file: "GENEALOGY.md", title: "The Family Trees", category: "Look things up",
    blurb: "The lineages the grantha records.",
    intro: "The dynastic lines the grantha sets down, from its kings to the communities of today.",
  },
  {
    slug: "quotes-and-mantras", file: "QUOTES-AND-MANTRAS.md", title: "Mantras & Verses", category: "Look things up",
    blurb: "The words worth carrying.",
    intro: "The words the tradition holds closest: the central mantras, the Goddess’s own vow, and the key verses of the text.",
  },
];

const CATEGORIES = ["Begin here", "Read the story", "Look things up"] as const;

/* The full translation is no longer one long dump page — it is read one chapter
   per page under /grantha/translation. This meta drives its card + index. */
export const TRANSLATION = {
  slug: "translation",
  title: "The Full Translation",
  blurb: "The actual words, translated. One chapter at a time.",
  intro: "The book’s own words, rendered into English sentence by sentence, beginning with its Hinglaj heart. Read it one chapter at a time. A living work in progress that grows as more of the text is translated.",
};

const slugByFile = new Map(GRANTHA.map((d) => [d.file, d.slug]));
slugByFile.set("DWITIYA-TRANSLATION.md", "translation"); // cross-links point at the chapter index

export type GranthaCard = { href: string; title: string; deva?: string; blurb: string };

export function getGranthaDoc(slug: string): GranthaDoc | null {
  return GRANTHA.find((d) => d.slug === slug) ?? null;
}
export function granthaByCategory(): { category: string; cards: GranthaCard[] }[] {
  return CATEGORIES.map((category) => {
    const cards: GranthaCard[] = GRANTHA.filter((d) => d.category === category).map((d) => ({
      href: `/grantha/${d.slug}`, title: d.title, deva: d.deva, blurb: d.blurb,
    }));
    if (category === "Read the story") {
      cards.push({ href: "/grantha/translation", title: TRANSLATION.title, blurb: TRANSLATION.blurb });
    }
    return { category, cards };
  });
}

/* a blockquote / fenced block is "machine scaffolding" if it mentions any of these */
const META = /\btier-[abc]\b|\.pdf\b|\.md\b|progress\s*:|priority track|annotated edition|\bcaveats?\b|working draft|scan-quality|verify before publish|false coordinate|omitted from coordinate|for the (?:site|landing|reader|analyz|scene)|feed the|scene candidate|story-flow|moodboard|public-facing|provenance|\breel\b|map data|mappable|\bjson\b/i;

export async function renderGrantha(slug: string): Promise<{ doc: GranthaDoc; html: string; toc: { id: string; text: string }[] } | null> {
  const doc = getGranthaDoc(slug);
  if (!doc) return null;
  const md = fs.readFileSync(path.join(process.cwd(), "docs", doc.file), "utf8");

  const src = md
    .replace(/^\s*#\s+.+\r?\n/, "") // drop the H1 (we render our own title)
    // a "Map data (JSON…)" heading + its fenced code block
    .replace(/^#{1,6}[^\n]*(?:json|map data|mappable)[^\n]*\r?\n+```[\s\S]*?```[^\n]*/gim, "")
    // json / mermaid fenced blocks (machine data + diagrams), and any obviously-data fence
    .replace(/```[a-z]*\r?\n[\s\S]*?```/gi, (m) => (/```(?:json|mermaid)/i.test(m) || /\n\s*[[{]/.test(m) ? "" : m))
    // any blockquote block that reads like a production note
    .replace(/(?:^[ \t]*>[^\n]*\r?\n?)+/gm, (bq) => (META.test(bq) ? "" : bq))
    // pure cross-reference lines (2+ bare .md mentions)
    .replace(/^[^\n]*\.md[^\n]*\.md[^\n]*\r?\n/gm, "")
    // web link + asset rewrites
    .replace(/\]\(\.\.\/public\//g, "](/")
    .replace(/\]\(([A-Za-z0-9-]+)\.md(#[^)]*)?\)/g, (_m, f: string, hash?: string) => {
      const s = slugByFile.get(`${f}.md`);
      return s ? `](/grantha/${s}${hash ?? ""})` : "](#)";
    });

  let html = (await marked.parse(src)) as string;

  // give H2s ids and collect a chapter table-of-contents
  const toc: { id: string; text: string }[] = [];
  let n = 0;
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = `s${++n}`;
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });

  return { doc, html, toc };
}

/* ── The full translation, read one chapter per page ───────────────────────── */

export type TransChapter = { num: number; title: string; deva?: string; bodyHtml: string };

// "The Origin of Hingulā (હિંગુળા ઉત્પત્તિ)" → { title, deva } (deva only if Indic script)
function splitDeva(raw: string): { title: string; deva?: string } {
  const m = raw.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (m && /[ऀ-ॿ઀-૿]/.test(m[2])) return { title: m[1].trim(), deva: m[2].trim() };
  return { title: raw.trim() };
}

export async function getTranslationChapters(): Promise<TransChapter[]> {
  const md = fs.readFileSync(path.join(process.cwd(), "docs", "DWITIYA-TRANSLATION.md"), "utf8");
  const parts = md.split(/^##\s+Adhyāy\s+/m).slice(1); // drop the preamble before ch 65
  const chapters: TransChapter[] = [];
  for (const part of parts) {
    const head = part.match(/^(\d+)\s*[—–-]\s*([^\n]+)\r?\n/);
    if (!head) continue;
    const num = parseInt(head[1], 10);
    let body = part.slice(head[0].length);
    if (/to translate next|to translate\b/i.test(body) && body.trim().length < 90) continue; // skip stub chapters
    body = body
      .replace(/(?:^[ \t]*>[^\n]*\r?\n?)+/gm, (bq) => (META.test(bq) ? "" : bq)) // drop Flags / scan notes
      .replace(/\s*\(PDF[^)]*\)/g, "")        // drop "(PDF 211–214)" source refs
      .replace(/^\s*---\s*$/gm, "");           // drop chapter-divider rules
    const { title, deva } = splitDeva(head[2].trim());
    const bodyHtml = (await marked.parse(body)) as string;
    chapters.push({ num, title, deva, bodyHtml });
  }
  return chapters.sort((a, b) => a.num - b.num);
}

export async function getTranslationChapter(num: number): Promise<{ chapter: TransChapter; prev: TransChapter | null; next: TransChapter | null; total: number } | null> {
  const all = await getTranslationChapters();
  const i = all.findIndex((c) => c.num === num);
  if (i === -1) return null;
  return { chapter: all[i], prev: all[i - 1] ?? null, next: all[i + 1] ?? null, total: all.length };
}
