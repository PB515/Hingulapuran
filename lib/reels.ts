/**
 * reels.ts — the 2.5D Scene-Reel data (chapters of the itihaas as visual reels).
 * Each scene has 3 layers (far/subject/near), desktop + mobile, + a caption.
 * Art paths follow SCENE-PROMPTS.md naming. Adding chapter #N later = a new entry.
 */
export type ReelLayer = { d: string; m: string }; // desktop / mobile webp
export type Overlay = { src: ReelLayer; scale?: number; spin?: number }; // centred extra layer (e.g. chakra)
export type ReelScene = {
  far: ReelLayer; subject: ReelLayer; near: ReelLayer; deva: string; en: string;
  subjectScale?: number;            // grow the subject (default 1)
  nearScale?: number;               // shrink the near/foreground layer (default 1)
  nearAlign?: "bottom" | "center";  // anchor the near layer (e.g. fire to the floor)
  overlay?: Overlay;                // optional centred overlay above the figures
};

const layers = (chapter: string, file: string): ReelLayer => ({
  d: `/art/stories/${chapter}/desktop/${file}`,
  m: `/art/stories/${chapter}/mobile/${file}`,
});

const scene = (chapter: string, s: number, deva: string, en: string): ReelScene => ({
  far: layers(chapter, `s${s}-far.webp`),
  subject: layers(chapter, `s${s}-subject.webp`),
  near: layers(chapter, `s${s}-near.webp`),
  deva,
  en,
});

/** Chapter A — The Fall of Sati (51 Shaktipeeth); scene 5 is the live map, not a reel scene. */
export const shaktipeethReel: ReelScene[] = [
  // Sati larger + the fire shrunk and anchored to the floor so she stays visible
  { ...scene("shaktipeeth", 1, "सती का अग्नि-प्रवेश", "Sati enters the sacred fire"), subjectScale: 1.06, nearScale: 0.58, nearAlign: "bottom" },
  scene("shaktipeeth", 2, "शिव का तांडव", "Shiva bears her, and dances his grief"),
  // The hinge of the origin, staged as separate layers: Vishnu (left, no chakra),
  // grieving Shiva bearing Sati (right), and a small spinning Sudarshan chakra between.
  {
    far: layers("shaktipeeth", "s3-far.webp"),
    subject: layers("shaktipeeth", "s3-subject.webp"), // Vishnu, positioned left in-frame
    near: layers("shaktipeeth", "s3-near.webp"),       // Shiva bearing Sati, positioned right in-frame
    overlay: { src: layers("shaktipeeth", "s3-chakra.webp"), scale: 0.3, spin: 30 },
    deva: "सुदर्शन चक्र",
    en: "Vishnu's Sudarshan",
  },
  scene("shaktipeeth", 4, "इकयावन अंग", "The fifty-one parts fall across the land"),
];

/** Chapter B — The Coming of Hingula. */
export const hingulReel: ReelScene[] = [
  scene("hingul", 1, "हिंगुल की तपस्या", "The thousand-year penance on Meru"),
  scene("hingul", 2, "स्वर्ग पर विजय", "The conquest of the heavens"),
  scene("hingul", 3, "देवी का प्रण", "The vow of the Devi"),
  scene("hingul", 4, "अभूतपूर्व प्रकाश", "The unprecedented light"),
  scene("hingul", 5, "वरदान", "The boon — Hingula Peeth"),
];

/** Chapter C — Parashurama & the Brahmakshatriya. */
export const parshuramReel: ReelScene[] = [
  scene("parshuram", 1, "सहस्रार्जुन", "King Sahastrarjun, the thousand-armed"),
  scene("parshuram", 2, "कामधेनु का हरण", "The theft of Kamadhenu"),
  scene("parshuram", 3, "सहस्रार्जुन वध", "Parashurama reclaims the cow"),
  scene("parshuram", 4, "प्रतिज्ञा", "The vow over his slain father"),
  scene("parshuram", 5, "पृथ्वी का शुद्धिकरण", "The cleansing of the earth"),
  scene("parshuram", 6, "हिंगुल पर्वत", "Refuge at Mount Hingula"),
  scene("parshuram", 7, "बारह वर्ष की तपस्या", "The twelve-year penance"),
  scene("parshuram", 8, "हिंगुल माता का प्रकट्य", "Hingula manifests — the Brahmakshatriya"),
];
