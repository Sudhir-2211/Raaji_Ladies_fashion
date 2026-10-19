import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { pricingCategories } from "@/data/pricingData";
import { PricingCard } from "@/components/pricing/PricingCard";
import { Reveal } from "@/components/ui/Reveal";
import { createClient } from "@/utils/supabase/server";

export const PricingCatalogue = async () => {
  const supabase = await createClient();
  const { data: dbPrices } = await supabase.from('prices').select('*').eq('is_active', true).order('display_order');
  
  const hasDbPrices = dbPrices && dbPrices.length > 0;
  
  const displayItems = pricingCategories.map((baseItem, i) => {
    // If we have DB prices, we try to find one by order or fallback to base
    if (hasDbPrices && i < dbPrices.length) {
      const dbPrice = dbPrices[i];
      return {
        ...baseItem,
        title: dbPrice.name,
        pricingStatus: dbPrice.price_text,
        description: dbPrice.description || baseItem.description,
        designConsiderations: Array.isArray(dbPrice.specifications) && dbPrice.specifications.length > 0 
          ? dbPrice.specifications 
          : baseItem.designConsiderations
      };
    }
    return baseItem;
  });
  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <Reveal delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-rose uppercase block mb-2">
              TAILORING SERVICES CATALOGUE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Service Categories & Tailoring Guidance
            </h2>
            <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed">
              Review detailed specifications, fabric recommendations, and construction details for each of our tailoring services. Final estimates are determined individually when you bring your fabric to our shop.
            </p>
          </div>
        </Reveal>

        {/* 4 Category Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 150}>
              <PricingCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
