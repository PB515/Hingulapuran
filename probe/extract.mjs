import { PDFDocument } from 'pdf-lib';
import { readFileSync, writeFileSync } from 'fs';

const SRC = '../source/Hinglaj Puran.pdf';
const args = process.argv.slice(2);
const from = parseInt(args[0] ?? '1', 10);   // 1-based
const to   = parseInt(args[1] ?? '5', 10);   // inclusive, 1-based
const out  = args[2] ?? `slice-${from}-${to}.pdf`;

const bytes = readFileSync(SRC);
const src = await PDFDocument.load(bytes, { ignoreEncryption: true });
const total = src.getPageCount();
console.log('TOTAL_PAGES=' + total);

const dst = await PDFDocument.create();
const idx = [];
for (let i = from - 1; i <= to - 1 && i < total; i++) idx.push(i);
const copied = await dst.copyPages(src, idx);
copied.forEach(p => dst.addPage(p));
const outBytes = await dst.save();
writeFileSync(out, outBytes);
console.log(`WROTE ${out} pages ${from}-${to} (${idx.length}) size=${(outBytes.length/1048576).toFixed(2)}MB`);
