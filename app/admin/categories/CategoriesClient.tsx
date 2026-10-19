"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';
import { Trash2, Edit2, Plus, X } from 'lucide-react';

export const CategoriesClient = ({ initialData }: { initialData: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image_url: '',
    is_active: true,
    show_on_home: false,
    home_position: 1
  });
  const [isAdding, setIsAdding] = useState(false);
  const [filterActive, setFilterActive] = useState<string>('all');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    
    // Validate unique slug
    const duplicate = items.find(i => i.slug.toLowerCase() === formData.slug.trim().toLowerCase() && i.id !== editingId);
    if (duplicate) {
      setErrorMsg("A category with this slug already exists. Please choose a unique slug.");
      return;
    }

    // Validate home page count
    if (formData.show_on_home) {
      const existingHomeCats = items.filter(i => i.show_on_home && i.id !== editingId);
      if (existingHomeCats.length >= 4) {
        setErrorMsg("Maximum of 4 Home Page categories allowed. Please uncheck another category first.");
        return;
      }
    }

    const payload = {
      name: formData.name.trim(),
      slug: formData.slug.trim(),
      description: formData.description.trim(),
      image_url: formData.image_url.trim() || null,
      is_active: formData.is_active,
      show_on_home: formData.show_on_home,
      home_position: formData.show_on_home ? parseInt(formData.home_position as any, 10) : null
    };

    if (editingId) {
      const { error } = await supabase.from('categories').update(payload).eq('id', editingId);
      if (error) {
        setErrorMsg(`Failed to save: ${error.message}`);
        return;
      }
      setItems(items.map(item => item.id === editingId ? { ...item, ...payload } : item));
      setEditingId(null);
    } else {
      const { data, error } = await supabase.from('categories').insert([payload]).select();
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
    if (!confirm('Are you sure you want to delete this category?')) return;
    const { error } = await supabase.from('categories').delete().eq('id', id);
    if (error) {
      alert(`Delete error: ${error.message}`);
    } else {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const startEdit = (item: any) => {
    setFormData({ 
      name: item.name, 
      slug: item.slug, 
      description: item.description || '', 
      image_url: item.image_url || '',
      is_active: item.is_active ?? true,
      show_on_home: item.show_on_home || false,
      home_position: item.home_position || 1
    });
    setEditingId(item.id);
    setIsAdding(false);
    setErrorMsg(null);
  };

  const cancelForm = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ name: '', slug: '', description: '', image_url: '', is_active: true, show_on_home: false, home_position: 1 });
    setErrorMsg(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        {!isAdding && !editingId && (
          <Button onClick={() => { setIsAdding(true); setEditingId(null); }} variant="primary" className="flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Category
          </Button>
        )}
        <select 
          className="border border-rose-soft rounded-lg px-4 py-2 text-sm bg-white ml-auto"
          value={filterActive}
          onChange={(e) => setFilterActive(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="active">Active Only</option>
          <option value="inactive">Inactive Only</option>
        </select>
      </div>

      {(isAdding || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-xs border border-rose-soft/70 mb-8 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-xl font-bold">{editingId ? 'Edit Category' : 'Add Category'}</h3>
            <button type="button" onClick={cancelForm} className="text-charcoal-muted hover:text-charcoal"><X className="w-5 h-5"/></button>
          </div>
          
          {errorMsg && (
            <div className="bg-rose/10 text-rose text-sm p-3 rounded-lg border border-rose/30">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input required type="text" className="w-full border rounded p-2" value={formData.name} onChange={e => {
                const val = e.target.value;
                setFormData({
                  ...formData, 
                  name: val, 
                  slug: editingId ? formData.slug : val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                });
              }} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slug *</label>
              <input required type="text" className="w-full border rounded p-2 font-mono text-sm" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL / Path</label>
            <input type="text" className="w-full border rounded p-2 text-sm" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} placeholder="/images/categories/..." />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea rows={3} className="w-full border rounded p-2 text-sm" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="isActive" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} />
              <label htmlFor="isActive" className="text-sm font-medium">Active (Visible)</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="showHome" checked={formData.show_on_home} onChange={e => setFormData({...formData, show_on_home: e.target.checked})} />
              <label htmlFor="showHome" className="text-sm font-medium">Show on Home Page (Max 4)</label>
            </div>
            {formData.show_on_home && (
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Position:</label>
                <select className="border rounded px-2 py-1 text-sm" value={formData.home_position} onChange={e => setFormData({...formData, home_position: parseInt(e.target.value, 10)})}>
                  <option value={1}>1 (First)</option>
                  <option value={2}>2 (Second)</option>
                  <option value={3}>3 (Third)</option>
                  <option value={4}>4 (Fourth)</option>
                </select>
              </div>
            )}
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary">Save Category</Button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-cream border-b border-rose-soft/70">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Slug</th>
              <th className="p-4 font-semibold">Home Position</th>
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
                  {item.description && <div className="text-xs text-charcoal-muted line-clamp-1 max-w-sm mt-0.5">{item.description}</div>}
                </td>
                <td className="p-4 text-xs font-mono text-charcoal-muted">{item.slug}</td>
                <td className="p-4 text-sm">
                  {item.show_on_home ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-gold/15 text-gold-dark border border-gold/30">
                      Position {item.home_position}
                    </span>
                  ) : (
                    <span className="text-charcoal-muted text-xs">—</span>
                  )}
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
            }).length === 0 && <tr><td colSpan={5} className="p-4 text-center text-charcoal-muted">No categories found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
