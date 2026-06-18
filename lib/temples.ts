/**
 * temples.ts — Hinglaj Mata temples (seed set; the keeper grows it via admin later).
 * Coordinates marked `verify: true` are approximate placeholders to confirm/replace.
 * Swap for a Supabase `temples` table + admin; the map/list stay the same.
 */
export type Temple = {
  name: string;
  place: string;
  lat: number;
  lng: number;
  note?: string;
  verify?: boolean; // approximate — confirm before launch
};

export const temples: Temple[] = [
  {
    name: "Hinglaj Mata Mandir (mool sthan)",
    place: "Hingol, Lasbela, Balochistan, Pakistan",
    lat: 25.5126,
    lng: 65.5152,
    note: "The original Shakti Peetha — the cave shrine on the Hingol river.",
  },
  // Example shrines across the three Kshatriya states — APPROXIMATE, to verify/replace via admin.
  { name: "Hinglaj Mata Temple", place: "Gujarat", lat: 22.3, lng: 70.8, verify: true },
  { name: "Hinglaj Mata Temple", place: "Rajasthan", lat: 26.9, lng: 73.0, verify: true },
  { name: "Hinglaj Mata Temple", place: "Maharashtra", lat: 19.0, lng: 74.5, verify: true },
];
