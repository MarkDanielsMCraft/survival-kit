import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PostGrid } from './components/PostGrid';
import { PostDetail } from './components/PostDetail';
import { Library } from './components/Library';
import { Footer } from './components/Footer';
import { POSTS, ORDERED_POSTS } from './data/posts';
import { RESOURCES } from './data/resources';
import { STORAGE_KEY } from './constants/config';
import { pct } from './utils/helpers';
import { styles } from './styles/globalStyles';
import { downloadAllGuidesPdf } from './utils/pdfExporter';

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

  const handleDownloadGuides = useCallback(() => {
    downloadAllGuidesPdf(ORDERED_POSTS);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Deep linking support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/guide/')) {
        const slug = hash.replace('#/guide/', '');
        if (POSTS.some((p) => p.slug === slug)) {
          setActiveSlug(slug);
          setView("posts");
        }
        return;
      }

      if (hash === '#/library') {
        setActiveSlug(null);
        setView("library");
        return;
      }

      // Default to home/posts if no specific hash
      setActiveSlug(null);
      setView("posts");
    };

    // Check on initial load
    handleHashChange();

    // Listen for back/forward navigation
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync state changes to URL
  useEffect(() => {
    let targetHash = "";
    if (activeSlug) {
      targetHash = `#/guide/${activeSlug}`;
    } else if (view === "library") {
      targetHash = "#/library";
    }

    // Only push if different to avoid redundant history entries
    if (window.location.hash !== targetHash) {
       // using replaceState for initial sync or creating excessive history? 
       // For better UX, clicking a guide should push state.
       if(targetHash === "") {
          // Clean URL for home
          window.history.pushState(null, "", window.location.pathname);
       } else {
          window.history.pushState(null, "", targetHash);
       }
    }
  }, [activeSlug, view]);

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
    let posts = ORDERED_POSTS;
    
    // Filter by stage
    if (selectedStage) {
      posts = posts.filter((p) => p.stage === selectedStage);
    }
    
    // Filter by search term
    const q = searchTerm.trim().toLowerCase();
    if (!q) return posts;

    const filtered = posts.filter((p) => {
      const inTitle = (p.title || "").toLowerCase().includes(q);
      const inSubtitle = (p.subtitle || "").toLowerCase().includes(q);
      const inSummary = (p.summary || "").toLowerCase().includes(q);
      const inVibeCheck = (p.vibeCheck || "").toLowerCase().includes(q);
      const inGoldenRule = (p.goldenRule || "").toLowerCase().includes(q);
      const inSteps = (p.steps || []).some(
        (s) =>
          (s.title || "").toLowerCase().includes(q) ||
          (s.text || "").toLowerCase().includes(q)
      );
      const inContent = (p.content || []).some((block) => {
        if (block?.type === "ul") {
          return (block.items || []).some((item) => (item || "").toLowerCase().includes(q));
        }
        return (block?.text || "").toLowerCase().includes(q);
      });
      const inReadMore = (p.readMore || []).some((item) => (item.title || "").toLowerCase().includes(q));
      const inTags = (p.tags || []).some((t) => String(t).toLowerCase().includes(q));
      return (
        inTitle ||
        inSubtitle ||
        inSummary ||
        inVibeCheck ||
        inGoldenRule ||
        inSteps ||
        inContent ||
        inReadMore ||
        inTags
      );
    });

    // Preserve logical progression order after filtering
    return filtered;
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
      <div className="app-shell min-h-screen text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
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
              onDownloadGuides={handleDownloadGuides}
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
                  
                  <PostGrid 
                    posts={filteredPosts} 
                    searchTerm={searchTerm} 
                    onOpenPost={setActiveSlug}
                    getProgress={postProgress}
                  />
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
              onDownloadGuides={handleDownloadGuides}
            />
          </>
        )}
      </div>
    </>
  );
}
