# Hingul story — scroll art (v3, copy-paste prompts)

The Hingul section is a **pothi (manuscript scroll)**: an ornate border runs top and bottom, scroll-rods stand left and right, and the **7 scenes slide past one at a time** in a wide cinematic window. Each scene is **one complete merged painting** — figure(s) and background together, no separate layers — sized to the frame so nothing is cropped. The arc is faithful to the grantha (ch 65–66).

Each image below is **one complete prompt in a code block** (full style baked in — copy, paste, generate). Above each: its **save filename**, **size**, **background**, and **"Used as."**

**Rules:**
- **One image per scene**, a full 2:1 painting that fills the frame edge to edge. **No decorative border in the art** — the ornate border and rods are overlaid by the site. So compose the whole scene to the very edges.
- **Opaque** (no transparency). Bright, readable figures (this is the hero art).
- After saving: `node scripts/to-webp.mjs`.
- Keep one approved scene as a **style reference** so all 7 stay on-model.

### Negative prompt (set once, reuse for all)
```
no photorealism, no 3d render, no soft pastel, no cute, no chibi, no disney style, no modern flat vector, no corporate illustration, no gradients, no glow, no neon, no blur, no embedded text, no letters, no signature, no watermark, no extra fingers, no melted faces, no border, no frame
```

### Save-path manifest (all in `public/art/stories/hingul/scroll/`)
| Save as | px | bg | Used as |
|---|---|---|---|
| `frame-border.png` | 2400×200 | transparent (white) | tiling border band, top + flipped bottom (already generated — regenerate only to change it) |
| `frame-rod.png` | 360×2160 | transparent (white) | the scroll-rod, left + mirrored right (already generated) |
| `s1.png` | 1600×800 | opaque | scene 1 — Hingul & Sindur conquer the gods |
| `s2.png` | 1600×800 | opaque | scene 2 — Parvati's son slays Sindur |
| `s3.png` | 1600×800 | opaque | scene 3 — Hingul's penance on Meru |
| `s4.png` | 1600×800 | opaque | scene 4 — Brahma grants the boon |
| `s5.png` | 1600×800 | opaque | scene 5 — Hingul seizes Swarga |
| `s6.png` | 1600×800 | opaque | scene 6 — the enchanting form lures him |
| `s7.png` | 1600×800 | opaque | scene 7 — the dissolution, and her name |

---

# THE POTHI FRAME (already generated — included for reference)

### `public/art/stories/hingul/scroll/frame-border.png` · 2400×200 · transparent (white bg, tileable)
```
Sacred Mata-ni-Pachedi temple-cloth style, hand-drawn kalam reed-pen black linework, flat, no realism, no 3D, no shadows, no gradients. Strict limited palette only: kalam-black #1A1110, antique gold #C9A227, deep oxblood maroon #3E0A1A, warm cream #E7D7B8. Aged cotton texture. A horizontal repeating block-print border band of marigold florets, paisley, lotus buds and tiny brass oil-lamps, seamless so it tiles left to right with no visible seam, no figures, filling the full width of the strip. Plain solid white background only above and below the band, no shadow. Very wide thin strip 12:1.
```

### `public/art/stories/hingul/scroll/frame-rod.png` · 360×2160 · transparent (white bg)
```
Sacred Mata-ni-Pachedi temple-cloth style, hand-drawn kalam reed-pen black linework, flat, no realism, no 3D, no shadows, no gradients. Strict limited palette only: antique gold #C9A227, kalam-black #1A1110, deep oxblood maroon #3E0A1A, warm cream #E7D7B8. Aged cotton texture. A single ornate vertical scroll-rod — the turned wooden-and-brass roller a manuscript winds around — a straight cylindrical shaft running the full height with a decorative round lotus-knob finial at the very top and an identical one at the very bottom, fine gold banding on the shaft, symmetrical. The rod fills the height of the tall narrow frame, centred. Plain solid white background only on both sides, no scenery, no shadow. Tall narrow 1:6.
```

---

# THE 7 SCENES (Hingul, grantha ch 65–66)
Each is one full 2:1 painting, figure(s) + setting together, no border, edge to edge.

