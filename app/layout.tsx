import type { Metadata } from "next";
import { Rozha_One, Baloo_Bhai_2, Eczar, Mukta_Vaani, Noto_Serif_Gujarati } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

/* Devanagari hero display */
const rozha = Rozha_One({ variable: "--font-deva", weight: "400", subsets: ["latin", "devanagari"], display: "swap" });
/* Gujarati display */
const baloo = Baloo_Bhai_2({ variable: "--font-baloo", weight: ["500", "700"], subsets: ["latin", "gujarati"], display: "swap" });
/* Latin display / subhead — Indic-rooted */
const eczar = Eczar({ variable: "--font-eczar", weight: ["400", "600", "700"], subsets: ["latin", "devanagari"], display: "swap" });
/* Body */
const mukta = Mukta_Vaani({ variable: "--font-mukta", weight: ["400", "600", "700"], subsets: ["latin", "gujarati"], display: "swap" });
/* Gujarati body/serif */
const notoGuj = Noto_Serif_Gujarati({ variable: "--font-noto-guj", weight: ["400", "600"], subsets: ["gujarati"], display: "swap" });

export const metadata: Metadata = {
  title: `${site.name} — હિંગુળાપુરાણ`,
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${rozha.variable} ${baloo.variable} ${eczar.variable} ${mukta.variable} ${notoGuj.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
