# Hingul story: layered scroll art (v3, copy-paste prompts)

The Hingul section rebuilt as a **pothi (scroll) that unrolls sideways**: two rotating scroll-rods left and right, a tiling border top and bottom, and **7 scenes** that pan past. Each scene = **two layers** that parallax for a 2.5D / 3D feel: a **background** (opaque, no border) and a **figure** layer (on white, cut out, drifts above the bg). The arc is the faithful grantha account (ch 65–66).

Each image below is **one complete prompt in a code block** (full style baked in, copy the block, paste, generate). Above each: its exact **save filename**, **size**, **background**, and **"Used as."**

**Rules:**
- **Fill the frame.** Backgrounds fill the whole 16:9 frame, no decorative border (the frame is overlaid in code). Figures are drawn large on white and we scale/position/parallax them in code.
- **White background** for anything transparent, then cut out with a subject remover (remove.bg / Photopea), or run `node scripts/cutout.mjs`. Then `node scripts/to-webp.mjs`.
- Keep one approved background as a **style reference** (Midjourney `--sref`) so all 16 stay on-model.

### Negative prompt (set once, reuse for all)
```
no photorealism, no 3d render, no soft pastel, no cute, no chibi, no disney style, no modern flat vector, no corporate illustration, no gradients, no glow, no neon, no blur, no embedded text, no letters, no signature, no watermark, no extra fingers, no melted faces
```

### Save-path manifest (all in `public/art/stories/hingul/scroll/`)
| Save as | px | bg | Used as |
|---|---|---|---|
| `frame-border.png` | 2400×200 | transparent (white) | tiling border band, top + flipped bottom of the pothi frame |
| `frame-rod.png` | 360×2160 | transparent (white) | vertical scroll-rod; left + mirrored right; rotates on scroll |
| `s1-bg.png` | 1920×1080 | opaque | scene 1 background |
| `s1-fig.png` | 1600×1080 | transparent (white) | scene 1 figures (above the bg) |
| `s2-bg.png` | 1920×1080 | opaque | scene 2 background |
| `s2-fig.png` | 1600×1080 | transparent (white) | scene 2 figures |
| `s3-bg.png` | 1920×1080 | opaque | scene 3 background |
| `s3-fig.png` | 1600×1080 | transparent (white) | scene 3 figures |
| `s4-bg.png` | 1920×1080 | opaque | scene 4 background |
| `s4-fig.png` | 1600×1080 | transparent (white) | scene 4 figures |
| `s5-bg.png` | 1920×1080 | opaque | scene 5 background |
| `s5-fig.png` | 1600×1080 | transparent (white) | scene 5 figures |
| `s6-bg.png` | 1920×1080 | opaque | scene 6 background |
| `s6-fig.png` | 1600×1080 | transparent (white) | scene 6 figures |
| `s7-bg.png` | 1920×1080 | opaque | scene 7 background |
| `s7-fig.png` | 1600×1080 | transparent (white) | scene 7 figures |

---

# THE POTHI FRAME (generate once, reused)

### `public/art/stories/hingul/scroll/frame-border.png` · 2400×200 · transparent (white bg, tileable)
**Used as:** the border band repeated along the top, and flipped along the bottom, of the scroll.
```
Sacred Mata-ni-Pachedi temple-cloth style, hand-drawn kalam reed-pen black linework, flat, no realism, no 3D, no shadows, no gradients. Strict limited palette only: kalam-black #1A1110, antique gold #C9A227, deep oxblood maroon #3E0A1A, warm cream #E7D7B8. Aged cotton texture. A horizontal repeating block-print border band of marigold florets, paisley, lotus buds and tiny brass oil-lamps, seamless so it tiles left to right with no visible seam, no figures, filling the full width of the strip. Plain solid white background only above and below the band, no shadow. Very wide thin strip 12:1.
```

### `public/art/stories/hingul/scroll/frame-rod.png` · 360×2160 · transparent (white bg)
**Used as:** the scroll-rod down the left edge (mirrored for the right); slowly rotates as you scroll.
```
Sacred Mata-ni-Pachedi temple-cloth style, hand-drawn kalam reed-pen black linework, flat, no realism, no 3D, no shadows, no gradients. Strict limited palette only: antique gold #C9A227, kalam-black #1A1110, deep oxblood maroon #3E0A1A, warm cream #E7D7B8. Aged cotton texture. A single ornate vertical scroll-rod — the turned wooden-and-brass roller a manuscript winds around — a straight cylindrical shaft running the full height with a decorative round lotus-knob finial at the very top and an identical one at the very bottom, fine gold banding on the shaft, symmetrical. The rod fills the height of the tall narrow frame, centred. Plain solid white background only on both sides, no scenery, no shadow. Tall narrow 1:6.
```

---

# THE 7 SCENES (Hingul, grantha ch 65–66)
Each scene: a **bg** (opaque, fills the frame, no border) and a **fig** (the figures large on white, cut out).

## Scene 1: हिंगुल और सिंदुर · Hingul & Sindur conquer the gods

### `public/art/stories/hingul/scroll/s1-bg.png` · 1920×1080 · opaque
**Used as:** scene 1 background (the heavens falling).
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. BACKGROUND ONLY, fills the entire wide frame, no border, no foreground figures: the celestial city of the gods falling into shadow, gold-edged cloud palaces, domes and banners overrun, a dark turbulent sky with kalam swirls. Deep and ominous. Wide landscape 16:9.
```

### `public/art/stories/hingul/scroll/s1-fig.png` · 1600×1080 · transparent (white bg)
**Used as:** scene 1 figures, drifting above the background.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. FIGURES ONLY, large and centred, filling most of the frame: two powerful horned rakshasa brothers, Hingul and Sindur, armed and triumphant mid-stride, a few small devtas recoiling and fleeing at their feet. Frontal-dynamic, fierce, dignified. Isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```

