import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PostCard } from './components/PostCard';
import { PostDetail } from './components/PostDetail';
import { Library } from './components/Library';
import { Footer } from './components/Footer';
import { POSTS } from './data/posts';
import { RESOURCES } from './data/resources';
import { STORAGE_KEY } from './constants/config';
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
  const postsSectionRef = useRef(null);

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

  const handleShowPosts = () => {
    setActiveSlug(null);
    setView("posts");
    setEmergencyMode(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowLibrary = () => {
    setActiveSlug(null);
    setView("library");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenEmergency = () => {
    setEmergencyMode(true);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        {activePost ? (
          <>
            <PostDetail
              post={activePost}
              onBack={() => setActiveSlug(null)}
              progress={progress}
              onToggle={toggleStep}
              onReset={() => resetPost(activePost.slug)}
              emergencyMode={emergencyMode}
              setEmergencyMode={setEmergencyMode}
              onNavigateHome={handleShowPosts}
              onOpenPost={setActiveSlug}
            />
            <Footer
              variant="detail"
              onBackToGuideList={handleShowPosts}
              onShowPosts={handleShowPosts}
              onShowLibrary={handleShowLibrary}
              onOpenEmergency={handleOpenEmergency}
            />
          </>
        ) : (
          <>
            <Header
              emergencyMode={emergencyMode}
              setEmergencyMode={setEmergencyMode}
              onNavigateHome={handleShowPosts}
              showBack={view === "library"}
              onBack={view === "library" ? handleShowPosts : undefined}
              backLabel="Back to guides"
            />
            <Hero
              view={view}
              setView={setView}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedStage={selectedStage}
              setSelectedStage={setSelectedStage}
              postsSectionRef={postsSectionRef}
            />

            <main ref={postsSectionRef} className="max-w-6xl mx-auto px-6 py-8 pb-32">
              {view === "posts" ? (
                <>
                  <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Guides that keep you moving</h2>
                      <p className="text-sm text-slate-500 font-medium">Hand verified walkthroughs for every milestone in your first year.</p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-indigo-500" />
                      {filteredPosts.length} guides available
                    </span>
                  </div>
                  {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 auto-rows-fr">
                      {filteredPosts.map((post) => (
                        <PostCard
                          key={post.slug}
                          post={post}
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
                <Library
                  resources={RESOURCES}
                  searchTerm={searchTerm}
                  onBack={handleShowPosts}
                />
              )}
            </main>
            <Footer
              onShowPosts={handleShowPosts}
              onShowLibrary={handleShowLibrary}
              onOpenEmergency={handleOpenEmergency}
            />
          </>
        )}
      </div>
    </>
  );
}
