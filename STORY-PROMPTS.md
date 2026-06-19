# Hingulapuran — Story scene prompts (2.5D Scene-Reel)

Three stories, each a reel of scenes. **Every scene = 3 layers** (far / subject / near) that parallax at different depths. Generate **each layer twice** — desktop + mobile — and save with the exact names below.

## How to generate (read once)
1. **Prepend this STYLE to every prompt below:**
   > *Mata-ni-Pachedi temple-cloth painting fused with Rajput–Marwar miniature, flat hand-drawn kalam (reed-pen) black linework, frontal and hieratic, NO realism, NO 3D, NO gradients. Colours ONLY: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C. Aged hand-spun cotton texture. Fierce, devotional, never sweet.*
2. **Set this NEGATIVE once in your tool:**
   > *no photorealism, no 3d render, no soft pastel, no cute/disney, no modern vector, no gradients, no glow, no blur, no text, no watermark, no extra fingers, no melted faces*
3. **Layer rules:**
   - **FAR** = the setting. **Opaque, fills the whole frame.**
   - **SUBJECT** = the figures. Generate on a **plain solid white background** → cut out → transparent PNG.
   - **NEAR** = foreground (fire, smoke, ornament, pillars). **Plain white background** → cut out → transparent PNG.
4. **Two sizes, same prompt:** desktop **`--ar 16:9`** → save in `…/desktop/`; mobile **`--ar 9:16`** → save in `…/mobile/`. Keep `door/01-backdrop` as the style reference so all stay on-model.
5. **Filenames:** `s<scene>-far.png`, `s<scene>-subject.png`, `s<scene>-near.png` (e.g. `s1-far.png`).

---

# STORY A — 51 SHAKTIPEETH  → `public/art/stories/shaktipeeth/{desktop,mobile}/`
*Scene 5 is the live guided-pin map (no painting) — only a far map backdrop is generated.*

### Scene 1 — Sati in the Agnikund
- **s1-far:** Daksha's grand yagna pavilion, rows of seated sages and Indra and the devtas watching in the background, ornate canopy. Opaque, fills frame.
- **s1-subject:** Devi Sati stepping into the sacrificial fire-pit (agnikund), serene and resolute, gold halo. Isolated on plain white background.
- **s1-near:** tall foreground flames and curling smoke of the agnikund. Isolated on plain white background.

### Scene 2 — Shiva's Tandav
- **s2-far:** a stormy cosmic sky over jagged Himalayan peaks, dark clouds. Opaque, fills frame.
- **s2-subject:** Lord Shiva in furious tandava dance, matted hair flying, carrying the limp body of Sati across his arms, third eye blazing. Isolated on plain white background.
- **s2-near:** foreground swirling ash, a trishul, and storm debris. Isolated on plain white background.

### Scene 3 — Vishnu's Sudarshan
- **s3-far:** a vast cosmic sky with faint constellations and a gold mandala. Opaque, fills frame.
- **s3-subject:** Lord Vishnu releasing the spinning Sudarshan chakra toward Sati's body (still carried by the grieving Shiva at the edge). Isolated on plain white background.
- **s3-near:** the bright spinning Sudarshan chakra and radiating light streaks in the foreground. Isolated on plain white background.

### Scene 4 — The 51 parts fall across Jambudvip
- **s4-far:** a stylised top-down pachedi "map" of the Indian subcontinent (Jambudvip) — rivers, hills, coastlines as kalam linework. Opaque, fills frame.
- **s4-subject:** 51 glowing gold fragments / points of light descending and scattering across the land. Isolated on plain white background.
- **s4-near:** foreground clouds and gold light-trails. Isolated on plain white background.

### Scene 5 — Guided-pin map (LIVE — generate backdrop only)
- **s5-far:** a richly textured pachedi map of the subcontinent + Makran coast, aged-cloth, decorative border. Opaque, fills frame. *(The 51 pins animate on top in code.)*

---

# STORY B — HINGUL LEGEND  → `public/art/stories/hingul/{desktop,mobile}/`

### Scene 1 — The penance (tapasya)
- **s1-far:** a forest clearing with a great stylised flowering tree and dusk sky. Opaque, fills frame.
- **s1-subject:** the horned asura Hingul in fierce penance, cross-legged, radiating heat-lines; Brahma appearing above in a lotus-and-gold aura granting a boon. Isolated on plain white background.
- **s1-near:** foreground sacrificial fire and smoke. Isolated on plain white background.

### Scene 2 — Conquest of the heavens
- **s2-far:** the celestial city of the devas amid clouds. Opaque, fills frame.
- **s2-subject:** the empowered multi-armed asura on a fierce beast routing the devtas, Indra fleeing. Isolated on plain white background.
- **s2-near:** foreground broken celestial banners, spears, and clouds. Isolated on plain white background.

