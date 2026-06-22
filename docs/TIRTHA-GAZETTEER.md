# Tīrtha Gazetteer & Map Data

> The sacred places of the grantha, structured to drive the **temple-map**. A mix of **real-world locations** (mappable) and **sacred geography** (within the Hingula tīrtha-complex or cosmic, not literally mappable). Coordinates are **approximate, from general knowledge, verify before publishing**. Chapter refs point to HINGLAJ-PURAN.md / DWITIYA-TRANSLATION.md. Names marked (?) await pandit review.

## Human-readable index

| Place | Type | Region (modern) | Chapters | Significance | Map |
|---|---|---|---|---|---|
| **Hingulā / Hinguladri / Hinglaj** | mountain + shrine | Hingol Nat'l Park, Lasbela, **Balochistan** | 64–87 | The supreme Pīṭh; where Hingulā arose & is kuldevi; a Shakti Pīṭh (the Brahmarandhra) | ✅ real |
| **Hingulā / Hingol river** | river | Balochistan (to Arabian Sea) | 67–68 | One of two rivers from Brahmā's kumbha | ✅ real |
| **Mandākinī** | river | Sindhu region | 68 | The paired stream from Brahmā's kumbha; bathing at the confluence is supreme | ◐ sacred geo |
| **Sindhu-deśa** | region | Lower Indus / Sindh–Makran | 65–87 | The land of the Hingula tīrthas | ✅ region |
| **Rāmtīrth / Rāmkṣetra** | tīrth | Hingula complex | 73 | Founded by Parashurāma; the **Muktigaṅgā** (from Shiva's tears) & the **Bindeshwar/Rāmeshwar** liṅga | ◐ sacred geo |
| **Nāga-tīrth** | tīrth | on the river-bank, Hingula region | 68 | A leprous king cured of all disease & sin | ◐ sacred geo |
| **Koṭitīrth** | tīrth | Hingula region | 72 | Consecrated after Bhīmāsura's slaying | ◐ sacred geo |
| **Puṇyadā(?)-tīrth** | tīrth | north of Hingulā | 71 | Sin-destroying; a corrupt brahmin redeemed | ◐ sacred geo (name?) |
| **Parāshara river** | river | Hingula region | 72 | Holy river of the Koṭitīrth | ◐ sacred geo |
| **Hemagiri** | mountain |, | 46 | Where Mahishāsura performed his 10,000-yr tapas | ✗ mythic |
| **Meru / Sumeru** | mountain | cosmic axis | 65 | Hingul's tapas; the cosmic mountain | ✗ cosmic |
| **Pushkar** | lake/tīrth | Ajmer, **Rajasthan** | 86 | Rāma sanctified the **Pushkarṇā** brahmins here | ✅ real |
| **Kanauj** | city | Kannauj, **Uttar Pradesh** | 86 | **Jayasena's** seat; the Lohana origin | ✅ real |
| **Mahishmati** | city | (debated) Maheshwar on the Narmadā, **MP** | 76 | **Sahasrārjuna's** capital; the cow-theft | ◐ real (debated) |
| **Narmadā** | river | central India | 73, 76 | Where the king seized Jamadagni's cow | ✅ real |
| **Ayodhyā** | city | **Uttar Pradesh** | 31–42 | Sudarshana's kingdom *(ākhyāna)* | ✅ real |
| **Kāshi / Banaras** | city | Varanasi, **UP** | 35–41 | Shashikalā's city; the svayaṃvara *(ākhyāna)* | ✅ real |
| **Siṃhala** | island | = Sri Lanka | 61 | Mandodarī's land *(ākhyāna)* | ✅ real |
| **Naimishāraṇya** | forest | Sitapur, **UP** | 27 | Where Sūta narrates to the rishis | ✅ real |
| **Badarikāshrama** | shrine | Badrinath, **Uttarakhand** | 73 | Vishnu assures the rishis | ✅ real |
| Satyaloka · Vaikuṇṭha · Kailāsa · Swarga · Pātāla · Hāṭakeshwar | cosmic loci |, | throughout | Abodes of Brahmā / Vishnu / Shiva / gods / demons | ✗ cosmic |

**The map story:** the real anchors (Hinglaj ↔ Pushkar ↔ Kanauj ↔ Mahishmati ↔ Kāshi ↔ Ayodhyā ↔ Naimishāraṇya ↔ Badrinath) trace the sacred history **across the subcontinent**, from Balochistan to the Gangetic plain, the "Hinglaj across the states" tie-in.

## Map data (JSON: `mappable` entries for the temple-map)
```json
[
  { "id": "hinglaj", "name": "Hinglaj (Hingulā Pīṭh)", "type": "shrine", "lat": 25.51, "lng": 65.52, "certainty": "high", "primary": true, "chapters": "64-87", "note": "The supreme shrine; Shakti Pīṭh in Hingol Nat'l Park, Balochistan." },
  { "id": "hingol-river", "name": "Hingol / Hingulā River", "type": "river", "lat": 25.45, "lng": 65.48, "certainty": "high", "chapters": "67-68", "note": "River from Brahmā's kumbha." },
  { "id": "pushkar", "name": "Pushkar", "type": "tirth", "lat": 26.49, "lng": 74.55, "certainty": "high", "chapters": "86", "note": "Pushkarṇā brahmins sanctified here." },
  { "id": "kanauj", "name": "Kanauj", "type": "city", "lat": 27.06, "lng": 79.92, "certainty": "high", "chapters": "86", "note": "Jayasena's seat; Lohana origin." },
  { "id": "mahishmati", "name": "Mahishmati (Maheshwar?)", "type": "city", "lat": 22.18, "lng": 75.58, "certainty": "medium", "chapters": "76", "note": "Sahasrārjuna's capital; identification debated." },
  { "id": "narmada", "name": "Narmadā River", "type": "river", "lat": 22.25, "lng": 75.60, "certainty": "high", "chapters": "73,76", "note": "The cow-theft." },
  { "id": "ayodhya", "name": "Ayodhyā", "type": "city", "lat": 26.79, "lng": 82.19, "certainty": "high", "chapters": "31-42", "note": "Sudarshana's kingdom (ākhyāna)." },
  { "id": "kashi", "name": "Kāshi (Varanasi)", "type": "city", "lat": 25.32, "lng": 83.01, "certainty": "high", "chapters": "35-41", "note": "Shashikalā's svayaṃvara (ākhyāna)." },
  { "id": "naimisharanya", "name": "Naimishāraṇya", "type": "forest", "lat": 27.35, "lng": 80.49, "certainty": "high", "chapters": "27", "note": "The narration frame." },
  { "id": "badarikashrama", "name": "Badarikāshrama (Badrinath)", "type": "shrine", "lat": 30.74, "lng": 79.49, "certainty": "high", "chapters": "73", "note": "Vishnu assures the rishis." },
  { "id": "simhala", "name": "Siṃhala (Sri Lanka)", "type": "region", "lat": 7.87, "lng": 80.77, "certainty": "high", "chapters": "61", "note": "Mandodarī's land (ākhyāna)." }
]
```
> **Sacred-geography places** (Rāmtīrth, Nāga-/Koṭi-/Puṇyadā-tīrth, Mandākinī, Parāshara, Hemagiri) are intentionally **omitted from coordinates**: they belong to the Hingula tīrtha-complex or to cosmic geography and should be shown as part of the Hingulā node / a stylised inset, not pinned to false coordinates. All coordinates above are approximate, **verify before publishing.**
