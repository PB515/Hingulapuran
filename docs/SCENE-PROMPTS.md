# Hingulapuran: 2.5D Scene-Reel prompts (rich)

This is **sacred history (itihaas)** rendered as devotional cloth, never "myth/legend/story" anywhere (see `STYLE.md` Rule 0).

Each scene = **3 layers** (far / subject / near) that parallax at different depths. Every prompt below is **complete and self-contained**: copy the whole block, paste, generate. Do each **twice**: **`--ar 16:9` → save in `…/desktop/`** and **`--ar 9:16` → save in `…/mobile/`**. Filenames: `s<n>-far.png`, `s<n>-subject.png`, `s<n>-near.png`.

**Set this NEGATIVE once in your tool:** `no photorealism, no 3d render, no soft pastel, no cute, no chibi, no disney, no modern vector, no corporate illustration, no gradients, no glow, no neon, no blur, no embedded text, no letters, no signature, no watermark, no extra fingers, no melted faces`

**Layer rules:** FAR = opaque, fills the frame. SUBJECT + NEAR = generate on a **plain solid white background** → cut out → transparent PNG. Keep `door/01-backdrop` as your style reference so all stay on-model.

---

# CHAPTER A: THE FALL OF SATI (51 Shaktipeeth)  → `public/art/stories/shaktipeeth/{desktop,mobile}/`
*Scene 5 is the live guided-pin map, only its far map-backdrop is generated.*

## Scene 1: Sati enters the agnikund
**s1-far**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict palette only — deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history rendered as a reverent cloth. SETTING (far background, opaque, fills the entire frame): King Daksha's grand yagna pavilion — a vast pillared sacrificial hall with an ornate canopy, rows of seated sages, rishis and the devtas (Indra on his elephant among them) watching from the background tiers, a dense floral block-print border all around. Deep, symmetrical, candle-lit. No figures in the foreground. No white margin.
```
**s1-subject**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict palette only — deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged cotton texture; fierce, devotional, never sweet. FIGURE ONLY: Devi Sati, serene and resolute, a crowned goddess with a gold halo, stepping with grace into the sacrificial fire-pit, palms joined, sari flowing. Frontal, hieratic, dignified. The goddess only, isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```
**s1-near**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat, no realism, no 3D, no gradients; palette only — kalam-black #1A1110, antique gold #C9A227, deep oxblood maroon #3E0A1A, cold steel-grey #6E757C; aged cotton texture. FOREGROUND ONLY: tall stylised tongues of sacrificial fire and curling kalam-drawn smoke rising across the lower frame, a few gold sparks. Decorative, flat. Isolated on a plain solid white background, no shadow.
```

## Scene 2: Shiva's tandava
**s2-far**
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; kalam reed-pen black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C; aged cotton texture; fierce, primal, devotional; sacred history. SETTING (far, opaque, fills frame): a stormy cosmic sky over jagged Himalayan peaks, swirling dark clouds rendered in kalam swirls, distant lightning, a four-sided block-print border. Turbulent, deep, no foreground figures, no white margin.
```
**s2-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; fierce, devotional. FIGURE ONLY: Lord Shiva in furious tandava dance, matted jata flying, third eye blazing, trident in hand, carrying the limp body of Devi Sati across his arms, grief and wrath together. Frontal, powerful, dignified. Isolated on a plain solid white background, no scenery, no shadow.
```
**s2-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — black #1A1110, gold #C9A227, maroon #3E0A1A, steel #6E757C; aged cotton. FOREGROUND ONLY: swirling ash and storm-debris, a few broken branches and dust spirals across the lower frame, drawn in flat kalam strokes. Isolated on a plain solid white background, no shadow.
```

## Scene 3: Vishnu's Sudarshan  *(REVISED: staged as 4 separate layers)*
> This is the hinge of the origin: Vishnu's chakra parts Sati's body, which the grieving Shiva still bears. Generate **four** layers, Vishnu fills the **left third**, Shiva+Sati fill the **right third**, the chakra is its **own small** centred image. Each subject/near layer must sit on its own side of the empty frame (the rest plain white) so they stack into one composition. The chakra layer is rendered small and slowly spinning in code, so draw it as a tight wheel only.

