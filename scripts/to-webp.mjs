/* Convert every PNG/JPG under public/art to WebP (keeps originals as source).
   Run: npm run art:webp  (or: node scripts/to-webp.mjs)
   Re-run anytime new art lands — it overwrites the matching .webp. */
import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname } from "path";

async function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      await walk(p);
    } else if (/\.(png|jpe?g)$/i.test(name)) {
      const out = p.replace(/\.(png|jpe?g)$/i, ".webp");
      const before = (statSync(p).size / 1024 / 1024).toFixed(2);
      await sharp(p).webp({ quality: 82 }).toFile(out);
      const after = (statSync(out).size / 1024 / 1024).toFixed(2);
      console.log(`${before}MB → ${after}MB  ${out}`);
    }
  }
}

await walk("public/art");
console.log("done.");
