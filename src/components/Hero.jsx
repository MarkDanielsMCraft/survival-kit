import { Search, Grid, List, Info } from "lucide-react";
import { META } from '../constants/config';

export const Hero = ({ view, setView, searchTerm, setSearchTerm }) => (
  <div className="relative pt-12 pb-10 px-6 text-center overflow-hidden">
    <div className="max-w-3xl mx-auto relative z-10 animate-float">
      <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight">
        Your first steps in <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          Germany.
        </span>
      </h2>

      <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto font-medium">
        {META.tagline}
      </p>

      {/* VIEW TOGGLE */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setView("posts")}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
            view === "posts"
              ? "bg-slate-900 text-white shadow-lg"
              : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <Grid size={16} />
            Blog Guide
          </div>
        </button>
        <button
          onClick={() => setView("library")}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
            view === "library"
              ? "bg-slate-900 text-white shadow-lg"
              : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <List size={16} />
            Resource Library
          </div>
        </button>
      </div>

      {/* SEARCH */}
      <div className="max-w-lg mx-auto mb-8 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-white rounded-2xl shadow-xl">
          <Search className="ml-4 text-slate-400" size={20} />
          <input
            type="text"
            placeholder={
              view === "posts"
                ? "Search posts: 'Anmeldung', 'Trash', 'Tax ID'..."
                : "Search the library: 'dosage', 'documentation', 'VHS'..."
            }
            className="w-full py-4 px-4 rounded-2xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {view === "posts" && (
        <div className="max-w-2xl mx-auto bg-white/80 border border-slate-200/60 rounded-2xl p-4 text-left shadow-sm backdrop-blur-sm">
          <div className="flex items-start space-x-3">
            <div className="mt-0.5 text-slate-600">
              <Info size={18} />
            </div>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {META.disclaimer}
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
);
