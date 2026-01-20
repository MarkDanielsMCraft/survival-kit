import { ChevronRight, Clock, Tag } from "lucide-react";

export const PostCard = ({ post, index, onOpen, progressPercent }) => (
  <button
    onClick={() => onOpen(post.slug)}
    style={{ animationDelay: `${index * 90}ms` }}
    className="fade-in-up group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
  >
    <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

    <div className="relative z-10 flex flex-col gap-6 p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
            {post.stage}
          </span>
          <h3 className="text-xl font-semibold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-indigo-600">
            {post.title}
          </h3>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${post.color} text-white shadow-lg shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-110`}
        >
          {post.icon}
        </div>
      </div>

      <p className="text-sm font-medium leading-relaxed text-slate-600">
        {post.summary}
      </p>

      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1">
          <Clock size={14} className="text-indigo-500" />
          {post.readTime}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-emerald-600">
          {progressPercent}% complete
        </span>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              <Tag size={12} className="text-slate-400" />
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-[11px] font-semibold text-slate-400">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
      )}

      <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <div className="h-2 w-full rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${post.color}`}
            style={{ width: `${Math.max(progressPercent, 4)}%` }}
          />
        </div>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-transform duration-200 group-hover:translate-x-1">
          <ChevronRight size={18} />
        </span>
      </div>
    </div>
  </button>
);
