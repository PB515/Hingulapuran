# Hingulapuran — the art prompt book (bulk ship list)

Every remaining image the site needs, with its **exact filename and folder**, ready to generate in bulk and drop in. Two kinds of art:

- **Part A — flagship reel layers** (the 2.5D scroll reels). 3 layers per scene. Full layered prompts live in `SCENE-PROMPTS.md`; the manifest here is the file checklist.
- **Part B — chapter hero panels.** One opaque full-frame painting per chapter, all 87 + the invocation. Full prompts inline below.

When art lands, I wire it in: hero panels go onto the chapter reader pages and the chapter-index cards; reel layers build the cinematic sections.

---

## Conventions (read once)

**Generate every image twice:** `--ar 16:9` → save to the `desktop/` folder, `--ar 9:16` → save to the `mobile/` folder, same filename.

**Folders & names**
- Reel layers: `public/art/stories/<chapter>/{desktop,mobile}/s<n>-<layer>.png` where `<layer>` is `far`, `subject`, or `near`.
- Chapter hero panels: `public/art/chapters/{desktop,mobile}/ch<NN>.png` (zero-padded: `ch00`…`ch87`).

**Shared style preamble** — paste this *before* every Part B SCENE line (it is already baked into the Part A prompts in `SCENE-PROMPTS.md`):
```
Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail; hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients; strict palette only — deep oxblood maroon #3E0A1A ground, kalam-black #1A1110 outlines, warm cream #E7D7B8, antique gold #C9A227, cold steel-grey #6E757C; aged hand-spun cotton texture; fierce, primal, devotional, never sweet, never modern; sacred history (itihaas) rendered as reverent cloth, fills the entire frame, dense floral block-print border, no white margin. SCENE:
```

**Set this NEGATIVE once in your tool:**
```
no photorealism, no 3d render, no soft pastel, no cute, no chibi, no disney, no modern vector, no corporate illustration, no gradients, no glow, no neon, no blur, no embedded text, no letters, no signature, no watermark, no extra fingers, no melted faces
```

**After generating** (in `C:\Users\PC 1\Desktop\hingulapuran`):
- Chapter hero panels are **opaque** — no cut-out needed. Just convert: `node scripts/to-webp.mjs`.
- Reel `subject`/`near` layers must be drawn on **plain solid white** → `node scripts/cutout.mjs` (keys the white out) → `node scripts/to-webp.mjs`. `far` layers are opaque (convert only).

**The tally**
| Set | Files | × devices |
|---|---|---|
| A · Hingul reel (5 scenes × 3) | 15 | 30 |
| A · Parashurama reel (8 scenes × 3) | 24 | 48 |
| B · Chapter hero panels (ch00–ch87) | 88 | 176 |
| **Total remaining** | **127** | **254** |
| *(Fall of Sati reel — already done)* | *13* | *26* |

---

# PART A — the two flagship reels to finish

Full, copy-paste-ready layered prompts for each file below are in **`SCENE-PROMPTS.md`** (Chapter B and Chapter C). This is the file checklist so nothing is missed. Each scene = `s<n>-far` (opaque) + `s<n>-subject` (on white) + `s<n>-near` (on white).

### Chapter B — The Coming of Hingul → `public/art/stories/hingul/{desktop,mobile}/`
- `s1-far` `s1-subject` `s1-near` — The thousand-year penance on Meru
- `s2-far` `s2-subject` `s2-near` — Conquest of the heavens
- `s3-far` `s3-subject` `s3-near` — The vow of the Devi
- `s4-far` `s4-subject` `s4-near` — The unprecedented light
- `s5-far` `s5-subject` `s5-near` — The vardan (Hingula Peeth)

