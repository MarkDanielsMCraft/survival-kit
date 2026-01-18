import { ChevronRight, Clock } from "lucide-react";

export const PostCard = ({ post, index, onOpen, progressPercent }) => (
  <button
    onClick={() => onOpen(post.slug)}
    style={{ animationDelay: `${index * 100}ms` }}
    className="fade-in-up group relative bg-white hover:bg-white/90 p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 text-left flex flex-col h-full overflow-hidden transform hover:-translate-y-1"
  >
    <div
      className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${post.color} opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-[0.08] transition-opacity duration-500`}
    />

    <div className="flex justify-between items-start mb-6">
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

    <div className="relative z-10 mt-auto">
      <div className="flex items-center gap-2 mb-2">
        <Clock size={12} className="text-slate-400" />
        <span className="text-xs font-semibold text-slate-400">{post.readTime} read</span>
      </div>
      <h3 className="font-bold text-slate-800 text-2xl mb-2 group-hover:text-slate-900 leading-tight">
        {post.title}
      </h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
        {post.summary}
      </p>
    </div>

    <div className="mt-5 flex items-center gap-3">
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${post.color}`} style={{ width: `${progressPercent}%` }} />
      </div>
      <span className="text-[10px] font-bold text-slate-400">{progressPercent}%</span>
    </div>
  </button>
);
