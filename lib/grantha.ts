import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/* The public grantha archive — renders the curated docs from /docs into styled,
   READER-facing pages. The docs carry production notes meant for the build (the
   leading "> …for the site…" blockquotes, cross-ref lines); those are stripped
   here, and each page opens with a plain-language `intro` written for a visitor
   with zero prior knowledge. Data-driven: add a doc and it appears, no new code. */

export type GranthaDoc = { slug: string; file: string; title: string; deva?: string; category: string; blurb: string; intro: string };

export const GRANTHA: GranthaDoc[] = [
  {
    slug: "what-is-hinglaj-puran", file: "WHAT-IS-HINGLAJ-PURAN.md", title: "What is the Hinglaj Puran?", category: "Begin here",
    blurb: "Never heard of any of this? Start here.",
    intro: "A first introduction for anyone — who Hinglaj Mata is, what this hundred-year-old book actually contains, and why a small team is racing to save it before it disappears.",
  },
  {
    slug: "faq", file: "FAQ.md", title: "Questions & Answers", category: "Begin here",
    blurb: "Quick answers to the obvious questions.",
    intro: "Short, plain answers to the questions a first-time reader tends to ask.",
  },
  {
    slug: "narrative-timeline", file: "NARRATIVE-TIMELINE.md", title: "The Story, Start to End", deva: "कथा-क्रम", category: "Read the story",
    blurb: "The whole grantha as one story, in order.",
    intro: "The best place to actually read the grantha — its sacred history told as a single arc in seven movements, from the Goddess at the beginning of the world to the founding of the communities who still call her mother.",
  },
  {
    slug: "chapter-index", file: "CHAPTER-INDEX.md", title: "Every Chapter", deva: "अनुक्रमणिका", category: "Read the story",
    blurb: "What's inside, chapter by chapter — all 87.",
    intro: "A map of the whole book — all 87 chapters in plain English, across its two halves. Skim it to see the shape of the text; the full word-for-word readings are under “The Full Translation.”",
  },
  {
    slug: "dwitiya-translation", file: "DWITIYA-TRANSLATION.md", title: "The Full Translation", category: "Read the story",
    blurb: "The actual words, translated — in progress.",
    intro: "The book's own words, rendered into English sentence by sentence, beginning with its Hinglaj heart. A living work in progress that grows chapter by chapter.",
  },
  {
    slug: "glossary", file: "GLOSSARY.md", title: "Who's Who", deva: "पात्र-परिचय", category: "Look things up",
    blurb: "Every god, demon, sage, king, place and term.",
    intro: "Lost in a name? Every deity, asura, sage, king, place and key term in the grantha, each in a single line, with where it appears.",
  },
  {
    slug: "tirtha-gazetteer", file: "TIRTHA-GAZETTEER.md", title: "The Sacred Places", category: "Look things up",
    blurb: "Where the story happens, on the land.",
    intro: "The holy places the grantha names — where each event is held to have happened, from Mount Hingula to the rivers of the Sindhu country.",
  },
  {
    slug: "community-origins", file: "COMMUNITY-ORIGINS.md", title: "The Communities", category: "Look things up",
    blurb: "The peoples who call her their mother.",
    intro: "How whole living communities trace their beginning to this Goddess — the story of a warrior people remade as the Brahmakshatriya, and the Lohana, Bhatia, Khatri and Pushkarna who descend from them.",
  },
  {
    slug: "genealogy", file: "GENEALOGY.md", title: "The Family Trees", category: "Look things up",
    blurb: "The lineages the grantha records.",
    intro: "The dynastic lines the grantha sets down — from its kings to the communities of today.",
  },
  {
    slug: "quotes-and-mantras", file: "QUOTES-AND-MANTRAS.md", title: "Mantras & Verses", category: "Look things up",
    blurb: "The words worth carrying.",
    intro: "The words the tradition holds closest — the central mantras, the Goddess's own vow, and the key verses of the text.",
  },
];

const CATEGORIES = ["Begin here", "Read the story", "Look things up"] as const;
const slugByFile = new Map(GRANTHA.map((d) => [d.file, d.slug]));

export function getGranthaDoc(slug: string): GranthaDoc | null {
  return GRANTHA.find((d) => d.slug === slug) ?? null;
}

export function granthaByCategory(): { category: string; docs: GranthaDoc[] }[] {
  return CATEGORIES.map((category) => ({ category, docs: GRANTHA.filter((d) => d.category === category) }));
}

// production notes that should never reach a reader
const META = /site|landing|reel|feed the|analyz|provenance|public-facing|for the (site|landing|reader|analyzing|scene)|register|scene candidate|working asset|moodboard|story-flow/i;

export async function renderGrantha(slug: string): Promise<{ doc: GranthaDoc; html: string } | null> {
  const doc = getGranthaDoc(slug);
  if (!doc) return null;
  const md = fs.readFileSync(path.join(process.cwd(), "docs", doc.file), "utf8");

  const src = md
    .replace(/^\s*#\s+.+\r?\n/, "") // drop the H1 (we render our own title)
    // drop a leading blockquote ONLY if it reads like a production note (keep real quotes/mantras)
    .replace(/^[\s\n]*((?:>[^\n]*\r?\n?)+)/, (m, bq) => (META.test(bq) ? "" : m))
    // drop any inline production-note blockquote block
    .replace(/(?:^>[^\n]*(?:for the site|flagship reel|feed the site|scene candidate|analyzing session)[^\n]*\r?\n(?:>[^\n]*\r?\n)*)/gim, "")
    // drop pure cross-reference lines (2+ bare .md mentions)
    .replace(/^[^\n]*\.md[^\n]*\.md[^\n]*\r?\n/gm, "")
    // rewrite links + asset paths for the web
    .replace(/\]\(\.\.\/public\//g, "](/")
    .replace(/\]\(([A-Za-z0-9-]+)\.md(#[^)]*)?\)/g, (_m, f: string, hash?: string) => {
      const s = slugByFile.get(`${f}.md`);
      return s ? `](/grantha/${s}${hash ?? ""})` : "](#)";
    });

  const html = (await marked.parse(src)) as string;
  return { doc, html };
}
