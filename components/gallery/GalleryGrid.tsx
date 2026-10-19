"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { galleryItems, GalleryItem } from "@/data/galleryData";
import { GalleryCard } from "./GalleryCard";
import { GalleryFilterBar } from "./GalleryFilterBar";
import { StitchingDetailsModal } from "./StitchingDetailsModal";
import { GalleryInquiryCTA } from "./GalleryInquiryCTA";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Reveal } from "@/components/ui/Reveal";
import { Scissors } from "lucide-react";

export const GalleryGrid = ({ dbItems }: { dbItems?: any[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const itemsToUse = (dbItems && dbItems.length > 0 ? dbItems.map((dbItem: any) => ({
    id: dbItem.id,
    sampleCode: dbItem.sample_code || `REF-${dbItem.id.substring(0, 5).toUpperCase()}`,
    title: dbItem.title || "Custom Tailored Design",
    description: dbItem.description || "",
    imageUrl: dbItem.image_url,
    src: dbItem.image_url,
    category: dbItem.categories?.slug || "all",
    categoryLabel: dbItem.categories?.name || "Bespoke Design",
    fabric: dbItem.fabric || "Silk",
    fabricBadge: dbItem.fabric ? dbItem.fabric.toUpperCase() : "CUSTOM TAILORED",
    occasion: dbItem.occasion || "Festive",
    featureTag: dbItem.sample_code || "Tailored Pattern",
    structuralHighlights: [
      "Custom paper pattern drafted to individual measurements",
      "Pure cotton voile inner lining for breathable comfort"
    ]
  })) : galleryItems) as any[];

  // Read initial category from URL query or default to 'all'
  const categoryParam = searchParams.get("category");
  const initialCategory = categoryParam || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedFabric, setSelectedFabric] = useState<string>("all");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("all");
  const [selectedItemForModal, setSelectedItemForModal] = useState<GalleryItem | null>(null);

  // Sync state if URL search param changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
  }, [categoryParam]);

  // Handle category change and reflect in URL query
  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === "all") {
      router.push("/gallery", { scroll: false });
    } else {
      router.push(`/gallery?category=${cat}`, { scroll: false });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedFabric("all");
    setSelectedOccasion("all");
    router.push("/gallery", { scroll: false });
  };

  // Compute counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: itemsToUse.length,
      bridal: 0,
      "aari-work": 0,
      embroidery: 0,
      scallop: 0,
      "designer-blouses": 0,
    };
    itemsToUse.forEach((item: any) => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });
    return counts;
  }, [itemsToUse]);

  // Filtered items logic
  const filteredItems = useMemo(() => {
    return itemsToUse.filter((item: any) => {
      const matchCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchFabric =
        selectedFabric === "all" || item.fabric === selectedFabric;
      const matchOccasion =
        selectedOccasion === "all" || item.occasion === selectedOccasion;

      return matchCategory && matchFabric && matchOccasion;
    });
  }, [selectedCategory, selectedFabric, selectedOccasion, itemsToUse]);

  const isFiltered =
    selectedCategory !== "all" ||
    selectedFabric !== "all" ||
    selectedOccasion !== "all";

  return (
    <SectionContainer bg="cream" padding="md" className="min-h-screen">
      {/* Filter and Control Bar */}
      <GalleryFilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        selectedFabric={selectedFabric}
        onSelectFabric={setSelectedFabric}
        selectedOccasion={selectedOccasion}
        onSelectOccasion={setSelectedOccasion}
        onResetFilters={handleResetFilters}
        isFiltered={isFiltered}
        categoryCounts={categoryCounts}
      />

      {/* Grid of Design Cards */}
      <div className="py-8 animate-in fade-in duration-500 ease-out">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <Reveal key={item.id} delay={Math.min(index * 100, 500)}>
                <GalleryCard
                  item={item}
                  onOpenDetails={(selected) => setSelectedItemForModal(selected)}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          /* Empty Filter State */
          <div className="py-16 text-center max-w-md mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-14 h-14 rounded-full bg-blush border border-wine/20 flex items-center justify-center text-wine mb-4">
              <Scissors className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
              No Matching Portfolio Patterns Found
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-light font-sans leading-relaxed mb-6">
              There are currently no pattern references matching your active fabric and occasion filter combination.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-lg bg-wine text-white text-xs font-semibold hover:bg-wine-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Custom Inquiry Callout */}
      <GalleryInquiryCTA />

      {/* Stitching Details Modal */}
      <StitchingDetailsModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
      />
    </SectionContainer>
  );
};
