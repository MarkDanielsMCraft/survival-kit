import { Siren, ArrowLeft } from "lucide-react";
import { META } from '../constants/config';

export const Header = ({
  emergencyMode,
  setEmergencyMode,
  onNavigateHome,
  sections = [],
  activeSectionId,
  onSelectSection,
  searchValue = "",
  onSearchChange,
  onSearchSubmit,
  showSearch = false,
  showBack = false,
  onBack,
  backLabel = "Back",
}) => (
  <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-[180px]">
        {showBack && Boolean(onBack) && (
          <button
            type="button"
            onClick={onBack}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <ArrowLeft size={14} />
            {backLabel}
          </button>
        )}
        <button
          type="button"
          onClick={onNavigateHome}
          className={`text-left ${onNavigateHome ? 'cursor-pointer' : 'cursor-default'}`}
          aria-label={onNavigateHome ? 'Go to Survival Kit home' : undefined}
          title={onNavigateHome ? 'Back to Survival Kit home' : undefined}
        >
          <h1 className="font-semibold text-slate-900 text-lg leading-tight tracking-tight">
            {META.siteTitle}
          </h1>
          <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
            {META.lastUpdatedLabel}: {META.lastUpdatedDate}
          </p>
        </button>
      </div>

      {sections.length > 0 && (
        <nav className="flex items-center justify-center flex-1 min-w-0">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelectSection?.(section.id)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide border-b-2 transition-colors ${
                  activeSectionId === section.id
                    ? "text-indigo-700 border-indigo-700"
                    : "text-slate-500 border-transparent hover:text-slate-700"
                }`}
                aria-current={activeSectionId === section.id ? "page" : undefined}
              >
                {section.title}
              </button>
            ))}
          </div>
        </nav>
      )}
      
      <div className="flex items-center gap-3 flex-wrap justify-end min-w-[220px]">
        {showSearch && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSearchSubmit?.();
            }}
            className="flex items-center"
          >
            <input
              type="search"
              value={searchValue}
              onChange={(event) => onSearchChange?.(event.target.value)}
              placeholder="Search this page"
              className="w-32 sm:w-44 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/30"
            />
          </form>
        )}
        <button 
          onClick={() => setEmergencyMode(!emergencyMode)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${emergencyMode ? "bg-red-600 text-white" : "bg-white text-red-700 border border-red-200 hover:bg-red-50"}`}
        >
          <Siren size={14} />
          {emergencyMode ? "Close Emergency" : "Emergency"}
        </button>
      </div>
    </div>
    
    {/* Emergency Overlay */}
    {emergencyMode && (
      <div className="border-t border-red-200 bg-red-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 px-6 py-7 md:grid-cols-3 text-slate-900">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">Emergency contacts</h3>
            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              Call the numbers below immediately in a life-threatening situation. Operators speak German and English.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:112" className="rounded-xl border border-red-200 bg-white px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex min-w-[3rem] items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">112</div>
                  <div>
                    <p className="text-base font-semibold">Ambulance & Fire</p>
                    <p className="text-xs text-slate-600">Medical emergencies or fire brigade</p>
                  </div>
                </div>
              </a>
              <a href="tel:110" className="rounded-xl border border-red-200 bg-white px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex min-w-[3rem] items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">110</div>
                  <div>
                    <p className="text-base font-semibold">Police</p>
                    <p className="text-xs text-slate-600">Immediate danger or crime</p>
                  </div>
                </div>
              </a>
              <a href="tel:116117" className="rounded-xl border border-red-200 bg-white px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex min-w-[3rem] items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">116 117</div>
                  <div>
                    <p className="text-base font-semibold">Medical On-Call Service</p>
                    <p className="text-xs text-slate-600">Non-life-threatening urgent care</p>
                  </div>
                </div>
              </a>
              <a href="tel:116123" className="rounded-xl border border-red-200 bg-white px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex min-w-[3rem] items-center justify-center rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">116 123</div>
                  <div>
                    <p className="text-base font-semibold">Emotional Support Hotline</p>
                    <p className="text-xs text-slate-600">TelefonSeelsorge 24/7 in German & English</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Lost documents?</h3>
            <div className="rounded-xl border border-red-200 bg-white p-4 space-y-3">
              <p className="text-sm text-slate-700 font-semibold">
                Lost passport or residence permit:
              </p>
              <ul className="list-disc pl-5 text-xs space-y-2 text-slate-600">
                <li>Contact your embassy or consulate. Most have 24/7 emergency lines.</li>
                <li>Report the loss to the local police (Polizei) within 24 hours.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-white p-4 space-y-3">
              <p className="text-sm text-slate-700 font-semibold">Lost bank or credit card:</p>
              <ul className="list-disc pl-5 text-xs space-y-2 text-slate-600">
                <li>Call 116 116 to block German-issued cards immediately.</li>
                <li>For international cards, use the emergency number on your bank’s app.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
  </header>
);
