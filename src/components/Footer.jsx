import { META, LINKS } from '../constants/config';

export const Footer = ({ onShowPosts, onShowLibrary, onOpenEmergency, variant = "default", onBackToGuideList }) => (
  <footer className="relative mt-24 overflow-hidden text-slate-100">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.35),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.25),_transparent_45%)]" />
    <div className="absolute -top-24 right-[-20%] h-[320px] w-[320px] rounded-full bg-indigo-500/20 blur-3xl" />
    <div className="absolute -bottom-16 left-[-10%] h-[260px] w-[260px] rounded-full bg-emerald-400/10 blur-3xl" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-lg space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="text-lg" aria-hidden>🇩🇪</span>
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/80">Germany orientation</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-semibold tracking-tight text-white">Survival Kit</h3>
              <p className="text-sm text-slate-300/90 leading-relaxed">
                Built by internationals for internationals. Trusted playbooks, verified links, and pricing notes so your first year in Germany stays predictable.
              </p>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Verified {META.lastUpdatedDate}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 w-full lg:w-auto">
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">Navigate</h4>
              <div className="flex flex-col gap-2 text-sm font-semibold">
                <button
                  onClick={variant === "detail" ? onBackToGuideList : onShowPosts}
                  className="text-left text-slate-200 hover:text-white transition"
                >
                  {variant === "detail" ? "Back to all guides" : "Blog guides"}
                </button>
                <button
                  onClick={onShowLibrary}
                  className="text-left text-slate-200 hover:text-white transition"
                >
                  Resource library
                </button>
                <button
                  onClick={onOpenEmergency}
                  className="text-left text-slate-200 hover:text-white transition"
                >
                  Emergency numbers
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">Newcomer musts</h4>
              <ul className="space-y-2 text-sm text-slate-300/90">
                <li>Anmeldung & tax ID basics</li>
                <li>Insurance and healthcare onboarding</li>
                <li>Banking, SIM, and transport tips</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">Support the kit</h4>
              <p className="text-sm text-slate-300/85 leading-relaxed">
                Help us keep every checklist accurate. Contributions fund translations and quarterly verification.
              </p>
              <a
                href={LINKS.buyMeACoffee}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl"
              >
                ☕ Buy me a coffee
              </a>
            </div>
          </div>
        </div>

        <div className="liquid-glass-card border border-white/15 rounded-3xl px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-200/80">
          <p>© {new Date().getFullYear()} Survival Kit. Unofficial orientation guide · Last verified January 2026.</p>
          <div className="flex items-center gap-6 text-xs font-semibold">
            <a href="#" className="hover:text-white transition">Impressum</a>
            <a href="#" className="hover:text-white transition">Datenschutz</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
