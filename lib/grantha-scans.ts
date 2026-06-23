import fs from "node:fs";
import path from "node:path";

/* The original 1915 manuscript pages that sit beside each translated chapter
   (the credibility core of "faithful"). Drop scans into public/grantha/scans/
   and they appear automatically — no code change. Conventions:
     • a folder per chapter:  public/grantha/scans/adhyay-<num>/  (one image per
       manuscript page, sorted naturally: p1.webp, p2.webp, …)
     • or a single image:     public/grantha/scans/adhyay-<num>.<webp|jpg|png>
   webp preferred (run scripts/to-webp.mjs). */

const SCANS_DIR = path.join(process.cwd(), "public", "grantha", "scans");
const IMG = /\.(webp|jpe?g|png)$/i;

export function getChapterScans(num: number): string[] {
  try {
    const folder = path.join(SCANS_DIR, `adhyay-${num}`);
    if (fs.existsSync(folder) && fs.statSync(folder).isDirectory()) {
      return fs
        .readdirSync(folder)
        .filter((f) => IMG.test(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((f) => `/grantha/scans/adhyay-${num}/${f}`);
    }
    for (const ext of ["webp", "jpg", "jpeg", "png"]) {
      if (fs.existsSync(path.join(SCANS_DIR, `adhyay-${num}.${ext}`))) {
        return [`/grantha/scans/adhyay-${num}.${ext}`];
      }
    }
  } catch {
    /* no scans dir yet */
  }
  return [];
}
