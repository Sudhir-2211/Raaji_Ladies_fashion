"use client";

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
  triggerOnce?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    triggerOnce,
  });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-4";
      case "down":
        return "-translate-y-4";
      case "left":
        return "translate-x-4";
      case "right":
        return "-translate-x-4";
      case "none":
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={twMerge(
        clsx(
          "transition-all duration-1000 ease-out",
          !isVisible && "opacity-0",
          !isVisible && getTransform(),
          isVisible && "opacity-100 translate-y-0 translate-x-0",
          "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:translate-x-0",
          className
        )
      )}
    >
      {children}
    </div>
  );
};
