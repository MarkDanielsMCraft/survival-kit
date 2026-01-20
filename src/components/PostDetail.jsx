import React, { useMemo, useState, useEffect } from "react";
import {
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  FileText,
  Youtube,
  Download,
  PlayCircle,
  RotateCcw,
  Share2,
} from "lucide-react";
import { Header } from './Header';
import { SourcePill } from './SourcePill';
import { TableOfContents } from './TableOfContents';
import { PostNavigation } from './PostNavigation';
import { renderRichText } from '../utils/textRenderer';
import { safeOpen } from '../utils/security';
import { pct } from '../utils/helpers';
import { POSTS } from "../data/posts";

const stripText = (value) =>
  String(value || "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const RelatedThumbnail = ({ post }) => {
  const [failed, setFailed] = useState(false);
  if (!post.backgroundImage || failed) {
    return (
      <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
        {post.icon}
      </div>
    );
  }

  return (
    <div className="h-12 w-12 rounded-lg bg-slate-100 overflow-hidden">
      <img
        src={`${post.backgroundImage}${post.backgroundImage.includes('?') ? '' : '?'}&auto=format&fit=crop&w=160&q=70`}
        alt={`${post.title} thumbnail`}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  );
};

const HeroImage = ({ post }) => {
  const imageUrl = post.cardImage || post.backgroundImage || "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2000&auto=format&fit=crop";
  const [failed, setFailed] = useState(false);

  if (!imageUrl || failed) {
    return (
      <div className="h-48 sm:h-56 w-full bg-slate-100 flex items-center justify-center text-slate-400">
        {post.icon}
      </div>
    );
  }

  return (
    <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
      <img
        src={`${imageUrl}${imageUrl.includes('?') ? '' : '?'}&auto=format&fit=crop&w=2000&q=80`}
        alt={`${post.title} header`}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-white/70" />
    </div>
  );
};

