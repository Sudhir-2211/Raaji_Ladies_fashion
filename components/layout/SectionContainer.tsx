import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: "cream" | "blush" | "wine" | "white" | "dark";
  padding?: "none" | "sm" | "md" | "lg";
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  bg = "cream",
  padding = "md",
  containerSize = "default",
  id,
  className,
  ...props
}) => {
  const backgrounds = {
    cream: "bg-cream text-charcoal",
    blush: "bg-blush text-charcoal",
    wine: "bg-wine text-white",
    white: "bg-white text-charcoal",
    dark: "bg-charcoal text-cream",
  };

  const paddings = {
    none: "py-0",
    sm: "py-10 md:py-14",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  const containerSizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  };

  return (
    <section
      id={id}
      className={twMerge(clsx("w-full transition-colors", backgrounds[bg], paddings[padding], className))}
      {...props}
    >
      <div className={clsx("mx-auto px-4 sm:px-6 lg:px-8", containerSizes[containerSize])}>
        {children}
      </div>
    </section>
  );
};
