
import { ChevronLeft, ChevronRight } from "lucide-react";
import { POSTS } from "../data/posts";

export const PostNavigation = ({ currentPost }) => {
  const currentIndex = POSTS.findIndex((p) => p.slug === currentPost.slug);
  const prevPost = currentIndex > 0 ? POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < POSTS.length - 1 ? POSTS[currentIndex + 1] : null;

  const goTo = (post) => {
    window.location.hash = `post-${post.slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!prevPost && !nextPost) return null;

  return (
    <div className="bg-white/80 border border-slate-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
        {prevPost ? (
          <button
            onClick={() => goTo(prevPost)}
            className="flex-1 inline-flex items-center gap-3 px-3 sm:px-4 py-3 rounded-xl border border-slate-200 text-left hover:border-indigo-100 hover:bg-indigo-50/70 transition"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
              <ChevronLeft size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Previous</p>
              <p className="font-semibold text-slate-800 line-clamp-2 text-sm sm:text-base">{prevPost.title}</p>
            </div>
          </button>
        ) : (
          <div className="flex-1" />
        )}

        {nextPost ? (
          <button
            onClick={() => goTo(nextPost)}
            className="flex-1 inline-flex items-center gap-3 px-3 sm:px-4 py-3 rounded-xl border border-slate-200 text-left hover:border-indigo-100 hover:bg-indigo-50/70 transition"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Next</p>
              <p className="font-semibold text-slate-800 line-clamp-2 text-sm sm:text-base">{nextPost.title}</p>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
              <ChevronRight size={18} />
            </span>
          </button>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
};
