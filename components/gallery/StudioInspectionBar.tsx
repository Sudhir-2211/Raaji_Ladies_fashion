import React from "react";
import { Award, Info } from "lucide-react";

export const StudioInspectionBar: React.FC = () => {
  return (
    <div className="bg-wine-dark text-white py-3 px-4 sm:px-6 border-y border-wine/40 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold/20 text-gold text-[10px] font-bold tracking-widest uppercase border border-gold/40">
            <Award className="w-3 h-3" />
            BESPOKE QUALITY STANDARD
          </span>
          <span className="hidden md:inline text-cream-dark/90 text-[11px]">
            Inspected for millimeter seam balance & neckline symmetry
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-cream-dark/80 text-center sm:text-right">
          <Info className="w-3.5 h-3.5 text-gold shrink-0" />
          <span>Click &ldquo;View Stitching Details&rdquo; on any card to review structural pattern specifications.</span>
        </div>
      </div>
    </div>
  );
};
