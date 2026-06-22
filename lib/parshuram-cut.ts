import type { CutReelConfig } from "@/components/CutReel";

/* The Parashurama story as a vertical hard-cut reel — faithful arc (grantha
   ch 76–87), ending on the Brahmakshatriya manifestation (not the sword-at-feet).
   Art: full-frame plates in public/art/stories/parshuram/cut/ (see
   PARSHURAM-CUT-PROMPTS.md); placeholders show until they land. */
export const parshuramCut: CutReelConfig = {
  heightVh: 700,
  holdLast: 2.2,
  scenes: [
    {
      src: "/art/stories/parshuram/cut/s1.webp",
      deva: "कामधेनु का हरण",
      en: "The theft of Kamadhenu",
      body: "King Sahastrarjun seizes Jamadagni's wish-cow Kamadhenu from his ashram.",
    },
    {
      src: "/art/stories/parshuram/cut/s2.webp",
      deva: "जमदग्नि का वध",
      en: "The sage Jamadagni slain",
      body: "The king's men strike down the sage Jamadagni; Renuka grieves.",
    },
    {
      src: "/art/stories/parshuram/cut/s3.webp",
      deva: "परशुराम की प्रतिज्ञा",
      en: "Parashurama's vow",
      body: "Parashurama vows over his father's body to rid the earth of the offending kshatriyas.",
    },
    {
      src: "/art/stories/parshuram/cut/s4.webp",
      deva: "राम–अर्जुन युद्ध",
      en: "The duel of Rama and Arjuna",
      body: "In a seven-day duel he severs the thousand arms of Kartavirya.",
    },
    {
      src: "/art/stories/parshuram/cut/s5.webp",
      deva: "पृथ्वी निःक्षत्रिय",
      en: "The earth is cleansed",
      body: "His campaign sweeps the earth, and the kshatriyas flee before his axe.",
    },
    {
      src: "/art/stories/parshuram/cut/s6.webp",
      deva: "हिंगुला की शरण",
      en: "Refuge at Mount Hingula",
      body: "The surviving princes take refuge at Mount Hingula and turn to tapas.",
    },
    {
      src: "/art/stories/parshuram/cut/s7.webp",
      deva: "ब्रह्मक्षत्रिय",
      en: "The warrior-line reborn",
      body: "Hingula manifests, grants her vardan, and the princes are reborn as the Brahmakshatriya, her kuldevi people.",
    },
  ],
};
