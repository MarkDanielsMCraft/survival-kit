import { Search, Grid, List, Info } from "lucide-react";
import { META, LINKS } from '../constants/config';
import { CategoryFilter } from './CategoryFilter';

export const Hero = ({ view, setView, searchTerm, setSearchTerm, selectedStage, setSelectedStage }) => {
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
      {/* Hero Section with Background Image */}
      <section className="hero-photo relative min-h-[550px] sm:min-h-[650px] md:min-h-[750px] overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900" />
        
        {/* Background image with sophisticated overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552733959-efbed386021a?w=1600&auto=format&fit=crop&q=80')`,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/30" />

        {/* Animated blob background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '1s' }} />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center py-16 sm:py-20">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-sm w-fit">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                <p className="text-xs sm:text-sm font-semibold text-indigo-200 uppercase tracking-wide">Welcome to Germany</p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight sm:leading-tight tracking-tight">
                Your honest guide to starting life in Germany
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              Real talk for international students and scholars. No fluff, no jargon. Everything you need from arrival to first paycheck.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <button
                onClick={() => setView("posts")}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Explore Guides
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button
                onClick={() => setView("library")}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base sm:text-lg border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Browse Resources
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
          <div className="flex flex-col items-center gap-2 text-white/50 hover:text-white/70 transition-colors">
            <div className="text-xs font-semibold uppercase tracking-widest">Scroll</div>
            <div className="animate-bounce text-lg">↓</div>
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