**s3-far** *(cosmos only, no mandala, no figures; the chakra is now its own layer)*
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional; sacred history. SETTING (far, opaque, fills the entire frame): a vast deep cosmic night sky over faint distant cloud banks, scattered fine kalam-drawn constellations and small gold stars, a dense four-sided floral block-print border. Empty, reverent, centre kept calm and uncluttered. No figures, no chakra, no large central disc, no white margin.
```
**s3-subject** *(Vishnu, LEFT third, NO chakra)*
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional. FIGURE ONLY: Lord Vishnu standing in majestic frontal pose, blue-grey skin, tall gold crown and gold halo, four arms holding conch, mace and lotus, the lower right hand raised with index finger extended as if having just released a weapon (but NO chakra drawn). Dignified, hieratic. Placed at the LEFT side of the frame, the rest of the frame empty. Isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```
**s3-near** *(grieving Shiva bearing Sati, RIGHT third)*
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; fierce, sorrowful, devotional. FIGURE ONLY: Lord Shiva, ash-grey skin, matted jata, crescent moon and serpent, third eye, grief on his face, tenderly bearing the limp body of Devi Sati across his arms. Dignified, powerful, mournful. Placed at the RIGHT side of the frame, the rest of the frame empty. Isolated on a plain solid white background, no scenery, no shadow, for a clean cut-out.
```
**s3-chakra** *(the Sudarshan chakra ALONE, small, centred, spun in code)*
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/shadows/gradients; palette only — antique gold #C9A227, kalam-black #1A1110, cream #E7D7B8, deep maroon #3E0A1A; aged cotton. OBJECT ONLY: the Sudarshan chakra — a single perfectly circular gold discus with a ring of fine flame-like spokes around the rim and an intricate lotus-mandala centre, radiating thin straight gold light-rays evenly in all directions. Flat, symmetrical, decorative, centred, filling the frame. Isolated on a plain solid white background, no figures, no shadow.
```

> **Scene 1 note:** the "Sati hidden by fire" issue is now fixed in code (the subject is scaled up and the fire is shrunk + anchored to the floor), so you do **not** need to regenerate Scene 1, but if you want her even more prominent, regenerate `s1-subject` drawn taller/full-height on white.

## Scene 4: The 51 parts fall across Jambudvip
**s4-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; sacred history. SETTING (far, opaque, fills frame): a stylised top-down "map" of the Indian subcontinent / Jambudvip — coastlines, rivers, hills and the Makran coast drawn as flat kalam linework on the maroon cloth, decorative compass florets, four-sided block-print border. No figures, no white margin.
```
**s4-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/shadows/gradients; palette only — gold #C9A227, cream #E7D7B8, black #1A1110, maroon #3E0A1A; aged cotton. SUBJECT ONLY: fifty-one glowing gold fragments / points of sacred light, of varied small sizes, descending and scattering in graceful arcs (as if falling across a land). Flat, luminous, decorative. Isolated on a plain solid white background, no shadow.
```
**s4-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — cream #E7D7B8, gold #C9A227, black #1A1110; aged cotton. FOREGROUND ONLY: soft kalam-drawn clouds and trailing gold light-streaks sweeping across the lower frame. Isolated on a plain solid white background, no shadow.
```

## Scene 5: Guided-pin map (LIVE: generate backdrop only)
**s5-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/shadows/gradients; palette only — deep oxblood maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227; richly aged hand-spun cotton texture; sacred history. SETTING (far, opaque, fills frame): a beautiful decorative map-cloth of the Indian subcontinent and Makran coast — kalam coastlines, rivers, hills, a compass rose, dense floral block-print border. Empty of figures (51 gold pins animate on top in code). No white margin.
```

---

# CHAPTER B: THE COMING OF HINGULA (Hingul / Hingulasur)  → `public/art/stories/hingul/{desktop,mobile}/`