### Chapter C — Parashurama & the Brahmakshatriya → `public/art/stories/parshuram/{desktop,mobile}/`
- `s1-far` `s1-subject` `s1-near` — King Sahastrarjun enthroned
- `s2-far` `s2-subject` `s2-near` — The theft of Kamadhenu
- `s3-far` `s3-subject` `s3-near` — Parashurama slays Sahastrarjun
- `s4-far` `s4-subject` `s4-near` — Jamadagni slain → the vow
- `s5-far` `s5-subject` `s5-near` — The cleansing of the earth
- `s6-far` `s6-subject` `s6-near` — Refuge at Mount Hingula
- `s7-far` `s7-subject` `s7-near` — The twelve-year penance
- `s8-far` `s8-subject` `s8-near` — Hingula manifests (the Brahmakshatriya)

> Chapter A (Fall of Sati) is already arted and live. After B and C art lands, both home sections upgrade from their stand-ins to the full 2.5D reels.

---

# PART B — chapter hero panels (ch00–ch87)

One opaque full-frame painting per chapter, for the chapter's reader page and its index card. Paste the **shared style preamble** above, then the SCENE line. Save to `public/art/chapters/{desktop,mobile}/<file>.png`.

## The invocation & Pratham Pravah (worship + the Devi Mahatmya)

### ch00 — Mangalacharan (the invocation)
`ch00.png`
SCENE: A full-frame devotional invocation plate: the goddess Hinglaj Mata enthroned at center as an aniconic radiant emblem of unbroken divine flame (akhand-jyot), her form embodying Mahalakshmi, flanked by the two Vedic mother-forms Gayatri and Savitri with folded hands. A single eternal oil lamp burns before her lotus-feet, golden radiance filling the cream field, composed as a hieratic opening title vignette of the world's origin.

### ch01 — The Rite of Devi-Worship
`ch01.png`
SCENE: On the heights of Mount Kailasa, the youthful Skanda kneels with folded hands before Mahadeva, who is seated in serene majesty and gestures in teaching. The mountain rises behind them, a lotus blooms at the foreground, and the two divine figures fill the frame in calm hieratic dialogue about the Goddess Ambika.

### ch02 — Creation of the World from Mahalakshmi
`ch02.png`
SCENE: The supreme Mahalakshmi stands radiant at center, three-formed, apportioning her powers — handing Gauri to Rudra, Lakshmi to Vishnu, and Saraswati to Brahma, the three great gods arrayed around her. From her body the whole moving-and-unmoving cosmos issues as a golden cosmic egg, filling the full frame.

### ch03 — The Various Forms of the Great Goddess
`ch03.png`
SCENE: The dark, many-armed Mahakali rises in fierce splendour to slay the demons Madhu and Kaitabha, her weapons raised, eyes blazing, against a deep oxblood field. She fills the frame as the protective form the Great Goddess takes in the cosmos's hour of need.

### ch04 — The Origin of Goddess Durga
`ch04.png`
SCENE: The Goddess, lion-mounted and many-armed, hurls her flaming chakra to slay the boon-empowered asura Durga, who topples before her with his usurped insignia of the gods falling from his grasp. She dominates the full frame in the decisive instant of victory, taking his name as her own.

### ch05 — The Many Names of Shakti
`ch05.png`
SCENE: A full-frame hieratic array of the named Shakti-forms born of Durga, arranged as a sacred wall of goddesses — each form distinct in posture and emblem, ranked in golden registers across the cream cloth, a luminous nama-mala of the many names of the supreme Shakti.

### ch06 — The Rite of Mantra & Nyasa
`ch06.png`
SCENE: A seated devotee performs nyasa, the syllables of the nine-syllable Chandika mantra and the guardian-goddesses Brahmani and Saraswati set glowing upon his forehead, eyes, throat, heart and arms, with the protective deities of the eight directions ringing him. The central navakshari yantra blazes behind, filling the frame.

### ch07 — The Navratri Vrat Rite
`ch07.png`
SCENE: The sacred Navratri kalasha, crowned with mango-leaves and a coconut, is installed upon the decorated vedi beneath an auspicious star, a priest's hands lowering it with reverence and a lamp burning beside. The consecrated water-pot fills the center of the frame as the heart of the vrat.

