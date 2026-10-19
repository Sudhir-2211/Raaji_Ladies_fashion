import React from "react";
import { FAQCategory, FAQCategoryOption, faqCategories } from "@/data/faqData";
import { clsx } from "clsx";

interface FAQCategoryFiltersProps {
  activeCategory: "all" | FAQCategory;
  onSelectCategory: (category: "all" | FAQCategory) => void;
  categoryCounts: Record<string, number>;
}

export const FAQCategoryFilters: React.FC<FAQCategoryFiltersProps> = ({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-2 mb-8">
      <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max px-2">
        {faqCategories.map((cat: FAQCategoryOption) => {
          const isActive = activeCategory === cat.id;
          const count = categoryCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={clsx(
                "px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-wine shadow-2xs",
                isActive
                  ? "bg-wine text-white shadow-xs"
                  : "bg-white text-charcoal-light hover:text-wine hover:bg-blush/40 border border-rose-soft/80"
              )}
              aria-pressed={isActive}
            >
              <span>{cat.label}</span>
              <span
                className={clsx(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-medium transition-colors",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-cream text-charcoal-muted"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
