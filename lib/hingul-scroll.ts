import type { PothiConfig } from "@/components/PothiScroll";

/* The Hingul story as a pothi scroll — the faithful grantha arc (ch 65–66).
   One merged, brightened image per scene in public/art/stories/hingul/scroll/
   (see HINGUL-SCROLL-PROMPTS.md). */
export const hingulScroll: PothiConfig = {
  heightVh: 760,
  title: "हिंगुल की कथा",
  titleEn: "The story of Hingul",
  border: "/art/stories/hingul/scroll/frame-border.webp",
  rod: "/art/stories/hingul/scroll/frame-rod.webp",
  scenes: [
    {
      img: "/art/stories/hingul/scroll/s1.webp",
      deva: "हिंगुल और सिंदुर",
      en: "Hingul and Sindur conquer the gods",
      body: "Viprachitti's sons Hingul and Sindur conquer all the gods, even Vishnu.",
    },
    {
      img: "/art/stories/hingul/scroll/s2.webp",
      deva: "गणपति का वध",
      en: "Parvati's son slays Sindur",
      body: "Parvati brings forth a son from her own body, who slays the demon Sindur.",
    },
    {
      img: "/art/stories/hingul/scroll/s3.webp",
      deva: "हिंगुल की तपस्या",
      en: "The thousand-year penance on Meru",
      body: "Grieving, Hingul stands a thousand years in penance upon Mount Meru.",
    },
    {
      img: "/art/stories/hingul/scroll/s4.webp",
      deva: "ब्रह्मा का वरदान",
      en: "Brahma grants the boon",
      body: "Pleased, Brahma grants the boon that no being, weapon, god or demon may slay him.",
    },
    {
      img: "/art/stories/hingul/scroll/s5.webp",
      deva: "स्वर्ग पर विजय",
      en: "Hingul seizes Swarga",
      body: "Emboldened, Hingul drives the gods from heaven and seizes Swarga.",
    },
    {
      img: "/art/stories/hingul/scroll/s6.webp",
      deva: "मोहिनी रूप",
      en: "The enchanting form lures him",
      body: "The Goddess takes an enchanting form and lures him to the Sindhu shore.",
    },
    {
      img: "/art/stories/hingul/scroll/s7.webp",
      deva: "हिंगुला देवी",
      en: "The dissolution, and her name",
      body: "He dissolves into her crying 'Devi!' and is freed; from his name she becomes Hingula.",
    },
  ],
};