## Scene 1: The thousand-year penance
**s1-far**
```
Sacred Mata-ni-Pachedi temple-cloth × Rajput-Marwar miniature; kalam reed-pen black linework, flat frontal hieratic, no realism/3D/shadows/gradients; strict palette only — deep oxblood maroon #3E0A1A ground, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C; aged cotton texture; fierce, primal, devotional; sacred history. SETTING (far, opaque, fills frame): the towering peak of Mount Meru against a dusk sky, terraced rock, a stylised flowering tree to one side, distant clouds, four-sided block-print border. Deep and austere, no foreground figures, no white margin.
```
**s1-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; fierce. FIGURE ONLY: the mighty asura Hingul performing severe penance — a powerful horned demon-ascetic standing rigidly on a single toe, both arms raised to the heavens, eyes shut, thin kalam heat-lines radiating from his body; matted hair, beads. Frontal, imposing, dignified. Isolated on a plain solid white background, no scenery, no shadow.
```
**s1-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — black #1A1110, gold #C9A227, maroon #3E0A1A; aged cotton. FOREGROUND ONLY: a small sacrificial fire with curling smoke and a scatter of rock and dry grass across the lower frame. Isolated on a plain solid white background, no shadow.
```

## Scene 2: Conquest of the heavens
**s2-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; fierce; sacred history. SETTING (far, opaque, fills frame): the celestial city of the devas amid gold-edged clouds — domed palaces and banners, now overcast and falling into shadow, four-sided block-print border. No foreground figures, no white margin.
```
**s2-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; maximum ferocity. FIGURES ONLY: the empowered asura Hingul, multi-armed and wielding steel weapons, riding a fierce beast and routing the devtas; Indra and the gods recoiling and fleeing. A percussive diagonal charge. Frontal-dynamic, dignified. Isolated on a plain solid white background, no scenery, no shadow.
```
**s2-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — black #1A1110, gold #C9A227, maroon #3E0A1A, steel #6E757C; aged cotton. FOREGROUND ONLY: broken celestial banners, fallen spears, and drifting clouds across the lower frame, flat kalam. Isolated on a plain solid white background, no shadow.
```

## Scene 3: The vow of the Devi
**s3-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional; sacred history. SETTING (far, opaque, fills frame): a sacred Himalayan mountain throne-room under a large gold mandala, snowy peaks and lotus motifs, four-sided block-print border. Serene, deep, no foreground figures, no white margin.
```
**s3-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional. FIGURES ONLY: Devi Parvati seated upon her lion, four-armed, gold halo and crown, raising an open palm in a solemn vow; before her the devtas bow low in anjali. Frontal, hieratic, supreme. Isolated on a plain solid white background, no scenery, no shadow.
```
**s3-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — gold #C9A227, cream #E7D7B8, black #1A1110, maroon #3E0A1A; aged cotton. FOREGROUND ONLY: a row of lotuses and lit oil-lamps along the lower frame. Isolated on a plain solid white background, no shadow.
```

## Scene 4: The unprecedented light
**s4-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — deep oxblood maroon #3E0A1A and kalam-black #1A1110 (very dark), faint gold; aged cotton; sacred history. SETTING (far, opaque, fills frame): a deep dark cosmos, near-black maroon, faint gold star-specks, four-sided block-print border. Very dark and empty, ready for the burst, no foreground figures, no white margin.
```
**s4-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional. FIGURES ONLY: the radiant goddess (four arms, third eye, lion, gold halo) supreme at centre, with the asura lunging toward her, his black silhouette beginning to dissolve at the edges. Frontal, dramatic, dignified. Isolated on a plain solid white background, no scenery, no shadow.
```
**s4-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — gold #C9A227, cream #E7D7B8, black #1A1110; aged cotton. FOREGROUND ONLY: a great burst of straight gold-and-cream rays radiating outward from centre — the blinding sacred light — flat kalam sunburst. Isolated on a plain solid white background, no shadow.
```

## Scene 5: The vardan (Hingula Peeth)
**s5-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional; sacred history. SETTING (far, opaque, fills frame): the rock cave shrine on the Hingol river — a craggy niche, rock walls in kalam contour, a small arch, four-sided block-print border. Warm, sacred, no foreground figures, no white margin.
```
**s5-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional. FIGURES ONLY: the repentant asura prostrate at the goddess's feet; the supreme goddess (four arms, lion, halo) granting the boon with her open varada-mudra hand; a sindoor-smeared sacred stone shrine and eternal flame rising between them. Frontal, hieratic. Isolated on a plain solid white background, no scenery, no shadow.
```
**s5-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — gold #C9A227, cream #E7D7B8, maroon #3E0A1A, black #1A1110; aged cotton. FOREGROUND ONLY: oil-lamps, marigold garlands and two peacocks along the lower frame. Isolated on a plain solid white background, no shadow.
```

