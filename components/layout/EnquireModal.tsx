"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';

export const EnquireModal = ({ branches, isOpen: controlledIsOpen, onClose }: { branches: any[], isOpen?: boolean, onClose?: () => void }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  
  const handleClose = () => {
    if (onClose) onClose();
    else setInternalIsOpen(false);
    setSuccess(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    description: '',
    branch_id: ''
  });
  
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.branch_id) {
      setErrorMsg("Please select a preferred branch.");
      return;
    }

    const cleanMobile = formData.mobile.replace(/[^0-9]/g, '');
    if (cleanMobile.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    
    const selectedBranch = branches.find(b => b.id === formData.branch_id);

    try {
      const finalDescription = `[Preferred Branch: ${selectedBranch?.name || 'Not specified'}]\n\n${formData.description.trim()}`;
      const { error } = await supabase.from('enquiries').insert([{
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        description: finalDescription,
        branch_id: selectedBranch?.id || null,
        branch_name: selectedBranch?.name || null
      }]);
      
      if (error) throw error;
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to submit enquiry. Please check your connection or contact us directly.");
    }
    setLoading(false);
  };

  if (!isOpen) {
    if (controlledIsOpen !== undefined) return null;
    return (
      <button 
        onClick={() => setInternalIsOpen(true)}
        className="px-4 py-2 text-sm font-semibold text-white bg-wine rounded-full hover:bg-wine/90 transition-colors shadow-sm"
      >
        Enquire Now
      </button>
    );
  }

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto overflow-x-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[520px] max-h-full flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-rose-soft/50 shrink-0">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-wine">Enquire Now</h2>
          <button 
            onClick={handleClose} 
            className="text-charcoal-muted hover:text-wine p-2 -mr-2 rounded-full hover:bg-rose-soft/20 transition-colors focus:outline-none focus:ring-2 focus:ring-wine/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 overflow-y-auto">
          {success ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green/10 text-green-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-charcoal mb-2">Thank you.</h3>
              <p className="text-sm sm:text-base text-charcoal-muted mb-6">Your enquiry has been received. We will contact you shortly.</p>
              <button 
                onClick={handleClose} 
                className="w-full sm:w-auto px-8 py-2.5 bg-charcoal text-white rounded-full font-medium hover:bg-charcoal/90 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {errorMsg && (
                <div className="bg-rose/10 text-rose text-xs p-3 rounded-lg border border-rose/30">
                  {errorMsg}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Select Branch *</label>
                <select 
                  required 
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-charcoal/20 focus:border-wine focus:ring-1 focus:ring-wine outline-none bg-white text-sm sm:text-base"
                  value={formData.branch_id}
                  onChange={e => setFormData({...formData, branch_id: e.target.value})}
                >
                  <option value="" disabled>Choose a branch...</option>
                  {branches.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Name *</label>
                <input 
                  required 
                  type="text" 
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-charcoal/20 focus:border-wine focus:ring-1 focus:ring-wine outline-none text-sm sm:text-base" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Mobile Number *</label>
                <input 
                  required 
                  type="tel" 
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-charcoal/20 focus:border-wine focus:ring-1 focus:ring-wine outline-none text-sm sm:text-base" 
                  value={formData.mobile} 
                  onChange={e => setFormData({...formData, mobile: e.target.value})} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Enquiry / Description *</label>
                <textarea 
                  required 
                  rows={4} 
                  className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-charcoal/20 focus:border-wine focus:ring-1 focus:ring-wine outline-none resize-none text-sm sm:text-base" 
                  placeholder="How can we help you?" 
                  value={formData.description} 
                  onChange={e => setFormData({...formData, description: e.target.value})} 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading} 
                className="w-full py-3.5 bg-wine text-white rounded-lg font-bold hover:bg-wine/90 transition-colors disabled:opacity-70 mt-2 text-sm sm:text-base shadow-sm"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
