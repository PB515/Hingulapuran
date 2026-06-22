import type { ScrollVideoConfig } from "@/components/ScrollVideo";

/* The Fall of Sati as a scroll-scrubbed video. Beat windows are scroll progress
   (0–1) across the ~13.6s clip; tune them to the cuts as the video evolves. */
export const satiScroll: ScrollVideoConfig = {
  src: "/art/stories/shaktipeeth/sati-scroll.mp4",
  poster: "/art/stories/shaktipeeth/sati-poster.webp",
  // taller section = slower scrub = more time to read each beat (reading time is
  // set by scroll length, not the video's seconds).
  heightVh: 640,
  beats: [
    {
      from: 0.0,
      to: 0.12,
      deva: "दक्ष का यज्ञ",
      en: "The yagna of Daksha",
      body: "At her father's great rite, Shiva is dishonoured, and Devi Sati cannot bear the insult.",
    },
    {
      from: 0.12,
      to: 0.26,
      deva: "सती का अग्नि-प्रवेश",
      en: "Sati enters the sacred fire",
      body: "In her grief and her pride, she gives herself to the flames.",
    },
    {
      from: 0.26,
      to: 0.44,
      deva: "शिव का तांडव",
      en: "Shiva bears her, and dances his grief",
      body: "Maddened, Shiva lifts her body and dances the tandava, and the worlds tremble.",
    },
    {
      from: 0.44,
      to: 0.6,
      deva: "विष्णु का सुदर्शन",
      en: "Vishnu's Sudarshan parts the body",
      body: "To still his grief, Vishnu's discus parts Devi Sati across the sky.",
    },
    {
      from: 0.6,
      to: 0.74,
      deva: "देह का विभाजन",
      en: "The body falls across the land",
      body: "Across all of Jambudvip the parts come down to the earth.",
    },
    {
      from: 0.74,
      to: 0.9,
      deva: "इकयावन शक्तिपीठ",
      en: "The fifty-one Shakti Peethas",
      body: "Where each part falls a seat of power arises, binding the land like beads upon one thread.",
    },
    {
      from: 0.9,
      to: 1.01,
      deva: "हिंगलाज",
      en: "Hinglaj, where the crown fell",
      body: "On the Hingol her brahmarandhra comes to rest, the westernmost seat and the gate of liberation.",
    },
  ],
};
