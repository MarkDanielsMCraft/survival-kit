import { ChevronUp, ChevronDown } from "lucide-react";
import { POSTS } from '../data/posts';

export const PostNavigation = ({ currentPost }) => {
  const currentIndex = POSTS.findIndex((p) => p.slug === currentPost.slug);
  const prevPost = currentIndex > 0 ? POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < POSTS.length - 1 ? POSTS[currentIndex + 1] : null;

  const handleNavigate = (post, onBack, setView, setActiveSlug) => {
    setActiveSlug(post.slug);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {prevPost && (
        <a
          href={`#post-${prevPost.slug}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = `post-${prevPost.slug}`;
            window.scrollTo(0, 0);
          }}
          className="group block p-3 sm:p-4 bg-white border border-slate-100 rounded-xl sm:rounded-2xl hover:shadow-lg hover:border-slate-200 transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-2 text-xs uppercase font-bold text-slate-400 mb-2">
            <ChevronUp size={14} />
            <span>Previous Post</span>
          </div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-slate-600 transition-colors line-clamp-2">
            {prevPost.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">{prevPost.stage}</p>
        </a>
      )}

      {nextPost && (
        <a
          href={`#post-${nextPost.slug}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = `post-${nextPost.slug}`;
            window.scrollTo(0, 0);
          }}
          className="group block p-3 sm:p-4 bg-white border border-slate-100 rounded-xl sm:rounded-2xl hover:shadow-lg hover:border-slate-200 transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-2 text-xs uppercase font-bold text-slate-400 mb-2">
            <span>Next Post</span>
            <ChevronDown size={14} />
          </div>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-slate-600 transition-colors line-clamp-2">
            {nextPost.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">{nextPost.stage}</p>
        </a>
      )}
    </div>
  );
};