## Scene 2: गणपति का वध · Parvati's son slays Sindur

### `public/art/stories/hingul/scroll/s2-bg.png` · 1920×1080 · opaque
**Used as:** scene 2 background (the battlefield).
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. BACKGROUND ONLY, fills the entire wide frame, no border, no foreground figures: a battlefield under a brooding deep-maroon sky, distant broken banners, low hills and scattered spears. Grim and deep. Wide landscape 16:9.
```

### `public/art/stories/hingul/scroll/s2-fig.png` · 1600×1080 · transparent (white bg)
**Used as:** scene 2 figures.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. FIGURES ONLY, large and centred, filling most of the frame: the radiant boy Ganapati, brought forth from Parvati's own body, armed with many weapons, striking down the demon Sindurasura who falls before him. Frontal, righteous, dignified. Isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```

## Scene 3: हिंगुल की तपस्या · Hingul's thousand-year penance on Meru

### `public/art/stories/hingul/scroll/s3-bg.png` · 1920×1080 · opaque
**Used as:** scene 3 background (Mount Meru).
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. BACKGROUND ONLY, fills the entire wide frame, no border, no foreground figures: the towering golden peak of Mount Meru against a dusk sky, terraced rock, a stylised flowering tree to one side, distant kalam clouds. Austere and deep. Wide landscape 16:9.
```

### `public/art/stories/hingul/scroll/s3-fig.png` · 1600×1080 · transparent (white bg)
**Used as:** scene 3 figure.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. FIGURE ONLY, large and centred, filling most of the frame height: the mighty demon Hingul in fierce penance, standing rigid on a single toe, both arms raised to the heavens, eyes shut, thin kalam heat-lines radiating from his body, matted hair and beads. Frontal, imposing, dignified. Isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```

## Scene 4: ब्रह्मा का वरदान · Brahma grants the boon

### `public/art/stories/hingul/scroll/s4-bg.png` · 1920×1080 · opaque
**Used as:** scene 4 background (the gold mandala at Meru's summit).
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. BACKGROUND ONLY, fills the entire wide frame, no border, no foreground figures: the summit of Meru bathed in a great gold mandala of light, soft kalam clouds, a serene radiant sky. Warm and sacred. Wide landscape 16:9.
```

### `public/art/stories/hingul/scroll/s4-fig.png` · 1600×1080 · transparent (white bg)
**Used as:** scene 4 figures.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. FIGURES ONLY, large and centred, filling most of the frame: four-faced Brahma seated on his lotus, one hand raised granting a boon and sprinkling water from his kamandalu; the demon Hingul kneeling with bowed head and folded hands before him. Frontal, hieratic, dignified. Isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```

## Scene 5: स्वर्ग पर विजय · Hingul seizes Swarga

### `public/art/stories/hingul/scroll/s5-bg.png` · 1920×1080 · opaque
**Used as:** scene 5 background (the taken heavens).
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. BACKGROUND ONLY, fills the entire wide frame, no border, no foreground figures: the heavens taken, domed celestial palaces and emptied thrones under a dark sky shot with gold, fallen banners. Oppressive and grand. Wide landscape 16:9.
```

### `public/art/stories/hingul/scroll/s5-fig.png` · 1600×1080 · transparent (white bg)
**Used as:** scene 5 figures.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. FIGURES ONLY, large and centred, filling most of the frame: the empowered demon Hingul enthroned in triumph over Swarga, multi-armed and wielding steel weapons, a few gods fleeing small at the edges. Frontal, fierce, dignified. Isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```

## Scene 6: मोहिनी रूप · the Goddess's enchanting form lures him

### `public/art/stories/hingul/scroll/s6-bg.png` · 1920×1080 · opaque
**Used as:** scene 6 background (the Sindhu shore).
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. BACKGROUND ONLY, fills the entire wide frame, no border, no foreground figures: the Sindhu shore — pale desert dunes giving way to the dark Sindhu ocean in kalam waves, a cave-mouth in a cliff to one side, a wide quiet sky. Calm and vast. Wide landscape 16:9.
```

### `public/art/stories/hingul/scroll/s6-fig.png` · 1600×1080 · transparent (white bg)
**Used as:** scene 6 figures.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. FIGURES ONLY, large and centred, filling most of the frame: the supreme Goddess in an enchanting, radiant mohini form leading the way with grace, the lust-struck demon Hingul following close behind her toward the sea. Frontal, graceful yet charged, dignified. Isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```

## Scene 7: हिंगुला देवी · the dissolution, and her name

### `public/art/stories/hingul/scroll/s7-bg.png` · 1920×1080 · opaque
**Used as:** scene 7 background (the cave shrine by the sea).
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. BACKGROUND ONLY, fills the entire wide frame, no border, no foreground figures: a glowing cave shrine by the Sindhu sea, warm gold radiance filling the rock niche, a sindoor-smeared sacred stone and a small eternal flame. Warm, sacred, luminous. Wide landscape 16:9.
```

### `public/art/stories/hingul/scroll/s7-fig.png` · 1600×1080 · transparent (white bg)
**Used as:** scene 7 figures (the dissolution).
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. FIGURES ONLY, large and centred, filling most of the frame: the supreme Goddess radiant and serene, four-armed with gold halo and crown, and the demon Hingul dissolving into her body as he merges crying out, his black silhouette breaking into gold light at its edges. Frontal, hieratic, devotional. Isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```

---

## Tally
| Set | Files |
|---|---|
| Frame (border + rod) | 2 |
| Scene backgrounds (s1–s7) | 7 |
| Scene figures (s1–s7) | 7 |
| **Total** | **16** |

The engine reads this set; missing pieces show a calm placeholder until they land.
