/* cutout.mjs — turn white-background SUBJECT/NEAR layers into transparent cut-outs.
   Generated art comes on a plain white bg (see SCENE-PROMPTS layer rules); the
   reel needs those layers transparent so they sit over the FAR layer.

   Method: flood-fill from the image border, removing only white that is CONNECTED
   to the edge. Interior whites/creams inside the figure are never touched (they're
   not reachable from the border), so faces, jewellery and cream linework survive.
   The frontier is feathered (3x3) so edges are soft, not jagged. FAR layers are
   left alone. Run: node scripts/cutout.mjs   (then re-run to-webp.mjs)            */
import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const T = 232; // a pixel is "background white" when r,g,b are all >= T (cream's blue ~230 survives)

async function cutout(p) {
  const { data, info } = await sharp(p).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: c } = info;
  const isWhite = (i) => data[i] >= T && data[i + 1] >= T && data[i + 2] >= T;

  // 1) flood-fill background from every border pixel
  const bg = new Uint8Array(w * h); // 1 = background
  const stack = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const n = y * w + x;
    if (bg[n]) return;
    if (!isWhite(n * c)) return;
    bg[n] = 1;
    stack.push(n);
  };
  for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1); }
  for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }
  while (stack.length) {
    const n = stack.pop();
    const x = n % w, y = (n - x) / w;
    push(x + 1, y); push(x - 1, y); push(x, y + 1); push(x, y - 1);
  }

  // 2) write alpha: background = 0; foreground edges feathered by 3x3 coverage
  let removed = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const n = y * w + x;
      const a = n * c + 3;
      if (bg[n]) { data[a] = 0; removed++; continue; }
      let fg = 0, tot = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const xx = x + dx, yy = y + dy;
        if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue;
        tot++; if (!bg[yy * w + xx]) fg++;
      }
      data[a] = Math.round((255 * fg) / tot);
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: c } }).png().toFile(p);
  return ((removed / (w * h)) * 100).toFixed(1);
}

async function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { await walk(p); continue; }
    // every layer EXCEPT the opaque -far backdrop is a white-bg cut-out
    if (/\.png$/i.test(name) && !/-far\.png$/i.test(name)) {
      const pct = await cutout(p);
      console.log(`cut ${pct}% bg  ${p}`);
    }
  }
}

await walk("public/art/stories");
console.log("done — now run: node scripts/to-webp.mjs");
