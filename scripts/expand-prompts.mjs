// Rebuild PART B of docs/PROMPT-BOOK.md so every chapter is a SELF-CONTAINED
// single-block prompt (full style baked in, copy-and-go) like ART-PROMPTS.md.
import fs from "node:fs";

const PATH = "docs/PROMPT-BOOK.md";
const PRE =
  "Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin.";
const TAIL =
  "Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.";

const lines = fs.readFileSync(PATH, "utf8").split(/\r?\n/);
const start = lines.findIndex((l) => /^### ch00\b/.test(l));
if (start === -1) throw new Error("ch00 not found");

const head = lines.slice(0, start); // conventions + Part A + Part B intro + first category header
const out = [];

for (let i = start; i < lines.length; i++) {
  const l = lines[i];
  if (/^## /.test(l)) { out.push("", l); continue; } // category header, keep
  const m = l.match(/^### (ch\d{2}) — (.+)$/);
  if (!m) continue;
  const [, id, title] = m;
  let scene = "";
  for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
    const sm = lines[j].match(/^SCENE:\s*(.+)$/);
    if (sm) { scene = sm[1].trim(); break; }
  }
  // drop the redundant trailing "full-frame, opaque, devotional" tag (PRE+TAIL cover it)
  scene = scene.replace(/[;,.]\s*full-frame[^.]*\.?\s*$/i, ".").trim();
  if (!/[.?!]$/.test(scene)) scene += ".";
  out.push(
    "",
    `### \`public/art/chapters/desktop/${id}.png\`  (+ \`mobile/${id}.png\`) · opaque · ${title}`,
    "```",
    `${PRE} SCENE: ${scene} ${TAIL}`,
    "```"
  );
}

fs.writeFileSync(PATH, head.join("\n") + "\n" + out.join("\n") + "\n");
console.log(`Rebuilt ${out.filter((l) => l.startsWith("### ")).length} chapter blocks as self-contained prompts.`);
