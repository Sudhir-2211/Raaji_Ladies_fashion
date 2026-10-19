"use client";

import React, { useState, useMemo } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { FAQCategory, faqCategories, faqItems } from "@/data/faqData";
import { FAQSearch } from "@/components/faq/FAQSearch";
import { FAQCategoryFilters } from "@/components/faq/FAQCategoryFilters";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { SearchX, RotateCcw } from "lucide-react";

export const FAQInteractiveSection = ({ dbFaqs }: { dbFaqs?: any[] }) => {
  const itemsToUse = (dbFaqs && dbFaqs.length > 0 ? dbFaqs.map((f: any) => ({
    id: f.id,
    question: f.question,
    answer: f.answer,
    category: (f.category || "fabric") as FAQCategory
  })) : faqItems) as any[];
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | FAQCategory>("all");
  const [openId, setOpenId] = useState<string | null>(itemsToUse[0]?.id ?? null);

  // Compute question counts per category (reflecting current search query)
  const categoryCounts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const counts: Record<string, number> = { all: 0 };

    faqCategories.forEach((cat) => {
      if (cat.id !== "all") {
        counts[cat.id] = 0;
      }
    });

    itemsToUse.forEach((item: any) => {
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);

      if (matchesQuery) {
        counts.all = (counts.all ?? 0) + 1;
        counts[item.category] = (counts[item.category] ?? 0) + 1;
      }
    });

    return counts;
  }, [query]);

  // Filtered FAQ items based on category and query
  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return itemsToUse.filter((item: any) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleReset = () => {
    setQuery("");
    setActiveCategory("all");
    setOpenId(itemsToUse[0]?.id ?? null);
  };

  // Find label of active category
  const activeLabel =
    faqCategories.find((c) => c.id === activeCategory)?.label ?? "Questions";

  return (
    <SectionContainer bg="cream" padding="md" className="border-b border-rose-soft/40">
      <div className="max-w-4xl mx-auto">
        {/* 1. FAQ Search Field */}
        <FAQSearch query={query} onQueryChange={setQuery} />

        {/* 2. FAQ Category Filter Pills */}
        <FAQCategoryFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        {/* 3. Result Count & Context Indicator */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-rose-soft/50 text-xs text-charcoal-muted">
          <span>
            Showing <strong className="text-charcoal font-semibold">{filteredFaqs.length}</strong>{" "}
            {filteredFaqs.length === 1 ? "question" : "questions"}
            {activeCategory !== "all" && (
              <>
                {" "}
                in <span className="text-wine font-semibold">{activeLabel}</span>
              </>
            )}
            {query && (
              <>
                {" "}
                matching &ldquo;<span className="text-charcoal font-semibold">{query}</span>&rdquo;
              </>
            )}
          </span>

          {(query || activeCategory !== "all") && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-wine hover:text-wine-dark transition-colors focus:outline-hidden focus-visible:underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* 4. FAQ Accordion or Empty State */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 motion-reduce:transition-none motion-reduce:animate-none">
          {filteredFaqs.length > 0 ? (
            <FAQAccordion
              items={filteredFaqs}
              openId={openId}
              onToggle={handleToggle}
            />
          ) : (
            <div className="bg-white rounded-2xl border border-rose-soft/80 p-8 sm:p-12 text-center max-w-md mx-auto shadow-xs">
              <div className="w-12 h-12 rounded-full bg-cream border border-rose-soft flex items-center justify-center text-rose mx-auto mb-4">
                <SearchX className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                No matching questions found
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed mb-6">
                We couldn&apos;t find any questions matching your search. Try adjusting your search keywords or switching categories.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-wine hover:bg-wine-dark transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-wine"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Search & Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};
