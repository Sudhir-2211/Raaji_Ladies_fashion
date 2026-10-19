"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';
import { Edit2, Plus, X } from 'lucide-react';

export const BranchesClient = ({ initialData }: { initialData: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', whatsapp: '', google_maps_url: '', is_active: true });
  const [isAdding, setIsAdding] = useState(false);
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...formData };
    
    try {
      if (editingId) {
        const { error } = await supabase.from('branches').update(payload).eq('id', editingId);
        if (error) throw error;
        setItems(items.map(item => item.id === editingId ? { ...item, ...payload } : item));
        setEditingId(null);
      } else {
        const { data, error } = await supabase.from('branches').insert([payload]).select();
        if (error) throw error;
        if (data) {
          setItems([...items, data[0]]);
          setIsAdding(false);
        }
      }
    } catch (err: any) {
      alert("Error: " + err.message + "\n\nMake sure you have run the Branches SQL Migration in Supabase.");
    }
  };

  const startEdit = (item: any) => {
    setFormData({ 
      name: item.name, 
      phone: item.phone, 
      whatsapp: item.whatsapp || '', 
      google_maps_url: item.google_maps_url || '',
      is_active: item.is_active 
    });
    setEditingId(item.id);
    setIsAdding(false);
  };

  return (
    <div>
      {!isAdding && !editingId && (
        <Button onClick={() => setIsAdding(true)} variant="primary" className="mb-6 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Branch
        </Button>
      )}

      {(isAdding || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-xs border border-rose-soft/70 mb-8 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-xl font-bold">{editingId ? 'Edit Branch' : 'Add Branch'}</h3>
            <button type="button" onClick={() => { setIsAdding(false); setEditingId(null); setFormData({name:'', phone:'', whatsapp:'', google_maps_url:'', is_active:true}); }} className="text-charcoal-muted"><X className="w-5 h-5"/></button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Branch Name</label>
            <input required type="text" className="w-full border rounded p-2" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. Korattur (Bus Terminus)"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input required type="text" className="w-full border rounded p-2" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
              <input type="text" className="w-full border rounded p-2" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Google Maps URL</label>
            <input type="url" className="w-full border rounded p-2" value={formData.google_maps_url} onChange={e => setFormData({...formData, google_maps_url: e.target.value})} placeholder="https://share.google/..." />
          </div>
          
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="isActive" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} />
            <label htmlFor="isActive" className="text-sm font-medium">Active Branch</label>
          </div>
          <Button type="submit" variant="primary">Save Branch</Button>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-cream border-b border-rose-soft/70">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Contact</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-soft/40">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-cream/30">
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-sm text-charcoal-muted">
                  Phone: {item.phone}<br/>
                  {item.whatsapp && <>WA: {item.whatsapp}</>}
                </td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${item.is_active ? 'bg-green/10 text-green-dark' : 'bg-charcoal-muted/10 text-charcoal-muted'}`}>{item.is_active ? 'Active' : 'Inactive'}</span>
                </td>
                <td className="p-4 flex items-center justify-end gap-2">
                  <button onClick={() => startEdit(item)} className="p-2 text-gold-dark hover:bg-gold/10 rounded"><Edit2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
