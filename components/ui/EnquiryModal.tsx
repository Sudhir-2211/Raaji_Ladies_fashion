"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';
import { X } from 'lucide-react';

export const EnquiryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: '', mobile: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: submitError } = await supabase.from('enquiries').insert([
      { name: formData.name, mobile: formData.mobile, description: formData.description }
    ]);

    if (submitError) {
      setError('There was an error submitting your enquiry. Please try again.');
    } else {
      setSuccess(true);
      setFormData({ name: '', mobile: '', description: '' });
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute right-4 top-4 text-charcoal-muted hover:text-wine"><X className="w-5 h-5"/></button>
        
        {success ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-green/10 text-green-dark rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">✓</div>
            <h3 className="font-serif font-bold text-xl text-charcoal mb-2">Thank you!</h3>
            <p className="text-sm text-charcoal-muted mb-6">Your enquiry has been received. We will contact you shortly.</p>
            <Button onClick={onClose} variant="primary" className="w-full justify-center">Close</Button>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Send an Enquiry</h3>
            <p className="text-sm text-charcoal-muted mb-6">Fill out the form below and we will get back to you.</p>
            
            {error && <div className="mb-4 text-xs text-rose p-2 bg-rose/10 rounded">{error}</div>}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Name *</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-rose-soft/70 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-wine/20 text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Mobile Number *</label>
                <input 
                  required 
                  type="tel" 
                  value={formData.mobile}
                  onChange={e => setFormData({...formData, mobile: e.target.value})}
                  className="w-full border border-rose-soft/70 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-wine/20 text-sm"
                  placeholder="Your Mobile Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">Enquiry *</label>
                <textarea 
                  required 
                  rows={4}
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full border border-rose-soft/70 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-wine/20 text-sm resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full justify-center" disabled={loading}>
                {loading ? 'Sending...' : 'Submit Enquiry'}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
