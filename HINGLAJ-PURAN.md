# Hinglaj Puran — translation & scene index (working asset)

> **This doc is shared across sessions.** One chat translates/summarizes the 300-page Gujarati grantha into here; the website-build chat reads it and turns "scene candidates" into site sections. Grow it chapter by chapter.

## ★ The greater goal (north star)
**Digital conservation of the whole Hinglaj Puran.** This 100-year-old Gujarati grantha (**70+ adhyay/chapters**) is at risk of being lost. The mission is to **preserve it and carry it to the next generation** — so it doesn't vanish — by turning **every chapter into a visual representation** (a 2.5D Scene-Reel / archive entry), with the original text always readable + downloadable.
- **Long arc:** all 70+ adhyay, each with a faithful summary + visual reel. A living, growing archive.
- **Low-hanging fruit (ship first):** the chapters chosen for the **home page** (Sati/51-Shaktipeeth, Hingul, Parshuram, Brahmarandhra, Kshatriya) — prove the model, then scale chapter-by-chapter via this doc + the admin.
- **Why the architecture fits:** chapters are data-driven + admin-managed, the PDF pipeline feeds summaries, and each chapter is a repeatable reel — so 70+ chapters is a *scalable archive*, not 70 bespoke builds.

## For the analyzing session — read this first
- **Project:** *Hingulapuran* — a Hinglaj Mata book + awareness site. Live at `hingulapuran.vercel.app`, repo `PB515/Hingulapuran`, built on the IDP. The grantha is the source the whole site is built from.
- **Your task:** analyze the **300-page Gujarati PDF** (path: `source/hinglaj-puran.pdf` — confirm with user). Likely scanned page-images of a ~100-yr-old book; the Read tool renders pages (read ~20 at a time) — read the Gujarati visually and translate.
- **Method:** (1) probe 5 pages → text-vs-scanned + chapter structure; (2) build the chapter index below; (3) batched 20-page passes → per-chapter **English summary** + **scene candidates** (visual beats).
- **Output format per chapter:** `### Ch N — <title>` → 3–6 line faithful summary → `Scenes:` a short list of visual beats (each beat = a future 2.5D Scene-Reel scene; 3 layers far/subject/near).
- **Conventions:** translate **faithfully, flag uncertainties**; recommend a **pandit/native review** before any text is published (devotional content). Art style = Mata-ni-Pachedi (see `STYLE.md`); scene structure = `SCENE-PROMPTS.md`. Read the auto-memory for full project context.
- **Structure of the book:** organized into *pravah* (streams) + numbered chapters. ✅ **Confirmed from TOC: 87 adhyay across 2 pravah, 300 PDF pages.** *Pratham Pravah* = ch 1–64 (printed pp.1–204; Devi-worship vidhis + Devi Mahatmya / Mahishasur — mostly UNTRANSLATED). *Dwitiya Pravah* = ch 65–87 (printed pp.205–~293; the Hinglaj core).
- **Source facts (verified 2026-06-19):** Title *Shri Hingulapuran*, stated **within the Skanda Purana**; Gujarati translation by **Chhotalal Chandrashankar Shastri**; pub. Mumbai-Gujarati Printing Press, **Samvat 1966 / CE 1915** (~110 yrs old). **SCANNED page-images, NO text layer** (`pdftotext` returns ~0 bytes) → every page must be read visually.
- **Page-offset & pipeline (for the analyzing session):** real file = `source/Hinglaj Puran.pdf` (207 MB, > Read tool's 100 MB limit). **PDF page = printed page + 6.** The Read tool can't open it directly (`pdftoppm` not installed); instead render pages to PNG with `probe/render.mjs` (uses the `mupdf` WASM lib — no native deps): `node render.mjs <fromPDFpage> <toPDFpage> <dpi>` → writes `pXXX.png`, then Read those. ~190 dpi is legible for body text; 240 for the TOC. **Chapter→PDF-page map (Stream 2):** 65=211, 66=214, 67=219, 68=221, 69=222, 70=225, 71=228, 72=232, 73=233, 74=236, 75=239, 76=244, 77=251, 78≈254, 79≈260, 80≈267, 81≈272, 82≈276, 83≈281, 84=286, 85=289, 86=296, 87=299 *(derive any chapter as printed#+6; printed# from the TOC on PDF pp.3–5)*.

---

## Chapter index & status
- **Ch 1–64 (Pratham Pravah):** ☐ not yet translated — the bulk of the PDF (Devi puja vidhis, Navratri/Chandi, Devi Mahatmya, Mahishasur-vadha).
- **Ch 65–87 (Dwitiya Pravah):** translating now, chapter-by-chapter from the PDF.
  - ✅ **Ch 65–66 verified from PDF (2026-06-19)** — see below (seed was broadly right but mis-split the boon/conquest; corrected).
  - ◑ Ch 67–87 — seed summaries below; verify + expand from PDF.

---

## Seed summaries (user-provided, chapters 65–87 — verify + expand from PDF)

### Ch 65 — Origin of Hingula (હિંગુળા ઉત્પત્તિ) — ✅ verified from PDF (printed pp.205–208)
Opens Dwitiya Pravah. *Suta uvāca:* "I bow to Goddess Hingula, self-manifest, abode of all gods." The sages ask Suta to narrate her Mahatmya — who first worshipped her, and how she arose; Suta agrees. In the **Rambhaka** region the rakshasa **Viprachitti** had two sons, **Hingul** and **Sindur (Sindurāsura)**, who conquered all the gods. The distressed gods fled to **Parvati**, who created a son from her own body-dust, armed him, and sent him against Sindurāsura; he slew the demon in a thrilling battle (the other daityas fleeing) and was granted the title **Ganapati**. Hearing his brother was slain by the Goddess's son, **Hingul** — roaming Patala — is consumed with fury, goes to **Mount Meru**, and performs a **1000-year penance** (standing on his toe, arms raised) whose austerity terrifies the gods. They flee to **Brahma**, who comes to Sumeru and offers a boon; Hingul asks to be **unkillable by any created being, weapon, god or demon, on earth or in Patala** — Brahma grants it via the bīja-mantra. Hingul then rallies the daityas, **conquers and expels the gods from Swarga**; they again beg Parvati, who manifests an **enchanting (manohar) form**.
**Scenes:** the brothers Hingul & Sindur triumphant over the fleeing devas · Parvati creating & arming her body-born son · Ganapati slaying Sindurāsura · Hingul's one-toe penance on Meru, austerity-fire scorching the cosmos · Brahma's boon (golden light, kamandal-water sprinkled on the ascetic) · the gods driven from their thrones in Swarga · the gods beseeching Parvati → she manifests the radiant enchantress.

### Ch 66 — Origin of Hingula, cont. (હિંગુળા ઉત્પત્તિ–ચાલુ) — ✅ verified from PDF (printed pp.208–212)
The Goddess's alluring form approaches the mountain where Hingulāsura sports with apsaras; entering a cave he sees the Jagadambikā and abandons the apsaras toward her. Lust-struck, he courts her (*"who are you? I have seen no beauty like yours on earth or in heaven — be mine"*); she plays coy (*"I'll be yours if you do my bidding"*), binds him by **enchantment (kāmaṇ)**, and leads him from the mountains down into the **Sindhu region**, then **vanishes (antardhāna) into a cave**. The bewildered demon searches the Sindhu wastes; the Devi takes tangible form, and as he merges into her body crying *"Devi!"* he falls, his life-breath departs, and **he attains supreme salvation (param kalyāṇ)**. His liberated soul praises her. The gods object that granting a boon to such a cruel demon was unwise; the Devi answers that she has **slain** him — *"a boon to the cruel is nectar fed to a serpent"* — but **through her name he shall endure: from "Hingulāsura" she shall be called Hingula Devi**. She vanishes before all the gods; the chief tirtha of the Sindhu region becomes known as **Hingula**, a most fruitful place. Closing phalashruti: whoever hears Hingula's origin wins the grace of **Chandika**.
**Scenes:** the luminous enchantress before the lust-struck demon at the cave-mouth · the long chase — the Goddess leading him from the Himalaya down toward the Sindhu desert · her vanishing into the cave + the demon searching the wastes · the dissolution — the demon falling, crying "Devi!", his soul released to salvation · the gods' praise + the Devi's pronouncement "my name shall be Hingula" → her antardhāna · the Sindhu tirtha consecrated as Hingula Peeth.
> **Flag (seed vs. PDF):** seed details *Mandakini + Hingula rivers from Brahma's kamandal*, *"light of a million suns"*, and *apsaras-in-snow* were **not seen** in ch 65–66 — likely in **ch 67 (Hingula Mahatmya)** or from the user's other source; verify there. Per the doc, recommend pandit/native review before publishing.

### Ch 67–71 — ☐ gap (translate from PDF)

### Ch 72–73 — Bhimasur & Ramtirth
A new demon **Bhimasur** rises from the underworld, conquers all realms, exiles the gods (hiding in caves, eating roots). They pray to **Goddess Chandika** at Sage Dadhichi's ashram; she vows to slay him. **Ramtirth (Ch 73):** after exterminating the Kshatriyas, **Parashurama** founds the holy Ramtirth to cleanse the sin of mass slaughter.
**Scenes:** Bhimasur's conquest · gods praying to Chandika · Parshuram bathing at Ramtirth.

### Ch 74 — Origin of the Saraswat Brahmins
Sage **Dadhichi** sacrifices his life, giving his indestructible **bones to forge Indra's Vajra**. His lineage is preserved through Goddess **Saraswati**; a radiant son is born, blessed with mastery of the Vedas + weapons. These **Saraswat Brahmins** later give **secret refuge to surviving Kshatriya children** during Parshuram's purge.
**Scenes:** Dadhichi's sacrifice · the forging of the Vajra · the divine child · Saraswats sheltering the children.

### Ch 75 — ◑ (Saraswat protection continued — expand from PDF)

### Ch 76 — The theft of Kamadhenu
**Kartavirya Arjuna (Sahastrarjun)**, on a hunt with his army, is hosted by Sage **Jamadagni** to a miraculous feast manifested by the wish-cow **Kamadhenu**. Greedy, the king **steals the cow** — the spark of Parshuram's wrath. *(This is Parshuram-reel scene 1–2.)*

### Ch 77–83 — ☐ gap (translate from PDF — likely the Parshuram campaign + more)

### Ch 84 — Hingula saves the warriors
Fleeing Parshuram's extermination, **Sage Dadhichi + surviving Rajput princes** take refuge at **Mount Hingula**; a **12-year penance** (offering their own flesh). Hingula manifests and grants sanctuary, weaving the **"Brahmakshatriya"** disguise. *(Parshuram-reel scenes 6–8.)*

### Ch 85 — The divine law (King Jayasena)
Hingula instructs **King Jayasena** + princes: rule securely **1000 years**, outwardly practise **Brahmin rituals**, secretly keep the **Kshatriya** martial spirit + duties; hidden weapons + her **secret mantras** protect them from enemies, disease, evil. Rule justly by her law.
**Scenes:** the goddess instructing the kneeling king · the dual life (priest by day / warrior hidden).

### Ch 86 — Origins of the communities
The disguised princes live in forest exile (roots + fruit) in terror of Parshuram; the Goddess manifests again and decrees they **abandon weapons + take new professions** — commerce, trade, administrative writing — branching into **Khatri** and **Bhatia** (from the Bhati Rajput line), plus the **Pushkarna Brahmins** (named for the Pushkar lake near Ajmer). All keep eternal devotion to Hingula.
**Scenes:** forest exile · the goddess's decree · the branching into trades/communities.

### Ch 87 — Grand summary & blessing
Suta Purani recaps the whole grantha — the Goddess's origin, the slaying of **Mahishasur** and **Hingulasur**, **Parshuram's** campaigns, the preservation of the warrior bloodlines. Closing blessing: whoever **reads/recites/listens** is cleansed of sins, granted prosperity, and attains salvation. *(Also references the Yadava massacre at Prabhas Patan + the survival of Krishna's great-grandson **Vajranabh**.)*

---

## Ready-to-build scene reels (already prompted in SCENE-PROMPTS.md)
- **Hingul history** (Ch 65–66) — built ✓ / being upgraded to 2.5D
- **Parshuram** (Ch 76 + 84) — 8 scenes prompted ✓
- **51 Shaktipeeth** (Sati origin) — 5 scenes prompted ✓
## Future reels surfaced by the text
- **Mahishasur** · **Bhimasur / Chandika** · **Saraswat / Dadhichi & the Vajra** · **Community origins (Brahmakshatriya/Khatri/Bhatia/Pushkarna)** · **Vajranabh / Yadava**.
