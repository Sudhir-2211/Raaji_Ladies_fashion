import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isDark = theme === "dark";

  return (
    <div className={twMerge(clsx("flex flex-col max-w-3xl mb-10 md:mb-14", alignmentClasses[align], className))}>
      {eyebrow && (
        <span className={clsx(
          "text-xs font-semibold uppercase tracking-[0.25em] mb-2.5",
          isDark ? "text-gold" : "text-rose"
        )}>
          {eyebrow}
        </span>
      )}
      
      <h2 className={clsx(
        "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium",
        isDark ? "text-white" : "text-charcoal"
      )}>
        {title}
      </h2>

      {description && (
        <p className={clsx(
          "mt-3 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-sans",
          isDark ? "text-cream-dark/90" : "text-charcoal-light"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
