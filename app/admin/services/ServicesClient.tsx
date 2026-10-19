"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';
import { Trash2, Edit2, Plus, X } from 'lucide-react';

export const ServicesClient = ({ initialData }: { initialData: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    subtitle: '',
    description: '',
    key_aspects: '',
    image_url: '',
    gallery_link: '',
    is_active: true
  });
  const [isAdding, setIsAdding] = useState(false);
  const [filterActive, setFilterActive] = useState<string>('all');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const aspectsArray = formData.key_aspects
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const payload = {
      name: formData.name.trim(),
      subtitle: formData.subtitle.trim() || null,
      description: formData.description.trim() || null,
      key_aspects: aspectsArray,
      image_url: formData.image_url.trim() || null,
      gallery_link: formData.gallery_link.trim() || null,
      is_active: formData.is_active
    };

    if (editingId) {
      const { error } = await supabase.from('services').update(payload).eq('id', editingId);
      if (error) {
        setErrorMsg(`Failed to save: ${error.message}`);
        return;
      }
      setItems(items.map(item => item.id === editingId ? { ...item, ...payload } : item));
      setEditingId(null);
    } else {
      const { data, error } = await supabase.from('services').insert([payload]).select();
      if (error) {
        setErrorMsg(`Failed to create: ${error.message}`);
        return;
      }
      if (data && data[0]) {
        setItems([...items, data[0]]);
        setIsAdding(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (error) {
      alert(`Delete error: ${error.message}`);
    } else {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const startEdit = (item: any) => {
    const aspectsText = Array.isArray(item.key_aspects) 
      ? item.key_aspects.join('\n') 
      : (item.key_aspects || '');

    setFormData({
      name: item.name,
      subtitle: item.subtitle || '',
      description: item.description || '',
      key_aspects: aspectsText,
      image_url: item.image_url || '',
      gallery_link: item.gallery_link || '',
      is_active: item.is_active ?? true
    });
    setEditingId(item.id);
    setIsAdding(false);
    setErrorMsg(null);
  };

  const cancelForm = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({
      name: '',
      subtitle: '',
      description: '',
      key_aspects: '',
      image_url: '',
      gallery_link: '',
      is_active: true
    });
    setErrorMsg(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        {!isAdding && !editingId && (
          <Button onClick={() => { setIsAdding(true); setEditingId(null); }} variant="primary" className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Service
          </Button>
        )}
        <select 
          className="border border-rose-soft rounded-lg px-4 py-2 text-sm bg-white ml-auto"
          value={filterActive}
          onChange={(e) => setFilterActive(e.target.value)}
        >
          <option value="all">All Services</option>
          <option value="active">Active Only</option>
          <option value="inactive">Inactive Only</option>
        </select>
      </div>

      {(isAdding || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-xs border border-rose-soft/70 mb-8 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-xl font-bold">{editingId ? 'Edit Service' : 'Add Service'}</h3>
            <button type="button" onClick={cancelForm} className="text-charcoal-muted hover:text-charcoal"><X className="w-5 h-5"/></button>
          </div>

          {errorMsg && (
            <div className="bg-rose/10 text-rose text-sm p-3 rounded-lg border border-rose/30">
              {errorMsg}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Service Name *</label>
            <input required type="text" className="w-full border rounded p-2 text-sm" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subtitle</label>
            <input type="text" className="w-full border rounded p-2 text-sm" value={formData.subtitle} onChange={e => setFormData({...formData, subtitle: e.target.value})} placeholder="e.g. Bespoke bridal couture, zardozi work..." />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input type="text" className="w-full border rounded p-2 text-sm" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} placeholder="/images/Bridal/..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Gallery Link</label>
              <input type="text" className="w-full border rounded p-2 text-sm" value={formData.gallery_link} onChange={e => setFormData({...formData, gallery_link: e.target.value})} placeholder="/gallery?category=bridal" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea rows={3} className="w-full border rounded p-2 text-sm" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Key Aspects / Specifications (One per line)</label>
            <textarea rows={4} className="w-full border rounded p-2 text-sm font-mono text-xs" value={formData.key_aspects} onChange={e => setFormData({...formData, key_aspects: e.target.value})} placeholder="Custom paper-pattern drafting&#10;Pure cotton voile inner lining&#10;Can-can structuring..." />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input type="checkbox" id="isActive" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} />
            <label htmlFor="isActive" className="text-sm font-medium">Active (Visible)</label>
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary">Save Service</Button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-cream border-b border-rose-soft/70">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Description</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-soft/40">
            {items.filter(item => {
              if (filterActive === 'active') return item.is_active;
              if (filterActive === 'inactive') return !item.is_active;
              return true;
            }).map(item => (
              <tr key={item.id} className="hover:bg-cream/30">
                <td className="p-4">
                  <div className="font-medium text-charcoal">{item.name}</div>
                  {item.subtitle && <div className="text-xs text-rose font-medium mt-0.5">{item.subtitle}</div>}
                </td>
                <td className="p-4 text-sm text-charcoal-muted max-w-md">
                  <p className="line-clamp-2">{item.description}</p>
                </td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${item.is_active ? 'bg-green/10 text-green-dark' : 'bg-charcoal-muted/10 text-charcoal-muted'}`}>
                    {item.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="p-4 flex items-center justify-end gap-2">
                  <button onClick={() => startEdit(item)} className="p-2 text-gold-dark hover:bg-gold/10 rounded" title="Edit"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-rose hover:bg-rose/10 rounded" title="Delete"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
            {items.filter(item => {
              if (filterActive === 'active') return item.is_active;
              if (filterActive === 'inactive') return !item.is_active;
              return true;
            }).length === 0 && <tr><td colSpan={4} className="p-4 text-center text-charcoal-muted">No services found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
