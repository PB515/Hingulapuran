import type { Metadata } from "next";
import { Rozha_One, Baloo_Bhai_2, Eczar, Mukta_Vaani, Noto_Serif_Gujarati } from "next/font/google";
import "./globals.css";
import "./a11y.css";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hingulapuran.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — હિંગુળાપુરાણ`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: ["Hinglaj Mata", "Hinglaj Puran", "Hingulapuran", "Hingula", "Shakti Peetha", "Brahmakshatriya", "kuldevi"],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — the Hinglaj Puran, conserved`,
    description: site.description,
    locale: "en_IN",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — the Hinglaj Puran, conserved`,
    description: site.description,
  },
  alternates: { canonical: "/" },
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
