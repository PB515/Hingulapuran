import fs from "node:fs";
import path from "node:path";
import { getTranslationChapters } from "./grantha";

/* The STORY track: the whole grantha as chapters you can skim — one image + a
   short paragraph each — for the reader who will not sit through the full text.
   Parsed from docs/HINGLAJ-PURAN.md (every chapter has a summary). Art lights up
   per chapter as it ships; "Read the full chapter" links into the Granth where a
   full translation exists. */

export type StoryChapter = {
  num: number;
  title: string;
  deva?: string;
  summary: string;
  short: string;
  arc: string;
  art: string | null;
  translated: boolean;
};

const INDIC = /[ऀ-ॿ઀-૿]/;

function clean(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/[*_`>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function firstSentences(s: string, max = 260): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastStop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "), cut.lastIndexOf(" · "));
  return (lastStop > 120 ? cut.slice(0, lastStop + 1) : cut.replace(/\s+\S*$/, "")) + " …";
}

function arcOf(num: number): string {
  if (num === 0) return "Invocation";
  if (num <= 45) return "The Goddess and her worship";
  if (num <= 64) return "The slaying of Mahishasura";
  return "The coming of Hingula";
}
export const STORY_ARCS = [
  "Invocation",
  "The Goddess and her worship",
  "The slaying of Mahishasura",
  "The coming of Hingula",
];

function artFor(num: number): string | null {
  const pad = String(num).padStart(2, "0");
  for (const ext of ["webp", "png", "jpg"]) {
    const rel = `art/chapters/desktop/ch${pad}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return `/${rel}`;
  }
  return null;
}

let cache: StoryChapter[] | null = null;

export async function getStoryChapters(): Promise<StoryChapter[]> {
  if (cache) return cache;
  const md = fs.readFileSync(path.join(process.cwd(), "docs", "HINGLAJ-PURAN.md"), "utf8");
  const lines = md.split(/\r?\n/);
  const translated = new Set((await getTranslationChapters()).map((c) => c.num));

  type Raw = { nums: number[]; title: string; deva?: string; body: string[] };
  const raws: Raw[] = [];
  let cur: Raw | null = null;

  for (const line of lines) {
    const mang = line.match(/^###\s+Mangalacharan\b(.*)$/);
    const ch = line.match(/^###\s+Ch\s+(\d+)(?:[–-](\d+))?\s+—\s+(.+)$/);
    if (mang || ch) {
      if (cur) raws.push(cur);
      if (mang) {
        const deva = mang[1].match(/\(([^()]*[ऀ-ॿ઀-૿][^()]*)\)/)?.[1]?.trim();
        cur = { nums: [0], title: "Mangalacharan", deva, body: [] };
      } else {
        const a = parseInt(ch![1], 10);
        const b = ch![2] ? parseInt(ch![2], 10) : a;
        const nums: number[] = [];
        for (let n = a; n <= b; n++) nums.push(n);
        let rest = ch![3];
        const devaM = rest.match(/\(([^()]*[ऀ-ॿ઀-૿][^()]*)\)/);
        const deva = devaM?.[1]?.trim();
        if (devaM) rest = rest.replace(devaM[0], " ");
        const title = rest.split(/\s+—\s+/)[0].replace(/\s+/g, " ").trim();
        cur = { nums, title, deva, body: [] };
      }
      continue;
    }
    if (cur) {
      if (/^(##\s|###\s|---\s*$)/.test(line)) {
        raws.push(cur);
        cur = null;
        continue;
      }
      cur.body.push(line);
    }
  }
  if (cur) raws.push(cur);

  const out: StoryChapter[] = [];
  for (const r of raws) {
    // summary = body up to the **Scenes:** line (drop flags / notes)
    const summaryLines: string[] = [];
    for (const l of r.body) {
      if (/^\s*\*\*Scenes:?\*\*/i.test(l) || /^\s*>\s*\*\*(Flag|Note|Frame|2nd)/i.test(l)) break;
      summaryLines.push(l);
    }
    const summary = clean(summaryLines.join(" "));
    if (!summary) continue;
    for (const num of r.nums) {
      out.push({
        num,
        title: r.title,
        deva: r.deva,
        summary,
        short: firstSentences(summary),
        arc: arcOf(num),
        art: artFor(num),
        translated: translated.has(num),
      });
    }
  }
  out.sort((a, b) => a.num - b.num);
  cache = out;
  return out;
}

export async function getStoryByArc(): Promise<{ arc: string; chapters: StoryChapter[] }[]> {
  const all = await getStoryChapters();
  return STORY_ARCS.map((arc) => ({ arc, chapters: all.filter((c) => c.arc === arc) })).filter((g) => g.chapters.length);
}

export async function getStoryChapter(num: number) {
  const all = await getStoryChapters();
  const i = all.findIndex((c) => c.num === num);
  if (i === -1) return null;
  return { chapter: all[i], prev: all[i - 1] ?? null, next: all[i + 1] ?? null };
}
