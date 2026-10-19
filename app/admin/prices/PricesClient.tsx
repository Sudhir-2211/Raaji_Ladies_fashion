"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';
import { Trash2, Edit2, Plus, X } from 'lucide-react';

export const PricesClient = ({ initialData, categories, services }: { initialData: any[], categories: any[], services: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', price_text: '', description: '', is_active: true, category_id: '', service_id: '' });
  const [isAdding, setIsAdding] = useState(false);
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      price_text: formData.price_text,
      description: formData.description,
      is_active: formData.is_active,
      category_id: formData.category_id || null,
      service_id: formData.service_id || null
    };

    if (editingId) {
      const { error } = await supabase.from('prices').update(payload).eq('id', editingId);
      if (!error) {
        setItems(items.map(item => item.id === editingId ? { ...item, ...payload } : item));
        setEditingId(null);
      }
    } else {
      const { data, error } = await supabase.from('prices').insert([payload]).select();
      if (!error && data) {
        setItems([...items, data[0]]);
        setIsAdding(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    const { error } = await supabase.from('prices').delete().eq('id', id);
    if (!error) setItems(items.filter(item => item.id !== id));
  };

  const startEdit = (item: any) => {
    setFormData({ 
      name: item.name, 
      price_text: item.price_text, 
      description: item.description || '', 
      is_active: item.is_active,
      category_id: item.category_id || '',
      service_id: item.service_id || ''
    });
    setEditingId(item.id);
    setIsAdding(false);
  };

  return (
    <div>
      {!isAdding && !editingId && (
        <Button onClick={() => setIsAdding(true)} variant="primary" className="mb-6 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Price Entry
        </Button>
      )}

      {(isAdding || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-xs border border-rose-soft/70 mb-8 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-xl font-bold">{editingId ? 'Edit Price' : 'Add Price'}</h3>
            <button type="button" onClick={() => { setIsAdding(false); setEditingId(null); setFormData({name:'',price_text:'',description:'',is_active:true,category_id:'',service_id:''}); }} className="text-charcoal-muted"><X className="w-5 h-5"/></button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input required type="text" className="w-full border rounded p-2" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price Text (e.g. ₹2,500 – ₹10,000)</label>
            <input required type="text" className="w-full border rounded p-2" value={formData.price_text} onChange={e => setFormData({...formData, price_text: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description (Optional)</label>
            <textarea className="w-full border rounded p-2" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category Association (Optional)</label>
              <select className="w-full border rounded p-2" value={formData.category_id} onChange={e => setFormData({...formData, category_id: e.target.value})}>
                <option value="">None</option>
                {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Service Association (Optional)</label>
              <select className="w-full border rounded p-2" value={formData.service_id} onChange={e => setFormData({...formData, service_id: e.target.value})}>
                <option value="">None</option>
                {services.map(srv => <option key={srv.id} value={srv.id}>{srv.name}</option>)}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="isActive" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} />
            <label htmlFor="isActive" className="text-sm font-medium">Active</label>
          </div>
          <Button type="submit" variant="primary">Save Price</Button>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-cream border-b border-rose-soft/70">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Price Text</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-soft/40">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-cream/30">
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-wine">{item.price_text}</td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${item.is_active ? 'bg-green/10 text-green-dark' : 'bg-charcoal-muted/10 text-charcoal-muted'}`}>{item.is_active ? 'Active' : 'Inactive'}</span>
                </td>
                <td className="p-4 flex items-center justify-end gap-2">
                  <button onClick={() => startEdit(item)} className="p-2 text-gold-dark hover:bg-gold/10 rounded"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-rose hover:bg-rose/10 rounded"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
