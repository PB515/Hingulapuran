# Hingulapuran — AI image prompts (v3)

Each image = one **complete prompt in a code block** (full style baked in — copy the block, paste, go). Above each: its **exact save filename**, size, background, and **"Used as"** (where it sits on the site, so you compose it right).

**The v3 rules (what changed):**
- **Fill the frame.** Each asset is generated **full-bleed at its own natural shape** — never an element floating in half an empty canvas. We position + scale + parallax them in code. Bigger element = more resolution = sharper.
- **White background** for anything that must be transparent. Then cut it out with a **subject-based remover** (remove.bg, Photoshop "Remove Background", Photopea) — these detect the subject, so the cream/white *inside* the art is kept. (Don't colour-key.)
- **Generate `door/01-backdrop` first**, approve it, then use it as a **style reference** (Midjourney `--sref <url>` or attach as image prompt) for every other image so all 100 stay on-model.
- Tool tags are Midjourney-style; for Flux/Imagen just use the aspect ratio.

### Negative prompt (set once, reuse for all)
```
no photorealism, no 3d render, no soft pastel, no cute, no chibi, no disney style, no modern flat vector, no corporate illustration, no gradients, no glow, no neon, no blur, no embedded text, no letters, no signature, no watermark, no extra fingers, no melted faces
```

### Save-path manifest
| Save as | px | bg | Used as |
|---|---|---|---|
| `public/art/door/01-backdrop.png` | 1600×2400 | opaque | the cave-shrine seen when the doors open |
| `public/art/door/02-leaf.png` | 800×1600 | transparent (white) | left door leaf; mirrored in code for the right |
| `public/art/door/03-jyot.png` | 1000×1600 | transparent (white) | the flame revealed behind the doors (reused in hero) |
| `public/art/door/04-foreground-toran.png` | 1600×520 | transparent (white) | garland strip pinned across the top, closest layer |
| `public/art/legend/a-tapasya.png` | 2400×900 | opaque | scroll panel 1 |
| `public/art/legend/b-conquest.png` | 2400×900 | opaque | scroll panel 2 |
| `public/art/legend/c-vow.png` | 2400×900 | opaque | scroll panel 3 |
| `public/art/legend/d-light.png` | 2400×900 | opaque | scroll panel 4 |
| `public/art/legend/e-vardan.png` | 2400×900 | opaque | scroll panel 5 |
| `public/art/parshuram/full.png` | 1600×2000 | opaque | the climax hero image |
| `public/art/motifs/jyot-emblem.png` | 1024×1024 | transparent (white) | small logo / section emblem |
| `public/art/motifs/border-strip.png` | 2400×200 | transparent (white) | repeating CSS border |
| `public/art/motifs/cloth-texture.png` | 2048×2048 | opaque | tiling background texture |

*(Old door 02–06 names are retired — the warrior leaf you already made = `02-leaf`, the jyot = `03-jyot`, the cave/torana piece = `01-backdrop`.)*

---

# DOOR / TORANA — the intro gateway (4 assets)
Two leaves slide apart to reveal the backdrop; the flame grows; the toran drifts.

### `public/art/door/01-backdrop.png` · 1600×2400 · opaque · GENERATE FIRST
**Used as:** full-screen layer revealed when the doors open — the cave sanctum with the goddess and the flame.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic shrine-cloth look, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227 for halos and lamps, cold steel-grey #6E757C for weapons. Aged hand-spun cotton texture with uneven natural-dye mottling. Fierce, primal, devotional, old-Saurashtra goddess-cult tone, never sweet, never modern. Scene fills the entire tall frame: a dark rock cave sanctum (garbhagriha) inside an ornate scalloped temple arch, hanging oil lamps on chains, a sindoor-smeared sacred stone glowing in the central niche with a small flame above it, a guardian deity standing in each side niche, two heraldic lions and rows of oil lamps along the base, dense floral block-print border on all four sides, two small sun-faces in the upper corners. Symmetrical, candle-lit, very deep and rich. Vertical 2:3.
```

### `public/art/door/02-leaf.png` · 800×1600 · transparent (white bg) — ONE leaf, mirrored in code
**Used as:** the LEFT door leaf, covering the left half of the screen, sliding left to open. (We flip it for the right.)
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. A single complete carved temple door leaf that FILLS the entire tall narrow frame edge to edge: a frontal dwarpal guardian warrior under a scalloped arch, holding an upright steel khanda sword and a round lion-bossed shield, lotus and oil-lamp motifs, a vertical row of antique-gold dome studs running down ONE long edge (the hinge side), the opposite long edge a plain straight border (the meeting seam). The door leaf occupies the whole frame with no empty margin. Plain solid white background only outside the door silhouette, no scenery, no shadow. Tall portrait 1:2.
```

### `public/art/door/03-jyot.png` · 1000×1600 · transparent (white bg)
**Used as:** the eternal flame revealed between the opening doors; scales up + brightens as they part.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. A single tall ornate brass oil-lamp (akhand diya) with a lotus-petal bowl and a turned stem, one bright gold-and-cream flame with fine radiating gold halo-rays, a sindoor-smeared red sacred stone at its base. The lamp fills the height of the frame, centred. Plain solid white background only, nothing else, no scenery, no shadow. Portrait 5:8.
```

### `public/art/door/04-foreground-toran.png` · 1600×520 · transparent (white bg)
**Used as:** a garland strung across the very top of the screen — the closest layer, drifts most on scroll.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227. Aged cotton texture. A wide hanging festival toran spanning the full width of the frame: a swag of marigold flowers, mango leaves and tiny brass bells, with one ornate hanging brass oil-lamp dropping down at each end. Sits along the top, hanging downward, filling the wide short frame. Plain solid white background only, no shadow. Wide banner 3:1.
```

---

# THE HINGUL LEGEND — horizontal scroll cloth (5 panels, each 2400×900, opaque)
**Used as:** one continuous Mata-ni-Pachedi cloth that scrolls sideways. Keep the maroon ground and the top/bottom border height identical across all five so they butt together seamlessly; left/right edges bleed.

### `public/art/legend/a-tapasya.png` · 2400×900 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. A continuous temple-cloth panel filling the whole wide frame, with a block-print border along the top and bottom edges and the left and right edges bleeding. Scene: the asura Hingul in fierce penance, a powerful horned demon-ascetic seated cross-legged under a stylised flowering tree, eyes closed, radiating thin kalam heat-lines; above him Brahma appears in a lotus-and-gold aura granting a boon. Calm, symmetrical, devotional. Wide landscape 8:3.
```

### `public/art/legend/b-conquest.png` · 2400×900 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. A continuous temple-cloth panel filling the whole wide frame, block-print border top and bottom, edges bleeding. Scene: the empowered demon Hingul, multi-armed and wielding steel weapons, riding a fierce beast and routing the devtas from left to right; Indra and the gods flee in disarray, broken celestial banners, a percussive diagonal battle march. Maximum ferocity. Wide landscape 8:3.
```

### `public/art/legend/c-vow.png` · 2400×900 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. Hinglaj Mata as serene-but-supreme Nani Maa: calm glowing face with a prominent third eye, gold crown, four arms holding a trishula, a straight khadga sword, a lotus, and one open palm in abhaya-varada mudra, seated astride her lion with a gold halo and a small akhand flame at her side, deep oxblood-maroon sari with green-and-gold choli (NOT the naked Tantric form). A continuous temple-cloth panel filling the whole wide frame, block-print border top and bottom, edges bleeding. Scene: the devtas bow low before the seated goddess; she raises her open palm in a solemn vow to end the asura. Frontal, hieratic, gold-accented. Wide landscape 8:3.
```

### `public/art/legend/d-light.png` · 2400×900 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. Hinglaj Mata as serene-but-supreme Nani Maa: four arms (trishula, khadga sword, lotus, abhaya-varada mudra), prominent third eye, gold crown, lion mount, gold halo, oxblood-maroon sari with green-and-gold choli (NOT the naked Tantric form). A continuous temple-cloth panel filling the whole wide frame, block-print border top and bottom, edges bleeding. Scene: the asura lunges toward the radiant goddess, boasting, his arm outstretched, and from her form erupts an unprecedented blinding light, great rays of gold and cream radiating outward and dissolving the demon's black silhouette at the edge of the blaze. The light is the subject; the single most dramatic panel. Wide landscape 8:3.
```

### `public/art/legend/e-vardan.png` · 2400×900 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. Hinglaj Mata as serene-but-supreme Nani Maa: four arms (trishula, khadga sword, lotus, abhaya-varada mudra), prominent third eye, gold crown, lion mount, gold halo, oxblood-maroon sari with green-and-gold choli (NOT the naked Tantric form). A continuous temple-cloth panel filling the whole wide frame, block-print border top and bottom, edges bleeding. Scene: the repentant demon prostrate at the goddess's feet; she grants the boon with her open varada-mudra hand; a sindoor-stone shrine and an eternal flame rise between them; devotees and oil lamps gather; peacocks at the margins. Peaceful, warm, gold-lit. Wide landscape 8:3.
```

---

# PARSHURAM CLIMAX — the sword at the feet (1600×2000, opaque)
**Used as:** the full-bleed hero image of the climax section.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. The scene fills the whole frame. Hinglaj Mata as serene-but-supreme Nani Maa: calm glowing face with a prominent third eye, gold crown, four arms holding a trishula, a straight khadga sword, a lotus, and one open palm in abhaya-varada mudra, seated supreme on her lion with a gold halo and an akhand flame at her right, oxblood-maroon sari with green-and-gold choli (NOT the naked Tantric form). She sits centre and elevated between two carved temple pillars. Lower LEFT: Parshuram, the matted-haired axe-warrior, kneeling with bowed head, laying his sword down at her feet, his parashu axe beside him. Lower RIGHT: two surrendered Kshatriya warriors kneeling with folded hands in anjali, weapons set down. Scattered flower offerings on the floor between them. Dense block-print border on all four sides. The famous sword-at-the-feet scene. Portrait 4:5.
```

---

# MOTIFS · TEXTURES

### `public/art/motifs/jyot-emblem.png` · 1024×1024 · transparent (white bg)
```
Sacred Mata-ni-Pachedi style, hand-drawn kalam black linework, flat, no realism, no 3D, no gradients. Palette only: kalam-black #1A1110, antique gold #C9A227, warm cream #E7D7B8. A single flat brass diya with a flame emblem, gold and black, centred and perfectly symmetrical, filling most of the frame. Plain solid white background only. Square 1:1.
```

### `public/art/motifs/border-strip.png` · 2400×200 · transparent (white bg, tileable)
```
Sacred Mata-ni-Pachedi style, hand-drawn kalam black linework, flat, no realism, no 3D, no gradients. Palette only: kalam-black #1A1110, antique gold #C9A227, deep oxblood maroon #3E0A1A. A horizontal repeating block-print border band of paisley, oil lamps and lotus buds, seamless so it tiles left to right, no figures, filling the full width. Plain solid white background only. Very wide thin strip 12:1.
```

### `public/art/motifs/cloth-texture.png` · 2048×2048 · opaque (tileable)
```
Plain aged hand-spun cotton cloth in deep oxblood maroon #3E0A1A with faint uneven natural-dye mottling and subtle woven texture, no figures, no border, seamless tileable, fills the frame. Flat, no gradients, no 3D. Square 1:1.
```

---

# ════════════════════════ DESKTOP DOOR SET (Option B) ════════════════════════
The current tall `01-backdrop` + `02-leaf` become the **mobile** set. These two wider assets are the **desktop** set — composed for a landscape screen so the guardian fills a half-screen without cropping. I swap them by breakpoint once you save them.

### `public/art/door/desktop-leaf.png` · 1000×1200 · transparent (white bg) — ONE leaf, mirrored in code
**Used as:** the desktop LEFT door leaf (covers half a landscape screen ≈ near-square); mirrored for the right.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. A single complete carved temple door leaf that FILLS the whole near-square frame edge to edge: a large frontal dwarpal guardian warrior — fully visible from crown to feet — under a scalloped arch, holding an upright steel khanda sword and a round lion-bossed shield, lotus and oil-lamp motifs, a vertical row of antique-gold dome studs down ONE long edge (the hinge), the opposite edge a plain straight border (the meeting seam). Composition sized so the WHOLE guardian fits comfortably in a wide-ish panel, no cropping. Plain solid white background only outside the door silhouette, no shadow. Aspect 5:6 (slightly tall).
```

### `public/art/door/desktop-backdrop.png` · 2000×1200 · opaque
**Used as:** the desktop full-screen backdrop revealed when the doors open (landscape composition).
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227 for halos and lamps, cold steel-grey #6E757C. Aged cotton texture. A WIDE landscape scene filling the frame: a dark rock cave sanctum inside an ornate scalloped temple arch, the goddess's face and a sindoor-smeared sacred stone glowing in the central niche with a flame, hanging oil lamps on chains, a guardian deity in a side niche on each flank, a heraldic lion at each lower corner, rows of oil lamps along the base, dense floral block-print border on all four sides, two small sun-faces in the upper corners. Symmetrical, candle-lit, deep and rich, composed for a wide 5:3 landscape frame. Wide landscape 5:3.
```

# ════════════════════════ BATCH 2 ════════════════════════
Same rules: white bg for transparent assets (remove with a subject-based tool), fill the frame, keep `door/01-backdrop` as your style reference.

### Save-path manifest (batch 2)
| Save as | px | bg |
|---|---|---|
| `public/art/brand/logo.png` | 512×512 | transparent (white) |
| `public/art/gallery/01-hinglaj.png` | 1024×1280 | opaque |
| `public/art/gallery/02-durga.png` | 1024×1280 | opaque |
| `public/art/gallery/03-kali.png` | 1024×1280 | opaque |
| `public/art/gallery/04-meldi.png` | 1024×1280 | opaque |
| `public/art/gallery/05-bahuchara.png` | 1024×1280 | opaque |
| `public/art/gallery/06-khodiyar.png` | 1024×1280 | opaque |
| `public/art/scene/hingol-river.png` | 2400×1000 | opaque |
| `public/art/scene/cave-shrine.png` | 2400×1000 | opaque |
| `public/art/scene/yatra-band.png` | 2400×800 | transparent (white) |
| `public/art/map/pin.png` | 256×320 | transparent (white) |

---

### `public/art/brand/logo.png` · 512×512 · transparent (white bg)
**Used as:** site logo + favicon — must read at tiny sizes, so keep it bold and simple.
```
Mata-ni-Pachedi style emblem, hand-drawn kalam black linework, flat, no realism, no gradients. Palette only: kalam-black #1A1110 and antique gold #C9A227. A single bold emblem: a trishula (trident) rising out of an akhand flame, two small khanda swords crossed at the base, enclosed in a thin circular gold ring. Symmetrical, simple, legible at very small sizes, centred and filling the frame. Plain solid white background only.
```

---

## Gallery seed plates — standalone Devi forms (each 1024×1280, opaque)
**Used as:** the curated gallery grid. Each is a self-contained pachedi cloth: a single goddess, frontal and hieratic, gold halo, four-sided block-print border, deep maroon ground.

### `public/art/gallery/01-hinglaj.png` · 1024×1280 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. Four-sided block-print border. A single goddess centred, filling the cloth: Hinglaj Mata as serene-but-supreme Nani Maa — calm glowing face, prominent third eye, gold crown, four arms holding a trishula, a straight khadga sword, a lotus, and an open palm in abhaya-varada mudra, seated astride her lion, gold halo, a small akhand flame at her side, oxblood-maroon sari with green-and-gold choli. Frontal, hieratic, devotional.
```

### `public/art/gallery/02-durga.png` · 1024×1280 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. Four-sided block-print border. A single goddess centred, filling the cloth: Durga slaying Mahishasura — eight-armed, each hand a steel weapon (trishula, sword, bow, conch, discus), riding her lion, the buffalo-demon subdued beneath, gold halo, crown, fierce yet composed. Frontal, hieratic.
```

### `public/art/gallery/03-kali.png` · 1024×1280 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. Four-sided block-print border. A single goddess centred: Mahakali standing, four arms holding a khadga sword and a trishula, a stylised garland, dark-toned skin rendered in kalam-black, gold halo and crown, tongue stylised, fierce and protective but iconographic not gory. Frontal, hieratic.
```

### `public/art/gallery/04-meldi.png` · 1024×1280 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. Four-sided block-print border. A single goddess centred: Meldi Maa, the Gujarati folk goddess, seated on her black goat (her vahana), holding a trishula, gold halo and crown, oxblood sari. Frontal, hieratic, devotional.
```

### `public/art/gallery/05-bahuchara.png` · 1024×1280 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. Four-sided block-print border. A single goddess centred: Bahuchara Mata seated upon her rooster (kukdo, her vahana), holding a trishula and a sword, gold halo and crown. Frontal, hieratic, devotional.
```

### `public/art/gallery/06-khodiyar.png` · 1024×1280 · opaque
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. Four-sided block-print border. A single goddess centred: Khodiyar Maa riding her crocodile (magar, her vahana) across water, holding a sword, gold halo and crown, oxblood sari. Frontal, hieratic, devotional.
```

---

## Section backdrops (wide, opaque)

### `public/art/scene/hingol-river.png` · 2400×1000 · opaque
**Used as:** a wide section background — the landscape of the shrine.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. A wide landscape filling the frame: the Hingol river winding through stylised Makran hills and mud-volcano cones, a small cave shrine set in a cliff, palm trees, birds, a thin block-print border top and bottom. Flat, decorative, calm. Wide landscape 12:5.
```

### `public/art/scene/cave-shrine.png` · 2400×1000 · opaque
**Used as:** a wide section background — the inner sanctum.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. A wide interior filling the frame: the cave sanctum, the sindoor-smeared sacred stone glowing in a central rock niche with a flame above, hanging oil lamps on chains, a heraldic lion on each side, rows of small lamps along the base, a thin block-print border top and bottom. Wide landscape 12:5.
```

---

### `public/art/scene/yatra-band.png` · 2400×800 · transparent (white bg)
**Used as:** a horizontal procession band that can parallax across a section.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged cotton texture. A wide procession of pilgrims walking left to right toward the shrine — men and women carrying offering pots and lamps, triangular flags, a small palanquin, a drummer — all in a single horizontal row along the lower band. Plain solid white background only (no scenery), no shadow. Wide banner 3:1.
```

---

### `public/art/map/pin.png` · 256×320 · transparent (white bg)
**Used as:** the custom temple marker on the map (replaces the CSS dot).
```
Mata-ni-Pachedi style emblem, hand-drawn kalam black linework, flat, no realism, no gradients. Palette only: sindoor red #B5302A, antique gold #C9A227, kalam-black #1A1110. A single downward-pointing map marker shaped like a temple kalash (pot) topped with a tiny flame, sindoor-red body with gold filigree and a black outline, a small point at the bottom. Centred, filling the frame. Plain solid white background only.
```
