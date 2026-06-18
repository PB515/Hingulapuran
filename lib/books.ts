/**
 * books.ts — the book collection (data-driven so book #2 = a new entry, not a rebuild).
 * Swap this array for a Supabase query + admin later; the page components stay the same.
 */
export type Book = {
  slug: string;
  title: string;       // native script
  titleEn: string;
  language: string;
  year: string;
  blurb: string;
  cover?: string;      // /art/... (optional until art lands)
  pdf?: string;        // /books/<file>.pdf (served from public)
  pages?: number;
};

export const books: Book[] = [
  {
    slug: "hingulapuran",
    title: "હિંગુળાપુરાણ",
    titleEn: "Hingulapuran",
    language: "Gujarati",
    year: "c. 1920s",
    blurb:
      "The hundred-year-old Gujarati grantha of Hinglaj Mata — her origin, her legends, and the devotion of the Kshatriya. Read it online, or take it with you to spread the awareness.",
    cover: "/art/parshuram/full.webp",
    pdf: "/books/hingulapuran.pdf",
  },
];

export const getBook = (slug: string) => books.find((b) => b.slug === slug);
