# Hingulapuran — the full build list

The goal of this site is **digital conservation** of the Hinglaj Puran: the whole grantha (87 chapters) turned into a faithful, readable, beautiful archive that a stranger can understand and a community is proud of. Working translations stay marked as drafts until a pandit reviews them.

This is the complete, running build list, from finishing the home page through the chapter-wise reels to shipping. Status: ✅ done, 🟡 partial, ⬜ not started. Size: S = a sitting, M = a day, L = several days. Where a thing is blocked on art, it says so. The site is **live** at https://hingulapuran.vercel.app and auto-deploys on every push.

---

## 1. Home page (finish it)
The home page already has a strong spine. What it needs is completion and one missing link.

- ✅ **Door hero** — the temple door opens on scroll to the sanctum.
- ✅ **Intro** — the invitation and the two main calls to action.
- ✅ **Fall of Sati** — the flagship pinned reel that flows into the guided map and the real shrine photo. This one is fully built (26 art layers).
- 🟡 **Hingul section** — currently a horizontal scroll-painting stand-in. Becomes the real Hingul reel once its art exists (see section 2).
- ✅ **Brahmarandhra orb** — the 3D "where the crown fell" piece.
- 🟡 **Parashurama section** — currently a single climax shot. Becomes the real Parashurama reel once its art exists (see section 2).
- ✅ **Scene band** — the Hingol river still.
- ⬜ **H1. A "Read the grantha" section** *(S)* — the home page never links to `/grantha`, the heart of the project. Add a section that invites the reader into the archive. **Highest priority on this page.**
- ⬜ **H2. Closing / mantra section** *(S)* — a final calm beat (the Hinglaj mantra, a seva or "carry it forward" line) before the footer.
- ⬜ **H3. Mobile pass for the home reels** *(M)* — verify each pinned section on a phone (the reels need mobile art frames).
- ⬜ **H4. Section-to-section transitions** *(S)* — smooth the joins between the pinned stages.

## 2. The chapter-wise reels (the cinematic core)
Three story arcs are designed in `lib/reels.ts` with full scene prompts in `docs/SCENE-PROMPTS.md`. **Only Chapter A is built; B and C are blocked on art.** Each reel is the same pipeline: generate the scene art, run the cutout + webp scripts, wire it into the reel engine, place it (home section or its own page).

- ✅ **Chapter A — The Fall of Sati** (4 scenes + map + shrine). Built, on the home page.
- ⬜ **R1. Chapter B — The Coming of Hingul** (5 scenes) *(L, art-blocked)* — penance, conquest, the vow, the light, the boon. Art folder `stories/hingul/` is empty; prompts are ready. Generate art, then build the 2.5D reel and replace the horizontal stand-in.
- ⬜ **R2. Chapter C — Parashurama & the Brahmakshatriya** (8 scenes) *(L, art-blocked)* — Sahastrarjun, the theft of Kamadhenu, the slaying, the vow, the cleansing, refuge at Hingula, the penance, the manifestation. Art folder `stories/parshuram/` is empty; prompts are ready. Generate art, then build the reel and replace the single climax.
- ⬜ **R3. Decide the reel home** *(S, design)* — do B and C live as home sections (like A), or get their own pages (`/story/hingul`, `/story/parshuram`)? Pick before building, so the structure is consistent.
- ⬜ **R4. Further chapter reels from the 87** *(L each, future)* — the grantha holds more arcs worth a reel: the slaying of Mahishasura, Madhu and Kaitabha, the Sudarshana tale. Scene prompts not yet written. Design, prompt, art, build, one at a time.

> The art is the gate. Until the Hingul and Parashurama frames exist, those reels cannot be built. So either we generate that art next, or we build the art-free items (sections 3 to 6) first.

## 3. The grantha archive (depth)
The reader front door is built. These make it complete.

