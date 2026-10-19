"use client";

import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-page-enter motion-reduce:animate-none">
      {children}
    </div>
  );
}
