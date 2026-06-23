/* The grantha's sacred history as an ordered arc of seven movements, for the
   Sacred Arc scroll page (from docs/NARRATIVE-TIMELINE.md). Time here is cyclic,
   cosmic time, not dated chronology. */
export type ArcMovement = { n: number; deva: string; en: string; chapters: string; body: string };

export const sacredArc: ArcMovement[] = [
  {
    n: 1,
    deva: "आदि",
    en: "The beginning: the Goddess as the ground of all",
    chapters: "ch 2, 30",
    body: "Before all is Mahālakṣmī. From her the three powers are apportioned: Gaurī to Rudra, Lakṣmī to Vishnu, Saraswatī to Brahmā, so the trimūrti can create, preserve and destroy. The conviction the whole book rests on: Shakti is the cause, and the gods act only by her power.",
  },
  {
    n: 2,
    deva: "हयग्रीव",
    en: "Hayagrīva and Madhu-Kaiṭabha",
    chapters: "ch 14–18",
    body: "Vishnu lies in yoga-nidrā. The demons Madhu and Kaiṭabha, born of his ear-wax, threaten Brahmā; Brahmā hymns Yoganidrā, she releases Vishnu, and he slays the two. The Goddess as Mahāmāyā, she who binds and frees even Vishnu.",
  },
  {
    n: 3,
    deva: "महिषासुरमर्दिनी",
    en: "The slaying of Mahishāsura",
    chapters: "ch 46–64",
    body: "The buffalo-demon Mahishāsura, whom no god or man may kill, conquers the three worlds and exiles the gods. Their combined tejas fuses into the Goddess, armed by every god. After the great war with his generals she beheads him, and the earth is restored.",
  },
  {
    n: 4,
    deva: "हिंगुला उत्पत्ति",
    en: "The Hingula origin",
    chapters: "ch 65–72",
    body: "The rākṣasa brothers Hingul and Sindur conquer the gods; Pārvatī's body-born son Gaṇapati slays Sindur. Grieving, Hingul wins Brahmā's boon and seizes Swarga. The Goddess takes an enchanting form, lures him to the Sindhu shore, and as he merges into her crying 'Devī!' he is freed. From his name she becomes Hingulā Devī, and the Sindhu tīrtha becomes Hingulā.",
  },
  {
    n: 5,
    deva: "परशुराम",
    en: "The Parashurāma age",
    chapters: "ch 73–83",
    body: "Sahasrārjuna of Mahishmati seizes Jamadagni's wish-cow Kāmadhenu, and the sage is slain. His son Parashurāma vows vengeance and sweeps the earth empty of Kshatriyas. At Mount Hingulā he wins Shiva's boon, and Rāmtīrth is founded.",
  },
  {
    n: 6,
    deva: "शरण",
    en: "The refuge and the communities",
    chapters: "ch 84–86",
    body: "The surviving princes take refuge at Hingulā. She grants her vardān and law: rule a thousand years, keep the rites, honour the Sāraswata brahmins, 'call me your mother.' Through Jayasena's dīkṣā they become the Brahmakṣatriya, branching into the Lohana, Bhāṭiā, Khatri and the Pushkarṇā brahmins, a warrior people bound to her as kuldevi.",
  },
  {
    n: 7,
    deva: "समापन",
    en: "The sealing",
    chapters: "ch 87",
    body: "Sūta recapitulates the whole account, from the Goddess's origin through Mahishāsura, Hingula and Parashurāma to the community lineages, and the grantha is closed: samāpto'yaṃ granthaḥ.",
  },
];

export type InsetTale = { name: string; chapters: string; note: string };
export const insetTales: InsetTale[] = [
  { name: "Sudarshana", chapters: "ch 31–42", note: "The exiled prince who masters the klīṃ bīja and regains his throne by the Devi." },
  { name: "Satyavrata", chapters: "ch 27–28", note: "The simpleton made a great poet by the Devi's grace." },
  { name: "Ratnasena", chapters: "ch 79, 81", note: "The king who takes refuge from Parashurāma." },
  { name: "Mandodarī", chapters: "ch 61", note: "The Siṃhala princess who chose tapas over marriage." },
  { name: "Vishvāmitra and Nandinī", chapters: "ch 34", note: "Brahma-tej over kshatra-tej." },
];
