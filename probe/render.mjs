import * as mupdf from 'mupdf';
import { readFileSync, writeFileSync } from 'fs';

const SRC = '../source/Hinglaj Puran.pdf';
const args = process.argv.slice(2);
const from = parseInt(args[0] ?? '1', 10);   // 1-based inclusive
const to   = parseInt(args[1] ?? '5', 10);   // 1-based inclusive
const dpi  = parseInt(args[2] ?? '120', 10);

const buf = readFileSync(SRC);
const doc = mupdf.Document.openDocument(buf, 'application/pdf');
const n = doc.countPages();
console.log('TOTAL_PAGES=' + n);

const zoom = dpi / 72;
const mtx = mupdf.Matrix.scale(zoom, zoom);
for (let i = from - 1; i <= to - 1 && i < n; i++) {
  const page = doc.loadPage(i);
  const pix = page.toPixmap(mtx, mupdf.ColorSpace.DeviceRGB, false, true);
  const png = pix.asPNG();
  const name = `p${String(i + 1).padStart(3, '0')}.png`;
  writeFileSync(name, png);
  console.log(`WROTE ${name} ${(png.length/1024).toFixed(0)}KB`);
  pix.destroy(); page.destroy();
}