### Scene 3 — The Devi's vow
- **s3-far:** a sacred mountain throne under a gold mandala. Opaque, fills frame.
- **s3-subject:** Devi Parvati seated on her lion, raising an open palm in a solemn vow, devtas bowing low. Isolated on plain white background.
- **s3-near:** foreground lotuses and oil lamps. Isolated on plain white background.

### Scene 4 — The unprecedented light
- **s4-far:** dark cosmos, deep maroon-black. Opaque, fills frame.
- **s4-subject:** the radiant goddess (four arms, third eye, lion) as the asura lunges toward her, his silhouette dissolving. Isolated on plain white background.
- **s4-near:** a great foreground burst of gold-and-cream rays — the blinding light. Isolated on plain white background.

### Scene 5 — The vardan
- **s5-far:** the cave shrine with rock walls and a niche. Opaque, fills frame.
- **s5-subject:** the repentant asura prostrate at the goddess's feet as she grants the boon; a sindoor-stone shrine and eternal flame rising. Isolated on plain white background.
- **s5-near:** foreground oil lamps, marigold garlands, and peacocks. Isolated on plain white background.

---

# STORY C — PARSHURAM  → `public/art/stories/parshuram/{desktop,mobile}/`
*(historically-tight 8-scene chronology)*

### Scene 1 — King Sahastrarjun enthroned
- **s1-far:** an opulent royal hall with carved arches and drapery. Opaque, fills frame.
- **s1-subject:** the mighty 1000-armed king Kartavirya Arjuna (Sahastrarjun) seated on his throne with his retinue. Isolated on plain white background.
- **s1-near:** foreground pillars, hanging lamps, and a brocade drape edge. Isolated on plain white background.

### Scene 2 — Theft of Kamadhenu
- **s2-far:** Sage Jamadagni's forest ashram with a havan altar. Opaque, fills frame.
- **s2-subject:** the king's soldiers seizing the divine wish-cow Kamadhenu while Sage Jamadagni protests. Isolated on plain white background.
- **s2-near:** foreground trees and the havan fire. Isolated on plain white background.

### Scene 3 — Parshuram slays Sahastrarjun
- **s3-far:** a forest battlefield at dusk. Opaque, fills frame.
- **s3-subject:** Parshuram, axe (parashu) raised, striking down the 1000-armed king and reclaiming Kamadhenu. Isolated on plain white background.
- **s3-near:** foreground dust, fallen weapons, scattered arrows. Isolated on plain white background.

### Scene 4 — Jamadagni slain → the vow
- **s4-far:** the ashram set aflame. Opaque, fills frame.
- **s4-subject:** Parshuram raising his axe in a terrible vow over the body of his slain father Sage Jamadagni. Isolated on plain white background.
- **s4-near:** foreground fire and rolling smoke. Isolated on plain white background.

### Scene 5 — The extermination
- **s5-far:** a war-torn land under a blood-red sky. Opaque, fills frame.
- **s5-subject:** Parshuram slaying Kshatriya warriors as others flee in terror. Isolated on plain white background.
- **s5-near:** foreground broken banners, shields, and spears. Isolated on plain white background.

### Scene 6 — Arrival at Mount Hingula
- **s6-far:** the Hingol/Makran mountains and the winding river. Opaque, fills frame.
- **s6-subject:** the surviving Rajput princes with Sage Dadhichi reaching the foot of the sacred mount, weary. Isolated on plain white background.
- **s6-near:** foreground boulders and dry foliage. Isolated on plain white background.

### Scene 7 — The twelve-year penance
- **s7-far:** the mountain shrine niche on the cliff. Opaque, fills frame.
- **s7-subject:** the princes in severe tapasya, gaunt, offering pieces of their own flesh into the sacrificial fire. Isolated on plain white background.
- **s7-near:** the foreground sacrificial fire and heavy smoke. Isolated on plain white background.

### Scene 8 — Hinglaj manifests (the Brahmakshatriya)
- **s8-far:** a radiant cave shrine glowing gold. Opaque, fills frame.
- **s8-subject:** Goddess Hinglaj (four arms, third eye, lion, halo) manifesting and blessing the kneeling princes, weaving their new Brahmakshatriya identity. Isolated on plain white background.
- **s8-near:** foreground oil lamps, marigold, and radiating halo-rays. Isolated on plain white background.

---

## Tally
| Story | Painted scenes | Layers | Images (×2 devices) |
|---|---|---|---|
| 51 Shaktipeeth | 4 + 1 map-far | — | 4×3 + 1 = 13 → **26** |
| Hingul | 5 | 3 | 15 → **30** |
| Parshuram | 8 | 3 | 24 → **48** |
| **Total** | | | **~104** |

Generate desktop first (16:9) if you want to pace it; mobile (9:16) second. Ping me once a story's scenes are in and I'll build the **2.5D Scene-Reel** component around them.
