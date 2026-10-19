import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  bordered?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = true,
  bordered = true,
  padding = "md",
  className,
  ...props
}) => {
  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
  };

  return (
    <div
      className={twMerge(
        clsx(
          "bg-white rounded-xl transition-all duration-300 shadow-card",
          bordered && "border border-rose-soft/60",
          hoverable && "hover:-translate-y-1 hover:shadow-card-hover hover:border-wine/30",
          paddings[padding],
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
