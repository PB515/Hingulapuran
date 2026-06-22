# Hingulapuran — the audio book (sound ship list)

Every sound the site uses, with its **exact filename, folder, type, and where it plays**. The system is already built and wired with **synth placeholders** so the toggle works today. Replace each file with a real recording **of the same name** and it takes over automatically. No code change needed.

## How the sound system works
- **Default muted.** A bell toggle in the header is the user's gesture that unlocks sound (browser autoplay rules, and reverence). The choice is remembered.
- **Beds** are seamless loops, the "room tone" of a section. As you scroll into a section, its bed **crossfades** in.
- **Oneshots** are punctuation (a bell, a conch), fired once when a section enters view.
- **Missing files are a silent no-op**, so you can drop them in one at a time.

## The sound identity (instrument palette — keep it to this, no generic "spa-India" stock)
- **Tanpura / shruti drone** — the sacred room tone.
- **Sarangi or bansuri** — the lead voice of grief and devotion (bhakti).
- **Pakhawaj, dhol, nagara** — war-drums (veer; she is the goddess of war).
- **Ghanta (bell), shankh (conch), ghungroo** — punctuation, not melody.
- **Female vocal aakaar (wordless hum)** — the Devi's presence, used sparingly.

## Format & delivery
- Drop files in **`public/audio/`** with the exact names below.
- Placeholders are `.wav` so the names are stable. Deliver real recordings as **`.wav`** too (same name); at ship time we batch-convert to compressed `.ogg`/`.mp3` to cut size. Keep beds **seamless loops** (no click at the seam).
- Volumes are already set per file in `lib/sound/manifest.ts`; record at a natural level, we balance in code.

---

## TIER 1 — the foundation (built + placeheld now)

| # | File (`public/audio/…`) | Type | Loop | Plays where | What to record |
|---|---|---|---|---|---|
| 1 | `drone-bed.wav` | bed | yes | Hero, intro, default everywhere | A low **tanpura / shruti** drone on Sa (and Pa). Calm, continuous, ~20–40s seamless loop. The sacred air. |
| 2 | `bell-ghanta.wav` | oneshot | no | The door hero (doors part); shrine moments | One deep **temple bell (ghanta)** strike, full natural decay (~3–4s). |
| 3 | `conch-shankh.wav` | oneshot | no | The door hero opening | One **conch (shankh)** blast, the swell and fall (~2–3s). |

> Tier 1 alone (drone + bell + conch + the toggle) already feels premium. Everything below deepens it.

## TIER 2 — the reels (built + placeheld now)

| # | File (`public/audio/…`) | Type | Loop | Plays where | What to record |
|---|---|---|---|---|---|
| 4 | `sarangi-lament.wav` | bed | yes | **Fall of Sati** reel | A slow, mournful **sarangi or bansuri** line over a low drone. Aches at the fire, settles as the 51 peethas scatter. Seamless ~20–40s. |
| 5 | `pakhawaj-build.wav` | bed | yes | **Hingul** reel (penance → conquest) | **Pakhawaj / dhol** that builds tension and releases. Driving but not frantic. Seamless loop. |
| 6 | `nagara-veer.wav` | bed | yes | **Parashurama** reel | **Restrained nagara war-drums** — martial, controlled, then calm. The veer side. Seamless loop. |
| 7 | `drone-crystal.wav` | bed | yes | **Brahmarandhra** orb | A **high, pure, crystalline drone** (the crown chakra). Thin, shimmering, seamless. |
| 8 | `resolve-note.wav` | bed | yes | Map + shrine finale; the closing scene band | A **single sustained note resolving to peace** — everything dropping to stillness. Seamless. |
| 9 | `vocal-aakaar.wav` | oneshot | no | Entering the shrine/finale scene | A short **wordless female hum (aakaar)** — the Devi's presence. A few seconds, sparing. |

## TIER 3 — the sacred voice (slot reserved; supply real recordings only)

| # | File (`public/audio/…`) | Type | Loop | Plays where | What to record |
|---|---|---|---|---|---|
| 10 | `mantra-hinglaj.wav` | bed | yes | Shrine finale (opt-in) | The **Hinglaj mantra** softly sung: *Om Hingule Parama-Hingule Amrita-rupini…* A real voice (pandit / community singer). **Not synthesized** — record authentically. |
| 11 | `recite/ch65.wav` … `ch87.wav` | (future) | no | Each grantha chapter reader page (a "play recitation" button) | A **pandit reciting** each chapter. This is conservation of the oral tradition — the most on-mission audio. Build later, one chapter at a time, named by chapter number. |

## OPTIONAL — UI micro-sounds (built, placeheld, NOT wired by default)
Turn these on only if they feel right; overused, they fatigue.

| # | File (`public/audio/…`) | Type | Plays where | What to record |
|---|---|---|---|---|
| 12 | `ghungroo-tick.wav` | oneshot | nav hover / taps | A single soft **ghungroo** jingle. |
| 13 | `cloth-rustle.wav` | oneshot | grantha page turns | A short **cloth rustle / page turn**. |

---

## Section → sound map (what's wired right now)
| Section (home) | Bed | Cue on enter |
|---|---|---|
| Door hero | `drone-bed` | `conch-shankh` + `bell-ghanta` |
| Intro | `drone-bed` | — |
| Fall of Sati reel | `sarangi-lament` | — |
| Hingul horizontal scroll | `pakhawaj-build` | — |
| Brahmarandhra orb | `drone-crystal` | — |
| Parashurama climax | `nagara-veer` | — |
| Closing scene band | `resolve-note` | `vocal-aakaar` |

Grantha reading pages can take a very faint `bed-grantha` (the base drone at low volume) later; left quiet for now, since reading wants silence.

## Regenerate the placeholders
`node scripts/gen-audio-placeholders.mjs` (re-writes all the synth stand-ins). Delete a placeholder and drop in your real file of the same name to go live.