### `public/art/stories/hingul/scroll/s1.png` · 1600×800 · opaque
**Scene 1 — हिंगुल और सिंदुर · Hingul & Sindur conquer the gods**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. One complete scene filling the whole wide frame, edge to edge, NO border: two powerful horned rakshasa brothers, Hingul and Sindur, armed and triumphant mid-stride at the centre, while the celestial city of the gods falls into shadow behind them — gold-edged cloud palaces and banners overrun, the devtas small and fleeing at their feet, a dark turbulent sky in kalam swirls. Fierce, dynamic, dignified. Wide cinematic 2:1.
```

### `public/art/stories/hingul/scroll/s2.png` · 1600×800 · opaque
**Scene 2 — गणपति का वध · Parvati's son slays Sindur**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. One complete scene filling the whole wide frame, edge to edge, NO border: the radiant boy Ganapati, brought forth from Parvati's own body, armed with many weapons, striking down the demon Sindurasura who falls before him; a battlefield under a brooding deep-maroon sky, distant broken banners and low hills. Frontal, righteous, dignified. Wide cinematic 2:1.
```

### `public/art/stories/hingul/scroll/s3.png` · 1600×800 · opaque
**Scene 3 — हिंगुल की तपस्या · The thousand-year penance on Meru**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. One complete scene filling the whole wide frame, edge to edge, NO border: the mighty demon Hingul in fierce penance at the centre, standing rigid on a single toe, both arms raised to the heavens, eyes shut, thin kalam heat-lines radiating from his body; the towering golden peak of Mount Meru behind against a dusk sky, terraced rock and a stylised flowering tree. Imposing, austere, dignified. Wide cinematic 2:1.
```

### `public/art/stories/hingul/scroll/s4.png` · 1600×800 · opaque
**Scene 4 — ब्रह्मा का वरदान · Brahma grants the boon**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. One complete scene filling the whole wide frame, edge to edge, NO border: four-faced Brahma on his lotus, one hand raised granting a boon and sprinkling water from his kamandalu, the demon Hingul kneeling with bowed head and folded hands before him; the summit of Meru bathed in a great gold mandala of light, soft kalam clouds. Hieratic, sacred, warm. Wide cinematic 2:1.
```

### `public/art/stories/hingul/scroll/s5.png` · 1600×800 · opaque
**Scene 5 — स्वर्ग पर विजय · Hingul seizes Swarga**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. One complete scene filling the whole wide frame, edge to edge, NO border: the empowered demon Hingul enthroned in triumph over Swarga at the centre, multi-armed and wielding steel weapons, the gods fleeing small at the edges; domed celestial palaces and emptied thrones under a dark sky shot with gold, fallen banners. Fierce, grand, dignified. Wide cinematic 2:1.
```

### `public/art/stories/hingul/scroll/s6.png` · 1600×800 · opaque
**Scene 6 — मोहिनी रूप · The enchanting form lures him**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. One complete scene filling the whole wide frame, edge to edge, NO border: the supreme Goddess in an enchanting, radiant mohini form leading the way with grace, the lust-struck demon Hingul following close behind her toward the sea; the Sindhu shore — pale desert dunes giving way to the dark Sindhu ocean in kalam waves, a cave-mouth in a cliff. Graceful yet charged, dignified. Wide cinematic 2:1.
```

### `public/art/stories/hingul/scroll/s7.png` · 1600×800 · opaque
**Scene 7 — हिंगुला देवी · The dissolution, and her name**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. One complete scene filling the whole wide frame, edge to edge, NO border: the supreme Goddess radiant and serene, four-armed with gold crown and halo, and the demon Hingul dissolving into her body as he merges crying out, his black silhouette breaking into gold light at its edges; a glowing cave shrine by the Sindhu sea, warm gold radiance, a sindoor-smeared sacred stone and a small eternal flame. Hieratic, devotional, luminous. Wide cinematic 2:1.
```

---

## Tally
| Set | Files |
|---|---|
| Frame (border + rod) | 2 (already generated) |
| Scenes (s1–s7) | 7 (regenerate at 1600×800) |
| **Total new** | **7** |
