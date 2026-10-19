"use client";
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
// We would add mobile drawer here in a real app, keeping simple for now
export const AdminTopbar = () => {
  return (
    <header className="lg:hidden bg-white border-b border-rose-soft/50 p-4 flex items-center justify-between">
      <span className="font-serif font-bold text-charcoal">Admin</span>
      <button className="p-2 rounded-md hover:bg-cream"><Menu className="w-5 h-5" /></button>
    </header>
  );
};