---

# CHAPTER C: PARASHURAMA & THE BRAHMAKSHATRIYA  → `public/art/stories/parshuram/{desktop,mobile}/`
*(historically-tight 8-scene chronology)*

## Scene 1: King Sahastrarjun enthroned
**s1-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; sacred history. SETTING (far, opaque, fills frame): an opulent royal court — carved arches, a high canopy, brocade drapery, attendants in the background tiers, four-sided block-print border. Deep, regal, no foreground figures, no white margin.
```
**s1-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton. FIGURE ONLY: the mighty King Kartavirya Arjuna (Sahastrarjun) — a crowned emperor with a thousand arms fanned out holding weapons — seated grand upon his throne, proud and powerful. Frontal, hieratic, dignified. Isolated on a plain solid white background, no scenery, no shadow.
```
**s1-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — gold #C9A227, maroon #3E0A1A, black #1A1110; aged cotton. FOREGROUND ONLY: two carved pillars and a hanging brocade drape edge with brass lamps framing the lower corners. Isolated on a plain solid white background, no shadow.
```

## Scene 2: The theft of Kamadhenu
**s2-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; sacred history. SETTING (far, opaque, fills frame): Sage Jamadagni's serene forest ashram — thatched hermitage, a havan altar, tall stylised trees, four-sided block-print border. Calm, deep, no foreground figures, no white margin.
```
**s2-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton. FIGURES ONLY: the king's armoured soldiers seizing and dragging away the divine wish-cow Kamadhenu (a gentle gold-haloed cow); Sage Jamadagni raising a hand in protest. Frontal, narrative, dignified. Isolated on a plain solid white background, no scenery, no shadow.
```
**s2-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — black #1A1110, gold #C9A227, maroon #3E0A1A; aged cotton. FOREGROUND ONLY: foreground trees, foliage and the havan fire along the lower edge. Isolated on a plain solid white background, no shadow.
```

## Scene 3: Parashurama slays Sahastrarjun
**s3-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; fierce; sacred history. SETTING (far, opaque, fills frame): a forest battlefield at dusk, distant banners and trees, a brooding sky, four-sided block-print border. No foreground figures, no white margin.
```
**s3-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; fierce yet dignified. FIGURES ONLY: Parashurama, the matted-haired sage-warrior with his great parashu (axe) raised, striking down the thousand-armed king Sahastrarjun, and the rescued Kamadhenu beside him. Frontal-dynamic, righteous. Isolated on a plain solid white background, no scenery, no shadow.
```
**s3-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — steel #6E757C, black #1A1110, gold #C9A227, maroon #3E0A1A; aged cotton. FOREGROUND ONLY: fallen swords, a broken shield and arrows scattered across the lower frame. Isolated on a plain solid white background, no shadow.
```

## Scene 4: Jamadagni slain → the vow
**s4-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — deep oxblood maroon #3E0A1A, black #1A1110, gold #C9A227, steel #6E757C, faint cream #E7D7B8; aged cotton; fierce; sacred history. SETTING (far, opaque, fills frame): the forest ashram set aflame, smoke against a dark sky, scorched trees, four-sided block-print border. Grim, no foreground figures, no white margin.
```
**s4-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; fierce. FIGURES ONLY: Parashurama raising his parashu axe in a terrible vow, standing over the slain body of his father Sage Jamadagni, face set with grief and resolve. Frontal, powerful, dignified. Isolated on a plain solid white background, no scenery, no shadow.
```
**s4-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — black #1A1110, gold #C9A227, maroon #3E0A1A; aged cotton. FOREGROUND ONLY: foreground flames and heavy rolling smoke across the lower frame. Isolated on a plain solid white background, no shadow.
```

