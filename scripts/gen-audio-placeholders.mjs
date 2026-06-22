/* Synthesize PLACEHOLDER audio for the sound system, so the toggle works before
   real recordings exist. These are crude synth stand-ins — replace each with a
   real instrument recording of the same name (see docs/AUDIO-BOOK.md).
   Run:  node scripts/gen-audio-placeholders.mjs   */

import fs from "node:fs";
import path from "node:path";

const SR = 22050;
const OUT = path.join(process.cwd(), "public", "audio");
fs.mkdirSync(OUT, { recursive: true });

function writeWav(name, samples) {
  const n = samples.length;
  const buf = Buffer.alloc(44 + n * 2);
  buf.write("RIFF", 0); buf.writeUInt32LE(36 + n * 2, 4); buf.write("WAVE", 8);
  buf.write("fmt ", 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22);
  buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 2, 28); buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34);
  buf.write("data", 36); buf.writeUInt32LE(n * 2, 40);
  for (let i = 0; i < n; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    buf.writeInt16LE((s * 32767) | 0, 44 + i * 2);
  }
  fs.writeFileSync(path.join(OUT, name), buf);
  console.log("  wrote", name, (buf.length / 1024).toFixed(0) + "KB");
}

const N = (sec) => (SR * sec) | 0;
function edgeFade(out, sec = 0.03) { const f = N(sec); for (let i = 0; i < f; i++) { const g = i / f; out[i] *= g; out[out.length - 1 - i] *= g; } }
function envelope(out, a, r) { const A = N(a), R = N(r); for (let i = 0; i < A; i++) out[i] *= i / A; for (let i = 0; i < R; i++) out[out.length - 1 - i] *= i / R; }
function normalize(out, peak) { let mx = 0; for (const v of out) mx = Math.max(mx, Math.abs(v)); if (mx > 0) for (let i = 0; i < out.length; i++) out[i] = (out[i] / mx) * peak; }

// sustained drone from detuned partials with a slow tremolo (loopable)
function drone(freqs, sec, peak, tremHz = 0.1) {
  const out = new Float32Array(N(sec));
  for (let i = 0; i < out.length; i++) {
    const t = i / SR; let s = 0;
    for (const f of freqs) s += Math.sin(2 * Math.PI * f * t);
    out[i] = (s / freqs.length) * (0.85 + 0.15 * Math.sin(2 * Math.PI * tremHz * t));
  }
  normalize(out, peak); edgeFade(out, 0.04); return out;
}

// single soft sustained note (resolve)
function note(f, sec, peak) {
  const out = new Float32Array(N(sec));
  for (let i = 0; i < out.length; i++) { const t = i / SR; out[i] = Math.sin(2 * Math.PI * f * t) + 0.3 * Math.sin(2 * Math.PI * f * 2 * t); }
  normalize(out, peak); envelope(out, 0.9, 1.6); return out;
}

// temple bell — inharmonic partials, exponential decay
function bell(f, sec, peak) {
  const out = new Float32Array(N(sec));
  const parts = [[1, 1], [2.0, 0.55], [2.76, 0.5], [5.4, 0.22], [8.9, 0.1]];
  for (let i = 0; i < out.length; i++) {
    const t = i / SR; let s = 0;
    for (const [m, a] of parts) s += a * Math.sin(2 * Math.PI * f * m * t) * Math.exp(-t * (1.6 + m * 0.5));
    out[i] = s;
  }
  normalize(out, peak); return out;
}

// conch — low fundamental + breathy filtered noise, swelling
function conch(sec, peak) {
  const out = new Float32Array(N(sec)); const f = 180; let lp = 0;
  for (let i = 0; i < out.length; i++) {
    const t = i / SR;
    const env = Math.min(1, t / 0.5) * Math.exp(-Math.max(0, t - 0.6) * 0.9);
    const tone = Math.sin(2 * Math.PI * f * t) + 0.5 * Math.sin(2 * Math.PI * f * 2 * t);
    const noise = Math.random() * 2 - 1; lp = lp * 0.97 + noise * 0.03;
    out[i] = (tone * 0.7 + lp * 0.7) * env;
  }
  normalize(out, peak); return out;
}

