"use client";
import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Trash2 } from 'lucide-react';

export const EnquiriesClient = ({ initialData }: { initialData: any[] }) => {
  const [items, setItems] = useState(initialData);
  const [filterStatus, setFilterStatus] = useState<string>('all');
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

  const filteredItems = filterStatus === 'all' ? items : items.filter(item => item.status === filterStatus);

  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        <select 
          className="border border-rose-soft rounded-lg px-4 py-2 text-sm bg-white"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Enquiries</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
        <div className="overflow-x-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-cream border-b border-rose-soft/70">
            <tr>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Mobile</th>
              <th className="p-4 font-semibold max-w-xs">Enquiry</th>
              <th className="p-4 font-semibold">Branch</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-soft/40">
            {filteredItems.map(item => (
              <tr key={item.id} className="hover:bg-cream/30">
                <td className="p-4 text-sm text-charcoal-muted">{new Date(item.created_at).toLocaleDateString()}</td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-sm font-medium text-wine">{item.mobile}</td>
                <td className="p-4 text-sm whitespace-normal max-w-xs">{item.description}</td>
                <td className="p-4 text-sm font-medium text-charcoal">{item.branch_name || 'N/A'}</td>
                <td className="p-4">
                  <select 
                    value={item.status} 
                    onChange={e => handleStatusChange(item.id, e.target.value)}
                    className={`text-xs px-2 py-1 rounded-full font-medium border-0 outline-none focus:ring-2 focus:ring-wine/20 ${
                      item.status === 'new' ? 'bg-rose/10 text-rose' :
                      item.status === 'contacted' ? 'bg-gold/10 text-gold-dark' :
                      'bg-green/10 text-green-dark'
                    }`}
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
            {filteredItems.length === 0 && <tr><td colSpan={7} className="p-4 text-center text-charcoal-muted">No enquiries found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};