- ⬜ **G1. Finish the translation, ch 68 to 87** *(L, content)* — the per-chapter reader grows on its own as each chapter lands. The core conservation work.
- ⬜ **G2. Original alongside the translation** *(M)* — show the Gujarati or the scanned page beside the English on each chapter page. The credibility core of "faithful."
- ⬜ **G3. Downloadable original** *(S)* — a clear way to download the 1915 book itself.
- ⬜ **G4. Glossary cross-links** *(M)* — names in the text link to their "Who's Who" entry, so a reader never gets lost.
- ⬜ **G5. Search across the grantha** *(M)* — one box over every chapter, name, and place.
- ⬜ **G6. The Sacred Arc as a visual timeline** *(L)* — turn the seven-movement story into a scroll experience, not a wall of text. A showpiece.
- ⬜ **G7. Per-chapter art in the reader** *(L, art)* — one image at the head of each translation page.
- ⬜ **G8. The sacred-places map** *(M)* — wire the tirtha gazetteer into the existing temple map.
- ⬜ **G9. The family trees, drawn** *(S)* — render the styled genealogy artwork instead of a list.
- ⬜ **G10. Review status, visible** *(M)* — an honest "working draft" vs "reviewed by a pandit" marker on each chapter, and a way to track approvals.

## 4. The content pages (finish + fill)
- 🟡 **C1. Books** *(S)* — the list and detail pages exist; wire the real downloadable PDF and final cover art.
- 🟡 **C2. Blog** *(S, content)* — two posts exist; plan the conservation-story posts and connect the admin.
- 🟡 **C3. Gallery** *(M)* — the lightbox exists; fill it with the real scans and the chapter art, grouped.
- 🟡 **C4. Temples** *(S)* — the map works; confirm the shrine list and the gazetteer data.
- 🟡 **C5. Contact** *(S)* — the form exists; wire it to a real inbox and drop in the client's real email, phone, and address (still placeholders).
- ✅ **C6. Brahmarandhra** — the explainer page is done.

## 5. Cross-site systems
- 🟡 **S1. Navigation and footer** *(S)* — real links, real contact details, the grantha surfaced.
- ⬜ **S2. Page transitions** *(M)* — the route-morph / wipe from the elements library, applied site-wide for a premium feel.
- ⬜ **S3. Mobile pass, whole site** *(M)* — every page and reel on a phone.
- ⬜ **S4. SEO and share cards** *(S)* — per-page titles, descriptions, and Open Graph images so a shared link looks like a real publication.
- ⬜ **S5. Performance pass** *(M)* — the art is heavy; lazy-load, size, and budget so it stays fast.
- ⬜ **S6. Accessibility and reading comfort** *(S)* — contrast, font-size control, reduced-motion respected, Indic fonts set correctly.

## 6. Admin and backend
- ⬜ **B1. Wire Supabase env in production** *(S)* — add the four secrets in Vercel so login, posts, and the inbox work on the live site.
- 🟡 **B2. Content through the admin** *(M)* — posts CRUD and the inbox exist; confirm they drive the live blog and contact once B1 is set.

## 7. Ship and operate
- ✅ **D1. Live URL** — deployed, auto-deploys on push.
- ⬜ **D2. Custom domain** *(S)* — when the client has one.
- ⬜ **D3. Analytics** *(S)* — turn on Vercel analytics to see real traffic.

---

## Suggested order
1. **H1 grantha link on home** + **C5 real contact details** + **B1 prod env** — small, makes the live site honest and complete.
2. **G8 sacred-places map** + **G9 family trees** — quick, high-impact, the data already exists.
3. **Generate Hingul + Parashurama art**, then **R1 + R2** the two reels (this is the big "chapter-wise reels" push). Decide **R3** first.
4. **G2 original beside translation** + **G6 the Sacred Arc timeline** — the conservation showpieces.
5. **G4 glossary links** + **G5 search** — navigability.
6. **S2 to S6** polish, **C1 to C4** content fill, then **D2 / D3** domain and analytics.

> Every build goes one layer at a time, verifying each step: static, then pacing, then motion, then polish.