// drum loop — low thump + slap per beat
function drumLoop(sec, bpm, peak, escalate = false) {
  const out = new Float32Array(N(sec)); const beat = 60 / bpm;
  for (let t = 0; t < sec; t += beat) {
    const start = (t * SR) | 0;
    const p = escalate ? 0.5 + 0.5 * (t / sec) : 1;
    const L = N(0.25);
    for (let i = 0; i < L && start + i < out.length; i++) {
      const tt = i / SR;
      const thump = Math.sin(2 * Math.PI * 90 * tt) * Math.exp(-tt * 16);
      const slap = (Math.random() * 2 - 1) * Math.exp(-tt * 42);
      out[start + i] += (thump * 0.85 + slap * 0.4) * p;
    }
  }
  normalize(out, peak); edgeFade(out, 0.02); return out;
}

// sarangi — a slow vibrato melodic phrase (placeholder)
function sarangi(sec, peak) {
  const out = new Float32Array(N(sec));
  const phrase = [220, 246.94, 261.63, 246.94, 220, 196, 220];
  let phase = 0;
  for (let i = 0; i < out.length; i++) {
    const t = i / SR;
    const idx = Math.min(phrase.length - 1, Math.floor(t / (sec / phrase.length)));
    const f = phrase[idx] * (1 + 0.012 * Math.sin(2 * Math.PI * 5.5 * t));
    phase += (2 * Math.PI * f) / SR;
    out[i] = Math.sin(phase) + 0.3 * Math.sin(2 * phase);
  }
  normalize(out, peak); envelope(out, 0.4, 0.6); edgeFade(out, 0.05); return out;
}

// wordless female hum (aakaar) — fundamental with formant-weighted harmonics
function aakaar(sec, peak) {
  const out = new Float32Array(N(sec)); const f0 = 261.63; const formants = [700, 1220, 2600]; let phase = 0;
  for (let i = 0; i < out.length; i++) {
    const t = i / SR;
    const f = f0 * (1 + 0.01 * Math.sin(2 * Math.PI * 5 * t));
    phase += (2 * Math.PI * f) / SR;
    let s = 0;
    for (let h = 1; h <= 12; h++) {
      const fh = f * h; let amp = 1 / h;
      for (const F of formants) amp *= 1 + Math.exp(-Math.pow((fh - F) / 140, 2));
      s += Math.sin(h * phase) * amp;
    }
    out[i] = s;
  }
  normalize(out, peak); envelope(out, 0.5, 0.9); return out;
}

// ghungroo tick + cloth rustle (UI micros)
function tick(peak) {
  const out = new Float32Array(N(0.35));
  for (let i = 0; i < out.length; i++) { const t = i / SR; out[i] = (Math.sin(2 * Math.PI * 2400 * t) + Math.sin(2 * Math.PI * 3300 * t)) * Math.exp(-t * 20) + (Math.random() * 2 - 1) * Math.exp(-t * 50) * 0.4; }
  normalize(out, peak); return out;
}
function rustle(peak) {
  const out = new Float32Array(N(0.4)); let lp = 0;
  for (let i = 0; i < out.length; i++) { const t = i / SR; const nz = Math.random() * 2 - 1; lp = lp * 0.6 + nz * 0.4; out[i] = lp * Math.exp(-Math.pow((t - 0.15) / 0.12, 2)); }
  normalize(out, peak); return out;
}

console.log("Generating placeholder audio →", OUT);
writeWav("drone-bed.wav", drone([146.83, 147.4, 220, 293.66], 16, 0.6, 0.08));   // tanpura Sa/Pa
writeWav("drone-crystal.wav", drone([587.33, 880, 1174.66], 14, 0.55, 0.16));     // high crown drone
writeWav("resolve-note.wav", note(146.83, 7, 0.6));                                // single Sa
writeWav("sarangi-lament.wav", sarangi(10, 0.6));                                  // mournful phrase
writeWav("pakhawaj-build.wav", drumLoop(6, 100, 0.7, true));                       // escalating
writeWav("nagara-veer.wav", drumLoop(4, 84, 0.65, false));                         // steady war-drum
writeWav("vocal-aakaar.wav", aakaar(6, 0.55));                                     // Devi hum
writeWav("bell-ghanta.wav", bell(320, 3.6, 0.7));                                  // temple bell
writeWav("conch-shankh.wav", conch(2.6, 0.7));                                     // conch
writeWav("ghungroo-tick.wav", tick(0.5));                                          // UI micro
writeWav("cloth-rustle.wav", rustle(0.5));                                         // UI micro
console.log("Done. (Placeholders — replace with real recordings, same names.)");
