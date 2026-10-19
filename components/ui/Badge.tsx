import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "wine" | "rose" | "gold" | "green" | "cream" | "blush" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "wine",
  size = "sm",
  className,
}) => {
  const variants = {
    wine: "bg-wine text-white",
    rose: "bg-rose/10 text-rose border border-rose/20",
    gold: "bg-gold/15 text-gold-dark border border-gold/30",
    green: "bg-green/10 text-green border border-green/20",
    cream: "bg-cream text-charcoal border border-charcoal/10",
    blush: "bg-blush text-wine border border-wine/15",
    outline: "bg-transparent text-charcoal-muted border border-charcoal/20",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase",
    md: "px-3.5 py-1 text-xs font-medium tracking-wide uppercase",
  };

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center rounded-full font-sans transition-colors",
          variants[variant],
          sizes[size],
          className
        )
      )}
    >
      {children}
    </span>
  );
};
