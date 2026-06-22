# Hingulapuran: the art prompt book (bulk ship list)

Every remaining image the site needs, with its **exact filename and folder**, ready to generate in bulk and drop in. Two kinds of art:

- **Part A, flagship reel layers** (the 2.5D scroll reels). 3 layers per scene. Full layered prompts live in `SCENE-PROMPTS.md`; the manifest here is the file checklist.
- **Part B, chapter hero panels.** One opaque full-frame painting per chapter, all 87 + the invocation. Full prompts inline below.

When art lands, I wire it in: hero panels go onto the chapter reader pages and the chapter-index cards; reel layers build the cinematic sections.

---

## Conventions (read once)

**Generate every image twice:** `--ar 16:9` → save to the `desktop/` folder, `--ar 9:16` → save to the `mobile/` folder, same filename.

**Folders & names**
- Reel layers: `public/art/stories/<chapter>/{desktop,mobile}/s<n>-<layer>.png` where `<layer>` is `far`, `subject`, or `near`.
- Chapter hero panels: `public/art/chapters/{desktop,mobile}/ch<NN>.png` (zero-padded: `ch00`…`ch87`).

**Shared style preamble** (for reference only). It is already baked into every Part A prompt (`SCENE-PROMPTS.md`) and into every Part B block below, so **each block is a complete, copy-and-go prompt**:
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict palette only — deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, fills the entire frame, dense floral block-print border, no white margin. SCENE:
```

**Set this NEGATIVE once in your tool:**
```
no photorealism, no 3d render, no soft pastel, no cute, no chibi, no disney, no modern vector, no corporate illustration, no gradients, no glow, no neon, no blur, no embedded text, no letters, no signature, no watermark, no extra fingers, no melted faces
```

**After generating** (in `C:\Users\PC 1\Desktop\hingulapuran`):
- Chapter hero panels are **opaque**: no cut-out needed. Just convert: `node scripts/to-webp.mjs`.
- Reel `subject`/`near` layers must be drawn on **plain solid white** → `node scripts/cutout.mjs` (keys the white out) → `node scripts/to-webp.mjs`. `far` layers are opaque (convert only).

**The tally**
| Set | Files | × devices |
|---|---|---|
| A · Hingul reel (5 scenes × 3) | 15 | 30 |
| A · Parashurama reel (8 scenes × 3) | 24 | 48 |
| B · Chapter hero panels (ch00–ch87) | 88 | 176 |
| **Total remaining** | **127** | **254** |
| *(Fall of Sati reel, already done)* | *13* | *26* |

---

# PART A: the two flagship reels to finish

Full, copy-paste-ready layered prompts for each file below are in **`SCENE-PROMPTS.md`** (Chapter B and Chapter C). This is the file checklist so nothing is missed. Each scene = `s<n>-far` (opaque) + `s<n>-subject` (on white) + `s<n>-near` (on white).

### Chapter B: The Coming of Hingul → `public/art/stories/hingul/{desktop,mobile}/`
- `s1-far` `s1-subject` `s1-near`, The thousand-year penance on Meru
- `s2-far` `s2-subject` `s2-near`, Conquest of the heavens
- `s3-far` `s3-subject` `s3-near`, The vow of the Devi
- `s4-far` `s4-subject` `s4-near`, The unprecedented light
- `s5-far` `s5-subject` `s5-near`, The vardan (Hingula Peeth)

### Chapter C: Parashurama & the Brahmakshatriya → `public/art/stories/parshuram/{desktop,mobile}/`
- `s1-far` `s1-subject` `s1-near`, King Sahastrarjun enthroned
- `s2-far` `s2-subject` `s2-near`, The theft of Kamadhenu
- `s3-far` `s3-subject` `s3-near`, Parashurama slays Sahastrarjun
- `s4-far` `s4-subject` `s4-near`, Jamadagni slain → the vow
- `s5-far` `s5-subject` `s5-near`, The cleansing of the earth
- `s6-far` `s6-subject` `s6-near`, Refuge at Mount Hingula
- `s7-far` `s7-subject` `s7-near`, The twelve-year penance
- `s8-far` `s8-subject` `s8-near`, Hingula manifests (the Brahmakshatriya)

> Chapter A (Fall of Sati) is already arted and live. After B and C art lands, both home sections upgrade from their stand-ins to the full 2.5D reels.

---

# PART B: chapter hero panels (ch00–ch87)

One opaque full-frame painting per chapter, for the chapter's reader page and its index card. **Each block below is a complete prompt: copy the whole block, paste, generate.** Save the 16:9 to `public/art/chapters/desktop/` and the 9:16 to `mobile/`, same filename.

## The invocation & Pratham Pravah (worship + the Devi Mahatmya)


### `public/art/chapters/desktop/ch00.png`  (+ `mobile/ch00.png`) · opaque · Mangalacharan (the invocation)
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: A full-frame devotional invocation plate: the goddess Hinglaj Mata enthroned at center as an aniconic radiant emblem of unbroken divine flame (akhand-jyot), her form embodying Mahalakshmi, flanked by the two Vedic mother-forms Gayatri and Savitri with folded hands. A single eternal oil lamp burns before her lotus-feet, golden radiance filling the cream field, composed as a hieratic opening title vignette of the world's origin. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch01.png`  (+ `mobile/ch01.png`) · opaque · The Rite of Devi-Worship
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: On the heights of Mount Kailasa, the youthful Skanda kneels with folded hands before Mahadeva, who is seated in serene majesty and gestures in teaching. The mountain rises behind them, a lotus blooms at the foreground, and the two divine figures fill the frame in calm hieratic dialogue about the Goddess Ambika. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch02.png`  (+ `mobile/ch02.png`) · opaque · Creation of the World from Mahalakshmi
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The supreme Mahalakshmi stands radiant at center, three-formed, apportioning her powers — handing Gauri to Rudra, Lakshmi to Vishnu, and Saraswati to Brahma, the three great gods arrayed around her. From her body the whole moving-and-unmoving cosmos issues as a golden cosmic egg, filling the full frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch03.png`  (+ `mobile/ch03.png`) · opaque · The Various Forms of the Great Goddess
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The dark, many-armed Mahakali rises in fierce splendour to slay the demons Madhu and Kaitabha, her weapons raised, eyes blazing, against a deep oxblood field. She fills the frame as the protective form the Great Goddess takes in the cosmos's hour of need. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch04.png`  (+ `mobile/ch04.png`) · opaque · The Origin of Goddess Durga
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The Goddess, lion-mounted and many-armed, hurls her flaming chakra to slay the boon-empowered asura Durga, who topples before her with his usurped insignia of the gods falling from his grasp. She dominates the full frame in the decisive instant of victory, taking his name as her own. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch05.png`  (+ `mobile/ch05.png`) · opaque · The Many Names of Shakti
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: A full-frame hieratic array of the named Shakti-forms born of Durga, arranged as a sacred wall of goddesses — each form distinct in posture and emblem, ranked in golden registers across the cream cloth, a luminous nama-mala of the many names of the supreme Shakti. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch06.png`  (+ `mobile/ch06.png`) · opaque · The Rite of Mantra & Nyasa
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: A seated devotee performs nyasa, the syllables of the nine-syllable Chandika mantra and the guardian-goddesses Brahmani and Saraswati set glowing upon his forehead, eyes, throat, heart and arms, with the protective deities of the eight directions ringing him. The central navakshari yantra blazes behind, filling the frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch07.png`  (+ `mobile/ch07.png`) · opaque · The Navratri Vrat Rite
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The sacred Navratri kalasha, crowned with mango-leaves and a coconut, is installed upon the decorated vedi beneath an auspicious star, a priest's hands lowering it with reverence and a lamp burning beside. The consecrated water-pot fills the center of the frame as the heart of the vrat. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch08.png`  (+ `mobile/ch08.png`) · opaque · The Durga-Puja Procedure
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The Kumari-puja: a row of young girl-goddesses, aged two to ten, seated and worshipped as living forms of the Goddess from Tripura to Subhadra, each haloed and honoured with offerings. The line of sacred girls spans the full frame in radiant hieratic order. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch09.png`  (+ `mobile/ch09.png`) · opaque · The Devi Homa Rite
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: A blazing square homa-kunda at center, its flames leaping upward, encircled by the seven Matrika mother-goddesses — Brahmani, Maheshwari, Kaumari, Vaishnavi, Varahi, Aindri and Chamunda — invoked around the fire as ghee and grain are offered. The fire-altar and its ring of mothers fill the frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch10.png`  (+ `mobile/ch10.png`) · opaque · Fruits of the Navratri Vrat
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The image of the Goddess, garlanded and crowned, is borne in procession upon a festal chariot through the village, devotees singing and chanting the Veda alongside, drums and conches sounding. The chariot of the Mother fills the full frame in joyous devotional movement. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch11.png`  (+ `mobile/ch11.png`) · opaque · Ordinance of Nava-Chandi & Shata-Chandi
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The nine Navadurga forms — Nanda, Raktadantika, Shakambhari, Durga, Bhima, Bhramari, Kalika, Shivaduti and Aindri — arrayed in a luminous nine-panel sequence across the cream cloth, each goddess distinct in posture, weapon and vahana, the whole filling the frame as a sacred vrat-array of the nine nights. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch12.png`  (+ `mobile/ch12.png`) · opaque · Ordinance of Sahasra-Chandi
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The great thousandfold rite: rows of brahmins seated in recitation before the Goddess's image while priests offer the supreme dana at center — a pure white horse led forward, gold mohurs and a golden Devi-image presented. The mass offering fills the full frame in solemn grandeur. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch13.png`  (+ `mobile/ch13.png`) · opaque · The Purashcharana Rite
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: A lone devotee seated in deep contemplative japa before the radiant Goddess, a rudraksha mala turning in his hand and a single lamp burning between them in the stillness of the empowering observance. The solitary worshipper and the Mother's glowing presence fill the frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch14.png`  (+ `mobile/ch14.png`) · opaque · The Origin of Hayashri / Hayagriva
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The horse-headed Vishnu-Hayagriva, newly made by the grace of Mahamaya, rises in radiant majesty to slay the asura Hayagriva, his many arms bearing conch, chakra and weapons, the demon falling before him. The horse-faced Lord fills the frame in the moment of triumph. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch15.png`  (+ `mobile/ch15.png`) · opaque · The Origin of Madhu & Kaitabha
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Vishnu reclines in yoga-nidra upon the coils of the great serpent on the cosmic ocean, a lotus rising from his navel bearing the seated Brahma, while the two demons Madhu and Kaitabha loom up from the dark waters to menace the lotus-throned creator. The cosmic waters and sleeping Lord fill the frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch16.png`  (+ `mobile/ch16.png`) · opaque · Brahma's Hymn to Yoganidra
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Brahma, seated upon the navel-lotus with folded hands, sings the great hymn to the radiant goddess Yoganidra-Mahamaya, who rises luminous above the sleeping Vishnu as embodied Dhriti, Smriti, Lakshmi and the all-form of the three worlds. The goddess's blazing presence dominates the full frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch17.png`  (+ `mobile/ch17.png`) · opaque · The Devi as Universal Shakti
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The supreme Devi-Shakti enthroned at the radiant center, the trimurti and the great gods — Indra, Agni, Surya, Varuna — arrayed around her, each visibly animated by streams of her power flowing into them, Shiva inert without her touch. The doctrinal tableau of the one Shakti pervading all fills the frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch18.png`  (+ `mobile/ch18.png`) · opaque · The Slaying of Madhu & Kaitabha
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Vishnu, risen and wrathful upon the cosmic waters, slays the two demons Madhu and Kaitabha across his mighty thighs, his weapons flashing as the deluded demons fall. The decisive duel on the ocean of dissolution fills the full frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch19.png`  (+ `mobile/ch19.png`) · opaque · Bhagavati's Command to Brahma & the Gods
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The supreme Devi, smiling Maya-Shakti, commands Brahma, Vishnu and Rudra to take up creation, preservation and destruction, and invites them aboard her celestial vimana to behold the worlds. The goddess and the three gods at the threshold of the radiant aerial chariot fill the frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch20.png`  (+ `mobile/ch20.png`) · opaque · Brahma & the Gods' Vision of Mahamaya
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The Devi's celestial vimana soars through wondrous worlds while Brahma beholds the vision of countless parallel cosmoses — multiple radiant Vishnus and Shivas enthroned on their own Kailasas and oceans, ranked into the distance. The cosmos-within-cosmos vision fills the full frame in golden tiers. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch21.png`  (+ `mobile/ch21.png`) · opaque · Hymn to Mahamaya
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The gods led by Vishnu stand with folded hands before the radiant Mahamaya-Prakriti enthroned in glory, singing her praise as the source and abode of all, her aura illuminating their upturned faces. The devotional stavan tableau before the luminous goddess fills the frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch22.png`  (+ `mobile/ch22.png`) · opaque · Hymn to Mahamaya in Distress
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The gods, beset and imperilled, kneel in anguished supplication before the towering radiant Mahamaya, hands raised in a hymn of distress, the deep oxblood field pressing around them as her serene golden form rises in answer above. The sankat-stavan of the gods in crisis fills the full frame. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch23.png`  (+ `mobile/ch23.png`) · opaque · The Tasks Mahamaya Assigns the Gods
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The radiant goddess Mahamaya enthroned at center on a lion-throne, hand raised in command, apportioning their cosmic offices to Brahma, Vishnu and Rudra who stand in reverent rows before her; each god turns toward her as the single Shakti who empowers them. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch24.png`  (+ `mobile/ch24.png`) · opaque · The Nirguna Principle
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: A formless central emblem of pure radiance — an aniconic disc of light enthroned where a deity's face would be — from which the Sankhya evolutes unfold outward in concentric ordered bands; the goddess as nirguna essence giving rise to the world of forms. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch25.png`  (+ `mobile/ch25.png`) · opaque · Discourse on the Three Gunas
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: A single great oil-lamp burning at center — wick, oil, and flame shown as one luminous emblem — flanked by the three gunas personified as three figures (serene sattva, restless rajas, shadowed tamas), the lamp uniting them as Brahma teaches the seated sage Narada. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch26.png`  (+ `mobile/ch26.png`) · opaque · The Devi as Universal Shakti / Virat
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The Virat tableau — the goddess as the vast central Shakti with the gods Brahma, Vishnu, Rudra, Surya, Kubera, Agni and Vayu arrayed around her in a ring, each figure visibly animated by her single radiance flowing outward to them. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch27.png`  (+ `mobile/ch27.png`) · opaque · The Tale of Satyavrata
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The assembled gods seated in the Naimisharanya forest grove before sage Lomasha, who stands with hand raised proclaiming Shakti and Adi-Prakriti supreme above all deities, the goddess emblem radiant above the gathering. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch28.png`  (+ `mobile/ch28.png`) · opaque · The Tale of Satyavrata, concluded
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The once-simpleton brahmin transformed by the goddess's grace into an honored learned poet, seated with palm-leaf manuscript and reed-pen, garlanded and crowned with esteem, the goddess's blessing radiance descending upon him. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch29.png`  (+ `mobile/ch29.png`) · opaque · The Rite of Devi-Yajna
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Sage Vyasa instructing King Janamejaya beside a pure sattvika fire-altar, the muni's clean offering rising in true flame at center while the lesser rites recede — the honest yajna of purity foregrounded before the goddess's emblem. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch30.png`  (+ `mobile/ch30.png`) · opaque · The Devi-Yajna Ordained by Bhagavan / the Cosmogony
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The samudra-manthana — gods and daityas churning the cosmic ocean with the serpent rope around golden Meru, the treasures Kamadhenu, Ucchaihshravas, Rambha and Dhanvantari emerging from the milky waters under the goddess's ordaining presence. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch31.png`  (+ `mobile/ch31.png`) · opaque · The Dhruvasandhi Akhyana
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The just solar-dynasty king Dhruvasandhi enthroned in his peaceful realm, his two queens — the wise Manorama and the lovely Lilavati — seated at his sides, opening the Sudarshana account in a court of order and contentment. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch32.png`  (+ `mobile/ch32.png`) · opaque · Dhruvasandhi Akhyana, cont.: the exile
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Queen Manorama fleeing through the forest at night clutching the infant prince Sudarshana, arriving at sage Bharadvaja's ashram where the sage receives them in shelter; the lamp of the hermitage glowing against the dark wilderness. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch33.png`  (+ `mobile/ch33.png`) · opaque · Sudhajit's Pursuit
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Sudhajit's armed forces advancing on Bharadvaja's forest ashram while Manorama kneels imploring the seated sage for the child's protection, the hermitage standing as sanctuary between the mother and the approaching threat. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch34.png`  (+ `mobile/ch34.png`) · opaque · The Vishvamitra–Nandini tale (embedded)
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The wish-cow Nandini standing serene before sage Vasishtha as she conjures a radiant host that routs Vishvamitra's scattering army — brahma-tej overpowering kshatra-tej — soldiers and chariots thrown back from the gentle cow's miraculous power. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch35.png`  (+ `mobile/ch35.png`) · opaque · Shashikala's Longing
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Prince Sudarshana seated in klim-japa beneath the ashram trees, beholding the armed Jaganmata — the red-robed goddess mounted on her lion — granting him her darshan in a descending radiance above his meditation. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch36.png`  (+ `mobile/ch36.png`) · opaque · Shashikala's Resolve
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Princess Shashikala of Kashi in her chamber, hands joined in unwavering vow, facing her counseling mother; the daughter's resolute posture and inward gaze declaring she will wed only Sudarshana even into forest hardship. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch37.png`  (+ `mobile/ch37.png`) · opaque · The Svayamvara: Shashikala Chooses Sudarshana
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The svayamvara hall lined with assembled kings on their seats, garland in hand, Shashikala turning her face away from them all toward the absent exile, declaring the goddess has ordained Sudarshana alone for her. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch38.png`  (+ `mobile/ch38.png`) · opaque · Sudhajit's Plea & the Kings' Outrage
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Sudhajit standing with placating gesture before the rows of assembled kings who rise red-eyed with fury, fists and weapons raised, the council erupting as war is declared in the Kashi court. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch39.png`  (+ `mobile/ch39.png`) · opaque · The Wedding Arranged
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The night Vedic wedding of Sudarshana and Shashikala circling the sacred fire under the goddess's protective radiance, while in the dark margins the rejected rival kings muster chariots and arms for battle. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch40.png`  (+ `mobile/ch40.png`) · opaque · The Battle & the Devi's Victory
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The lion-mounted goddess Chandika manifesting with a roar above the battlefield, weapons in her many arms, slaying the rival kings Sudhajit and Shatrujit as their bodies fall from the chariots — the goddess triumphant over the assault. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch41.png`  (+ `mobile/ch41.png`) · opaque · The Conclusion: Sudarshana Enthroned
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Sudarshana enthroned in his regained kingdom worshipping Ambika, the goddess granting her protective presence above his city while the surviving kings bow in hymn before her radiant lion-borne form. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch42.png`  (+ `mobile/ch42.png`) · opaque · Return to Ayodhya & Reconciliation
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Sudarshana bowing with folded hands before the rival queen in magnanimous reconciliation in the Ayodhya court, honoring her as his own mother, the goddess's grace presiding over the scene of equanimity. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch43.png`  (+ `mobile/ch43.png`) · opaque · Navratri Vrat & Kalasha-Mandapa Installation
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The decorated Navratri mandapa with toranas and canopy, the four-armed Ambika — bearing conch, chakra, gada and padma — enthroned upon her lion above the consecrated kalasha set on the vedi, brahmins performing the sthapana rite. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch44.png`  (+ `mobile/ch44.png`) · opaque · Fruits of the Navratri Vrat / Kumari-puja eligibility
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The kumari-puja — a young girl seated and honored as the living goddess, worshipped with offerings and lamp before the sacred fire as brahmins perform the homa during the Navratri vrat. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch45.png`  (+ `mobile/ch45.png`) · opaque · The Various Avataras of Durga
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: A devotional gallery of the avataras the goddess empowers — the lion-faced Narasimha, the dwarf Vamana, and axe-bearing Bhargava (Parashurama) — arrayed around the central goddess as Maya, her radiance veiling and revealing the world behind them. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

