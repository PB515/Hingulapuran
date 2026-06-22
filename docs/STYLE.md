# Hingulapuran: Style & Moodboard Bible

The single source of truth for the look, the voice, and how to make more art + chapters that fit. Read this before generating any image or writing any new section.

---

## ⛔ RULE 0: TERMINOLOGY (NON-NEGOTIABLE, hardcoded)
This is **itihaas (history)**: sacred history, revered as true by the community. **NEVER** call it, label it, or imply it is "mythology", "myth", "legend", "folklore", "story", "tale", "fable", or "lore**: in copy, headings, alt text, metadata, prompts, comments, or anywhere a reader could see. Describing it as fiction will deeply offend.
- **Use instead:** *history · itihaas · इतिहास · the account · the chronicle · the grantha · the scripture · the chapters (adhyay)*. For Devanagari/Gujarati prefer **इतिहास**.
- Applies to **every session** (build + PDF translation) and every future contributor. When in doubt, say "history."

## 1. Essence
**Veer + Bhakti, devotion with a blade.** Power held in reverence. Maximalism in *ornament and depth* (gold leaf, torana arches, miniature detail); discipline in *layout* (dark, restrained, sacred). Fierce, primal, devotional, the **old Saurashtra goddess-cult tone**, never sweet, never modern-cute.

## 2. The art anchor: Mata-ni-Pachedi
Gujarat's sacred Mother-Goddess **temple-cloth painting** (Vaghri/Devipujak/Chitara), fused with **Rajput–Marwar miniature** detail. Kalam (reed-pen) black linework, flat, frontal, hieratic. Narrative cloth, exactly why the history reads as a scrolling cloth.

## 3. Palette (locked)
| Token | Hex | Use |
|---|---|---|
| Rakta | `#3E0A1A` | deep oxblood maroon, primary ground |
| Raat | `#12101F` | cosmic night, page background |
| Sindoor | `#B5302A` | vermilion, hot accent |
| Kesari | `#D97A1A` | saffron, flame / bhakti glow |
| Swarna | `#C9A227` | antique gold, sacred, borders, CTA |
| Loha | `#6E757C` | steel, swords/shields, the *distinct* cool accent |
| Patra | `#E7D7B8` | parchment/cream, text + reading surfaces |
| Kajal | `#1A1110` | near-black ink |

## 4. Type
- **Devanagari hero**: Rozha One (`--font-display`)
- **Gujarati display**: Baloo Bhai 2 (`--font-display-guj`)
- **Latin display/subhead**: Eczar (`--font-display-latin`), Indic-rooted
- **Gujarati body**: Noto Serif Gujarati · **Body**: Mukta Vaani
- Script mismatch rule: Devanagari text → Rozha; Gujarati text → Baloo/Noto. Never mix a script into the wrong font.

## 5. Voice: Dingal / Pingal
From the language's own history: **Dingal** = fierce Charan warrior-poetry (percussive, thunderous) → the **Veer** register (battle, Parshuram, headlines). **Pingal** = soft lyrical bhakti → the **Bhakti** register (the jyot, shlokas, reading). The site breathes between them. Narrator voice = the **Charan bard**, keeper of the fort's history.

**House style (all prose, copy, summaries, translations):** **no em-dashes (—).** Use commas, colons, semicolons, periods or parentheses as the sentence needs. (En-dashes in number ranges like 65–87 are fine.) Keep the prose natural, not AI-flavoured.

---

## 6. IMAGE GENERATION: the recipe

### STYLE BLOCK (prefix every prompt)
> Sacred Mata-ni-Pachedi temple-cloth painting fused with Rajput-Marwar miniature detail. Hand-drawn kalam reed-pen black linework, flat frontal hieratic, no realism, no 3D, no shadows, no gradients. Strict limited palette only: deep oxblood maroon #3E0A1A, kalam-black #1A1110, warm cream #E7D7B8, antique gold #C9A227, steel-grey #6E757C. Aged hand-spun cotton texture. Fierce, primal, devotional, old-Saurashtra goddess-cult tone, never sweet, never modern.

### NEGATIVE (append every prompt)
> no photorealism, no 3d render, no soft pastel, no cute/chibi/disney, no modern vector, no gradients, no glow/neon, no blur, no embedded text/letters, no signature, no watermark, no extra fingers, no melted faces

