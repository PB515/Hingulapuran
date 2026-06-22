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

## Clip-by-clip briefs (for finding or recording each sound)
A full description of every clip so it is easy to recognize the right one, whether you are searching a sound library, briefing a musician, or generating it. Each brief gives: where it plays and what is on screen, the feeling, the instrument and how it is played, the length and dynamics, and **search terms** to paste into a library.

### `drone-bed.wav` — the sacred air
- **Where:** plays under the whole site by default (hero, intro, anywhere without its own bed). The constant backdrop.
- **Feeling:** timeless, still, devotional. The hush of an old temple before anything happens.
- **Instrument & play:** a **tanpura** (or shruti box) droning on **Sa**, with the **Pa** present, the natural overtones shimmering. No melody, no rhythm. Just the breathing hum.
- **Length & dynamics:** a **seamless loop**, 20 to 40 seconds, flat and even (no swells that would reveal the loop point). Very low in the mix.
- **Find it / brief it:** `tanpura drone Sa Pa loop`, `shruti box drone`, `Indian classical tanpura tambura sustained`, `meditative tonic drone seamless`.

### `bell-ghanta.wav` — the strike
- **Where:** the door hero, the moment the temple doors part on scroll; again at shrine moments.
- **Feeling:** arrival, awakening, a threshold crossed. The single biggest emotional hit on the site.
- **Instrument & play:** one **brass temple bell (ghanta)** struck once, left to ring out its full natural shimmer and decay. Not a tiny hand-bell; a deep temple bell.
- **Length & dynamics:** a **oneshot**, about 3 to 4 seconds, loud attack then a long fading tail.
- **Find it / brief it:** `temple bell single strike decay`, `ghanta brass bell hit`, `Hindu temple bell toll`, `large bell resonant tail`.

### `conch-shankh.wav` — the call
- **Where:** the door hero opening, sounding with or just before the bell.
- **Feeling:** an announcement, the sacred summoned. Ancient and a little raw.
- **Instrument & play:** a **conch (shankh)** blown once, the breathy swell up and the fall away. A real player's imperfect, human tone is better than a clean synth.
- **Length & dynamics:** a **oneshot**, about 2 to 3 seconds, swelling in then tapering.
- **Find it / brief it:** `conch shell blow shankh`, `Hindu ritual conch single`, `shankha horn blast`, `temple conch call`.

