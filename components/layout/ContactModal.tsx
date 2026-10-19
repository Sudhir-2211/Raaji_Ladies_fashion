"use client";
import React, { useState } from 'react';
import { Phone, MessageCircle, X, ChevronDown, MapPin } from 'lucide-react';

export const ContactModal = ({ branches }: { branches: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<any>(branches[0] || null);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-sm font-semibold text-charcoal border border-charcoal/20 rounded-full hover:bg-charcoal hover:text-white transition-colors"
      >
        Contact Now
      </button>
    );
  }

  return (
    <div className="relative z-50">
      <button 
        onClick={() => setIsOpen(false)}
        className="px-4 py-2 text-sm font-semibold text-white bg-charcoal rounded-full"
      >
        Close
      </button>

      <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-card border border-rose-soft/70 p-4">
        <h3 className="font-serif font-bold text-lg text-charcoal mb-4">Choose Branch</h3>
        
        <div className="space-y-2 mb-4">
          {branches.map(b => (
            <button
              key={b.id}
              onClick={() => setSelectedBranch(b)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                selectedBranch?.id === b.id ? 'bg-rose/10 text-rose font-medium' : 'hover:bg-cream text-charcoal-muted'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span className="truncate">{b.name}</span>
            </button>
          ))}
        </div>

        {selectedBranch && (
          <div className="space-y-2 pt-2 border-t border-rose-soft/50">
            <a 
              href={`tel:${selectedBranch.phone.replace(/[^0-9]/g, '')}`} 
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-cream hover:bg-gold/20 text-charcoal rounded-lg font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-dark" /> Call {selectedBranch.phone}
            </a>
            {selectedBranch.whatsapp && (
              <a 
                href={`https://wa.me/91${selectedBranch.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-green/10 hover:bg-green/20 text-green-dark rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            )}
          </div>
        )}
      </div>
      
      {/* Invisible backdrop for closing when clicking outside */}
      <div className="fixed inset-0 z-[-1]" onClick={() => setIsOpen(false)} />
    </div>
  );
};
