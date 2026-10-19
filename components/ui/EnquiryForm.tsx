"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';

export const EnquiryForm = () => {
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

  if (success) {
    return (
      <div className="bg-green/10 border border-green/30 text-green-dark p-6 rounded-xl text-center shadow-xs">
        <h3 className="font-serif font-bold text-lg mb-2">Thank you!</h3>
        <p className="text-sm">Your enquiry has been received. We will contact you shortly.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-4 text-xs font-semibold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-xs border border-rose-soft/70">
      <h3 className="font-serif text-xl font-bold text-charcoal mb-4">Send an Enquiry</h3>
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
            rows={3}
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
    </div>
  );
};
