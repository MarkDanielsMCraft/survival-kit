import { Search, Grid, Info } from "lucide-react";
import { META } from '../constants/config';
import { CategoryFilter } from './CategoryFilter';

export const Hero = ({ view, setView, searchTerm, setSearchTerm, selectedStage, setSelectedStage, postsSectionRef }) => {
  const handleExploreClick = () => {
    if (view !== "posts") {
      setView("posts");
      return;
    }

    const node = postsSectionRef?.current;
    if (!node) return;

    if (typeof window === "undefined") return;

    const rect = node.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top - 96;
    window.scrollTo({ top: Math.max(scrollTop, 0), behavior: "smooth" });
  };

  if (view === "library") {
    return (
      <div className="relative pt-12 pb-10 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[40px] md:text-[44px] font-semibold text-slate-900 mb-4 tracking-tight">
            Resource Library
          </h2>
          <p className="text-[18px] text-slate-600 mb-8 font-medium">
            Curated tools, apps, and links for your first year in Germany.
          </p>

          <div className="max-w-lg mx-auto mb-8">
            <div className="relative flex items-center rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Search className="ml-4 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search: apps, banking, health"
                className="w-full py-4 px-4 rounded-2xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400 bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => setView("posts")}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
            >
              <div className="flex items-center gap-2">
                <Grid size={16} />
                Back to Guides
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0">
          <img
            src="https://pixabay.com/images/download/skyscraper-7360222_1920.jpg"
            alt="German skyline"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:gap-16 items-center">
            <div className="max-w-2xl space-y-6 text-slate-900">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Germany, decoded
              </div>

              <h1 className="text-[40px] sm:text-[42px] lg:text-[44px] font-semibold leading-tight">
                Plain-language playbooks for your first year in Germany
              </h1>

              <p className="text-[18px] text-slate-600 font-medium leading-relaxed">
                Graded checklists, timelines, and verified links that keep you moving. Built for students and researchers landing in a new system.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleExploreClick}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-700 text-white px-7 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
                >
                  Explore guides
                </button>

                <button
                  onClick={() => setView("library")}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
                >
                  Browse resources
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 lg:p-8 flex flex-col gap-5 text-slate-700 max-w-md">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold mb-2">What to expect</p>
                <h2 className="text-[22px] font-semibold leading-snug text-slate-900">Step-by-step essentials from Anmeldung to your first pay slip</h2>
              </div>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-indigo-600"></span>
                  Local checklists synced with Germany-specific deadlines and forms.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-indigo-600"></span>
                  Updated pricing, office hours, and documents verified this year.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-indigo-600"></span>
                  Searchable resource library covering banking, housing, healthcare, and more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter (visible when viewing posts) */}
      {view === "posts" && (
        <div className="px-4 sm:px-6 py-10">
          <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative flex items-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Search className="ml-4 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search guides"
                  className="w-full py-3 sm:py-4 px-4 rounded-2xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400 bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <CategoryFilter selectedStage={selectedStage} setSelectedStage={setSelectedStage} />

            {/* Disclaimer */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 text-left shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 text-indigo-700 flex-shrink-0">
                  <Info size={20} />
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  {META.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
