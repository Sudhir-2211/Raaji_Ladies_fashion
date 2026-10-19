import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { DressMakingJourney } from "@/components/home/DressMakingJourney";
import { FourCategoriesSection } from "@/components/home/FourCategoriesSection";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: dbCategories } = await supabase
    .from("categories")
    .select("*")
    .eq("is_active", true)
    .eq("show_on_home", true)
    .order("home_position");
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Why Choose Raaji Ladies Fashion */}
      <WhyChooseSection />

      {/* 3. 5-Stage Dress-Making Journey */}
      <DressMakingJourney />

      {/* 4. Four Main Tailoring Categories */}
      <FourCategoriesSection dbCategories={dbCategories || []} />
    </>
  );
}
