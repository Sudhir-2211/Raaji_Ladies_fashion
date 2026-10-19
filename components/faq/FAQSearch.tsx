import React from "react";
import { Search, X } from "lucide-react";

interface FAQSearchProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export const FAQSearch: React.FC<FAQSearchProps> = ({ query, onQueryChange }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <label htmlFor="faq-search-input" className="sr-only">
        Search questions or tailoring topics
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-rose">
          <Search className="w-5 h-5" aria-hidden="true" />
        </div>
        <input
          id="faq-search-input"
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search questions or tailoring topics..."
          className="w-full pl-12 pr-11 py-3.5 bg-white border border-rose-soft/80 rounded-full text-sm font-sans text-charcoal placeholder:text-charcoal-muted/70 focus:outline-hidden focus:border-wine focus:ring-2 focus:ring-wine/20 shadow-xs transition-all duration-200"
          aria-label="Search questions or tailoring topics"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            className="absolute right-3.5 p-1.5 rounded-full text-charcoal-muted hover:text-wine hover:bg-blush/60 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-wine"
            aria-label="Clear search input"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
