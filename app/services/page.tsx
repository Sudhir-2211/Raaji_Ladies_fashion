import React from "react";
import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { FabricMeterageGuide } from "@/components/services/FabricMeterageGuide";
import { ServicesCatalogue } from "@/components/services/ServicesCatalogue";
import { ServiceJourneyStrip } from "@/components/services/ServiceJourneyStrip";
import { ServiceInquiryCallout } from "@/components/services/ServiceInquiryCallout";

export const metadata: Metadata = {
  title: "Ladies Tailoring Services in Korattur",
  description:
    "Explore custom ladies tailoring services offered by Raaji Ladies Fashion in Korattur, Chennai including blouse tailoring, salwar suits, festive lehengas, and saree care.",
  keywords: [
    "ladies tailoring services Korattur",
    "blouse tailoring Chennai",
    "salwar suit tailoring Korattur",
    "lehenga stitching Chennai",
    "saree care finishing Korattur",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Services Hero */}
      <ServicesHero />

      {/* 2. Fabric Meterage Reference Guidelines */}
      <FabricMeterageGuide />

      {/* 3. Tailoring Services Catalogue */}
      <ServicesCatalogue />

      {/* 4. 5-Step Customer Fabric Journey */}
      <ServiceJourneyStrip />

      {/* 5. Custom Reference Callout */}
      <ServiceInquiryCallout />
    </>
  );
}
