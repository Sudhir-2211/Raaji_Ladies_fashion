import React, { Suspense } from "react";
import type { Metadata } from "next";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { StudioInspectionBar } from "@/components/gallery/StudioInspectionBar";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryItems } from "@/data/galleryData";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Tailoring Designs & Gallery",
  description:
    "Explore bespoke tailoring design patterns, blouses, salwar suits, lehengas, and saree care finishes crafted at Raaji Ladies Fashion in Korattur, Chennai.",
  keywords: [
    "tailoring designs",
    "blouse designs Korattur",
    "salwar suit designs Chennai",
    "festive lehenga designs",
    "saree care finishing Korattur",
  ],
};

export default async function GalleryPage() {
  const supabase = await createClient();
  const { data: dbGalleryItems } = await supabase
    .from("gallery_items")
    .select("*, categories(slug)")
    .eq("is_active", true)
    .order("display_order");

  const hasDbItems = dbGalleryItems && dbGalleryItems.length > 0;
  const totalCount = hasDbItems ? dbGalleryItems.length : galleryItems.length;

  return (
    <>
      {/* 1. Gallery Editorial Hero */}
      <GalleryHero totalCount={totalCount} />

      {/* 2. Studio Quality Inspection Notice Bar */}
      <StudioInspectionBar />

      {/* 3. Filterable Gallery Grid wrapped in Suspense for searchParams */}
      <Suspense
        fallback={
          <div className="py-24 text-center text-sm font-sans text-charcoal-muted">
            Loading tailored designs archive...
          </div>
        }
      >
        <GalleryGrid dbItems={dbGalleryItems || []} />
      </Suspense>
    </>
  );
}
