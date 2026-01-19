import React from "react";
import {
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  CheckSquare,
  Square,
  FileText,
  Youtube,
  Download,
  PlayCircle,
  RotateCcw,
} from "lucide-react";
import { Header } from './Header';
import { ReadMoreList } from './ReadMoreList';
import { SourcePill } from './SourcePill';
import { TableOfContents } from './TableOfContents';
import { PostNavigation } from './PostNavigation';
import { renderRichText } from '../utils/textRenderer';
import { safeOpen } from '../utils/security';
import { pct } from '../utils/helpers';

export const PostDetail = ({ post, onBack, progress, onToggle, onReset, emergencyMode, setEmergencyMode }) => {
  const total = post.steps.length;
  const done = post.steps.reduce((acc, _, i) => acc + (progress[`${post.slug}-${i}`] ? 1 : 0), 0);
  const progressPercent = pct(done, total);

  return (
    <div className="min-h-screen pb-20">
      <Header emergencyMode={emergencyMode} setEmergencyMode={setEmergencyMode} isPostDetail={true} />
      {/* Top nav */}
      <div className="glass-card sticky top-[72px] z-50 px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between border-b border-white/20 gap-2">
        <button
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-slate-900 bg-white/50 hover:bg-white px-3 sm:px-4 py-2 rounded-full transition-all text-xs sm:text-sm font-bold shadow-sm backdrop-blur-md"
        >
          <ArrowLeft className="mr-1 sm:mr-2" size={16} />
          <span className="hidden sm:inline">Back</span>
        </button>

        <button
          onClick={onReset}
          className="inline-flex items-center text-xs font-bold text-slate-500 bg-white/70 border border-slate-200 px-2.5 sm:px-3 py-2 rounded-full hover:bg-white transition"
          title="Reset checklist for this post"
        >
          <RotateCcw size={12} className="mr-1" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Header */}
      <div className="px-4 sm:px-6 py-8 sm:py-12 mb-6 text-center relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br ${post.color} opacity-20 blur-3xl rounded-full`} />
        <div className="relative z-10">
          <div className={`inline-flex p-3 sm:p-5 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 bg-gradient-to-br ${post.color} text-white shadow-2xl ${post.shadow} animate-float`}>
            {React.cloneElement(post.icon, { size: 32 })}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 sm:mb-3 tracking-tight">
            {post.title}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed px-2">
            {post.summary}
          </p>

          {/* Meta info */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
              <span className="text-slate-600 mr-1">📌</span>
              <span className="text-slate-600">{post.stage}</span>
            </div>
            <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
              <span className="text-slate-600 mr-1">⏱️</span>
              <span className="text-slate-600">{post.readTime}</span>
            </div>
            <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
              <CheckCircle size={10} className="mr-1 text-emerald-500" />
              <span className="hidden sm:inline">Verified:</span> {post.verified}
            </div>

            <div className="inline-flex items-center text-xs font-bold text-slate-600 bg-white/70 border border-slate-200 px-2.5 py-1 rounded-full">
              <span className="mr-1.5">{progressPercent}%</span>
              <span className="h-2 w-16 sm:w-24 bg-slate-100 rounded-full overflow-hidden">
                <span className={`block h-full bg-gradient-to-r ${post.color}`} style={{ width: `${progressPercent}%` }} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left: Main content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Table of Contents */}
            <TableOfContents post={post} />
            
            {/* Render STRUCTURED CONTENT ARRAY */}
            {post.content && (
              <div className="prose prose-slate max-w-none bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm leading-relaxed text-base sm:text-lg content-block">
                {post.content.map((block, i) => {
                  if (block.type === 'h2') return <h2 key={i} className="scroll-mt-40">{block.text}</h2>;
                  if (block.type === 'p') return <p key={i}>{renderRichText(block.text, `p-${i}`)}</p>;
                  if (block.type === 'ul') return <ul key={i}>{block.items.map((item, j) => <li key={j}>{renderRichText(item, `li-${i}-${j}`)}</li>)}</ul>;
                  return null;
                })}
              </div>
            )}

            {/* Golden rule */}
            <div className="bg-amber-50/80 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-amber-100/60">
              <div className="flex items-center gap-2 text-amber-700 font-black text-xs uppercase tracking-wider mb-2">
                <AlertTriangle size={14} />
                💡 Golden Rule
              </div>
              <p className="text-slate-800 font-semibold text-sm sm:text-base">{post.goldenRule}</p>
            </div>

            {/* Checklist */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 py-2">
                <div className="h-px bg-slate-200 flex-1" />
                <h3 className="font-black text-slate-400 text-xs uppercase tracking-wider sm:tracking-[0.2em]">
                  <span className="hidden sm:inline">Action Plan & </span>Checklist
                </h3>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              {post.steps.map((step, idx) => {
                const key = `${post.slug}-${idx}`;
                const isDone = Boolean(progress[key]);

                return (
                  <div
                    key={key}
                    className={`bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border transition-all duration-300 transform ${
                      isDone
                        ? "border-emerald-200 opacity-90"
                        : "border-slate-100 hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
                      <div className="flex items-start min-w-0 flex-1">
                        <span
                          className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-black mr-2 sm:mr-3 transition-colors flex-shrink-0 ${
                            isDone ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {idx + 1}
                        </span>

                        <h4
                          className={`font-bold text-sm sm:text-lg transition-colors leading-snug ${
                            isDone
                              ? "text-emerald-800 line-through decoration-emerald-500/30"
                              : "text-slate-900"
                          }`}
                        >
                          {step.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => onToggle(post.slug, idx)}
                        className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-300 flex-shrink-0 ${
                          isDone
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-slate-50 text-slate-300 hover:bg-slate-100 hover:text-indigo-500"
                        }`}
                        title="Mark done / not done"
                      >
                        {isDone ? <CheckSquare size={20} /> : <Square size={20} />}
                      </button>
                    </div>

                    <p className={`text-slate-500 mb-3 sm:mb-4 ml-8 sm:ml-9 font-medium leading-relaxed text-sm sm:text-base ${isDone ? "opacity-50" : "opacity-100"}`}>
                      {step.text}
                    </p>

                    {!isDone && (
                      <div className="ml-8 sm:ml-9">
                        <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 mb-3 flex items-start gap-2 sm:gap-3">
                          <span className="text-base sm:text-lg flex-shrink-0">👉</span>
                          <span className="text-slate-700 font-semibold text-xs sm:text-sm pt-0.5 leading-snug">
                            {step.action}
                          </span>
                        </div>

                        {step.readMore && step.readMore.length > 0 && (
                          <div className="space-y-2">
                            {step.readMore.map((l, j) => (
                              <a
                                key={`${l.url}-${j}`}
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-left bg-white hover:bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 transition flex items-start sm:items-center justify-between gap-2"
                              >
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1 flex-wrap">
                                    <SourcePill source={l.source} />
                                    <span className="text-xs text-slate-400 font-bold hidden sm:inline">Read more</span>
                                  </div>
                                  <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">{l.title}</p>
                                </div>
                                <ExternalLink size={14} className="text-slate-400 flex-shrink-0 ml-2" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Downloads + videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.downloads?.length > 0 && (
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <div className="flex items-center space-x-2 mb-4 text-indigo-600">
                    <FileText size={20} />
                    <h3 className="font-black uppercase tracking-wider text-xs">Downloads</h3>
                  </div>
                  <ul className="space-y-3">
                    {post.downloads.map((f, i) => (
                      <li
                        key={`${f.title}-${i}`}
                        onClick={() => safeOpen(f.url)}
                        className="flex items-center text-sm font-semibold text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:text-indigo-600 hover:border-indigo-100 cursor-pointer transition-colors group"
                      >
                        <Download size={14} className="mr-2 opacity-50 group-hover:scale-110 transition-transform" />
                        <span className="truncate">{f.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {post.videos?.length > 0 && (
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <div className="flex items-center space-x-2 mb-4 text-red-600">
                    <Youtube size={20} />
                    <h3 className="font-black uppercase tracking-wider text-xs">Videos</h3>
                  </div>
                  <ul className="space-y-3">
                    {post.videos.map((v, i) => (
                      <li
                        key={`${v.title}-${i}`}
                        onClick={() => safeOpen(v.url)}
                        className="flex items-center text-sm font-semibold text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:text-red-600 hover:border-red-100 cursor-pointer transition-colors group"
                      >
                        <PlayCircle size={14} className="mr-2 opacity-50 group-hover:scale-110 transition-transform" />
                        <span className="truncate">{v.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Read more (post level) */}
            <ReadMoreList links={post.readMore} />
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            <div className="sticky top-[140px]">
              <PostNavigation currentPost={post} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
