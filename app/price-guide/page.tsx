import React from "react";
import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingDisclaimerBanner } from "@/components/pricing/PricingDisclaimerBanner";
import { PricingCatalogue } from "@/components/pricing/PricingCatalogue";
import { PricingFactors } from "@/components/pricing/PricingFactors";
import { PricingPreparationChecklist } from "@/components/pricing/PricingPreparationChecklist";
import { PricingInquiryCallout } from "@/components/pricing/PricingInquiryCallout";

export const metadata: Metadata = {
  title: "Tailoring Price Guide in Korattur | Raaji Ladies Fashion",
  description:
    "Review tailoring specifications and pricing guidance for custom blouse stitching, salwar suits, festive lehengas, and saree care at Raaji Ladies Fashion in Korattur, Chennai. Customers bring their own fabrics.",
  keywords: [
    "tailoring price guide Korattur",
    "blouse stitching cost Korattur",
    "ladies tailor charges Chennai",
    "salwar stitching rates Korattur",
    "saree tailoring services Chennai",
  ],
  alternates: {
    canonical: "/price-guide",
  },
};

export default function PriceGuidePage() {
  return (
    <>
      {/* 1. Price Guide Hero with category jump links */}
      <PricingHero />

      {/* 2. Tailoring Estimates Disclaimer Banner */}
      <PricingDisclaimerBanner />

      {/* 3. Tailoring Catalogue & 4 Category Cards */}
      <PricingCatalogue />

      {/* 4. Pricing & Craftsmanship Determinants */}
      <PricingFactors />

      {/* 5. Fabric Handover Preparation Checklist */}
      <PricingPreparationChecklist />

      {/* 6. In-Shop Consultation & Gallery Inquiry Callout */}
      <PricingInquiryCallout />
    </>
  );
}
