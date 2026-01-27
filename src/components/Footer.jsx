import { META, LINKS } from '../constants/config';
import { safeOpen } from '../utils/security';

export const Footer = ({ onShowPosts, onShowLibrary, onOpenEmergency, variant = "default", onBackToGuideList, onDownloadGuides }) => (
  <footer className="mt-20 border-t border-slate-200 bg-white text-slate-700">
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-lg space-y-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
              Germany orientation
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Survival Kit</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Built by internationals for internationals. Trusted playbooks, verified links, and pricing notes so your first year in Germany stays predictable.
              </p>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Verified {META.lastUpdatedDate}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 w-full lg:w-auto">
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">Navigate</h4>
              <div className="flex flex-col gap-2 text-sm font-semibold">
                <button
                  onClick={variant === "detail" ? onBackToGuideList : onShowPosts}
                  className="text-left text-slate-700 hover:text-slate-900 transition"
                >
                  {variant === "detail" ? "Back to all guides" : "Blog guides"}
                </button>
                <button
                  onClick={onShowLibrary}
                  className="text-left text-slate-700 hover:text-slate-900 transition"
                >
                  Resource library
                </button>
                <button
                  onClick={onOpenEmergency}
                  className="text-left text-slate-700 hover:text-slate-900 transition"
                >
                  Emergency numbers
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">Newcomer musts</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Anmeldung & tax ID basics</li>
                <li>Insurance and healthcare onboarding</li>
                <li>Banking, SIM, and transport tips</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">Support the kit</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Help us keep every checklist accurate. Contributions fund translations and quarterly verification.
              </p>
              {onDownloadGuides && (
                <button
                  onClick={onDownloadGuides}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Download guides (PDF)
                </button>
              )}
              <a
                href={LINKS.buyMeACoffee}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Support the project
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Survival Kit. Unofficial orientation guide · Last verified January 2026.</p>
          <div className="flex items-center gap-6 text-xs font-semibold">
            <button
              onClick={() => safeOpen('https://www.make-it-in-germany.com/en/service/legal-notice')}
              className="hover:text-slate-900 transition"
            >
              Impressum
            </button>
            <button
              onClick={() => safeOpen('https://www.make-it-in-germany.com/en/service/data-protection')}
              className="hover:text-slate-900 transition"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
