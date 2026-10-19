"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';
import { Trash2, Edit2, Plus, X } from 'lucide-react';

export const FAQsClient = ({ initialData }: { initialData: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ question: '', answer: '', is_active: true });
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const { error } = await supabase.from('faqs').update(formData).eq('id', editingId);
      if (!error) {
        setItems(items.map(item => item.id === editingId ? { ...item, ...formData } : item));
        setEditingId(null);
      }
    } else {
      const { data, error } = await supabase.from('faqs').insert([formData]).select();
      if (!error && data) {
        setItems([...items, data[0]]);
        setIsAdding(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    const { error } = await supabase.from('faqs').delete().eq('id', id);
    if (!error) setItems(items.filter(item => item.id !== id));
  };

  const startEdit = (item: any) => {
    setFormData({ question: item.question, answer: item.answer, is_active: item.is_active });
    setEditingId(item.id);
    setIsAdding(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        {!isAdding && !editingId && (
          <Button onClick={() => setIsAdding(true)} variant="primary" className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add FAQ
          </Button>
        )}
        <input 
          type="text" 
          placeholder="Search questions..." 
          className="border border-rose-soft rounded-lg px-4 py-2 text-sm bg-white ml-auto min-w-[250px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {(isAdding || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-xs border border-rose-soft/70 mb-8 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-xl font-bold">{editingId ? 'Edit FAQ' : 'Add FAQ'}</h3>
            <button type="button" onClick={() => { setIsAdding(false); setEditingId(null); setFormData({question:'',answer:'',is_active:true}); }} className="text-charcoal-muted"><X className="w-5 h-5"/></button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Question</label>
            <input required type="text" className="w-full border rounded p-2" value={formData.question} onChange={e => setFormData({...formData, question: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Answer</label>
            <textarea required className="w-full border rounded p-2" value={formData.answer} onChange={e => setFormData({...formData, answer: e.target.value})} />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="isActive" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} />
            <label htmlFor="isActive" className="text-sm font-medium">Active</label>
          </div>
          <Button type="submit" variant="primary">Save FAQ</Button>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-cream border-b border-rose-soft/70">
            <tr>
              <th className="p-4 font-semibold">Question</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-soft/40">
            {items.filter(item => 
              item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
              item.answer.toLowerCase().includes(searchQuery.toLowerCase())
            ).map(item => (
              <tr key={item.id} className="hover:bg-cream/30">
                <td className="p-4 font-medium">{item.question}</td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${item.is_active ? 'bg-green/10 text-green-dark' : 'bg-charcoal-muted/10 text-charcoal-muted'}`}>{item.is_active ? 'Active' : 'Inactive'}</span>
                </td>
                <td className="p-4 flex items-center justify-end gap-2">
                  <button onClick={() => startEdit(item)} className="p-2 text-gold-dark hover:bg-gold/10 rounded"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-rose hover:bg-rose/10 rounded"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
            {items.filter(item => 
              item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
              item.answer.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && <tr><td colSpan={3} className="p-4 text-center text-charcoal-muted">No FAQs found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
