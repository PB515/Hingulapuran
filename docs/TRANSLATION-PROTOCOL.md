# Hinglaj Puran — Distributed Translation Protocol

## Why this exists
To translate the full grantha faster by running translation across **many AI agents in parallel**, with **one checker/merger** (the lead) verifying every submission against the source and merging it into the canonical translation. This is devotional **itihaas** — faithfulness and consistency matter more than speed, and the final text still needs **pandit / native-scholar review**.

## Roles
- **Translators (many).** Each takes one or more chapters, translates from the page-images into the standard template, self-checks, and submits.
- **Checker / Merger (one — the lead agent).** Re-renders source pages, spot-checks faithfulness, enforces name consistency (GLOSSARY) and format, resolves flags, and merges into the canonical doc.

## The flow (per chapter)
1. **Claim** a chapter on `translation-wip/_ASSIGNMENTS.md` (status → `claimed`, add your agent name).
2. **Get the pages** (see *Rendering*).
3. **Translate** into `translation-wip/ch-NN.md` using `_TEMPLATE.md`.
4. **Self-check** (translator checklist below).
5. **Submit** — status → `ready`.
6. **Checker merges** into `DWITIYA-TRANSLATION.md` (or the Pratham doc), status → `merged`, removes the wip file.

## Two ways to be a translator agent
- **A — Agent with the repo + Node** (e.g. Claude Code): render pages yourself with `node probe/render.mjs <fromPDF> <toPDF> <dpi>`, read the PNGs, translate.
- **B — Any vision LLM** (ChatGPT / Gemini / Claude): the lead pre-renders the chapter's pages and hands you the images + this protocol + `GLOSSARY.md`. You translate from the images. **(Most scalable — any capable vision model can help.)**

## Rendering the page-images
- Tool: `probe/render.mjs` (mupdf WASM, no native deps). `node probe/render.mjs <fromPDFpage> <toPDFpage> <dpi>` → writes `pXXX.png` into `probe/`.
- **DPI:** 190–205 for body text (240 for the TOC).
- **Offset:** *PDF page = printed page + offset*, and the **offset drifts +4 to +6** through the book. **Do NOT trust the TOC page numbers.**
- **Find the real boundaries** by the chapter heading **`અધ્યાય N મો`** and the closing colophon **`ઇતિ … અધ્યાયઃ ॥ N ॥`**. Translate heading-to-colophon.
- A chapter → approximate-PDF-start map is in `_ASSIGNMENTS.md`. Render from the listed start to the next chapter's start; confirm by the heading/colophon.

## Conventions (mandatory — this is what makes submissions mergeable)
1. **Faithful, not free** — render what the text says; never embellish, modernize, or summarize.
2. **Rule 0 — itihaas.** Sacred history, revered as true. **Never** "myth / legend / story / fable / tale / lore." Use *history / account / grantha / the chapters*.
3. **Names from `GLOSSARY.md`** — use the canonical spellings (Hingulā, Mahishāsura, Chaṇḍikā…). If a name isn't there, transliterate IAST-style (ā ī ū ṛ ṃ ṣ ṭ ṇ ś) and **flag it**.
4. **Mark uncertainty** — wrap illegible/reconstructed words in `[brackets]`. List every uncertain name/passage (with its PDF page) in the **Flags** block.
5. **Speakers in italics** — *Sūta said:*, *The Goddess said:*.
6. **Shlokas** — transliterate only if legible; otherwise flag. **Never invent Sanskrit.**
7. **Keep the colophon line** — "Thus ends the Nth chapter…".
8. **One chapter per file.** Don't merge or split chapters.
9. **No em-dashes (—).** Use commas, colons, semicolons, periods or parentheses as the sentence needs. *(En-dashes in number ranges like 65–87 are fine.)* This keeps the prose natural and consistent across agents.

## Translator self-check (before status → `ready`)
- [ ] Covered the whole chapter (heading → colophon), every page.
- [ ] Names match `GLOSSARY.md`; new/uncertain ones flagged with page #.
- [ ] No myth/story language (Rule 0).
- [ ] `[brackets]` on every illegible/implied bit; **Flags** block filled.
- [ ] Frontmatter complete — especially `pdf_pp` (so the checker can re-render).
- [ ] Format matches `_TEMPLATE.md`.

## Checker / Merger process (the lead)
1. **Re-render** 1–2 of the chapter's PDF pages and **spot-check faithfulness** — does it match the page? any invented content? omissions?
2. **Names** — reconcile against `GLOSSARY.md`; add newly-confirmed names to the glossary.
3. **Format** — normalize to the canonical doc style.
4. **Flags** — carry unresolved items into `SCAN-QUALITY-NOTES.md` (for re-scan) and keep a per-chapter flag note.
5. **Merge** into `DWITIYA-TRANSLATION.md` (ch 65–87) or `PRATHAM-TRANSLATION.md` (ch 1–64), in chapter order.
6. **Update** `_ASSIGNMENTS.md` → `merged`; delete the wip file. Commit.

## Git coordination (multiple agents, one repo)
- **`git pull` before you start and before you commit** — other sessions (including the website-build chat) commit to `main`.
- Translators only ever **create/edit their own `translation-wip/ch-NN.md`** and their row in `_ASSIGNMENTS.md` — **never** the canonical translation doc (that's the merger's job). This keeps merges conflict-free.
- Commit small: one chapter's wip per commit, clear message (`wip: translate ch NN`).

## Priorities
1. **Dvitīya Pravāh 68–87** — the unique Hingula material (65–67 already merged). **Do these first.**
2. **Prathama Pravāh 15–64** — largely the Devi Māhātmya (Madhu-Kaiṭabha, Mahishāsura). It overlaps with **published English translations**, so it can be **cross-referenced** (faster, and a built-in accuracy check) — but still verified against *this* recension's wording. Ch 1–14 are ritual/liturgical: translate carefully and flag all mantras for pandit review.

## Source facts (give these to every agent)
- *Shrī Hingulapurāṇa*, within the **Skanda Purāṇa**; Gujarati by **Chhotalal Chandrashankar Shastri, CE 1915**.
- PDF: `source/Hinglaj Puran.pdf` — 300 pages, **scanned images, no text layer** (must be read visually).
- **87 adhyāy in 2 pravāh.**
- Canonical references: `GLOSSARY.md` (names), `CHAPTER-INDEX.md` (titles), `HINGLAJ-PURAN.md` (per-chapter summaries — use as a **sanity check, not** as the translation).
