import React from 'react';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { LayoutDashboard, Image as ImageIcon, Tags, Scissors, IndianRupee, MessageCircleQuestion, Inbox, MapPin, Building2 } from 'lucide-react';
import { MigrationControl } from './MigrationControl';

export const metadata = {
  title: 'Admin Dashboard | Raaji Ladies Fashion',
  robots: 'noindex, nofollow',
};

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  // Fetch counts
  const [
    { count: galleryCount },
    { count: categoriesCount },
    { count: homeCategoriesCount },
    { count: servicesCount },
    { count: pricesCount },
    { count: faqsCount },
    { count: newEnquiriesCount },
    { count: branchesCount, error: branchesError },
  ] = await Promise.all([
    supabase.from('gallery_items').select('*', { count: 'exact', head: true }),
    supabase.from('categories').select('*', { count: 'exact', head: true }),
    supabase.from('categories').select('*', { count: 'exact', head: true }).eq('show_on_home', true),
    supabase.from('services').select('*', { count: 'exact', head: true }).eq('is_active', true),
    supabase.from('prices').select('*', { count: 'exact', head: true }),
    supabase.from('faqs').select('*', { count: 'exact', head: true }),
    supabase.from('enquiries').select('*', { count: 'exact', head: true }).eq('status', 'new'),
    supabase.from('branches').select('*', { count: 'exact', head: true }),
  ]);

  const cards = [
    { name: 'Categories', count: categoriesCount || 0, href: '/admin/categories', icon: Tags },
    { name: 'Home Page Categories', count: homeCategoriesCount || 0, href: '/admin/categories', icon: Tags },
    { name: 'Branches', count: branchesCount || 0, href: '/admin/branches', icon: MapPin },
    { name: 'Business Info', count: 1, href: '/admin/business', icon: Building2 },
    { name: 'Gallery Photos', count: galleryCount || 0, href: '/admin/gallery', icon: ImageIcon },
    { name: 'Active Services', count: servicesCount || 0, href: '/admin/services', icon: Scissors },
    { name: 'Price Entries', count: pricesCount || 0, href: '/admin/prices', icon: IndianRupee },
    { name: 'FAQs', count: faqsCount || 0, href: '/admin/faqs', icon: MessageCircleQuestion },
    { name: 'New Enquiries', count: newEnquiriesCount || 0, href: '/admin/enquiries', icon: Inbox, highlight: true },
  ];

  // Fetch recent enquiries
  const { data: recentEnquiries } = await supabase
    .from('enquiries')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">Dashboard Overview</h1>
        <p className="text-charcoal-muted">Welcome to the Raaji Ladies Fashion admin system.</p>
      </div>

      <MigrationControl 
        categoriesEmpty={!categoriesCount || categoriesCount === 0}
        servicesEmpty={!servicesCount || servicesCount === 0}
        pricesEmpty={!pricesCount || pricesCount === 0}
        galleryEmpty={!galleryCount || galleryCount === 0}
        faqsEmpty={!faqsCount || faqsCount === 0}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.name} href={card.href} className={`block bg-white rounded-xl shadow-xs border p-6 hover:shadow-card transition-shadow ${card.highlight && card.count > 0 ? 'border-rose/50 bg-blush/30' : 'border-rose-soft/70'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${card.highlight && card.count > 0 ? 'bg-rose text-white' : 'bg-cream text-wine'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-serif font-bold text-charcoal">{card.count}</span>
              </div>
              <h3 className="font-sans font-semibold text-charcoal">{card.name}</h3>
              <p className="text-sm text-charcoal-muted mt-1">Manage {card.name.toLowerCase()}</p>
            </Link>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-xs border border-rose-soft/70 overflow-hidden">
        <div className="p-6 border-b border-rose-soft/70 flex justify-between items-center">
          <h2 className="text-xl font-serif font-bold text-charcoal">Recent Enquiries</h2>
          <Link href="/admin/enquiries" className="text-sm font-medium text-wine hover:underline">View All</Link>
        </div>
        <div className="divide-y divide-rose-soft/50">
          {recentEnquiries && recentEnquiries.length > 0 ? (
            recentEnquiries.map((enq) => (
              <div key={enq.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-charcoal">{enq.name}</h4>
                  <p className="text-sm text-charcoal-muted">{enq.mobile}</p>
                  <p className="text-sm text-charcoal-light mt-1 line-clamp-1">{enq.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    enq.status === 'new' ? 'bg-rose/10 text-rose' :
                    enq.status === 'contacted' ? 'bg-gold/10 text-gold-dark' :
                    'bg-green/10 text-green-dark'
                  }`}>
                    {enq.status.toUpperCase()}
                  </span>
                  <span className="text-xs text-charcoal-muted">{new Date(enq.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-charcoal-muted">
              No recent enquiries found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
