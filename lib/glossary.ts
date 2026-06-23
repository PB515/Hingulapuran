import fs from "node:fs";
import path from "node:path";

/* Parses docs/GLOSSARY.md (## Section → "- **Term / Alias**: definition (ch …)")
   into structured entries for the Glossary / Who's Who page and the search index. */
export type GlossEntry = { term: string; aliases: string[]; def: string; chapters?: string; section: string };

const FILE = path.join(process.cwd(), "docs", "GLOSSARY.md");

function clean(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .trim();
}

export function getGlossary(): { section: string; entries: GlossEntry[] }[] {
  let raw = "";
  try {
    raw = fs.readFileSync(FILE, "utf8");
  } catch {
    return [];
  }
  const out: { section: string; entries: GlossEntry[] }[] = [];
  let cur: { section: string; entries: GlossEntry[] } | null = null;

  for (const line of raw.split(/\r?\n/)) {
    const h = line.match(/^##\s+(.+?)\s*$/);
    if (h) {
      cur = { section: clean(h[1]), entries: [] };
      out.push(cur);
      continue;
    }
    const li = line.match(/^[-*]\s+\*\*(.+?)\*\*\s*(.*)$/);
    if (li && cur) {
      const boldRaw = li[1];
      const rest = li[2];
      const chMatch = rest.match(/\(((?:ch|throughout)[^)]*)\)/i) || boldRaw.match(/\(((?:ch|throughout)[^)]*)\)/i);
      const chapters = chMatch ? clean(chMatch[1]) : undefined;
      let def = rest.replace(/^[:：]\s*/, "");
      def = def.replace(/\*?\(((?:ch|throughout)[^)]*)\)\*?\.?\s*$/i, "").trim();
      def = clean(def);
      const term = clean(boldRaw.replace(/\(((?:ch|throughout)[^)]*)\)/i, ""));
      const aliases = term.split(/\s*[/·]\s*/).map((s) => s.trim()).filter(Boolean);
      cur.entries.push({ term: aliases[0] ?? term, aliases, def, chapters, section: cur.section });
    }
  }
  return out.filter((s) => s.entries.length > 0);
}
