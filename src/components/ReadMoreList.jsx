import { ExternalLink } from "lucide-react";
import { SourcePill } from './SourcePill';

export const ReadMoreList = ({ links }) => {
  if (!links || links.length === 0) return null;
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <ExternalLink size={18} className="text-indigo-600" />
        <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">Read more (Verified sources)</h3>
      </div>

      <div className="space-y-3">
        {links.map((l, idx) => (
          <a
            key={`${l.url}-${idx}`}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-left bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-2xl px-4 py-3 transition flex items-center justify-between"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <SourcePill source={l.source} />
                <span className="text-xs text-slate-400 font-bold">External</span>
              </div>
              <p className="text-sm font-bold text-slate-800 truncate">{l.title}</p>
            </div>
            <ExternalLink size={16} className="text-slate-400 flex-shrink-0 ml-3" />
          </a>
        ))}
      </div>
    </div>
  );
};
