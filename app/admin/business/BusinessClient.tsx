"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Building2, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

export const BusinessClient = ({ initialConfig, initialBranches }: { initialConfig: any, initialBranches: any[] }) => {
  const [config, setConfig] = useState(initialConfig);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setErrorMsg(null);
    setSavedSuccess(false);

    try {
      const { error } = await supabase.from('site_content').upsert({
        id: 'site_config',
        title: 'Site Configuration',
        content: config
      });

      if (error) throw error;
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 4000);
    } catch (err: any) {
      setErrorMsg(`Save error: ${err.message}`);
    }
    setSaving(false);
  };

  return (
    <div className="space-y-8">
      {/* Configuration Form */}
      <form onSubmit={handleSave} className="bg-white rounded-xl shadow-xs border border-rose-soft/70 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-rose-soft/60">
          <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-wine">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-charcoal">Store Identity & Positioning</h2>
            <p className="text-xs text-charcoal-muted">Public business name and positioning copy.</p>
          </div>
        </div>

        {savedSuccess && (
          <div className="bg-green/10 text-green-dark p-3.5 rounded-lg border border-green/30 text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Business information successfully saved to Supabase.</span>
          </div>
        )}

        {errorMsg && (
          <div className="bg-rose/10 text-rose p-3.5 rounded-lg border border-rose/30 text-sm">
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">Business Name</label>
            <input 
              type="text" 
              required
              className="w-full border rounded-lg p-2.5 text-sm bg-gray-50 text-charcoal font-semibold" 
              value={config.name || "RAAJI Ladies Fashion"} 
              readOnly
              title="Business name is non-negotiable: RAAJI Ladies Fashion"
            />
            <span className="text-[11px] text-charcoal-muted mt-1 block">Brand name is fixed as RAAJI Ladies Fashion.</span>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">Established Year</label>
            <input 
              type="text" 
              required
              className="w-full border rounded-lg p-2.5 text-sm bg-gray-50 text-charcoal font-semibold" 
              value="Since 2005" 
              readOnly
              title="Preserve 'Since 2005'"
            />
            <span className="text-[11px] text-charcoal-muted mt-1 block">Verified heritage since 2005.</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Hero Tagline</label>
          <input 
            type="text" 
            required
            className="w-full border rounded-lg p-2.5 text-sm" 
            value={config.tagline || ""} 
            onChange={e => setConfig({...config, tagline: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Hero Subtitle</label>
          <textarea 
            rows={2}
            className="w-full border rounded-lg p-2.5 text-sm" 
            value={config.subtitle || ""} 
            onChange={e => setConfig({...config, subtitle: e.target.value})}
          />
        </div>

        <div className="pt-4 border-t border-rose-soft/60 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-charcoal text-sm">Top Announcement Bar</h3>
              <p className="text-xs text-charcoal-muted">Displays in the gold highlight banner at the very top of every page.</p>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={config.announcement_active ?? true} 
                onChange={e => setConfig({...config, announcement_active: e.target.checked})}
                className="w-4 h-4 text-wine rounded"
              />
              <span className="text-sm font-medium">Show Banner</span>
            </label>
          </div>

          <input 
            type="text" 
            className="w-full border rounded-lg p-2.5 text-sm" 
            value={config.announcement || ""} 
            onChange={e => setConfig({...config, announcement: e.target.value})}
            placeholder="e.g. Bring your own fabrics • Precision anatomical fit • Established 2005"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" disabled={saving}>
            {saving ? "Saving Changes..." : "Save Business Details"}
          </Button>
        </div>
      </form>

      {/* Verified Korattur Branches Overview */}
      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 p-6 sm:p-8 space-y-4">
        <div className="flex justify-between items-center pb-4 border-b border-rose-soft/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-wine">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-charcoal">Verified Korattur Branches</h2>
              <p className="text-xs text-charcoal-muted">Preserving the two official Korattur workshop branches.</p>
            </div>
          </div>
          <Link href="/admin/branches" className="text-xs font-bold text-wine hover:underline flex items-center gap-1">
            <span>Manage Branches</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {initialBranches.map(branch => (
            <div key={branch.id} className="p-4 rounded-lg bg-cream/40 border border-rose-soft/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif font-bold text-charcoal">{branch.name}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${branch.is_active ? 'bg-green/10 text-green-dark' : 'bg-charcoal/10 text-charcoal-muted'}`}>
                    {branch.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <p className="text-xs text-charcoal-muted mb-2">{branch.address}</p>
                <div className="text-xs text-wine font-semibold space-y-1">
                  <div>Phone: {branch.phone}</div>
                  <div>WhatsApp: {branch.whatsapp}</div>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-rose-soft/40 flex justify-between items-center">
                <a href={branch.google_maps_url} target="_blank" rel="noopener noreferrer" className="text-[11px] text-wine hover:underline flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Google Maps Link</span>
                </a>
                <Link href="/admin/branches" className="text-[11px] text-charcoal-muted hover:text-wine font-medium">Edit</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