## Scene 5: The cleansing of the earth
**s5-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; fierce; sacred history. SETTING (far, opaque, fills frame): a war-torn land under a deep blood-red maroon sky, distant hills and broken standards, four-sided block-print border. No foreground figures, no white margin.
```
**s5-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; fierce yet dignified, not gory. FIGURES ONLY: Parashurama advancing with his axe as Kshatriya warriors flee before him in fear, a few looking back. Frontal-dynamic, restrained (iconographic, not bloody). Isolated on a plain solid white background, no scenery, no shadow.
```
**s5-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — steel #6E757C, black #1A1110, maroon #3E0A1A, gold #C9A227; aged cotton. FOREGROUND ONLY: broken banners, fallen shields and spears strewn across the lower frame. Isolated on a plain solid white background, no shadow.
```

## Scene 6: Refuge at Mount Hingula
**s6-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional; sacred history. SETTING (far, opaque, fills frame): the rugged Hingol / Makran mountains with the winding Hingol river and mud-volcano cones, a distant cave shrine in a cliff, four-sided block-print border. Deep, vast, no foreground figures, no white margin.
```
**s6-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton. FIGURES ONLY: a weary group of surviving Rajput princes led by Sage Dadhichi arriving at the foot of the sacred mount, carrying nothing, hopeful. Frontal, narrative, dignified. Isolated on a plain solid white background, no scenery, no shadow.
```
**s6-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — black #1A1110, gold #C9A227, maroon #3E0A1A; aged cotton. FOREGROUND ONLY: boulders, dry foliage and a few desert shrubs along the lower frame. Isolated on a plain solid white background, no shadow.
```

## Scene 7: The twelve-year penance
**s7-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional; sacred history. SETTING (far, opaque, fills frame): the mountain shrine niche set high in the cliff, rock walls in kalam contour, a small arch and lamps, four-sided block-print border. Austere, sacred, no foreground figures, no white margin.
```
**s7-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional, dignified. FIGURES ONLY: the Rajput princes seated in severe tapasya, gaunt and devout, palms joined, offering oblations into the sacrificial fire before them. Frontal, hieratic, reverent. Isolated on a plain solid white background, no scenery, no shadow.
```
**s7-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — gold #C9A227, black #1A1110, maroon #3E0A1A; aged cotton. FOREGROUND ONLY: the tall sacrificial fire and heavy curling smoke across the lower frame, a few offering vessels. Isolated on a plain solid white background, no shadow.
```

## Scene 8: Hingula manifests (the Brahmakshatriya)
**s8-far**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A ground, black #1A1110, cream #E7D7B8, antique gold #C9A227, steel #6E757C; aged cotton; devotional; sacred history. SETTING (far, opaque, fills frame): a radiant cave sanctum glowing gold, scalloped temple arch, hanging lamps and a gold mandala, four-sided block-print border. Warm, luminous, no foreground figures, no white margin.
```
**s8-subject**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat frontal hieratic, no realism/3D/shadows/gradients; palette only — maroon #3E0A1A, black #1A1110, cream #E7D7B8, gold #C9A227, steel #6E757C; aged cotton; devotional. FIGURES ONLY: Goddess Hinglaj manifest in glory — four arms (trishula, khadga sword, lotus, abhaya-varada mudra), third eye, gold crown and halo, seated on her lion — blessing the kneeling Rajput princes who bow in anjali, receiving their new Brahmakshatriya identity. Frontal, supreme, hieratic. Isolated on a plain solid white background, no scenery, no shadow.
```
**s8-near**
```
Sacred Mata-ni-Pachedi × Rajput-miniature, kalam black linework, flat, no realism/3D/gradients; palette only — gold #C9A227, cream #E7D7B8, maroon #3E0A1A, black #1A1110; aged cotton. FOREGROUND ONLY: oil-lamps, marigold garlands and radiating gold halo-rays along the lower frame. Isolated on a plain solid white background, no shadow.
```

---

## Tally
| Chapter | Painted scenes | Layers | Images (×2 devices) |
|---|---|---|---|
| A · Fall of Sati (51 Shaktipeeth) | 4 + 1 map-far |, | 13 → **26** |
| B · The coming of Hingula | 5 | 3 | 15 → **30** |
| C · Parashurama & the Brahmakshatriya | 8 | 3 | 24 → **48** |
| **Total** | | | **~104** |
