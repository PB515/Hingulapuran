/* The living lineage — the communities the grantha traces to Hingula (ch 83–86),
   who still hold her as kuldevi today. Shown as the closing "community wall". */
export type Community = { deva: string; en: string; line: string; where: string };

export const communities: Community[] = [
  {
    deva: "ब्रह्मक्षत्रिय",
    en: "Brahmakshatriya",
    line: "The parent line: Kshatriya princes remade as her own at Hingula.",
    where: "Gujarat · Kutch · Sindh",
  },
  {
    deva: "लोहाणा",
    en: "Lohana",
    line: "From the forty-eight Rathod sardars (loha, iron); a warrior people turned traders.",
    where: "Gujarat · Kutch · Sindh · East Africa",
  },
  {
    deva: "भाटिया",
    en: "Bhatia",
    line: "Seafaring merchants of Kutch and Saurashtra.",
    where: "Kutch · Saurashtra · Sindh · Mumbai",
  },
  {
    deva: "खत्री",
    en: "Khatri",
    line: "Weavers and traders of the warrior line.",
    where: "Gujarat · Punjab · Sindh",
  },
  {
    deva: "पुष्करणा",
    en: "Pushkarna Brahmins",
    line: "Sanctified by Parashurama at the Pushkar lake.",
    where: "Rajasthan · Sindh · Gujarat",
  },
];
