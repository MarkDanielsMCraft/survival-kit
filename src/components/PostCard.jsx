import React from "react";
import { ChevronRight, Clock, Tag } from "lucide-react";
import { STAGE_STYLES } from "../constants/ui";
import { SmartImage } from "./SmartImage";

export const PostCard = ({ post, onOpen, progressPercent }) => {
  const cardImage = post.cardImage || post.backgroundImage;
  const stageStyle = STAGE_STYLES[post.stage] || STAGE_STYLES.DEFAULT;

  return (
    <button
      onClick={() => onOpen(post.slug)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-colors hover:border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <SmartImage
          src={cardImage}
          alt={`${post.title} guide cover`}
          fallbackIcon={post.icon}
          className="absolute inset-0 h-full w-full"
          width={900}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-6 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${stageStyle.pill}`}>
              {post.stage}
            </span>
            <h3 className="text-[20px] font-semibold leading-snug text-slate-900">
              {post.title}
            </h3>
          </div>
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${stageStyle.icon}`}>
            {post.icon}
          </div>
        </div>

        <p className="text-sm font-medium leading-relaxed text-slate-600">
          {post.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1">
            <Clock size={14} className="text-slate-500" />
            {post.readTime}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 text-slate-600">
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
              className={`h-full rounded-full ${stageStyle.bar}`}
              style={{ width: `${Math.max(progressPercent, 4)}%` }}
            />
          </div>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
            <ChevronRight size={18} />
          </span>
        </div>
      </div>
    </button>
  );
};
