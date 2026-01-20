import { Sparkles, Siren, ArrowLeft } from "lucide-react";
import { META, LINKS } from '../constants/config';

export const Header = ({
  emergencyMode,
  setEmergencyMode,
  isPostDetail = false,
  onNavigateHome,
  showBack = false,
  onBack,
  backLabel = "Back",
}) => (
  <header className={`sm:sticky top-0 z-50 ${isPostDetail ? 'glass-card-transparent liquid-glass' : 'glass-card border-b border-white/20 liquid-glass'}`}>
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        {showBack && Boolean(onBack) && (
          <button
            type="button"
            onClick={onBack}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-white"
          >
            <ArrowLeft size={14} />
            {backLabel}
          </button>
        )}
        <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-500/30">
          <Sparkles size={20} className="animate-pulse" />
        </div>
        <button
          type="button"
          onClick={onNavigateHome}
          className={`text-left ${onNavigateHome ? 'cursor-pointer' : 'cursor-default'}`}
          aria-label={onNavigateHome ? 'Go to Survival Kit home' : undefined}
          title={onNavigateHome ? 'Back to Survival Kit home' : undefined}
        >
          <h1 className="font-bold text-slate-800 text-lg leading-tight tracking-tight">
            {META.siteTitle}
          </h1>
          <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
            {META.lastUpdatedLabel}: {META.lastUpdatedDate}
          </p>
        </button>
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
      <div className="border-t border-red-400/40 bg-transparent">
        <div className="liquid-glass-emergency text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 px-6 py-7 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-black tracking-tight">Emergency Contacts</h3>
              <p className="text-sm text-white/70 font-semibold leading-relaxed">
                Call the numbers below immediately in a life-threatening situation. Operators speak German and English.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:112" className="liquid-glass-tile group">
                  <div className="flex items-center gap-3">
                    <div className="emergency-chip">112</div>
                    <div>
                      <p className="text-base font-bold">Ambulance & Fire</p>
                      <p className="text-xs text-white/80">Medical emergencies or fire brigade</p>
                    </div>
                  </div>
                </a>
                <a href="tel:110" className="liquid-glass-tile group">
                  <div className="flex items-center gap-3">
                    <div className="emergency-chip">110</div>
                    <div>
                      <p className="text-base font-bold">Police</p>
                      <p className="text-xs text-white/80">Immediate danger or crime</p>
                    </div>
                  </div>
                </a>
                <a href="tel:116117" className="liquid-glass-tile group">
                  <div className="flex items-center gap-3">
                    <div className="emergency-chip">116 117</div>
                    <div>
                      <p className="text-base font-bold">Medical On-Call Service</p>
                      <p className="text-xs text-white/80">Non-life-threatening urgent care</p>
                    </div>
                  </div>
                </a>
                <a href="tel:116123" className="liquid-glass-tile group">
                  <div className="flex items-center gap-3">
                    <div className="emergency-chip">116 123</div>
                    <div>
                      <p className="text-base font-bold">Emotional Support Hotline</p>
                      <p className="text-xs text-white/80">TelefonSeelsorge 24/7 in German & English</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white/90">Lost Documents?</h3>
              <div className="liquid-glass-tile space-y-3">
                <p className="text-sm text-white/75 font-semibold">
                  Lost passport or residence permit:
                </p>
                <ul className="list-disc pl-5 text-xs space-y-2 text-white/80">
                  <li>Contact your embassy or consulate. Most have 24/7 emergency lines.</li>
                  <li>Report the loss to the local police (Polizei) within 24 hours.</li>
                </ul>
              </div>
              <div className="liquid-glass-tile space-y-3">
                <p className="text-sm text-white/75 font-semibold">Lost bank or credit card:</p>
                <ul className="list-disc pl-5 text-xs space-y-2 text-white/80">
                  <li>Call 116 116 to block German-issued cards immediately.</li>
                  <li>For international cards, use the emergency number on your bank’s app.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </header>
);
