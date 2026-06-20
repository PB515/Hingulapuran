import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/* The public grantha archive — renders the curated "site-facing" docs from /docs
   into styled pages. Data-driven: add a doc here and it appears, no new code.
   (Conservation north-star — the whole grantha, opened for the reader.) */

export type GranthaDoc = { slug: string; file: string; title: string; deva?: string; category: string; blurb: string };

export const GRANTHA: GranthaDoc[] = [
  { slug: "what-is-hinglaj-puran", file: "WHAT-IS-HINGLAJ-PURAN.md", title: "What is the Hinglaj Puran?", category: "Begin here", blurb: "The grantha, its provenance, and why it is preserved." },
  { slug: "faq", file: "FAQ.md", title: "Questions & Answers", category: "Begin here", blurb: "Common questions about the text and the tradition." },

  { slug: "chapter-index", file: "CHAPTER-INDEX.md", title: "The Eighty-Seven Chapters", deva: "अनुक्रमणिका", category: "The text", blurb: "The full anukramaṇikā — every adhyay across both pravah." },
  { slug: "narrative-timeline", file: "NARRATIVE-TIMELINE.md", title: "The Sacred Arc", category: "The text", blurb: "The history in seven movements." },
  { slug: "dwitiya-translation", file: "DWITIYA-TRANSLATION.md", title: "The Full Translation", category: "The text", blurb: "Sentence-level English of the Hinglaj core (in progress)." },

  { slug: "glossary", file: "GLOSSARY.md", title: "Dramatis Personae", category: "Reference", blurb: "Deities, asuras, sages, kings, places, and terms." },
  { slug: "tirtha-gazetteer", file: "TIRTHA-GAZETTEER.md", title: "Sacred Places", category: "Reference", blurb: "The tirthas of the grantha." },
  { slug: "community-origins", file: "COMMUNITY-ORIGINS.md", title: "Community Origins", category: "Reference", blurb: "Brahmakṣatriya, Lohana, Bhāṭiā, Khatri, Pushkarṇā." },
  { slug: "genealogy", file: "GENEALOGY.md", title: "The Lineages", category: "Reference", blurb: "The dynastic trees of the Brahmakṣatriya line." },
  { slug: "quotes-and-mantras", file: "QUOTES-AND-MANTRAS.md", title: "Mantras & Verses", category: "Reference", blurb: "The vow, mantras, and key verses." },
];

const CATEGORIES = ["Begin here", "The text", "Reference"] as const;
const slugByFile = new Map(GRANTHA.map((d) => [d.file, d.slug]));

export function getGranthaDoc(slug: string): GranthaDoc | null {
  return GRANTHA.find((d) => d.slug === slug) ?? null;
}

export function granthaByCategory(): { category: string; docs: GranthaDoc[] }[] {
  return CATEGORIES.map((category) => ({ category, docs: GRANTHA.filter((d) => d.category === category) }));
}

export async function renderGrantha(slug: string): Promise<{ doc: GranthaDoc; html: string } | null> {
  const doc = getGranthaDoc(slug);
  if (!doc) return null;
  const md = fs.readFileSync(path.join(process.cwd(), "docs", doc.file), "utf8");

  // drop a leading H1 (we render our own title), then rewrite cross-links + asset paths
  const src = md
    .replace(/^\s*#\s+.+\r?\n/, "")
    .replace(/\]\(\.\.\/public\//g, "](/") // ../public/x -> /x
    .replace(/\]\(([A-Za-z0-9-]+)\.md(#[^)]*)?\)/g, (_m, f: string, hash?: string) => {
      const s = slugByFile.get(`${f}.md`);
      return s ? `](/grantha/${s}${hash ?? ""})` : "](#)"; // sibling public doc -> route; internal -> disabled
    });

  const html = (await marked.parse(src)) as string;
  return { doc, html };
}