### ch08 — The Durga-Puja Procedure
`ch08.png`
SCENE: The Kumari-puja: a row of young girl-goddesses, aged two to ten, seated and worshipped as living forms of the Goddess from Tripura to Subhadra, each haloed and honoured with offerings. The line of sacred girls spans the full frame in radiant hieratic order.

### ch09 — The Devi Homa Rite
`ch09.png`
SCENE: A blazing square homa-kunda at center, its flames leaping upward, encircled by the seven Matrika mother-goddesses — Brahmani, Maheshwari, Kaumari, Vaishnavi, Varahi, Aindri and Chamunda — invoked around the fire as ghee and grain are offered. The fire-altar and its ring of mothers fill the frame.

### ch10 — Fruits of the Navratri Vrat
`ch10.png`
SCENE: The image of the Goddess, garlanded and crowned, is borne in procession upon a festal chariot through the village, devotees singing and chanting the Veda alongside, drums and conches sounding. The chariot of the Mother fills the full frame in joyous devotional movement.

### ch11 — Ordinance of Nava-Chandi & Shata-Chandi
`ch11.png`
SCENE: The nine Navadurga forms — Nanda, Raktadantika, Shakambhari, Durga, Bhima, Bhramari, Kalika, Shivaduti and Aindri — arrayed in a luminous nine-panel sequence across the cream cloth, each goddess distinct in posture, weapon and vahana, the whole filling the frame as a sacred vrat-array of the nine nights.

### ch12 — Ordinance of Sahasra-Chandi
`ch12.png`
SCENE: The great thousandfold rite: rows of brahmins seated in recitation before the Goddess's image while priests offer the supreme dana at center — a pure white horse led forward, gold mohurs and a golden Devi-image presented. The mass offering fills the full frame in solemn grandeur.

### ch13 — The Purashcharana Rite
`ch13.png`
SCENE: A lone devotee seated in deep contemplative japa before the radiant Goddess, a rudraksha mala turning in his hand and a single lamp burning between them in the stillness of the empowering observance. The solitary worshipper and the Mother's glowing presence fill the frame.

### ch14 — The Origin of Hayashri / Hayagriva
`ch14.png`
SCENE: The horse-headed Vishnu-Hayagriva, newly made by the grace of Mahamaya, rises in radiant majesty to slay the asura Hayagriva, his many arms bearing conch, chakra and weapons, the demon falling before him. The horse-faced Lord fills the frame in the moment of triumph.

### ch15 — The Origin of Madhu & Kaitabha
`ch15.png`
SCENE: Vishnu reclines in yoga-nidra upon the coils of the great serpent on the cosmic ocean, a lotus rising from his navel bearing the seated Brahma, while the two demons Madhu and Kaitabha loom up from the dark waters to menace the lotus-throned creator. The cosmic waters and sleeping Lord fill the frame.

### ch16 — Brahma's Hymn to Yoganidra
`ch16.png`
SCENE: Brahma, seated upon the navel-lotus with folded hands, sings the great hymn to the radiant goddess Yoganidra-Mahamaya, who rises luminous above the sleeping Vishnu as embodied Dhriti, Smriti, Lakshmi and the all-form of the three worlds. The goddess's blazing presence dominates the full frame.

### ch17 — The Devi as Universal Shakti
`ch17.png`
SCENE: The supreme Devi-Shakti enthroned at the radiant center, the trimurti and the great gods — Indra, Agni, Surya, Varuna — arrayed around her, each visibly animated by streams of her power flowing into them, Shiva inert without her touch. The doctrinal tableau of the one Shakti pervading all fills the frame.

### ch18 — The Slaying of Madhu & Kaitabha
`ch18.png`
SCENE: Vishnu, risen and wrathful upon the cosmic waters, slays the two demons Madhu and Kaitabha across his mighty thighs, his weapons flashing as the deluded demons fall. The decisive duel on the ocean of dissolution fills the full frame.