### Hinglaj Mata iconography (when she appears)
Serene-but-supreme **Nani Maa**: calm glowing face, **third eye**, gold crown, **four arms** (trishula, khadga sword, lotus, abhaya-varada mudra), on her **lion**, gold halo, akhand flame at her side, oxblood-maroon sari + green-gold choli. **NOT** the naked Tantric Kottari form. Use reference images for *iconography/composition only*, never their bright glossy calendar palette.

### Rules that prevent the problems we hit
1. **Fill the frame**: each asset full-bleed at its own shape; never an element in half an empty canvas. We position in code.
2. **Transparent assets → plain WHITE background**, removed with a subject-based tool (remove.bg / Photoshop). Never colour-key (kills interior cream).
3. **Cohesion**: generate one hero plate first, approve it, then use it as a **style reference** (`--sref` / image prompt) for all others.
4. **Responsive art**: flagship scenes need a **desktop (landscape) + mobile (portrait)** set; one aspect can't fill both without crop/letterbox.
5. **Seamless sequences**: independently-generated panels DON'T tile (visible seams). Either generate one continuous wide cloth, OR present panels as **separate framed plates with gaps** over a cloth background (what the legend does now).
6. **Always convert to WebP** before use: `npm run art:webp` (`node scripts/to-webp.mjs`), ~85% smaller. Keep PNG originals as source.

---

## 7. The lore (canon): source for sections, blog, captions
- **Sati → Shakti Peeth:** Vishnu's Sudarshan cuts Sati into 51; her **Brahmarandhra** falls at Hingul (Balochistan) → Hinglaj. The 51 pieces scattering = the temple-map tie-in.
- **Hingul-rakshasa (the legend scroll):** asura disrupts a havan → Ganesh slays him → brother **Hingul** does tapasya, gains a boon, defeats Indra & the devtas → devtas beg **Parvati**, who vows his fall → he pursues the radiant goddess → an **unprecedented light** consumes him → he repents → she grants the vardan: her name shall be **Hinglaj**, worshipped till the end of the world.
- **Kshatriya kuldevi (Parshuram climax):** Parshuram annihilates the Kshatriyas; survivors take **sharan** at Hinglaj; she stays his hand; his borrowed Shiva-power drains (it was *her* Shakti); Guru Dattatreya reveals the truth; Parshuram **lays his sword at her feet** → kuldevi of the Kshatriya.
- Mantra: `ॐ हिंगुले परमहिंगुले अमृतरूपिणि तनुशक्तिमनः शिवे श्री हिंगुलाय नमः`
- Vow: `प्राण जाये पर वचन न जाये`

## 8. STORY BACKLOG: ideas to add (sections / blog / gallery captions)
*Fill/expand as the client supplies more. Each = a candidate blog post, scroll vignette, or gallery plate.*
- The Hinglaj **Yatra**: the pilgrimage across the Makran desert (→ yatra-band art, a scroll vignette)
- The **akhand jyot**: the eternal flame and its meaning
- The **sindoor stone**: aniconic worship, why no idol
- The **Charan / Gadhvi** bards and their goddess-cult ballads (dakla)
- The other kuldevi forms (Durga, Kali, **Meldi**, **Bahuchara**, **Khodiyar**), gallery + short accounts
- Hinglaj across the **three states** (Rajasthan / Gujarat / Maharashtra), the temple-map accounts
- *(client to add more, this is the ideation list)*

## 9. Asset inventory (where each is used)
| Asset | Status |
|---|---|
| door/ (backdrop, leaf, jyot, toran) + desktop-* | ✅ DoorHero (responsive) |
| legend/ a–e | ✅ LegendScroll (framed plates) |
| parshuram/full | ✅ ParshuramClimax |
| gallery/ (6 Devi plates) | ✅ /gallery |
| brand/logo | ✅ header |
| map/pin | ✅ temples map |
| motifs/cloth-texture | ✅ legend background |
| motifs/border-strip, jyot-emblem, corner-floret | ⏳ unused, for section dividers/footers |
| **scene/hingol-river, scene/cave-shrine** | ⏳ **NOT placed yet**: intended as section background bands (books/temples) |