## The Mahishasura-vadha arc (ch 46–64)

### `public/art/chapters/desktop/ch46.png`  (+ `mobile/ch46.png`) · opaque · The Origin of Mahishasura
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The danava-king Mahisha stands in fierce one-pointed tapas on the slopes of Mount Hemagiri, arms raised, ringed by austerity-flame, as four-faced Brahma manifests above in a mandorla of antique-gold light to grant the boon that no deva, daitya, or man may slay him. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch47.png`  (+ `mobile/ch47.png`) · opaque · Mahishasura's Conquest
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The buffalo-demon Mahishasura, black-horned and crowned, sits enthroned in sole sovereignty over the three worlds, the dethroned gods bowed low beneath his dais while his generals flank the throne. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch48.png`  (+ `mobile/ch48.png`) · opaque · Brihaspati's Counsel to Indra
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: In Indra's court the guru Brihaspati, robed and radiant, counsels the assembled gods to war, one hand raised in teaching-gesture before Indra on his throne and the seated devas. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch49.png`  (+ `mobile/ch49.png`) · opaque · The Deva-Daitya War
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The pitched deva-daitya battle at its turn, the demon general Tamraksha falling backward struck down amid clashing ranks of gods and daityas, a sky of arrows above. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch50.png`  (+ `mobile/ch50.png`) · opaque · The Deva-Daitya War, cont.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The buffalo-demon Mahishasura, enraged, charges the gods with his great upraised mace, the deva host breaking and routed before him across the battlefield. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch51.png`  (+ `mobile/ch51.png`) · opaque · Rudra's Counsel
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The defeated gods ride their vahanas in solemn procession toward Vishnu under auspicious skies, while Rudra at their head urges unity, hand outstretched. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch52.png`  (+ `mobile/ch52.png`) · opaque · The Tejas the Gods Cast into One Place
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The birth of the Goddess Mahishasura-mardini — streams of radiant tejas pour from every assembled god and fuse into one blazing mass that takes form as the supreme many-armed Devi, the gods arming her with trishula, chakra, vajra and bow. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch53.png`  (+ `mobile/ch53.png`) · opaque · Mahisha's Envoy to the Devi
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The lion-mounted Devi, divine and fully armed, lets out a world-shaking roar that terrifies the demons, the gods praising her at her side as the cosmos trembles. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch54.png`  (+ `mobile/ch54.png`) · opaque · Mahisha's Envoy & Deliberation
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The envoy Tamraksha kneels before the buffalo-demon Mahishasura in his court, reporting that the gods forged the Devi from their combined tejas and that she stands alone. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch55.png`  (+ `mobile/ch55.png`) · opaque · Mahisha's Deliberation, cont.
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Mahishasura, smitten by the Devi's described beauty, sits wavering on his throne between war and wooing, a minister at his side giving statecraft counsel in the demon court. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch56.png`  (+ `mobile/ch56.png`) · opaque · The Demon Court's Statecraft
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Mahishasura's war-council assembled in deliberation, ministers ranged before the enthroned buffalo-demon weighing war against treaty with the Devi. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch57.png`  (+ `mobile/ch57.png`) · opaque · The Devi Slays Durmukha
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The lion-mounted Devi strikes down the demon general Durmukha in the opening clash, her trishula driving him to the ground as the demon army recoils in dismay. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch58.png`  (+ `mobile/ch58.png`) · opaque · The Devi vs Chikshura & Tamraksha
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The demon commander Chikshura, conch at his lips, rallies the fleeing demon host and confronts the lion-mounted Devi in single combat, Tamraksha joining the fray beside him. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch59.png`  (+ `mobile/ch59.png`) · opaque · The Devi Declares Her Dharma
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The lion-mounted Devi rises over the battlefield proclaiming her dharma — to protect the good and destroy the wicked — one hand raised in declaration, while the ministers Asiloma and Bidala confer anxiously below. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch60.png`  (+ `mobile/ch60.png`) · opaque · The Battle Continues
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The many-armed lion-mounted Devi mows through the demon commanders, the battlefield turning wholly against the daityas as her weapons fell them on every side. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch61.png`  (+ `mobile/ch61.png`) · opaque · The Tale of Mandodari
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The maiden Mandodari, beautiful as the waxing moon, stands in King Chandrasena's court of Simhala-desha refusing marriage and resolving on tapas, her parents the king and Queen Gunavati seated by. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch62.png`  (+ `mobile/ch62.png`) · opaque · The Slaying of Mahishasura
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The climactic Mahishasura-mardini slaying — the lion-mounted Devi plants her foot on the shape-shifting buffalo-demon and beheads him with her trishula and mace, the gods raining flowers from above. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch63.png`  (+ `mobile/ch63.png`) · opaque · The Devi's Victory-Stuti & the Savitri-vrat
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The gods led by Indra stand in a victory-hymn before the lion-mounted Devi who rises radiant over the fallen buffalo-demon, hands joined in praise. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch64.png`  (+ `mobile/ch64.png`) · opaque · The State of the Earth after Mahisha's Slaying
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The bridge-vision of Hingulambika rising self-arisen from a red lotus, red-eyed and luminous, over an earth restored to peace after the victory. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

