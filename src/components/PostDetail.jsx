import React, { useMemo, useState } from "react";
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
  Share2,
} from "lucide-react";
import { Header } from './Header';
import { ReadMoreList } from './ReadMoreList';
import { SourcePill } from './SourcePill';
import { TableOfContents } from './TableOfContents';
import { PostNavigation } from './PostNavigation';
import { renderRichText } from '../utils/textRenderer';
import { safeOpen } from '../utils/security';
import { pct } from '../utils/helpers';
import { POSTS } from "../data/posts";
import { LINKS } from "../constants/config";

export const PostDetail = ({
  post,
  onBack,
  progress,
  onToggle,
  onReset,
  emergencyMode,
  setEmergencyMode,
  onNavigateHome,
}) => {
  const total = post.steps.length;
  const done = post.steps.reduce((acc, _, i) => acc + (progress[`${post.slug}-${i}`] ? 1 : 0), 0);
  const progressPercent = pct(done, total);
  const [copied, setCopied] = useState(false);

  const relatedPosts = useMemo(() => {
    const sameStage = POSTS.filter((p) => p.slug !== post.slug && p.stage === post.stage);
    const filler = POSTS.filter((p) => p.slug !== post.slug && p.stage !== post.stage);
    return [...sameStage, ...filler].slice(0, 3);
  }, [post]);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, text: post.summary, url });
        return;
      }
      await navigator.clipboard?.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50" id={`post-${post.slug}`}>
      <Header
        emergencyMode={emergencyMode}
        setEmergencyMode={setEmergencyMode}
        isPostDetail={true}
        onNavigateHome={onNavigateHome}
        showBack
        onBack={onBack}
      />

      {/* Floating controls */}
      <div className="glass-card sticky top-[72px] z-50 px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between border-b border-white/20 gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex items-center text-slate-600 hover:text-slate-900 bg-white/60 hover:bg-white px-3 sm:px-4 py-2 rounded-full transition-all text-xs sm:text-sm font-bold shadow-sm backdrop-blur"
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

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 bg-white/80 border border-slate-200 px-3 sm:px-4 py-2 rounded-full hover:bg-indigo-50 hover:border-indigo-100 transition"
        >
          <Share2 size={14} />
          {copied ? "Link copied" : "Share"}
        </button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden article-hero">
        {post.backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `linear-gradient(200deg, rgba(15,23,42,0.4), rgba(15,23,42,0.55)), url('${post.backgroundImage}')` }}
          />
        )}
        {!post.backgroundImage && <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-85 pointer-events-none`} />}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-5">
          <div className="flex items-center flex-wrap gap-2 text-xs text-slate-200 font-semibold uppercase tracking-wide">
            <span className="text-slate-200/70">Home</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-100">Guides</span>
            <span className="text-slate-400">/</span>
            <span className="text-white">{post.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${post.color} text-white shadow-xl ${post.shadow}`}>
              {React.cloneElement(post.icon, { size: 28 })}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="meta-pill">{post.stage}</span>
              <span className="meta-pill">{post.readTime} read</span>
              <span className="meta-pill inline-flex items-center gap-1"><CheckCircle size={12} className="text-emerald-400" /> Verified {post.verified}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed">
                {post.subtitle}
              </p>
            )}
            {!post.subtitle && (
              <p className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed">
                {post.summary}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-slate-100 font-semibold text-sm">
              <span className="h-2 w-24 bg-white/20 rounded-full overflow-hidden">
                <span className="block h-full bg-white/80" style={{ width: `${progressPercent}%` }} />
              </span>
              <span>{progressPercent}% completed</span>
            </div>
            <div className="text-xs font-semibold text-slate-200/80">
              Updated {post.verified}
            </div>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <main className="w-full min-h-screen pb-20 relative z-20" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #ede9fe 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14">
          <div className="grid grid-cols-1 xl:grid-cols-[340px_minmax(0,1fr)] gap-6 sm:gap-8">
          {/* Sidebar */}
          <aside className="order-2 xl:order-1 space-y-6">
            <div className="sticky top-24 space-y-6">
              <div className="liquid-glass-card border border-white/40 shadow-lg rounded-3xl p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 mb-4">On this page</h3>
                <TableOfContents post={post} />
              </div>

              <div className="liquid-glass-card border border-white/40 shadow-lg rounded-3xl p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 mb-4">Related reads</h3>
                <div className="space-y-3">
                  {relatedPosts.map((rp) => (
                    <button
                      key={rp.slug}
                      onClick={() => {
                        window.location.hash = `post-${rp.slug}`;
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="w-full text-left p-3 rounded-2xl border border-slate-100/70 hover:border-indigo-100 hover:bg-indigo-50/70 transition"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-1">{rp.stage}</p>
                      <p className="text-sm font-semibold text-slate-800 line-clamp-2">{rp.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{rp.readTime}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Article */}
          <article className="order-1 xl:order-2 space-y-6 sm:space-y-7 xl:pl-6">
            {post.vibeCheck && (
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/60 shadow-md rounded-3xl p-5 sm:p-6 backdrop-blur-sm">
                <p className="text-indigo-900 font-semibold text-base sm:text-lg leading-relaxed">{post.vibeCheck}</p>
              </div>
            )}

            {post.content && (
              <div className="prose prose-slate max-w-3xl mx-auto bg-gradient-to-br from-white to-slate-50/80 p-6 sm:p-9 md:p-10 rounded-3xl border border-slate-200/60 shadow-xl content-block space-y-0 backdrop-blur-sm">
                {post.content.map((block, i) => {
                  if (block.type === "h2") return <h2 key={i} className="scroll-mt-40 font-semibold text-slate-900 text-3xl sm:text-4xl tracking-tight">{block.text}</h2>;
                  if (block.type === "p") return <p key={i} className="text-slate-700 text-lg leading-relaxed font-medium">{renderRichText(block.text, `p-${i}`)}</p>;
                  if (block.type === "ul") return <ul key={i} className="list-disc list-outside pl-6 sm:pl-8 space-y-3">{block.items.map((item, j) => <li key={j} className="text-slate-700 text-lg leading-relaxed font-medium">{renderRichText(item, `li-${i}-${j}`)}</li>)}</ul>;
                  return null;
                })}
              </div>
            )}

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 sm:p-7 rounded-3xl border border-amber-200/60 shadow-md backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <AlertTriangle size={16} />
                Golden rule
              </div>
              <p className="text-amber-900 text-base sm:text-lg font-semibold leading-relaxed">{post.goldenRule}</p>
            </div>

            {/* Checklist */}
            <div className="bg-gradient-to-br from-white to-slate-50/90 border border-slate-200/60 rounded-3xl shadow-lg p-6 sm:p-8 space-y-6 backdrop-blur-sm">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">Key steps checklist</h3>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Click to mark done</div>
              </div>

              <div className="space-y-4">
                {post.steps.map((step, idx) => {
                  const key = `${post.slug}-${idx}`;
                  const isDone = Boolean(progress[key]);

                  return (
                    <div
                      key={key}
                      className={`rounded-3xl border p-5 sm:p-6 transition-all duration-300 ${
                        isDone
                          ? "border-emerald-200 bg-emerald-50/50"
                          : "border-slate-100 bg-white hover:-translate-y-0.5 hover:shadow-md"
                      }`}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                          <div className="flex items-start gap-3 min-w-0">
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                                isDone ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <div className="min-w-0 space-y-1">
                              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                                Step {idx + 1}
                              </div>
                              <h4
                                className={`text-lg font-semibold leading-snug ${
                                  isDone ? "text-emerald-700" : "text-slate-900"
                                }`}
                              >
                                {step.title}
                              </h4>
                            </div>
                          </div>

                          <button
                            onClick={() => onToggle(post.slug, idx)}
                            className={`self-start rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                              isDone
                                ? "bg-emerald-500/10 text-emerald-600"
                                : "bg-slate-100 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600"
                            }`}
                          >
                            {isDone ? "Marked done" : "Mark done"}
                          </button>
                        </div>

                        <p className={`text-sm sm:text-base text-slate-600 leading-relaxed ${isDone ? "opacity-60" : ""}`}>
                          {step.text}
                        </p>

                        {!isDone && (
                          <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                            <div className="flex items-start gap-2">
                              <span className="text-base">👉</span>
                              <p className="text-slate-800 text-sm sm:text-base font-semibold leading-snug">{step.action}</p>
                            </div>
                          </div>
                        )}

                        {!isDone && step.readMore && step.readMore.length > 0 && (
                          <div className="space-y-2 pt-1">
                            {step.readMore.map((l, j) => (
                              <a
                                key={`${l.url}-${j}`}
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-indigo-100 hover:bg-indigo-50/70"
                              >
                                <div className="min-w-0">
                                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    <SourcePill source={l.source} />
                                    <span className="hidden sm:inline">Read more</span>
                                  </div>
                                  <p className="truncate text-sm font-semibold text-slate-800">
                                    {l.title}
                                  </p>
                                </div>
                                <ExternalLink size={14} className="flex-shrink-0 text-slate-400" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            {/* Downloads + videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.downloads?.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center space-x-2 mb-4 text-indigo-600">
                    <FileText size={20} />
                    <h3 className="font-semibold uppercase tracking-wider text-xs">Downloads</h3>
                  </div>
                  <ul className="space-y-3">
                    {post.downloads.map((f, i) => (
                      <li
                        key={`${f.title}-${i}`}
                        onClick={() => safeOpen(f.url)}
                        className="flex items-center text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:text-indigo-600 hover:border-indigo-100 cursor-pointer transition-colors group"
                      >
                        <Download size={14} className="mr-2 opacity-60 group-hover:scale-110 transition-transform" />
                        <span className="truncate">{f.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {post.videos?.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center space-x-2 mb-4 text-red-600">
                    <Youtube size={20} />
                    <h3 className="font-semibold uppercase tracking-wider text-xs">Videos</h3>
                  </div>
                  <ul className="space-y-3">
                    {post.videos.map((v, i) => (
                      <li
                        key={`${v.title}-${i}`}
                        onClick={() => safeOpen(v.url)}
                        className="flex items-center text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:text-red-600 hover:border-red-100 cursor-pointer transition-colors group"
                      >
                        <PlayCircle size={14} className="mr-2 opacity-60 group-hover:scale-110 transition-transform" />
                        <span className="truncate">{v.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <ReadMoreList links={post.readMore} />

            {/* Navigation */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm">
              <PostNavigation currentPost={post} />
            </div>
          </div>
          </article>
        </div>
        </div>
      </main>
    </div>
  );
};
