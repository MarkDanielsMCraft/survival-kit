import React, { useState, useMemo } from "react";
import { ExternalLink, Calculator, AppWindow } from "lucide-react";
import { RESOURCE_CATEGORIES } from '../constants/config';
import { SourcePill } from './SourcePill';
import { safeOpen } from '../utils/security';

export const Library = ({ resources, searchTerm }) => {
  const [category, setCategory] = useState("All");

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
      return matchSearch && matchCat;
    });
  }, [resources, searchTerm, category]);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-28">
      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 hide-scrollbar">
        {RESOURCE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-black border whitespace-nowrap transition ${
              cat === category
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <button
            key={r.id}
            onClick={() => safeOpen(r.url)}
            className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="bg-slate-50 p-2 rounded-xl text-indigo-600 group-hover:bg-indigo-50 transition">
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
              <span className="text-[10px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-2 py-1 rounded-full">
                {r.category}
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-800 leading-snug mt-2">
              {r.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {(r.tags || []).slice(0, 4).map((t) => (
                <span
                  key={`${r.id}-${t}`}
                  className="text-[10px] font-bold bg-slate-50 text-slate-500 border border-slate-100 px-2 py-1 rounded-full"
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
            Try searching "dosage", "Anmeldung", "trash", "DeepL"
          </p>
        </div>
      )}
    </div>
  );
};