## The Hinglaj core: Dwitiya Pravah (ch 65–87)

### `public/art/chapters/desktop/ch65.png`  (+ `mobile/ch65.png`) · opaque · The Origin of Hingula
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The demon Hingul stands in his thousand-year penance on Mount Meru, balanced on a single toe with arms raised, austerity-fire scorching the cosmos while the terrified gods flee toward Brahma above. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch66.png`  (+ `mobile/ch66.png`) · opaque · The Origin of Hingula, continued
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The luminous enchantress-form of the Goddess stands before the lust-struck demon Hingulasura at the cave-mouth in the Sindhu region, the moment of his dissolution as he merges crying "Devi!" and his soul is released to salvation. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch67.png`  (+ `mobile/ch67.png`) · opaque · The Glory of the Hingul-tirtha
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The radiant Hingul-tirtha of Bharatavarsha with its three holy rivers, gods and rishis bathing in its sacred waters, a pilgrim freed of all sin by its darshan. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch68.png`  (+ `mobile/ch68.png`) · opaque · Origin of the Hingula & Mandakini Tirthas
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Brahma, four-faced and gold-haloed, stands at the Rama-kshetra as his sacred kumbha tilts and the holy water spills and splits into two living rivers branching north and south across the quaking earth. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch69.png`  (+ `mobile/ch69.png`) · opaque · The Nature of Moksha
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Rama, Sita and Lakshmana seated in reverence before the white-bearded guru Vasishtha at the sacred tirtha, the sage's hand raised in upadesha, the holy mountain and river behind them, kusha-grass and water-pot before. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch70.png`  (+ `mobile/ch70.png`) · opaque · Description of Mount Hingula
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The golden mountain Hinguladri, its trees and stones shining like gold, with sage Dadhichi at his ashram worshipping Mahalakshmi and the fierce Chamunda flanked by guardian spirits at the four quarters above a sacred lake. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch71.png`  (+ `mobile/ch71.png`) · opaque · Glory of the Punyada Tirtha
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The great Punyada tirtha north of Mount Hingula, its bright confluence of waters thronged with pilgrims, and a once-fallen brahmin kneeling cleansed and radiant at the water's edge. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch72.png`  (+ `mobile/ch72.png`) · opaque · The Slaying of Bhimasura
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The many-armed Devi on her lion strikes down the demon Bhimasura amid his routed host as the freed gods rejoice and Indra returns to a restored Swarga. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch73.png`  (+ `mobile/ch73.png`) · opaque · Origin of Ramtirth
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Parashurama, axe in hand, stands in long tapas upon Mount Hingula as the cosmos trembles, and Shiva with Ambika grants him darshan and boon while the Muktiganga river springs forth. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch74.png`  (+ `mobile/ch74.png`) · opaque · Origin of the Saraswat Brahmins
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Goddess Saraswati manifests sun-bright and four-armed, moon-pure and gold-adorned, upon the bank of her river as Brahma kneels in supplication before her over the drought-stricken earth. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch75.png`  (+ `mobile/ch75.png`) · opaque · Origin of the Saraswat Brahmins, continued
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Saraswati seated on the river-bank cradling the newborn luminous Saraswata son as celestial drums sound, apsaras dance and the gods raise cries of victory above. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch76.png`  (+ `mobile/ch76.png`) · opaque · The Theft of Kamadhenu
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The thousand-armed king Sahasrarjuna seizes the wish-cow Kamadhenu as she stands radiant amid the miraculous feast she has manifested, the grieving sage Jamadagni and Renuka looking on at the ashram. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch77.png`  (+ `mobile/ch77.png`) · opaque · Parashurama-kshetra
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Parashurama, axe raised, takes his fierce vow over the wounded body of his father Jamadagni while Renuka charges him to rid the earth of the offending kings and restore it to the brahmins. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch78.png`  (+ `mobile/ch78.png`) · opaque · The Battle of Rama and Arjuna
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Parashurama in the seven-day duel severs the arms of the thousand-armed king Kartavirya one by one beneath a sky darkened with arrows, shattered bow and mace at their feet. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch79.png`  (+ `mobile/ch79.png`) · opaque · The Tale of King Ratnasena
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: King Ratnasena leads his five apsara-born princesses through the forest to the Saraswati-bank ashram, where the compassionate rishi rises to receive the throne-forsaking king. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch80.png`  (+ `mobile/ch80.png`) · opaque · Dadhichi's Deliberation
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The sage Dadhichi seated in deep contemplation beneath a great wheel of time-units and the death-foretelling constellations of Saturn and the eclipsed sun and moon arrayed across the night sky. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch81.png`  (+ `mobile/ch81.png`) · opaque · The Slaying of Ratnasena
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The widowed queens entrust their five young princes to the rishi at the Saraswati bank and ascend as sati beside their slain king Ratnasena, the rishi's hand raised in granting refuge. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch82.png`  (+ `mobile/ch82.png`) · opaque · Jayasena Granted Abhaya & Brahma-vidya
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Parashurama, recognized as Narayana, lowers his axe-bow in peace as he imparts the dhanurveda and mantras to the kneeling prince Jayasena and his brothers, his open hand granting abhaya. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch83.png`  (+ `mobile/ch83.png`) · opaque · The Mantra-Initiation (Brahmakshatriya)
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The rishi Gautama directs the kneeling Jayasena toward the Saraswata rishi who bestows mantra-diksha upon the princes, the warriors rising transformed as Brahmakshatriya by the sacred fire. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch84.png`  (+ `mobile/ch84.png`) · opaque · Hingula Manifests to the Warriors
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: Goddess Hingula manifests radiant above Jayasena deep in tapas at Hinguladri, her hand raised in vardan as she decrees the thousand-year rule and names herself kuldevi of his lineage, flowers and offering before her. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch85.png`  (+ `mobile/ch85.png`) · opaque · The Brahmakshatriya Genealogy
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: The branching family-tree of the Brahmakshatriya kings spreads across the frame, the righteous brothers Shrutasena and Viharsha ruling their twin cities with brahmins and the agnihotra fire, the lineage flowing outward to many named lands. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch86.png`  (+ `mobile/ch86.png`) · opaque · Origin of the Lohana, Pushkarna & Bhatia Communities
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: King Jayasena enthroned at Kanauj as the Saraswat brahmin Durgadeva performs his sea-deity upasana before the forty-eight Rathod chieftains, the warrior line branching into its communities below. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```

### `public/art/chapters/desktop/ch87.png`  (+ `mobile/ch87.png`) · opaque · The Contents of the Hingulapuran
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict limited palette only: deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, dense floral block-print border on all four sides, fills the entire frame, no white margin. SCENE: A grand unfurled scroll of the whole sacred account, its panels recapping Goddess Hingula's manifestations, the slaying of Mahishasura, the Parashurama campaign and the Brahmakshatriya origin, crowned by the enthroned Hingula Mata as archive of all. Generate at wide landscape 16:9 and save to desktop/, then regenerate the same composition at portrait 9:16 and save to mobile/.
```
