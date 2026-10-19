const fs = require('fs');
const path = require('path');

const write = (p, content) => {
  const fullPath = path.join(__dirname, '..', p);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
};

const commonImports = \`"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/Button';
import { Trash2, Edit2, Plus, X } from 'lucide-react';
\`;

// --- CATEGORIES ---
write('app/admin/categories/CategoriesClient.tsx', commonImports + \`
export const CategoriesClient = ({ initialData }: { initialData: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', slug: '', description: '', is_active: true });
  const [isAdding, setIsAdding] = useState(false);
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const { error } = await supabase.from('categories').update(formData).eq('id', editingId);
      if (!error) {
        setItems(items.map(item => item.id === editingId ? { ...item, ...formData } : item));
        setEditingId(null);
      }
    } else {
      const { data, error } = await supabase.from('categories').insert([formData]).select();
      if (!error && data) {
        setItems([...items, data[0]]);
        setIsAdding(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    const { error } = await supabase.from('categories').delete().eq('id', id);
    if (!error) setItems(items.filter(item => item.id !== id));
  };

  const startEdit = (item: any) => {
    setFormData({ name: item.name, slug: item.slug, description: item.description || '', is_active: item.is_active });
    setEditingId(item.id);
    setIsAdding(false);
  };

  const cancelForm = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({ name: '', slug: '', description: '', is_active: true });
  };

  return (
    <div>
      {!isAdding && !editingId && (
        <Button onClick={() => setIsAdding(true)} variant="primary" className="mb-6 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Category
        </Button>
      )}

      {(isAdding || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-xs border border-rose-soft/70 mb-8 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-xl font-bold">{editingId ? 'Edit Category' : 'Add Category'}</h3>
            <button type="button" onClick={cancelForm} className="text-charcoal-muted"><X className="w-5 h-5"/></button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input required type="text" className="w-full border rounded p-2" value={formData.name} onChange={e => {
              const val = e.target.value;
              setFormData({...formData, name: val, slug: val.toLowerCase().replace(/[^a-z0-9]+/g, '-')});
            }} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input required type="text" className="w-full border rounded p-2 bg-gray-50" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea className="w-full border rounded p-2" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="isActive" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} />
            <label htmlFor="isActive" className="text-sm font-medium">Active (Visible to public)</label>
          </div>
          <Button type="submit" variant="primary">Save Category</Button>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-cream border-b border-rose-soft/70">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Slug</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-soft/40">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-cream/30">
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-sm text-charcoal-muted">{item.slug}</td>
                <td className="p-4">
                  <span className={\`text-xs px-2 py-1 rounded-full \${item.is_active ? 'bg-green/10 text-green-dark' : 'bg-charcoal-muted/10 text-charcoal-muted'}\`}>
                    {item.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="p-4 flex items-center justify-end gap-2">
                  <button onClick={() => startEdit(item)} className="p-2 text-gold-dark hover:bg-gold/10 rounded"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-rose hover:bg-rose/10 rounded"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
            {items.length === 0 && <tr><td colSpan={4} className="p-4 text-center text-charcoal-muted">No categories found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
\`);

// --- SERVICES ---
write('app/admin/services/ServicesClient.tsx', commonImports + \`
export const ServicesClient = ({ initialData }: { initialData: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', description: '', is_active: true });
  const [isAdding, setIsAdding] = useState(false);
  const supabase = createClient();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const { error } = await supabase.from('services').update(formData).eq('id', editingId);
      if (!error) {
        setItems(items.map(item => item.id === editingId ? { ...item, ...formData } : item));
        setEditingId(null);
      }
    } else {
      const { data, error } = await supabase.from('services').insert([formData]).select();
      if (!error && data) {
        setItems([...items, data[0]]);
        setIsAdding(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (!error) setItems(items.filter(item => item.id !== id));
  };

  const startEdit = (item: any) => {
    setFormData({ name: item.name, description: item.description || '', is_active: item.is_active });
    setEditingId(item.id);
    setIsAdding(false);
  };

  return (
    <div>
      {!isAdding && !editingId && (
        <Button onClick={() => setIsAdding(true)} variant="primary" className="mb-6 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Service
        </Button>
      )}

      {(isAdding || editingId) && (
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-xs border border-rose-soft/70 mb-8 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif text-xl font-bold">{editingId ? 'Edit Service' : 'Add Service'}</h3>
            <button type="button" onClick={() => { setIsAdding(false); setEditingId(null); setFormData({name:'',description:'',is_active:true}); }} className="text-charcoal-muted"><X className="w-5 h-5"/></button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input required type="text" className="w-full border rounded p-2" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea className="w-full border rounded p-2" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="isActive" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} />
            <label htmlFor="isActive" className="text-sm font-medium">Active</label>
          </div>
          <Button type="submit" variant="primary">Save Service</Button>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-cream border-b border-rose-soft/70">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-soft/40">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-cream/30">
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4">
                  <span className={\`text-xs px-2 py-1 rounded-full \${item.is_active ? 'bg-green/10 text-green-dark' : 'bg-charcoal-muted/10 text-charcoal-muted'}\`}>{item.is_active ? 'Active' : 'Inactive'}</span>
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
\`);

// --- FAQS ---
write('app/admin/faqs/FAQsClient.tsx', commonImports + \`
export const FAQsClient = ({ initialData }: { initialData: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ question: '', answer: '', is_active: true });
  const [isAdding, setIsAdding] = useState(false);
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
      {!isAdding && !editingId && (
        <Button onClick={() => setIsAdding(true)} variant="primary" className="mb-6 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add FAQ
        </Button>
      )}

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
            {items.map(item => (
              <tr key={item.id} className="hover:bg-cream/30">
                <td className="p-4 font-medium">{item.question}</td>
                <td className="p-4">
                  <span className={\`text-xs px-2 py-1 rounded-full \${item.is_active ? 'bg-green/10 text-green-dark' : 'bg-charcoal-muted/10 text-charcoal-muted'}\`}>{item.is_active ? 'Active' : 'Inactive'}</span>
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
\`);

// --- ENQUIRIES ---
write('app/admin/enquiries/EnquiriesClient.tsx', commonImports + \`
export const EnquiriesClient = ({ initialData }: { initialData: any[] }) => {
  const [items, setItems] = useState(initialData);
  const supabase = createClient();

  const handleStatusChange = async (id: string, newStatus: string) => {
    const { error } = await supabase.from('enquiries').update({ status: newStatus }).eq('id', id);
    if (!error) {
      setItems(items.map(item => item.id === id ? { ...item, status: newStatus } : item));
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;
    const { error } = await supabase.from('enquiries').delete().eq('id', id);
    if (!error) setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-cream border-b border-rose-soft/70">
            <tr>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Mobile</th>
              <th className="p-4 font-semibold max-w-xs">Enquiry</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-soft/40">
            {items.map(item => (
              <tr key={item.id} className="hover:bg-cream/30">
                <td className="p-4 text-sm text-charcoal-muted">{new Date(item.created_at).toLocaleDateString()}</td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-sm font-medium text-wine">{item.mobile}</td>
                <td className="p-4 text-sm whitespace-normal max-w-xs">{item.description}</td>
                <td className="p-4">
                  <select 
                    value={item.status} 
                    onChange={e => handleStatusChange(item.id, e.target.value)}
                    className={\`text-xs px-2 py-1 rounded-full font-medium border-0 outline-none focus:ring-2 focus:ring-wine/20 \${
                      item.status === 'new' ? 'bg-rose/10 text-rose' :
                      item.status === 'contacted' ? 'bg-gold/10 text-gold-dark' :
                      'bg-green/10 text-green-dark'
                    }\`}
                  >
                    <option value="new">NEW</option>
                    <option value="contacted">CONTACTED</option>
                    <option value="completed">COMPLETED</option>
                  </select>
                </td>
                <td className="p-4 flex items-center justify-end gap-2">
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-rose hover:bg-rose/10 rounded" title="Delete"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
            {items.length === 0 && <tr><td colSpan={6} className="p-4 text-center text-charcoal-muted">No enquiries found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
\`);

console.log('Generated client components');
