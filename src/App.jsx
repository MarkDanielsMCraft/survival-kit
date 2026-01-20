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
      <div className="min-h-screen text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 mesh-bg hero-photo">
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

            <footer className="relative mt-20 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900" />
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
              
              {/* Content */}
              <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                  {/* About Section */}
                  <div className="text-left">
                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="text-2xl">🇩🇪</span>
                      Survival Kit
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      Your honest guide to starting life in Germany. Real talk for international students and scholars.
                    </p>
                    <p className="text-slate-400 text-xs">
                      Verified {META.lastUpdatedDate}
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div className="text-left">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <button onClick={() => setView("posts")} className="text-slate-300 hover:text-white transition-colors">
                          Blog Guides
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setView("library")} className="text-slate-300 hover:text-white transition-colors">
                          Resource Library
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setEmergencyMode(true)} className="text-slate-300 hover:text-white transition-colors">
                          Emergency Numbers
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Support */}
                  <div className="text-left">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Support This Guide</h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Help keep this resource free and up-to-date
                    </p>
                    <a
                      href={LINKS.buyMeACoffee}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-white font-bold text-sm hover:from-amber-300 hover:via-orange-300 hover:to-rose-300 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                      ☕ Buy Me A Coffee
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                      Made with ❤️ for future colleagues in Germany
                    </p>
                    <div className="flex gap-6 text-sm">
                      <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        Impressum
                      </a>
                      <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        Datenschutz
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs text-center md:text-left mt-4">
                    © {new Date().getFullYear()} Survival Kit. Unofficial guide • All information verified as of January 2026.
                  </p>
                </div>
              </div>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
