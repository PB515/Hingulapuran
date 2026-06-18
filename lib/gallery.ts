/**
 * gallery.ts — curated images (we seed some; the keeper adds more via admin later).
 * Swap for a Supabase media table + upload later; the grid/lightbox stay the same.
 */
export type GalleryItem = {
  src: string;       // /art/gallery/<file> (or any public path)
  title: string;
  note?: string;
};

export const gallery: GalleryItem[] = [
  { src: "/art/gallery/Hinglaj.webp", title: "Hinglaj Mata", note: "Nani Maa · kuldevi of the Kshatriya" },
  { src: "/art/gallery/Durgha.webp", title: "Durga", note: "slayer of Mahishasura" },
  { src: "/art/gallery/Kali.webp", title: "Mahakali", note: "the fierce protector" },
  { src: "/art/gallery/Meldi.webp", title: "Meldi Maa", note: "on her goat" },
  { src: "/art/gallery/Bauchar.webp", title: "Bahuchara Mata", note: "on her rooster" },
  { src: "/art/gallery/Khodiyar.webp", title: "Khodiyar Maa", note: "on her crocodile" },
];
