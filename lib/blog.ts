/**
 * blog.ts — posts (data-driven; swap for Supabase + admin markdown editor later).
 * `body` is simple HTML for now; the admin will write markdown that renders to this.
 */
export type Post = {
  slug: string;
  title: string;
  date: string;        // ISO
  excerpt: string;
  body: string;        // HTML
};

export const posts: Post[] = [
  {
    slug: "who-is-hinglaj-mata",
    title: "Who is Hinglaj Mata?",
    date: "2026-06-17",
    excerpt:
      "One of the 51 Shakti Peethas, a cave shrine on the Hingol river, and the kuldevi of the Kshatriya: an introduction.",
    body:
      "<p>Hinglaj Mata is one of the 51 Shakti Peethas, the place where Sati's Brahmarandhra is said to have fallen. The shrine is a natural cave on the banks of the Hingol river, and the goddess is worshipped not as a carved idol but as a sindoor-smeared stone.</p><p>She is the kuldevi of many Kshatriya communities across Rajasthan, Gujarat and Maharashtra: goddess of war and of refuge both.</p>",
  },
  {
    slug: "the-sword-at-her-feet",
    title: "The sword at her feet",
    date: "2026-06-16",
    excerpt:
      "Why Parshuram laid down his weapon before Hinglaj Mata, and how she became the Kshatriya kuldevi.",
    body:
      "<p>When Parshuram's power drained before the Mother Goddess, Guru Dattatreya revealed its source: the Shakti of the Devi herself. He laid his sword at her feet, and from that day Hinglaj became the kuldevi of the Kshatriya.</p>",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
