import React from "react";
import { siteConfig } from "@/data/siteConfig";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-wine text-white py-1.5 px-4 text-[11px] sm:text-xs font-medium tracking-wider text-center border-b border-wine-dark/40 uppercase font-sans overflow-hidden whitespace-nowrap text-ellipsis">
      <span className="inline-block">{siteConfig.announcement}</span>
    </div>
  );
};
