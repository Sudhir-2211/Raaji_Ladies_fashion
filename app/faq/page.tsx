import React from "react";
import type { Metadata } from "next";
import { FAQHero } from "@/components/faq/FAQHero";
import { FAQInteractiveSection } from "@/components/faq/FAQInteractiveSection";
import { FAQPreparationChecklist } from "@/components/faq/FAQPreparationChecklist";
import { FAQReferenceCallout } from "@/components/faq/FAQReferenceCallout";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "FAQ | Ladies Tailoring in Korattur | Raaji Ladies Fashion",
  description:
    "Find answers to common questions about customer-supplied fabrics, ladies tailoring services, design references, fabric requirements, and pricing discussions in Korattur, Chennai.",
  keywords: [
    "tailoring FAQ Korattur",
    "ladies tailor questions Chennai",
    "blouse stitching FAQ",
    "customer supplied fabric tailor",
    "tailoring price questions Korattur",
  ],
  alternates: {
    canonical: "/faq",
  },
};

export default async function FAQPage() {
  const supabase = await createClient();
  const { data: dbFaqs } = await supabase
    .from("faqs")
    .select("*")
    .eq("is_active", true)
    .order("display_order");

  return (
    <>
      {/* 1. FAQ Hero */}
      <FAQHero />

      {/* 2. Interactive FAQ Section (Search, Filters, Accordion, Empty State) */}
      <FAQInteractiveSection dbFaqs={dbFaqs || []} />

      {/* 3. Before You Visit Preparation Checklist */}
      <FAQPreparationChecklist />

      {/* 4. Design Reference Callout */}
      <FAQReferenceCallout />
    </>
  );
}