### ch19 — Bhagavati's Command to Brahma & the Gods
`ch19.png`
SCENE: The supreme Devi, smiling Maya-Shakti, commands Brahma, Vishnu and Rudra to take up creation, preservation and destruction, and invites them aboard her celestial vimana to behold the worlds. The goddess and the three gods at the threshold of the radiant aerial chariot fill the frame.

### ch20 — Brahma & the Gods' Vision of Mahamaya
`ch20.png`
SCENE: The Devi's celestial vimana soars through wondrous worlds while Brahma beholds the vision of countless parallel cosmoses — multiple radiant Vishnus and Shivas enthroned on their own Kailasas and oceans, ranked into the distance. The cosmos-within-cosmos vision fills the full frame in golden tiers.

### ch21 — Hymn to Mahamaya
`ch21.png`
SCENE: The gods led by Vishnu stand with folded hands before the radiant Mahamaya-Prakriti enthroned in glory, singing her praise as the source and abode of all, her aura illuminating their upturned faces. The devotional stavan tableau before the luminous goddess fills the frame.

### ch22 — Hymn to Mahamaya in Distress
`ch22.png`
SCENE: The gods, beset and imperilled, kneel in anguished supplication before the towering radiant Mahamaya, hands raised in a hymn of distress, the deep oxblood field pressing around them as her serene golden form rises in answer above. The sankat-stavan of the gods in crisis fills the full frame.

### ch23 — The Tasks Mahamaya Assigns the Gods
`ch23.png`
SCENE: The radiant goddess Mahamaya enthroned at center on a lion-throne, hand raised in command, apportioning their cosmic offices to Brahma, Vishnu and Rudra who stand in reverent rows before her; each god turns toward her as the single Shakti who empowers them.

### ch24 — The Nirguna Principle
`ch24.png`
SCENE: A formless central emblem of pure radiance — an aniconic disc of light enthroned where a deity's face would be — from which the Sankhya evolutes unfold outward in concentric ordered bands; the goddess as nirguna essence giving rise to the world of forms.

### ch25 — Discourse on the Three Gunas
`ch25.png`
SCENE: A single great oil-lamp burning at center — wick, oil, and flame shown as one luminous emblem — flanked by the three gunas personified as three figures (serene sattva, restless rajas, shadowed tamas), the lamp uniting them as Brahma teaches the seated sage Narada.

### ch26 — The Devi as Universal Shakti / Virat
`ch26.png`
SCENE: The Virat tableau — the goddess as the vast central Shakti with the gods Brahma, Vishnu, Rudra, Surya, Kubera, Agni and Vayu arrayed around her in a ring, each figure visibly animated by her single radiance flowing outward to them.

### ch27 — The Tale of Satyavrata
`ch27.png`
SCENE: The assembled gods seated in the Naimisharanya forest grove before sage Lomasha, who stands with hand raised proclaiming Shakti and Adi-Prakriti supreme above all deities, the goddess emblem radiant above the gathering.

### ch28 — The Tale of Satyavrata, concluded
`ch28.png`
SCENE: The once-simpleton brahmin transformed by the goddess's grace into an honored learned poet, seated with palm-leaf manuscript and reed-pen, garlanded and crowned with esteem, the goddess's blessing radiance descending upon him.

### ch29 — The Rite of Devi-Yajna
`ch29.png`
SCENE: Sage Vyasa instructing King Janamejaya beside a pure sattvika fire-altar, the muni's clean offering rising in true flame at center while the lesser rites recede — the honest yajna of purity foregrounded before the goddess's emblem.

### ch30 — The Devi-Yajna Ordained by Bhagavan / the Cosmogony
`ch30.png`
SCENE: The samudra-manthana — gods and daityas churning the cosmic ocean with the serpent rope around golden Meru, the treasures Kamadhenu, Ucchaihshravas, Rambha and Dhanvantari emerging from the milky waters under the goddess's ordaining presence.

