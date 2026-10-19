import React from "react";
import { clsx } from "clsx";
import { Filter, RotateCcw } from "lucide-react";

export interface GalleryFilterBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedFabric: string;
  onSelectFabric: (fab: string) => void;
  selectedOccasion: string;
  onSelectOccasion: (occ: string) => void;
  onResetFilters: () => void;
  isFiltered: boolean;
  categoryCounts: Record<string, number>;
}

export const GalleryFilterBar: React.FC<GalleryFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedFabric,
  onSelectFabric,
  selectedOccasion,
  onSelectOccasion,
  onResetFilters,
  isFiltered,
  categoryCounts,
}) => {
  const categories = [
    { id: "all", label: "All Works", count: categoryCounts.all || 0 },
    { id: "bridal", label: "Bridal Wear", count: categoryCounts.bridal || 0 },
    { id: "aari-work", label: "Aari Work", count: categoryCounts["aari-work"] || 0 },
    { id: "embroidery", label: "Embroidery", count: categoryCounts.embroidery || 0 },
    { id: "scallop", label: "Scallop & Cutwork", count: categoryCounts.scallop || 0 },
    { id: "designer-blouses", label: "Designer Tops", count: categoryCounts["designer-blouses"] || 0 },
  ];

  const fabrics = [
    "All Fabrics",
    "Silk",
    "Cotton",
    "Georgette",
    "Chanderi",
    "Organza",
    "Velvet",
  ];

  const occasions = [
    "All Occasions",
    "Bridal",
    "Festive",
    "Daily",
    "Contemporary",
  ];

  return (
    <div className="py-6 border-b border-rose-soft/50 space-y-4 font-sans">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={clsx(
                  "px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border",
                  isActive
                    ? "bg-wine text-white border-wine shadow-sm"
                    : "bg-white text-charcoal border-rose-soft/80 hover:border-wine/40 hover:bg-blush/30"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={clsx(
                    "ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full",
                    isActive ? "bg-white/20 text-white" : "bg-cream text-charcoal-muted"
                  )}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Dropdowns: Fabric & Occasion */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {/* Fabric Select */}
          <div className="relative">
            <select
              value={selectedFabric}
              onChange={(e) => onSelectFabric(e.target.value)}
              className="appearance-none bg-white border border-rose-soft/80 rounded-lg text-xs font-medium text-charcoal pl-3 pr-8 py-2 hover:border-wine/40 focus:outline-none focus:ring-1 focus:ring-wine transition-colors cursor-pointer"
            >
              {fabrics.map((f) => (
                <option key={f} value={f === "All Fabrics" ? "all" : f}>
                  {f === "All Fabrics" ? "Fabric: All" : f}
                </option>
              ))}
            </select>
            <Filter className="w-3 h-3 text-charcoal-muted absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Occasion Select */}
          <div className="relative">
            <select
              value={selectedOccasion}
              onChange={(e) => onSelectOccasion(e.target.value)}
              className="appearance-none bg-white border border-rose-soft/80 rounded-lg text-xs font-medium text-charcoal pl-3 pr-8 py-2 hover:border-wine/40 focus:outline-none focus:ring-1 focus:ring-wine transition-colors cursor-pointer"
            >
              {occasions.map((o) => (
                <option key={o} value={o === "All Occasions" ? "all" : o}>
                  {o === "All Occasions" ? "Occasion: All" : o}
                </option>
              ))}
            </select>
            <Filter className="w-3 h-3 text-charcoal-muted absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Reset Filters Action */}
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-rose hover:text-wine bg-white border border-rose/30 hover:border-wine transition-colors"
              title="Reset all filters"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
