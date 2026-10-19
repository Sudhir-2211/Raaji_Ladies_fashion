import React from "react";
import { FAQItem } from "@/data/faqData";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { Reveal } from "@/components/ui/Reveal";

interface FAQAccordionProps {
  items: FAQItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  openId,
  onToggle,
}) => {
  return (
    <div className="w-full space-y-3.5">
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <Reveal key={item.id} delay={Math.min(index * 50, 500)}>
            <div
              className={clsx(
                "rounded-2xl transition-all duration-300 border bg-white overflow-hidden shadow-2xs",
                isOpen
                  ? "border-wine/40 shadow-xs ring-1 ring-wine/10"
                  : "border-rose-soft/70 hover:border-wine/25 hover:shadow-2xs"
              )}
            >
              <h3>
                <button
                  type="button"
                  onClick={() => onToggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-wine/40 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-charcoal leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={clsx(
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 motion-reduce:transition-none mt-0.5",
                      isOpen
                        ? "bg-blush text-wine rotate-180"
                        : "bg-cream text-charcoal-muted"
                    )}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
              </h3>

              {/* Accessible CSS Grid height transition */}
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
                className={clsx(
                  "grid transition-all duration-300 ease-in-out motion-reduce:transition-none",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0 pointer-events-none"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-rose-soft/30 text-xs sm:text-sm text-charcoal-light font-sans leading-relaxed">
                    <p className="pt-3.5">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
};
