"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "./CategoryCard";
import { tailoringCategories } from "@/data/homeData";
import { Reveal } from "@/components/ui/Reveal";

export const FourCategoriesSection = ({ dbCategories }: { dbCategories?: any[] }) => {
  const rawCategories = dbCategories && dbCategories.length > 0 ? dbCategories.map((c: any, idx: number) => ({
    id: c.slug,
    categoryNum: `CATEGORY 0${idx + 1}`,
    title: c.name,
    label: c.name,
    description: c.description,
    linkText: "Explore Collection",
    href: `/gallery?category=${c.slug}`,
    imageUrl: c.image_url,
    imagePlaceholderAlt: c.name
  })) : tailoringCategories;

  const categoriesToUse = rawCategories.slice(0, 4);

  const [activeCategoryId, setActiveCategoryId] = useState<string>(categoriesToUse[0]?.id || "blouses");

  return (
    <SectionContainer bg="cream" padding="lg">
      <Reveal delay={0}>
        <SectionHeading
          eyebrow="ARTISANAL SPECIALTIES"
          title="Explore Tailoring Categories"
          description="Custom-stitched using your supplied fabrics: silk, cotton, velvet, organza, tussar, and chiffon."
          align="center"
        />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoriesToUse.map((category: any, index: number) => (
          <Reveal key={category.id} delay={index * 100}>
            <CategoryCard
              category={category}
              isExpanded={activeCategoryId === category.id}
              onHover={() => setActiveCategoryId(category.id)}
            />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
};
