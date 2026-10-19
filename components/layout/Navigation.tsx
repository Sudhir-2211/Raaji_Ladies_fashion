"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { clsx } from "clsx";

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1 font-sans text-sm font-medium">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "px-3.5 py-1.5 rounded-md transition-all duration-300 relative overflow-hidden group",
              isActive
                ? "text-wine font-semibold"
                : "text-charcoal hover:text-wine"
            )}
          >
            {/* Background Layer for hover/active */}
            <div 
              className={clsx(
                "absolute inset-0 rounded-md transition-all duration-300 -z-10",
                isActive 
                  ? "bg-blush shadow-sm opacity-100" 
                  : "bg-blush/40 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 motion-reduce:transition-none"
              )}
            />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
