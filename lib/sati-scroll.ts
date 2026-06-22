import type { ScrollVideoConfig } from "@/components/ScrollVideo";

/* The Fall of Sati as a scroll-scrubbed video. Beat windows are scroll progress
   (0–1) across the ~13.6s clip; tune them to the cuts as the video evolves. */
export const satiScroll: ScrollVideoConfig = {
  src: "/art/stories/shaktipeeth/sati-scroll.mp4",
  poster: "/art/stories/shaktipeeth/sati-poster.webp",
  heightVh: 380,
  beats: [
    {
      from: 0.0,
      to: 0.2,
      deva: "सती का अग्नि-प्रवेश",
      en: "Sati enters the sacred fire",
      body: "Dishonoured at Daksha's yagna, Devi Sati gives herself to the flames.",
    },
    {
      from: 0.2,
      to: 0.45,
      deva: "शिव का तांडव",
      en: "Shiva bears her, and dances his grief",
      body: "Maddened with grief, Shiva lifts her body and dances the tandava, and the cosmos shakes.",
    },
    {
      from: 0.45,
      to: 0.66,
      deva: "विष्णु का सुदर्शन",
      en: "Vishnu's Sudarshan parts the body",
      body: "To still his grief, Vishnu's discus parts Devi Sati's body across the land.",
    },
    {
      from: 0.66,
      to: 0.85,
      deva: "इकयावन शक्तिपीठ",
      en: "The fifty-one Shakti Peethas",
      body: "Where each part fell, a seat of power arose, fifty-one across the land.",
    },
    {
      from: 0.85,
      to: 1.01,
      deva: "हिंगलाज",
      en: "Hinglaj, where the crown fell",
      body: "On the Hingol her brahmarandhra came to rest, the westernmost seat, the very gate of liberation.",
    },
  ],
};