### ch31 — The Dhruvasandhi Akhyana
`ch31.png`
SCENE: The just solar-dynasty king Dhruvasandhi enthroned in his peaceful realm, his two queens — the wise Manorama and the lovely Lilavati — seated at his sides, opening the Sudarshana account in a court of order and contentment.

### ch32 — Dhruvasandhi Akhyana, cont. — the exile
`ch32.png`
SCENE: Queen Manorama fleeing through the forest at night clutching the infant prince Sudarshana, arriving at sage Bharadvaja's ashram where the sage receives them in shelter; the lamp of the hermitage glowing against the dark wilderness.

### ch33 — Sudhajit's Pursuit
`ch33.png`
SCENE: Sudhajit's armed forces advancing on Bharadvaja's forest ashram while Manorama kneels imploring the seated sage for the child's protection, the hermitage standing as sanctuary between the mother and the approaching threat.

### ch34 — The Vishvamitra–Nandini tale (embedded)
`ch34.png`
SCENE: The wish-cow Nandini standing serene before sage Vasishtha as she conjures a radiant host that routs Vishvamitra's scattering army — brahma-tej overpowering kshatra-tej — soldiers and chariots thrown back from the gentle cow's miraculous power.

### ch35 — Shashikala's Longing
`ch35.png`
SCENE: Prince Sudarshana seated in klim-japa beneath the ashram trees, beholding the armed Jaganmata — the red-robed goddess mounted on her lion — granting him her darshan in a descending radiance above his meditation.

### ch36 — Shashikala's Resolve
`ch36.png`
SCENE: Princess Shashikala of Kashi in her chamber, hands joined in unwavering vow, facing her counseling mother; the daughter's resolute posture and inward gaze declaring she will wed only Sudarshana even into forest hardship.

### ch37 — The Svayamvara: Shashikala Chooses Sudarshana
`ch37.png`
SCENE: The svayamvara hall lined with assembled kings on their seats, garland in hand, Shashikala turning her face away from them all toward the absent exile, declaring the goddess has ordained Sudarshana alone for her.

### ch38 — Sudhajit's Plea & the Kings' Outrage
`ch38.png`
SCENE: Sudhajit standing with placating gesture before the rows of assembled kings who rise red-eyed with fury, fists and weapons raised, the council erupting as war is declared in the Kashi court.

### ch39 — The Wedding Arranged
`ch39.png`
SCENE: The night Vedic wedding of Sudarshana and Shashikala circling the sacred fire under the goddess's protective radiance, while in the dark margins the rejected rival kings muster chariots and arms for battle.

### ch40 — The Battle & the Devi's Victory
`ch40.png`
SCENE: The lion-mounted goddess Chandika manifesting with a roar above the battlefield, weapons in her many arms, slaying the rival kings Sudhajit and Shatrujit as their bodies fall from the chariots — the goddess triumphant over the assault.

### ch41 — The Conclusion: Sudarshana Enthroned
`ch41.png`
SCENE: Sudarshana enthroned in his regained kingdom worshipping Ambika, the goddess granting her protective presence above his city while the surviving kings bow in hymn before her radiant lion-borne form.

### ch42 — Return to Ayodhya & Reconciliation
`ch42.png`
SCENE: Sudarshana bowing with folded hands before the rival queen in magnanimous reconciliation in the Ayodhya court, honoring her as his own mother, the goddess's grace presiding over the scene of equanimity.

### ch43 — Navratri Vrat & Kalasha-Mandapa Installation
`ch43.png`
SCENE: The decorated Navratri mandapa with toranas and canopy, the four-armed Ambika — bearing conch, chakra, gada and padma — enthroned upon her lion above the consecrated kalasha set on the vedi, brahmins performing the sthapana rite.

