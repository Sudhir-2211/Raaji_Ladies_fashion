import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "group inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md tracking-wide active:scale-[0.98]";

  const variants = {
    primary: "bg-wine text-white hover:bg-wine-dark shadow-sm hover:shadow-md hover:-translate-y-[2px]",
    secondary: "bg-white text-wine border border-wine/30 hover:border-wine hover:bg-blush/50 hover:shadow-sm hover:-translate-y-[2px]",
    outline: "bg-transparent text-charcoal border border-charcoal/20 hover:border-wine hover:text-wine hover:shadow-sm hover:-translate-y-[2px]",
    gold: "bg-gold text-charcoal font-semibold hover:bg-gold-light shadow-sm hover:shadow-md hover:-translate-y-[2px]",
    ghost: "bg-transparent text-wine hover:bg-blush/40 hover:-translate-y-[2px]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const combinedClasses = twMerge(
    clsx(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    )
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