### `sarangi-lament.wav` — the grief of Sati
- **Where:** the Fall of Sati reel (Sati enters the fire, Shiva's grief, the body parted, the 51 peethas scatter).
- **Feeling:** the most heartbreaking moment of the site. Mourning, then a slow settling into the sacred.
- **Instrument & play:** a slow **sarangi** (or **bansuri** flute) line, deeply vocal, with sliding meend between notes and gentle vibrato, over the low drone. A minor / komal mode (think Bhairavi or Todi colour). Sparse, breathing, never busy.
- **Length & dynamics:** a **seamless loop**, 20 to 40 seconds, soft, with one gentle rise and fall that resolves calmly so the loop does not jar.
- **Find it / brief it:** `sarangi slow sad raga`, `bansuri lament Bhairavi`, `Indian flute mournful meend`, `devotional sarangi melancholy loop`.

### `pakhawaj-build.wav` — the rising power of Hingul
- **Where:** the Hingul reel (the thousand-year penance, the conquest of the heavens), the horizontal scroll.
- **Feeling:** tension gathering, force building, then a release. Austere power, not chaos.
- **Instrument & play:** **pakhawaj** or **dhol** in a steady cycle that slowly intensifies (more strokes, more weight) and then opens out. Deep, woody, controlled. A drone may sit underneath.
- **Length & dynamics:** a **seamless loop**, roughly 15 to 30 seconds, starting measured and growing, looping cleanly.
- **Find it / brief it:** `pakhawaj building rhythm`, `dhol crescendo loop`, `Indian percussion tension rising`, `tabla pakhawaj driving cycle`.

### `nagara-veer.wav` — the warrior drums
- **Where:** the Parashurama reel (the campaign, the sword laid at her feet), the climax section.
- **Feeling:** martial, disciplined, the goddess of war. Restraint, not a battle frenzy; it resolves to calm at the refuge.
- **Instrument & play:** **nagara / nagada** kettle war-drums in a steady, heavy, ceremonial pattern. Spacious, dignified, with controlled accents. Not fast.
- **Length & dynamics:** a **seamless loop**, 15 to 30 seconds, even and weighty.
- **Find it / brief it:** `nagara war drums India`, `nagada kettledrum ceremonial`, `martial Indian drum steady`, `dhol nagara battle restrained`.

### `drone-crystal.wav` — the crown chakra
- **Where:** the Brahmarandhra orb (the 3D piece, where the crown of the head fell).
- **Feeling:** high, pure, weightless. The opening at the top of the head; light, not earth.
- **Instrument & play:** a **high, thin, crystalline drone** — bowed metal, glass harmonica, high sustained strings, or a singing bowl's upper ring. Shimmering, ethereal, almost no low end.
- **Length & dynamics:** a **seamless loop**, 15 to 30 seconds, very soft and even.
- **Find it / brief it:** `high crystalline drone ethereal`, `singing bowl high shimmer loop`, `glass harmonica sustained pad`, `celestial high drone meditation`.

### `resolve-note.wav` — the peace at the end
- **Where:** the guided map and shrine finale, and the closing scene band (the Hingol river).
- **Feeling:** everything coming to rest. Release, stillness, the journey landing.
- **Instrument & play:** a **single sustained note resolving home** (to Sa) — a soft swell on bansuri, bowed string, or a held vocal note over the drone. One long breath, no movement.
- **Length & dynamics:** a **seamless loop**, 15 to 30 seconds, very gentle, no rhythm.
- **Find it / brief it:** `sustained resolving drone calm`, `single long note peaceful raga`, `ambient Indian resolution pad`, `soft tonic resolve loop`.

### `vocal-aakaar.wav` — the Devi's presence
- **Where:** entering the shrine / closing scene. Used sparingly, a single touch.
- **Feeling:** the goddess is near. Human, warm, sacred. A whisper of presence, not a song.
- **Instrument & play:** a short **wordless female hum / aakaar** (open "aa"), a single held phrase, soft vibrato, no lyrics. One voice, intimate.
- **Length & dynamics:** a **oneshot**, 3 to 6 seconds, soft, fading.
- **Find it / brief it:** `female vocal aakaar hum`, `wordless Indian female voice sustained`, `devotional humming aalap short`, `soft female aah sacred`.

### `mantra-hinglaj.wav` — the mantra (Tier 3, real voice only)
- **Where:** the shrine finale, as an opt-in loop. The deepest devotional moment.
- **Feeling:** prayer. Direct address to the Mother.
- **Instrument & play:** the **Hinglaj mantra** softly sung or chanted by a real voice (a pandit or community singer): *Om Hingule Parama-Hingule Amrita-rupini, Tanu-shakti-manah Shive, Shri Hingulaya Namah.* Over the drone. **Do not synthesize this one.**
- **Length & dynamics:** a **seamless loop** of one or a few repetitions, calm and even.
- **Find it / brief it:** record it; if sourcing reference, `Hinglaj mata mantra chant`, `Devi mantra soft male/female chant loop`.

### `recite/ch65.wav` … `ch87.wav` — chapter recitation (future)
- **Where:** a "play recitation" control on each grantha chapter reader page.
- **Feeling:** the living oral tradition. The text spoken aloud, the way it was meant to be carried.
- **Instrument & play:** a **pandit reciting** the chapter, clear and unhurried, no music needed. One file per chapter, named by number.
- **Length & dynamics:** natural reading length, **not a loop**.
- **Find it / brief it:** record with the community. This is conservation of the sound of the grantha, the most on-mission audio of all.

### `ghungroo-tick.wav` and `cloth-rustle.wav` — UI micros (optional)
- **Where:** nav hover / taps (`ghungroo-tick`); grantha page turns (`cloth-rustle`). Off by default.
- **Feeling:** barely there. A faint physical texture, like the building is real.
- **Instrument & play:** one tiny **ghungroo** ankle-bell jingle; a short **cloth / page rustle**. Both very short and quiet.
- **Length & dynamics:** **oneshots**, well under a second.
- **Find it / brief it:** `ghungroo single jingle short`, `ankle bells tiny`, `fabric cloth rustle short`, `paper page turn soft`.

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
