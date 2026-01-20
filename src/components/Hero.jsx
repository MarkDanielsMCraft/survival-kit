import { Search, Grid, List, Info } from "lucide-react";
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
      <div className="relative pt-12 pb-10 px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Resource Library
          </h2>
          <p className="text-lg text-slate-600 mb-8 font-medium">
            Curated tools, apps, and links for surviving and thriving in Germany.
          </p>

          <div className="max-w-lg mx-auto mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl">
              <Search className="ml-4 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search: 'apps', 'banking', 'health'..."
                className="w-full py-4 px-4 rounded-2xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center gap-2">
              <button
                onClick={() => setView("posts")}
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),_transparent_55%),_radial-gradient(circle_at_80%_20%,_rgba(239,246,255,0.18),_transparent_60%)]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-500/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:gap-16 items-center">
            <div className="max-w-2xl space-y-6 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                Germany, decoded
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Plain-language playbooks for your first year in Germany
              </h1>

              <p className="text-base sm:text-lg text-white/80 font-medium leading-relaxed">
                Graded checklists, timelines, and verified links that keep you moving. Built for students and researchers landing in a new system.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleExploreClick}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-7 py-3 text-sm font-semibold shadow-lg shadow-indigo-500/20 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore guides
                  <span className="text-indigo-500 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>

                <button
                  onClick={() => setView("library")}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white/80 transition-colors duration-200 hover:border-white/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Browse resources
                </button>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-[0_40px_120px_-60px_rgba(99,102,241,0.9)] p-6 sm:p-7 lg:p-8 flex flex-col gap-6 text-white/90 max-w-md">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-indigo-200 font-semibold mb-2">What to expect</p>
                <h2 className="text-2xl font-semibold leading-snug text-white">Step-by-step essentials from Anmeldung to your first pay slip</h2>
              </div>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-300"></span>
                  Local checklists synced with Germany-specific deadlines and forms.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-300"></span>
                  Updated pricing, office hours, and documents verified this year.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-rose-300"></span>
                  Searchable resource library covering banking, housing, healthcare, and more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter (visible when viewing posts) */}
      {view === "posts" && (
        <div className="relative -mt-12 sm:-mt-16 z-30 px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
            {/* Search */}
            <div className="max-w-md mx-auto relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Search className="ml-4 text-indigo-400" size={20} />
                <input
                  type="text"
                  placeholder="Search guides..."
                  className="w-full py-3 sm:py-4 px-4 rounded-2xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400 bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <CategoryFilter selectedStage={selectedStage} setSelectedStage={setSelectedStage} />

            {/* Disclaimer */}
            <div className="bg-gradient-to-r from-indigo-50/80 to-blue-50/80 border border-indigo-100/60 rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-left shadow-sm backdrop-blur-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 text-indigo-600 flex-shrink-0">
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
