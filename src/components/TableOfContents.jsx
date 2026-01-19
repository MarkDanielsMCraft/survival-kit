import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const TableOfContents = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Extract headings from content
  const headings = post.content
    ?.filter((block) => block.type === "h2")
    .map((block, i) => ({
      id: `h-${i}`,
      text: block.text,
      level: 2,
    })) || [];

  if (headings.length === 0) return null;

  const scrollToHeading = (text) => {
    const element = Array.from(document.querySelectorAll("h2")).find(
      (h) => h.textContent === text
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <div className="glass-card sticky top-[140px] z-40 rounded-2xl sm:rounded-3xl border border-white/20 backdrop-blur-xl mb-6 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-white/50 transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <div className="text-xs uppercase font-black text-slate-500 tracking-wider">
            📑 In this post
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-white/10 px-4 sm:px-6 py-3 sm:py-4 space-y-2 bg-white/30 max-h-96 overflow-y-auto">
          {headings.map((heading, i) => (
            <button
              key={i}
              onClick={() => scrollToHeading(heading.text)}
              className="block w-full text-left text-xs sm:text-sm text-slate-600 hover:text-slate-900 hover:bg-white/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded transition-colors"
            >
              {heading.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
