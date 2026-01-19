import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PostCard } from './components/PostCard';
import { PostDetail } from './components/PostDetail';
import { Library } from './components/Library';
import { POSTS } from './data/posts';
import { RESOURCES } from './data/resources';
import { META, LINKS, STORAGE_KEY } from './constants/config';
import { pct } from './utils/helpers';
import { styles } from './styles/globalStyles';

export default function App() {
  const [view, setView] = useState("posts"); // "posts" | "library"
  const [activeSlug, setActiveSlug] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState(null);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSlug, view]);

  const toggleStep = useCallback((slug, idx) => {
    const key = `${slug}-${idx}`;
    setProgress((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const resetPost = (slug) => {
    if (!window.confirm("Reset checklist for this post?")) return;
    setProgress((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        if (k.startsWith(`${slug}-`)) delete next[k];
      });
      return next;
    });
  };

  const activePost = POSTS.find((p) => p.slug === activeSlug);

  const filteredPosts = useMemo(() => {
    let posts = POSTS;
    
    // Filter by stage
    if (selectedStage) {
      posts = posts.filter((p) => p.stage === selectedStage);
    }
    
    // Filter by search term
    const q = searchTerm.trim().toLowerCase();
    if (!q) return posts;
    
    return posts.filter((p) => {
      const inTitle = (p.title || "").toLowerCase().includes(q);
      const inSummary = (p.summary || "").toLowerCase().includes(q);
      const inSteps = (p.steps || []).some(
        (s) =>
          (s.title || "").toLowerCase().includes(q) ||
          (s.text || "").toLowerCase().includes(q)
      );
      const inTags = (p.tags || []).some((t) => String(t).toLowerCase().includes(q));
      return inTitle || inSummary || inSteps || inTags;
    });
  }, [searchTerm, selectedStage]);

  const postProgress = (post) => {
    const total = post.steps.length;
    const done = post.steps.reduce(
      (acc, _, i) => acc + (progress[`${post.slug}-${i}`] ? 1 : 0),
      0
    );
    return pct(done, total);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 mesh-bg">
        {activePost ? (
          <PostDetail
            post={activePost}
            onBack={() => setActiveSlug(null)}
            progress={progress}
            onToggle={toggleStep}
            onReset={() => resetPost(activePost.slug)}
            emergencyMode={emergencyMode}
            setEmergencyMode={setEmergencyMode}
          />
        ) : (
          <>
            <Header emergencyMode={emergencyMode} setEmergencyMode={setEmergencyMode} />
            <Hero
              view={view}
              setView={setView}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedStage={selectedStage}
              setSelectedStage={setSelectedStage}
            />

            <main className="max-w-6xl mx-auto px-6 py-8 pb-32">
              {view === "posts" ? (
                <>
                  {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredPosts.map((post, index) => (
                        <PostCard
                          key={post.slug}
                          post={post}
                          index={index}
                          onOpen={setActiveSlug}
                          progressPercent={postProgress(post)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 opacity-60">
                      <p className="text-xl font-extrabold text-slate-400">
                        No posts found for "{searchTerm}"
                      </p>
                      <p className="text-sm text-slate-400">
                        Try "Anmeldung", "Trash", "Tax ID", "Dosage"
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <Library resources={RESOURCES} searchTerm={searchTerm} />
              )}
            </main>

            <footer className="text-center py-12 text-slate-400 text-sm font-medium border-t border-slate-200/50 glass-card">
              <p>Made with ❤️ for future colleagues.</p>
              
              {/* Buy Me A Coffee Button - Prominent */}
              <div className="my-6 py-6 border-y border-slate-200/50">
                <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Like this guide? Support the author</p>
                <a
                  href={LINKS.buyMeACoffee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-white font-black uppercase tracking-wide text-sm hover:from-amber-300 hover:via-orange-300 hover:to-rose-300 transition-all shadow-lg shadow-orange-400/40 hover:shadow-xl hover:shadow-orange-400/60 hover:scale-105 active:scale-95"
                >
                  ☕ Buy Me A Coffee
                </a>
              </div>
              
              <p className="mt-2 text-xs opacity-70">
                Unofficial Guide • Verified {META.lastUpdatedDate}
              </p>
              <div className="mt-4 flex justify-center gap-4 text-xs opacity-60">
                <a href="#" className="hover:underline">
                  Impressum
                </a>
                <a href="#" className="hover:underline">
                  Datenschutz
                </a>
              </div>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