### ch44 — Fruits of the Navratri Vrat / Kumari-puja eligibility
`ch44.png`
SCENE: The kumari-puja — a young girl seated and honored as the living goddess, worshipped with offerings and lamp before the sacred fire as brahmins perform the homa during the Navratri vrat.

### ch45 — The Various Avataras of Durga
`ch45.png`
SCENE: A devotional gallery of the avataras the goddess empowers — the lion-faced Narasimha, the dwarf Vamana, and axe-bearing Bhargava (Parashurama) — arrayed around the central goddess as Maya, her radiance veiling and revealing the world behind them.

## The Mahishasura-vadha arc (ch 46–64)

### ch46 — The Origin of Mahishasura
`ch46.png`
SCENE: The danava-king Mahisha stands in fierce one-pointed tapas on the slopes of Mount Hemagiri, arms raised, ringed by austerity-flame, as four-faced Brahma manifests above in a mandorla of antique-gold light to grant the boon that no deva, daitya, or man may slay him.

### ch47 — Mahishasura's Conquest
`ch47.png`
SCENE: The buffalo-demon Mahishasura, black-horned and crowned, sits enthroned in sole sovereignty over the three worlds, the dethroned gods bowed low beneath his dais while his generals flank the throne.

### ch48 — Brihaspati's Counsel to Indra
`ch48.png`
SCENE: In Indra's court the guru Brihaspati, robed and radiant, counsels the assembled gods to war, one hand raised in teaching-gesture before Indra on his throne and the seated devas.

### ch49 — The Deva-Daitya War
`ch49.png`
SCENE: The pitched deva-daitya battle at its turn, the demon general Tamraksha falling backward struck down amid clashing ranks of gods and daityas, a sky of arrows above.

### ch50 — The Deva-Daitya War, cont.
`ch50.png`
SCENE: The buffalo-demon Mahishasura, enraged, charges the gods with his great upraised mace, the deva host breaking and routed before him across the battlefield.

### ch51 — Rudra's Counsel
`ch51.png`
SCENE: The defeated gods ride their vahanas in solemn procession toward Vishnu under auspicious skies, while Rudra at their head urges unity, hand outstretched.

### ch52 — The Tejas the Gods Cast into One Place
`ch52.png`
SCENE: The birth of the Goddess Mahishasura-mardini — streams of radiant tejas pour from every assembled god and fuse into one blazing mass that takes form as the supreme many-armed Devi, the gods arming her with trishula, chakra, vajra and bow.

### ch53 — Mahisha's Envoy to the Devi
`ch53.png`
SCENE: The lion-mounted Devi, divine and fully armed, lets out a world-shaking roar that terrifies the demons, the gods praising her at her side as the cosmos trembles.

### ch54 — Mahisha's Envoy & Deliberation
`ch54.png`
SCENE: The envoy Tamraksha kneels before the buffalo-demon Mahishasura in his court, reporting that the gods forged the Devi from their combined tejas and that she stands alone.

### ch55 — Mahisha's Deliberation, cont.
`ch55.png`
SCENE: Mahishasura, smitten by the Devi's described beauty, sits wavering on his throne between war and wooing, a minister at his side giving statecraft counsel in the demon court.

### ch56 — The Demon Court's Statecraft
`ch56.png`
SCENE: Mahishasura's war-council assembled in deliberation, ministers ranged before the enthroned buffalo-demon weighing war against treaty with the Devi.

### ch57 — The Devi Slays Durmukha
`ch57.png`
SCENE: The lion-mounted Devi strikes down the demon general Durmukha in the opening clash, her trishula driving him to the ground as the demon army recoils in dismay.

### ch58 — The Devi vs Chikshura & Tamraksha
`ch58.png`
SCENE: The demon commander Chikshura, conch at his lips, rallies the fleeing demon host and confronts the lion-mounted Devi in single combat, Tamraksha joining the fray beside him.

