import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutHighlights } from "@/components/about/AboutHighlights";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutPeople } from "@/components/about/AboutPeople";
import { AboutCTA } from "@/components/about/AboutCTA";
export const metadata: Metadata = {
  title: "About Raaji Ladies Fashion | Ladies Tailor in Korattur",
  description:
    "Learn about Raaji Ladies Fashion, a ladies tailoring shop in Korattur, Chennai, established in 2005 and focused on customer-supplied fabrics, individual measurements, paper pattern drafting, stitching and finishing.",
  keywords: [
    "about Raaji Ladies Fashion",
    "ladies tailor Korattur",
    "ladies tailoring shop Chennai",
    "custom tailoring Korattur established 2005",
    "Jayaprakash tailor Korattur",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutHighlights />
      <AboutStory />
      <AboutPeople />
      <AboutCTA />
    </>
  );
}
