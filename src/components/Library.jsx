import React, { useState, useMemo } from "react";
import { ExternalLink, Calculator, AppWindow, ArrowLeft } from "lucide-react";
import { RESOURCE_CATEGORIES, SOURCE_BADGE, META } from '../constants/config';
import { SourcePill } from './SourcePill';
import { safeOpen } from '../utils/security';

export const Library = ({ resources, searchTerm, onBack }) => {
  const [category, setCategory] = useState("All");
  const [sourceFilter, setSourceFilter] = useState("All");

  const sourceOptions = useMemo(() => ["All", ...Object.keys(SOURCE_BADGE)], []);

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return resources.filter((r) => {
      const matchSearch =
        !q ||
        (r.title || "").toLowerCase().includes(q) ||
        (r.type || "").toLowerCase().includes(q) ||
        (r.category || "").toLowerCase().includes(q) ||
        (r.tags || []).some((t) => String(t).toLowerCase().includes(q));

      const matchCat = category === "All" || r.category === category;
      const matchSource = sourceFilter === "All" || r.source === sourceFilter;
      return matchSearch && matchCat && matchSource;
    });
  }, [resources, searchTerm, category, sourceFilter]);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-28 space-y-6">
      {onBack && (
        <div className="flex justify-start">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            <ArrowLeft size={16} />
            Back to guides
          </button>
        </div>
      )}

      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 hide-scrollbar">
        {RESOURCE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold border whitespace-nowrap transition ${
              cat === category
                ? "bg-indigo-700 text-white border-indigo-700"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Source filter */}
      <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
        {sourceOptions.map((source) => (
          <button
            key={source}
            onClick={() => setSourceFilter(source)}
            className={`px-4 py-2 rounded-full text-xs font-semibold border whitespace-nowrap transition ${
              source === sourceFilter
                ? "bg-indigo-700 text-white border-indigo-700"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {source === "All" ? "All sources" : SOURCE_BADGE[source]?.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <button
            key={r.id}
            onClick={() => safeOpen(r.url)}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-colors hover:border-slate-300 text-left group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="bg-slate-50 p-2 rounded-xl text-indigo-700">
                {r.type === "Tool" ? (
                  <Calculator size={20} />
                ) : r.type === "App" ? (
                  <AppWindow size={20} />
                ) : (
                  <ExternalLink size={20} />
                )}
              </div>
              <SourcePill source={r.source} />
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded-full">
                {r.category}
              </span>
            </div>

            <h3 className="text-base font-semibold text-slate-800 leading-snug mt-2">
              {r.title}
            </h3>

            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mt-2">
              Verified {r.verified || META.lastUpdatedDate}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {(r.tags || []).slice(0, 4).map((t) => (
                <span
                  key={`${r.id}-${t}`}
                  className="text-[10px] font-semibold bg-slate-50 text-slate-500 border border-slate-200 px-2 py-1 rounded-full"
                >
                  #{t}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 opacity-60">
          <p className="text-xl font-extrabold text-slate-400">
            No resources found
          </p>
          <p className="text-sm text-slate-400">
            Try searching "visa", "Anmeldung", "health insurance", "banking"
          </p>
          <p className="text-xs text-slate-400 mt-3">
            Official sources include Make it in Germany, BAMF, and the Federal Employment Agency.
          </p>
        </div>
      )}
    </div>
  );
};
