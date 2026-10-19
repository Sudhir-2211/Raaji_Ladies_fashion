"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';
import { Trash2, Edit2, Plus, X, UploadCloud } from 'lucide-react';
import Image from 'next/image';

export const GalleryClient = ({ initialData, categories }: { initialData: any[], categories: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '', image_url: '', is_active: true, category_id: '' });
  const [file, setFile] = useState<File | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [uploading, setUploading] = useState(false);
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    let finalImageUrl = formData.image_url;

    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = Math.random().toString() + '.' + fileExt;
      const filePath = 'gallery/' + fileName;
      
      const { error: uploadError } = await supabase.storage
        .from('website-images')
        .upload(filePath, file);

      if (uploadError) {
        alert('Error uploading image');
        setUploading(false);
        return;
      }
      
      const { data: publicUrlData } = supabase.storage.from('website-images').getPublicUrl(filePath);
      finalImageUrl = publicUrlData.publicUrl;
    }

    const payload = {
      title: formData.title,
      description: formData.description,
      image_url: finalImageUrl,
      is_active: formData.is_active,
      category_id: formData.category_id || null
    };

    if (editingId) {
      const { error } = await supabase.from('gallery_items').update(payload).eq('id', editingId);
      if (!error) {
        setItems(items.map(item => item.id === editingId ? { ...item, ...payload } : item));
        setEditingId(null);
      }
    } else {
      if (!finalImageUrl) {
        alert('Image is required');
        setUploading(false);
        return;
      }
      const { data, error } = await supabase.from('gallery_items').insert([payload]).select();
      if (!error && data) {
        setItems([data[0], ...items]);
        setIsAdding(false);
      }
    }
    setUploading(false);
    setFile(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this photo?')) return;
    const { error } = await supabase.from('gallery_items').delete().eq('id', id);
    if (!error) setItems(items.filter(item => item.id !== id));
  };

  const startEdit = (item: any) => {
    setFormData({ 
      title: item.title || '', 
      description: item.description || '', 
      image_url: item.image_url, 
      is_active: item.is_active,
      category_id: item.category_id || ''
    });
    setEditingId(item.id);
    setFile(null);
    setIsAdding(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        {!isAdding && !editingId && (
          <Button onClick={() => setIsAdding(true)} variant="primary" className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Photo
          </Button>
        )}
        <select 
          className="border border-rose-soft rounded-lg px-4 py-2 text-sm bg-white ml-auto"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
        </select>
      </div>

      {(isAdding || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-xs border border-rose-soft/70 mb-8 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-xl font-bold">{editingId ? 'Edit Photo' : 'Upload Photo'}</h3>
            <button type="button" onClick={() => { setIsAdding(false); setEditingId(null); setFormData({title:'',description:'',image_url:'',is_active:true,category_id:''}); setFile(null); }} className="text-charcoal-muted"><X className="w-5 h-5"/></button>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Image {editingId ? '(Leave empty to keep existing)' : ''}</label>
            <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="w-full border rounded p-2" required={!editingId && !formData.image_url} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input type="text" className="w-full border rounded p-2" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="w-full border rounded p-2" value={formData.category_id} onChange={e => setFormData({...formData, category_id: e.target.value})}>
              <option value="">None</option>
              {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description (Optional)</label>
            <textarea className="w-full border rounded p-2" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          </div>
          
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="isActive" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} />
            <label htmlFor="isActive" className="text-sm font-medium">Active</label>
          </div>
          
          <Button type="submit" variant="primary" disabled={uploading}>
            {uploading ? 'Saving...' : 'Save Photo'}
          </Button>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.filter(item => filterCategory === 'all' || item.category_id === filterCategory).map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden flex flex-col group">
            <div className="relative aspect-square overflow-hidden bg-cream">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image_url} alt={item.title || 'Gallery image'} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 right-3 flex gap-2">
                 <button onClick={() => startEdit(item)} className="p-2 bg-white/90 text-gold-dark hover:bg-white rounded-full shadow-sm"><Edit2 className="w-4 h-4" /></button>
                 <button onClick={() => handleDelete(item.id)} className="p-2 bg-white/90 text-rose hover:bg-white rounded-full shadow-sm"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="font-serif font-bold text-charcoal">{item.title || 'Untitled'}</h4>
              <span className={'text-xs mt-2 px-2 py-1 rounded-full self-start ' + (item.is_active ? 'bg-green/10 text-green-dark' : 'bg-charcoal-muted/10 text-charcoal-muted')}>
                {item.is_active ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        ))}
      </div>
      {items.filter(item => filterCategory === 'all' || item.category_id === filterCategory).length === 0 && <div className="text-center p-8 text-charcoal-muted border border-dashed rounded-xl border-rose-soft/70">No photos in gallery.</div>}
    </div>
  );
};