### ch59 — The Devi Declares Her Dharma
`ch59.png`
SCENE: The lion-mounted Devi rises over the battlefield proclaiming her dharma — to protect the good and destroy the wicked — one hand raised in declaration, while the ministers Asiloma and Bidala confer anxiously below.

### ch60 — The Battle Continues
`ch60.png`
SCENE: The many-armed lion-mounted Devi mows through the demon commanders, the battlefield turning wholly against the daityas as her weapons fell them on every side.

### ch61 — The Tale of Mandodari
`ch61.png`
SCENE: The maiden Mandodari, beautiful as the waxing moon, stands in King Chandrasena's court of Simhala-desha refusing marriage and resolving on tapas, her parents the king and Queen Gunavati seated by.

### ch62 — The Slaying of Mahishasura
`ch62.png`
SCENE: The climactic Mahishasura-mardini slaying — the lion-mounted Devi plants her foot on the shape-shifting buffalo-demon and beheads him with her trishula and mace, the gods raining flowers from above.

### ch63 — The Devi's Victory-Stuti & the Savitri-vrat
`ch63.png`
SCENE: The gods led by Indra stand in a victory-hymn before the lion-mounted Devi who rises radiant over the fallen buffalo-demon, hands joined in praise.

### ch64 — The State of the Earth after Mahisha's Slaying
`ch64.png`
SCENE: The bridge-vision of Hingulambika rising self-arisen from a red lotus, red-eyed and luminous, over an earth restored to peace after the victory.

## The Hinglaj core — Dwitiya Pravah (ch 65–87)

### ch65 — The Origin of Hingula
`ch65.png`
SCENE: The demon Hingul stands in his thousand-year penance on Mount Meru, balanced on a single toe with arms raised, austerity-fire scorching the cosmos while the terrified gods flee toward Brahma above.

### ch66 — The Origin of Hingula, continued
`ch66.png`
SCENE: The luminous enchantress-form of the Goddess stands before the lust-struck demon Hingulasura at the cave-mouth in the Sindhu region, the moment of his dissolution as he merges crying "Devi!" and his soul is released to salvation.

### ch67 — The Glory of the Hingul-tirtha
`ch67.png`
SCENE: The radiant Hingul-tirtha of Bharatavarsha with its three holy rivers, gods and rishis bathing in its sacred waters, a pilgrim freed of all sin by its darshan.

### ch68 — Origin of the Hingula & Mandakini Tirthas
`ch68.png`
SCENE: Brahma, four-faced and gold-haloed, stands at the Rama-kshetra as his sacred kumbha tilts and the holy water spills and splits into two living rivers branching north and south across the quaking earth.

### ch69 — The Nature of Moksha
`ch69.png`
SCENE: Rama, Sita and Lakshmana seated in reverence before the white-bearded guru Vasishtha at the sacred tirtha, the sage's hand raised in upadesha, the holy mountain and river behind them, kusha-grass and water-pot before.

### ch70 — Description of Mount Hingula
`ch70.png`
SCENE: The golden mountain Hinguladri, its trees and stones shining like gold, with sage Dadhichi at his ashram worshipping Mahalakshmi and the fierce Chamunda flanked by guardian spirits at the four quarters above a sacred lake.

### ch71 — Glory of the Punyada Tirtha
`ch71.png`
SCENE: The great Punyada tirtha north of Mount Hingula, its bright confluence of waters thronged with pilgrims, and a once-fallen brahmin kneeling cleansed and radiant at the water's edge.

### ch72 — The Slaying of Bhimasura
`ch72.png`
SCENE: The many-armed Devi on her lion strikes down the demon Bhimasura amid his routed host as the freed gods rejoice and Indra returns to a restored Swarga.

### ch73 — Origin of Ramtirth
`ch73.png`
SCENE: Parashurama, axe in hand, stands in long tapas upon Mount Hingula as the cosmos trembles, and Shiva with Ambika grants him darshan and boon while the Muktiganga river springs forth.

