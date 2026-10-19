"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { migrateAllContent } from './actions/migrate';
import { Database } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const MigrationControl = ({
  categoriesEmpty,
  servicesEmpty,
  pricesEmpty,
  galleryEmpty,
  faqsEmpty
}: {
  categoriesEmpty: boolean;
  servicesEmpty: boolean;
  pricesEmpty: boolean;
  galleryEmpty: boolean;
  faqsEmpty: boolean;
}) => {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any>(null);
  const router = useRouter();

  const needsMigration = categoriesEmpty || servicesEmpty || pricesEmpty || galleryEmpty || faqsEmpty;

  const handleMigrate = async () => {
    if (!confirm("This will import all hardcoded frontend data into Supabase. Proceed?")) return;
    setLoading(true);
    try {
      const result = await migrateAllContent();
      setReport(result.report);
      if (result.success) {
        router.refresh(); // Reload dashboard numbers
      }
    } catch (e: any) {
      alert("Error: " + e.message);
    }
    setLoading(false);
  };

  if (!needsMigration && !report) return null;

  return (
    <div className="bg-blush/30 border border-rose-soft p-6 rounded-xl mb-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-serif font-bold text-wine mb-2 flex items-center gap-2">
            <Database className="w-5 h-5" /> Database Migration Required
          </h2>
          <p className="text-charcoal-light text-sm mb-4">
            Some sections of your database are currently empty. Click the button below to safely import all existing categories, gallery items, services, prices, and FAQs from the frontend into the Admin Control Center.
          </p>
          {!report ? (
             <Button variant="primary" onClick={handleMigrate} disabled={loading}>
               {loading ? "Migrating..." : "Run Migration (Import Existing Data)"}
             </Button>
          ) : (
            <div className="bg-white p-4 rounded-lg border border-rose-soft/70 shadow-xs text-sm">
              <h3 className="font-semibold text-charcoal mb-2">Migration Report</h3>
              <ul className="space-y-1 text-charcoal-muted font-mono">
                <li>Categories found in frontend: {report.categoriesFound}</li>
                <li>Categories migrated: {report.categoriesMigrated}</li>
                <li>Gallery items found: {report.galleryFound}</li>
                <li>Gallery items migrated: {report.galleryMigrated}</li>
                <li>Services found: {report.servicesFound}</li>
                <li>Services migrated: {report.servicesMigrated}</li>
                <li>Price entries found: {report.pricesFound}</li>
                <li>Price entries migrated: {report.pricesMigrated}</li>
                <li>FAQs found: {report.faqsFound}</li>
                <li>FAQs migrated: {report.faqsMigrated}</li>
                {report.branchesFound && (
                  <>
                    <li>Branches found: {report.branchesFound}</li>
                    <li>Branches migrated: {report.branchesMigrated}</li>
                  </>
                )}
              </ul>
              {report.errors?.length > 0 && (
                <div className="mt-4 text-rose">
                  <p className="font-semibold mb-1">Errors ({report.errors.length}):</p>
                  <ul className="list-disc pl-5">
                    {report.errors.map((err: string, i: number) => <li key={i}>{err}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