export const PostDetail = ({
  post,
  onBack,
  progress,
  onToggle,
  onReset,
  emergencyMode,
  setEmergencyMode,
  onNavigateHome,
  onOpenPost,
}) => {
  const total = post.steps.length;
  const done = post.steps.reduce((acc, _, i) => acc + (progress[`${post.slug}-${i}`] ? 1 : 0), 0);
  const progressPercent = pct(done, total);
  const [copied, setCopied] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [pageSearch, setPageSearch] = useState("");
  const stageStyles = {
    Arrival: {
      pill: "bg-blue-50 text-blue-700 border-blue-200",
      accent: "text-blue-700",
      doneBg: "bg-blue-50/60",
      doneBorder: "border-blue-200",
      doneText: "text-blue-700",
      doneChip: "bg-blue-100 text-blue-700",
      doneButton: "bg-blue-100 text-blue-700",
    },
    "Settling In": {
      pill: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accent: "text-emerald-700",
      doneBg: "bg-emerald-50/60",
      doneBorder: "border-emerald-200",
      doneText: "text-emerald-700",
      doneChip: "bg-emerald-100 text-emerald-700",
      doneButton: "bg-emerald-100 text-emerald-700",
    },
    "Work & Study": {
      pill: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "text-amber-700",
      doneBg: "bg-amber-50/60",
      doneBorder: "border-amber-200",
      doneText: "text-amber-700",
      doneChip: "bg-amber-100 text-amber-700",
      doneButton: "bg-amber-100 text-amber-700",
    },
    "Health & Social": {
      pill: "bg-rose-50 text-rose-700 border-rose-200",
      accent: "text-rose-700",
      doneBg: "bg-rose-50/60",
      doneBorder: "border-rose-200",
      doneText: "text-rose-700",
      doneChip: "bg-rose-100 text-rose-700",
      doneButton: "bg-rose-100 text-rose-700",
    },
  };
  const stageStyle = stageStyles[post.stage] || {
    pill: "bg-slate-50 text-slate-700 border-slate-200",
    accent: "text-slate-700",
    doneBg: "bg-slate-50",
    doneBorder: "border-slate-200",
    doneText: "text-slate-700",
    doneChip: "bg-slate-100 text-slate-700",
    doneButton: "bg-slate-100 text-slate-700",
  };

  const sections = useMemo(() => {
    const result = [];
    const slugify = (text) =>
      String(text)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    let current = null;
    (post.content || []).forEach((block, index) => {
      if (block.type === "h2") {
        if (current) result.push(current);
        current = {
          id: `section-${index}-${slugify(block.text)}`,
          title: block.text,
          intro: null,
          blocks: [],
        };
        return;
      }

      if (!current) {
        current = {
          id: "section-overview",
          title: "Overview",
          intro: null,
          blocks: [],
        };
      }

      if (block.type === "p" && !current.intro) {
        current.intro = block.text;
        return;
      }

      current.blocks.push(block);
    });

    if (current) result.push(current);

    return result.map((section) => {
      if (section.intro || section.blocks.length === 0) return section;
      const firstParagraphIndex = section.blocks.findIndex((b) => b.type === "p");
      if (firstParagraphIndex === -1) return section;
      const [introBlock] = section.blocks.splice(firstParagraphIndex, 1);
      return { ...section, intro: introBlock.text };
    });
  }, [post.content]);

  const relatedPosts = useMemo(() => {
    const sameStage = POSTS.filter((p) => p.slug !== post.slug && p.stage === post.stage);
    const filler = POSTS.filter((p) => p.slug !== post.slug && p.stage !== post.stage);
    return [...sameStage, ...filler].slice(0, 3);
  }, [post]);

  useEffect(() => {
    if (!sections.length || typeof window === "undefined") return undefined;

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const targetId = visible[0].target.getAttribute("data-section-id");
          if (targetId) setActiveSectionId(targetId);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: reducedMotion ? 0.1 : [0.1, 0.25, 0.5, 0.75],
      }
    );

    const sectionElements = document.querySelectorAll("[data-section-id]");
    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;
    const element = document.getElementById(sectionId);
    if (!element) return;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  const handlePageSearch = () => {
    const query = pageSearch.trim().toLowerCase();
    if (!query) return;
    const match = sections.find((section) => {
      const text = [
        section.title,
        section.intro,
        ...(section.blocks || []).flatMap((block) => {
          if (block.type === "p") return [block.text];
          if (block.type === "ul") return block.items || [];
          return [];
        }),
      ]
        .map(stripText)
        .join(" ")
        .toLowerCase();
      return text.includes(query);
    });
    if (!match) {
      const stepMatch = post.steps.find((step) =>
        [step.title, step.text, step.action].map(stripText).join(" ").toLowerCase().includes(query)
      );
      if (stepMatch && sections.length > 0) {
        scrollToSection(sections[0].id);
      }
      return;
    }
    if (match) scrollToSection(match.id);
  };

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
    <div className="min-h-screen bg-transparent" id={`post-${post.slug}`}>
      <Header
        emergencyMode={emergencyMode}
        setEmergencyMode={setEmergencyMode}
        onNavigateHome={onNavigateHome}
        showBack
        onBack={onBack}
        sections={sections}
        activeSectionId={activeSectionId}
        onSelectSection={scrollToSection}
        showSearch
        searchValue={pageSearch}
        onSearchChange={setPageSearch}
        onSearchSubmit={handlePageSearch}
      />

      {/* Floating controls */}
      <div className="sticky top-[72px] z-40 px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between border-b border-slate-200 bg-white gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex items-center text-slate-700 hover:text-slate-900 bg-white px-3 sm:px-4 py-2 rounded-full border border-slate-200 transition-colors text-xs sm:text-sm font-semibold"
          >
            <ArrowLeft className="mr-1 sm:mr-2" size={16} />
            <span className="hidden sm:inline">Back</span>
          </button>
          <button
            onClick={onReset}
            className="inline-flex items-center text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 sm:px-3 py-2 rounded-full hover:bg-slate-50 transition"
            title="Reset checklist for this post"
          >
            <RotateCcw size={12} className="mr-1" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 px-3 sm:px-4 py-2 rounded-full hover:bg-slate-50 transition"
        >
          <Share2 size={14} />
          {copied ? "Link copied" : "Share"}
        </button>
      </div>

      {/* Page introduction block */}
      <section className="bg-white border-b border-slate-200">
        <HeroImage post={post} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-5">
          <h1 className="text-[34px] sm:text-[40px] md:text-[44px] font-semibold text-slate-900 leading-tight">
            {post.title}
          </h1>
          <p className="text-[18px] text-slate-700 font-medium leading-relaxed">
            {post.subtitle || post.summary}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 ${stageStyle.pill}`}>{post.stage}</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">{post.readTime} read</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
              <CheckCircle size={12} className={stageStyle.accent} /> Verified {post.verified}
            </span>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <main className="w-full min-h-screen pb-20 relative z-20 bg-transparent">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 pt-8">
          <article className="space-y-6 sm:space-y-8">
            {post.vibeCheck && (
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 sm:p-6">
                <p className="text-slate-800 font-semibold text-base sm:text-lg leading-relaxed">{post.vibeCheck}</p>
              </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 sm:p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 mb-4">On this page</h3>
                <TableOfContents sections={sections} activeSectionId={activeSectionId} onSelect={scrollToSection} />
              </div>
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 sm:p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 mb-4">Related reads</h3>
                <div className="space-y-3">
                  {relatedPosts.map((rp) => (
                    <button
                      key={rp.slug}
                      onClick={() => {
                        if (typeof onOpenPost === "function") {
                          onOpenPost(rp.slug);
                        }
                      }}
                      className="w-full text-left p-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <RelatedThumbnail post={rp} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-1">{rp.stage}</p>
                          <p className="text-sm font-semibold text-slate-800 line-clamp-2">{rp.title}</p>
                          <p className="text-xs text-slate-500 mt-1">{rp.readTime}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {sections.length > 0 && (
              <div className="space-y-6">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    data-section-id={section.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 scroll-mt-28"
                  >
                    <div className="space-y-2">
                      <h2 className="text-[28px] sm:text-[30px] font-semibold text-slate-900 tracking-tight">
                        {section.title}
                      </h2>
                      {section.intro && (
                        <p className="text-[17px] text-slate-700 font-medium leading-relaxed">
                          {renderRichText(section.intro, `intro-${section.id}`)}
                        </p>
                      )}
                    </div>
                    <div className="space-y-4">
                      {section.blocks.map((block, i) => {
                        if (block.type === "p") {
                          return (
                            <p key={i} className="text-[17px] text-slate-700 font-medium leading-relaxed">
                              {renderRichText(block.text, `p-${section.id}-${i}`)}
                            </p>
                          );
                        }
                        if (block.type === "ul") {
                          return (
                            <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                              <ul className="list-disc list-outside pl-6 space-y-2">
                                {block.items.map((item, j) => (
                                  <li key={j} className="text-[16px] text-slate-700 font-medium leading-relaxed">
                                    {renderRichText(item, `li-${section.id}-${i}-${j}`)}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </section>
                ))}
              </div>
            )}

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <AlertTriangle size={16} />
                Golden rule
              </div>
              <p className="text-slate-800 text-base sm:text-lg font-semibold leading-relaxed">{post.goldenRule}</p>
            </div>

            {/* Checklist */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-slate-900">Key steps checklist</h3>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Click to mark done</div>
              </div>

              <div className="space-y-4">
                {post.steps.map((step, idx) => {
                  const key = `${post.slug}-${idx}`;
                  const isDone = Boolean(progress[key]);

                  return (
                    <div
                      key={key}
                      className={`rounded-2xl border p-5 sm:p-6 transition-colors ${
                        isDone
                          ? `${stageStyle.doneBorder} ${stageStyle.doneBg}`
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                          <div className="flex items-start gap-3 min-w-0">
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                                isDone ? stageStyle.doneChip : "bg-slate-100 text-slate-500"
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
                                  isDone ? stageStyle.doneText : "text-slate-900"
                                }`}
                              >
                                {step.title}
                              </h4>
                            </div>
                          </div>

                          <button
                            onClick={() => onToggle(post.slug, idx)}
                            className={`self-start rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                              isDone
                                ? stageStyle.doneButton
                                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                            }`}
                          >
                            {isDone ? "Marked done" : "Mark done"}
                          </button>
                        </div>

                        <p className={`text-sm sm:text-base text-slate-600 leading-relaxed ${isDone ? "opacity-60" : ""}`}>
                          {step.text}
                        </p>

                        {!isDone && (
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <div className="flex items-start gap-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Action</span>
                              <p className="text-slate-800 text-sm sm:text-base font-semibold leading-snug">{step.action}</p>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Downloads + videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.downloads?.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center space-x-2 mb-4 text-indigo-700">
                    <FileText size={20} />
                    <h3 className="font-semibold uppercase tracking-wider text-xs">Downloads</h3>
                  </div>
                  <ul className="space-y-3">
                    {post.downloads.map((f, i) => (
                      <li
                        key={`${f.title}-${i}`}
                        onClick={() => safeOpen(f.url)}
                        className="flex items-center text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer transition-colors group"
                      >
                        <Download size={14} className="mr-2 opacity-60" />
                        <span className="truncate">{f.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {post.videos?.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center space-x-2 mb-4 text-indigo-700">
                    <Youtube size={20} />
                    <h3 className="font-semibold uppercase tracking-wider text-xs">Videos</h3>
                  </div>
                  <ul className="space-y-3">
                    {post.videos.map((v, i) => (
                      <li
                        key={`${v.title}-${i}`}
                        onClick={() => safeOpen(v.url)}
                        className="flex items-center text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer transition-colors group"
                      >
                        <PlayCircle size={14} className="mr-2 opacity-60" />
                        <span className="truncate">{v.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>


            {/* Navigation */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <PostNavigation currentPost={post} onOpenPost={onOpenPost} />
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};