### ch74 — Origin of the Saraswat Brahmins
`ch74.png`
SCENE: Goddess Saraswati manifests sun-bright and four-armed, moon-pure and gold-adorned, upon the bank of her river as Brahma kneels in supplication before her over the drought-stricken earth.

### ch75 — Origin of the Saraswat Brahmins, continued
`ch75.png`
SCENE: Saraswati seated on the river-bank cradling the newborn luminous Saraswata son as celestial drums sound, apsaras dance and the gods raise cries of victory above.

### ch76 — The Theft of Kamadhenu
`ch76.png`
SCENE: The thousand-armed king Sahasrarjuna seizes the wish-cow Kamadhenu as she stands radiant amid the miraculous feast she has manifested, the grieving sage Jamadagni and Renuka looking on at the ashram.

### ch77 — Parashurama-kshetra
`ch77.png`
SCENE: Parashurama, axe raised, takes his fierce vow over the wounded body of his father Jamadagni while Renuka charges him to rid the earth of the offending kings and restore it to the brahmins.

### ch78 — The Battle of Rama and Arjuna
`ch78.png`
SCENE: Parashurama in the seven-day duel severs the arms of the thousand-armed king Kartavirya one by one beneath a sky darkened with arrows, shattered bow and mace at their feet.

### ch79 — The Tale of King Ratnasena
`ch79.png`
SCENE: King Ratnasena leads his five apsara-born princesses through the forest to the Saraswati-bank ashram, where the compassionate rishi rises to receive the throne-forsaking king.

### ch80 — Dadhichi's Deliberation
`ch80.png`
SCENE: The sage Dadhichi seated in deep contemplation beneath a great wheel of time-units and the death-foretelling constellations of Saturn and the eclipsed sun and moon arrayed across the night sky.

### ch81 — The Slaying of Ratnasena
`ch81.png`
SCENE: The widowed queens entrust their five young princes to the rishi at the Saraswati bank and ascend as sati beside their slain king Ratnasena, the rishi's hand raised in granting refuge.

### ch82 — Jayasena Granted Abhaya & Brahma-vidya
`ch82.png`
SCENE: Parashurama, recognized as Narayana, lowers his axe-bow in peace as he imparts the dhanurveda and mantras to the kneeling prince Jayasena and his brothers, his open hand granting abhaya.

### ch83 — The Mantra-Initiation (Brahmakshatriya)
`ch83.png`
SCENE: The rishi Gautama directs the kneeling Jayasena toward the Saraswata rishi who bestows mantra-diksha upon the princes, the warriors rising transformed as Brahmakshatriya by the sacred fire.

### ch84 — Hingula Manifests to the Warriors
`ch84.png`
SCENE: Goddess Hingula manifests radiant above Jayasena deep in tapas at Hinguladri, her hand raised in vardan as she decrees the thousand-year rule and names herself kuldevi of his lineage, flowers and offering before her.

### ch85 — The Brahmakshatriya Genealogy
`ch85.png`
SCENE: The branching family-tree of the Brahmakshatriya kings spreads across the frame, the righteous brothers Shrutasena and Viharsha ruling their twin cities with brahmins and the agnihotra fire, the lineage flowing outward to many named lands.

### ch86 — Origin of the Lohana, Pushkarna & Bhatia Communities
`ch86.png`
SCENE: King Jayasena enthroned at Kanauj as the Saraswat brahmin Durgadeva performs his sea-deity upasana before the forty-eight Rathod chieftains, the warrior line branching into its communities below.

### ch87 — The Contents of the Hingulapuran
`ch87.png`
SCENE: A grand unfurled scroll of the whole sacred account, its panels recapping Goddess Hingula's manifestations, the slaying of Mahishasura, the Parashurama campaign and the Brahmakshatriya origin, crowned by the enthroned Hingula Mata as archive of all.
