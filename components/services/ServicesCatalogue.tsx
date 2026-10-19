import React from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ServiceCard } from "./ServiceCard";
import { serviceCategories } from "@/data/servicesData";
import { Reveal } from "@/components/ui/Reveal";
import { createClient } from "@/utils/supabase/server";

export const ServicesCatalogue = async () => {
  const supabase = await createClient();
  const { data: dbServices } = await supabase.from('services').select('*').eq('is_active', true).order('display_order');
  
  const hasDbServices = dbServices && dbServices.length > 0;

  return (
    <SectionContainer bg="cream" padding="lg" className="border-b border-rose-soft/40">
      <div className="max-w-5xl mx-auto space-y-10">
        {hasDbServices ? (
          dbServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 150}>
              <ServiceCard category={{
                id: (service.slug || service.id) as any,
                categoryNum: `CATEGORY 0${index + 1}`,
                title: service.name,
                subtitle: service.subtitle || serviceCategories[index]?.subtitle || "",
                description: service.description,
                keyAspects: Array.isArray(service.key_aspects) && service.key_aspects.length > 0 
                  ? service.key_aspects 
                  : (serviceCategories[index]?.keyAspects || []),
                galleryLink: service.gallery_link || `/gallery?category=${service.slug || 'all'}`,
                galleryLinkText: "View Designs",
                imageUrl: service.image_url || serviceCategories[index]?.imageUrl
              }} />
            </Reveal>
          ))
        ) : (
          serviceCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 150}>
              <ServiceCard category={category} />
            </Reveal>
          ))
        )}
      </div>
    </SectionContainer>
  );
};
