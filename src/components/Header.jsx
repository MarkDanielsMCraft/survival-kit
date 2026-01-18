import { Sparkles, Siren } from "lucide-react";
import { META, LINKS } from '../constants/config';

export const Header = ({ emergencyMode, setEmergencyMode, isPostDetail = false }) => (
  <header className={`sm:sticky top-0 z-50 ${isPostDetail ? 'glass-card-transparent' : 'glass-card border-b border-white/20'}`}>
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-500/30">
          <Sparkles size={20} className="animate-pulse" />
        </div>
        <div>
          <h1 className="font-bold text-slate-800 text-lg leading-tight tracking-tight">
            {META.siteTitle}
          </h1>
          <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
            {META.lastUpdatedLabel}: {META.lastUpdatedDate}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 flex-wrap justify-end">
        <a
          href={LINKS.buyMeACoffee}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-amber-700 bg-amber-100 border border-amber-300 hover:bg-amber-200 hover:border-amber-400 transition-all hover:shadow-md"
          title="Support this project"
        >
          ☕ Coffee
        </a>
        <a
          href={LINKS.buyMeACoffee}
          target="_blank"
          rel="noopener noreferrer"
          className="flex sm:hidden items-center gap-1.5 px-3 py-2 rounded-full text-sm font-bold text-amber-700 bg-amber-100 border border-amber-300 hover:bg-amber-200 hover:border-amber-400 transition-all"
          title="Support this project"
        >
          ☕
        </a>
        <button 
          onClick={() => setEmergencyMode(!emergencyMode)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${emergencyMode ? "bg-red-600 text-white shadow-red-500/50 shadow-lg animate-pulse" : "bg-red-50 text-red-600 border border-red-100 hover:bg-red-100"}`}
        >
          <Siren size={14} />
          {emergencyMode ? "Close Emergency" : "Emergency"}
        </button>
      </div>
    </div>
    
    {/* Emergency Overlay */}
    {emergencyMode && (
      <div className="bg-red-600 text-white p-6 absolute top-full left-0 w-full shadow-2xl animate-in fade-in slide-in-from-top-2 z-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-black text-2xl mb-2">Emergency Numbers</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:112" className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition">
                <div className="bg-white text-red-600 p-2 rounded-full font-bold">112</div>
                <div>
                  <p className="font-bold">Ambulance & Fire</p>
                  <p className="text-xs opacity-90">Medical emergencies, fire</p>
                </div>
              </a>
              <a href="tel:110" className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition">
                <div className="bg-white text-red-600 p-2 rounded-full font-bold">110</div>
                <div>
                  <p className="font-bold">Police</p>
                  <p className="text-xs opacity-90">Immediate danger</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 opacity-90">Lost Documents?</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 opacity-90">
              <li>Lost Passport: Contact your embassy immediately.</li>
              <li>Lost Bank Card: Call 116 116 to block cards.</li>
            </ul>
          </div>
        </div>
      </div>
    )}
  </header>
);
