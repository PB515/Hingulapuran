/**
 * tirthas.ts — the sacred places of the grantha that can be put on a map
 * (from docs/TIRTHA-GAZETTEER.md). These are the *story* anchors (where the
 * itihaas happened), shown as a second layer on the temple map alongside the
 * living shrines. Coordinates are APPROXIMATE (verify before publishing).
 * Sacred-geography / cosmic places (Rāmtīrth, Meru, Swarga…) are intentionally
 * left off — they are not literal locations.
 */
export type Tirtha = {
  id: string;
  name: string;
  type: "shrine" | "river" | "tirth" | "city" | "forest" | "region";
  lat: number;
  lng: number;
  certainty: "high" | "medium";
  chapters: string;
  note: string;
  primary?: boolean;
};

export const tirthas: Tirtha[] = [
  { id: "hinglaj", name: "Hinglaj (Hingulā Pīṭh)", type: "shrine", lat: 25.51, lng: 65.52, certainty: "high", primary: true, chapters: "64–87", note: "The supreme shrine; the Shakti Pīṭh in Hingol, Balochistan." },
  { id: "hingol-river", name: "Hingol / Hingulā River", type: "river", lat: 25.45, lng: 65.48, certainty: "high", chapters: "67–68", note: "A river from Brahmā's kumbha." },
  { id: "pushkar", name: "Pushkar", type: "tirth", lat: 26.49, lng: 74.55, certainty: "high", chapters: "86", note: "Where the Pushkarṇā brahmins were sanctified." },
  { id: "kanauj", name: "Kanauj", type: "city", lat: 27.06, lng: 79.92, certainty: "high", chapters: "86", note: "Jayasena's seat; the Lohana origin." },
  { id: "mahishmati", name: "Mahishmati", type: "city", lat: 22.18, lng: 75.58, certainty: "medium", chapters: "76", note: "Sahasrārjuna's capital; the cow-theft. Identification debated." },
  { id: "narmada", name: "Narmadā River", type: "river", lat: 22.25, lng: 75.6, certainty: "high", chapters: "73, 76", note: "Where the king seized Jamadagni's cow." },
  { id: "ayodhya", name: "Ayodhyā", type: "city", lat: 26.79, lng: 82.19, certainty: "high", chapters: "31–42", note: "Sudarshana's kingdom (ākhyāna)." },
  { id: "kashi", name: "Kāshi (Varanasi)", type: "city", lat: 25.32, lng: 83.01, certainty: "high", chapters: "35–41", note: "Shashikalā's svayaṃvara (ākhyāna)." },
  { id: "naimisharanya", name: "Naimishāraṇya", type: "forest", lat: 27.35, lng: 80.49, certainty: "high", chapters: "27", note: "Where Sūta narrates the grantha to the rishis." },
  { id: "badarikashrama", name: "Badarikāshrama (Badrinath)", type: "shrine", lat: 30.74, lng: 79.49, certainty: "high", chapters: "73", note: "Where Vishnu assures the rishis." },
  { id: "simhala", name: "Siṃhala (Sri Lanka)", type: "region", lat: 7.87, lng: 80.77, certainty: "high", chapters: "61", note: "Mandodarī's land (ākhyāna)." },
];

// The "sacred history across the subcontinent" route — the anchor places in a
// west-to-east sweep, drawn as a faint connecting line on the map.
export const ROUTE_IDS = ["hinglaj", "pushkar", "mahishmati", "kanauj", "ayodhya", "kashi", "naimisharanya", "badarikashrama"];
