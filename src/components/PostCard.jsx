import { ChevronRight, Clock, Tag } from "lucide-react";

export const PostCard = ({ post, index, onOpen, progressPercent }) => (
  <button
    onClick={() => onOpen(post.slug)}
    style={{ animationDelay: `${index * 100}ms` }}
    className="fade-in-up group relative bg-white hover:bg-white/90 p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 text-left flex flex-col h-full overflow-hidden transform hover:-translate-y-1"
  >
    <div
      className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${post.color} opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-[0.08] transition-opacity duration-500`}
    />

    <div className="flex justify-between items-start mb-4">
      <div
        className={`relative p-4 rounded-2xl bg-gradient-to-br ${post.color} text-white shadow-lg ${post.shadow} group-hover:scale-110 transition-transform duration-500`}
      >
        {post.icon}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[10px] font-black text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
          {progressPercent}% done
        </span>
        <div className="bg-slate-50 text-slate-400 p-2 rounded-full group-hover:bg-slate-100 group-hover:text-indigo-600 transition-colors">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>

    {/* Stage badge */}
    <div className="mb-3">
      <span className="text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full inline-block">
        📌 {post.stage}
      </span>
    </div>

    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-2">
        <Clock size={12} className="text-slate-400" />
        <span className="text-xs font-semibold text-slate-400">{post.readTime}</span>
      </div>
      <h3 className="font-bold text-slate-800 text-xl mb-2 group-hover:text-slate-900 leading-tight">
        {post.title}
      </h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
        {post.summary}
      </p>

      {/* Tags preview */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {post.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded flex items-center gap-1">
              <Tag size={8} />
              {tag}
            </span>
          ))}
          {post.tags.length > 2 && (
            <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5">
              +{post.tags.length - 2}
            </span>
          )}
        </div>
      )}
    </div>

    <div className="mt-4 flex items-center gap-3">
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${post.color}`} style={{ width: `${progressPercent}%` }} />
      </div>
      <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">{progressPercent}%</span>
    </div>
  </button>
);
