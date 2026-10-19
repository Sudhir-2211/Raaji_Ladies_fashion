import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { createClient } from "@/utils/supabase/server";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Raaji Ladies Fashion | Ladies Tailor in Korattur, Chennai",
    template: "%s | Raaji Ladies Fashion",
  },
  description:
    "Raaji Ladies Fashion is a bespoke ladies tailoring shop in Korattur, Chennai offering custom tailoring, blouse stitching, dress tailoring, saree care and more.",
  keywords: [
    "ladies tailor in Korattur",
    "ladies tailoring shop in Korattur",
    "tailor in Korattur",
    "tailoring shop in Korattur",
    "ladies tailor in Chennai",
    "tailoring services in Chennai",
    "custom tailoring in Korattur",
    "blouse stitching in Korattur",
    "salwar tailoring in Korattur",
    "lehenga tailoring in Chennai",
  ],
  authors: [{ name: "Sudhir Kumar J" }],
  openGraph: {
    title: "Raaji Ladies Fashion | Ladies Tailor in Korattur, Chennai",
    description:
      "Bespoke ladies tailoring shop in Korattur, Chennai. Custom crafting from your fabrics with precision anatomical fit.",
    siteName: "Raaji Ladies Fashion",
    locale: "en_IN",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data: branches } = await supabase.from('branches').select('*').eq('is_active', true).order('created_at', { ascending: true });
  
  // Fallback if db is empty
  const defaultBranches = [
    {
      id: '99999999-9999-9999-9999-999999999991',
      name: 'Korattur (Bus Terminus)',
      phone: '9840577561',
      whatsapp: '9840577561',
      google_maps_url: 'https://share.google/j4mzEfa6xKWc6cEn8',
      is_active: true
    },
    {
      id: '99999999-9999-9999-9999-999999999992',
      name: 'Korattur (Near Bv KG Block)',
      phone: '9677112878',
      whatsapp: '9677112878',
      google_maps_url: 'https://share.google/hlb26qSrDnSRx4HLl',
      is_active: true
    }
  ];

  const activeBranches = branches && branches.length > 0 ? branches : defaultBranches;

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased selection:bg-wine selection:text-white font-sans">
        <Header branches={activeBranches} />
        <main className="flex-1">{children}</main>
        <Footer branches={activeBranches} />
      </body>
    </html>
  );
}
