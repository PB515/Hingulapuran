/* The dynastic lines of the grantha, structured for a styled tree (from
   docs/GENEALOGY.md). Tiers flow top to bottom; an edge label sits on the
   connector between tiers. The ch-85 dynastic chain is intentionally left as a
   note (worn scan, tentative, pending re-scan + pandit review). */
export type LNode = { deva?: string; name: string; sub?: string; goddess?: boolean };
export type LTier = { edge?: string; nodes: LNode[] };
export type Lineage = { id: string; deva: string; title: string; chapters: string; blurb: string; tiers: LTier[]; note?: string };

export const lineages: Lineage[] = [
  {
    id: "brahmakshatriya",
    deva: "ब्रह्मक्षत्रिय",
    title: "The Brahmakṣatriya line",
    chapters: "ch 73–86",
    blurb: "How the warriors who survived Parashurāma became her own people, and branched into the kuldevi communities.",
    tiers: [
      { nodes: [{ deva: "हिंगुला माता", name: "Hingulā Mātā", sub: "the Goddess", goddess: true }] },
      { edge: "grants the vardān and law (ch 84)", nodes: [{ name: "King Ratnasena", sub: "of the surviving warrior line" }] },
      { edge: "his sons take refuge at Mount Hingulā", nodes: [{ name: "The five princes", sub: "Jayasena · Bindhumān · Vishāl · Chandrashāl · (+1)" }] },
      { edge: "mantra-dīkṣā through Jayasena", nodes: [{ name: "Brahmakṣatriya", sub: "warriors reborn as her own" }] },
      {
        edge: "branch into the kuldevi communities",
        nodes: [
          { name: "Lohana", sub: "the 48 Rāṭhoḍ sardārs (from 'loha')" },
          { name: "Bhāṭiā", sub: "of the Bhāṭi Rajput line" },
          { name: "Khatri", sub: "the trading branch" },
          { name: "Pushkarṇā", sub: "brahmins sanctified at Pushkar" },
        ],
      },
    ],
    note: "Tentative (ch 85, worn scan): a longer dynastic chain, Vijaya · Bahushāla · Chandrasena · Dyutidhwaja · Ketumāla · Shrutasena · Viharsha, and the founding of Sohau-nagari and Champānagari, awaits a re-scan to render reliably. The firm structure is Ratnasena to the five princes to Jayasena to the communities.",
  },
  {
    id: "surya-vamsha",
    deva: "सूर्यवंश",
    title: "The Sūrya-vaṃśa: the Sudarshana line",
    chapters: "ch 31–42",
    blurb: "The exiled prince who regains his throne by the klīṃ bīja, an ākhyāna of the Devi told within the arc.",
    tiers: [
      { nodes: [{ name: "Dhruvasandhi", sub: "a solar-dynasty king" }] },
      { edge: "his two queens", nodes: [{ name: "Manoramā" }, { name: "Līlāvatī" }] },
      { edge: "and their sons", nodes: [{ name: "Sudarshana", sub: "the klīṃ-devotee" }, { name: "Shatrujit" }] },
      {
        edge: "Sudarshana weds Shashikalā of Kāshi (Vīrasena's daughter)",
        nodes: [{ name: "Ayodhyā regained", sub: "the rivals Sudhajit and Shatrujit slain by Chaṇḍikā (ch 40)" }],
      },
    ],
  },
];
