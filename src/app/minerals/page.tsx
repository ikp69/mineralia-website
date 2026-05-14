"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { minerals } from "@/data/minerals";
import CTASection from "@/components/ui/CTASection";
import MineralCard from "@/components/minerals/MineralCard";
import FadeUp from "@/components/ui/FadeUp";

const INDUSTRY_GROUPS = [
  "Ceramic & Porcelain Industry",
  "Refractory & Steel Industry",
] as const;

const SUBCATEGORY_ORDER: Record<string, string[]> = {
  "Ceramic & Porcelain Industry": [
    "Clay & Body Minerals",
    "Glaze & Surface Minerals",
    "Ceramic Glazes & Frits",
  ],
  "Refractory & Steel Industry": [
    "Core Refractory Minerals",
    "Steel & Foundry Raw Materials",
  ],
};

export default function MineralsHub() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMinerals = useMemo(() => {
    if (!searchTerm.trim()) return minerals;
    const q = searchTerm.toLowerCase();
    return minerals.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.formula.toLowerCase().includes(q) ||
        m.subCategory.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const isSearching = searchTerm.trim().length > 0;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-mineralia-navy text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <FadeUp>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Industrial Minerals Portfolio
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Precision-grade mineral supply for ceramic, porcelain, refractory, metallurgical, and specialty industrial applications.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 border-b border-slate-200 bg-white sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, formula or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mineralia-teal/50 transition-shadow bg-slate-50 text-mineralia-navy placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          {isSearching ? (
            /* Flat search results */
            filteredMinerals.length > 0 ? (
              <div>
                <p className="text-slate-500 text-sm mb-8">
                  {filteredMinerals.length} result{filteredMinerals.length !== 1 ? "s" : ""} for &ldquo;{searchTerm}&rdquo;
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredMinerals.map((mineral, idx) => (
                    <FadeUp key={mineral.slug} delay={idx * 0.05}>
                      <MineralCard mineral={mineral} />
                    </FadeUp>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-serif text-mineralia-navy mb-2">No minerals found</h3>
                <p className="text-slate-500">Try adjusting your search.</p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-6 text-mineralia-teal hover:underline font-medium"
                >
                  Clear Search
                </button>
              </div>
            )
          ) : (
            /* Grouped layout */
            <div className="space-y-24">
              {INDUSTRY_GROUPS.map((industryGroup) => {
                const subCategories = SUBCATEGORY_ORDER[industryGroup];
                return (
                  <div key={industryGroup}>
                    {/* Industry Group Header */}
                    <div className="mb-12">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="h-px flex-1 bg-slate-200"></div>
                        <span className="text-xs font-bold text-mineralia-teal uppercase tracking-widest whitespace-nowrap">
                          Industry
                        </span>
                        <div className="h-px flex-1 bg-slate-200"></div>
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-mineralia-navy text-center">
                        {industryGroup}
                      </h2>
                    </div>

                    {/* Sub-categories */}
                    <div className="space-y-16">
                      {subCategories.map((subCat) => {
                        const group = minerals.filter(
                          (m) =>
                            m.industryGroups.includes(industryGroup) &&
                            m.subCategory === subCat
                        );
                        if (group.length === 0) return null;
                        return (
                          <div key={subCat}>
                            <div className="flex items-center gap-3 mb-8">
                              <div className="w-1 h-8 bg-mineralia-teal rounded-full"></div>
                              <h3 className="font-serif text-xl md:text-2xl font-semibold text-mineralia-navy">
                                {subCat}
                              </h3>
                              <span className="ml-2 text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                                {group.length}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                              {group.map((mineral, idx) => (
                                <FadeUp key={mineral.slug + "-" + industryGroup} delay={idx * 0.06}>
                                  <MineralCard mineral={mineral} />
                                </FadeUp>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
