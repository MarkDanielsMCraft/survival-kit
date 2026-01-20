import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const TableOfContents = ({ post }) => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth >= 1024;
  });

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
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
      >
        <div className="flex items-center gap-2">
          <div className="text-[11px] uppercase font-semibold text-slate-500 tracking-[0.25em]">
            In this guide
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 sm:px-5 py-3 sm:py-4 space-y-1.5 max-h-96 overflow-y-auto">
          {headings.map((heading, i) => (
            <button
              key={i}
              onClick={() => scrollToHeading(heading.text)}
              className="block w-full rounded-xl px-2 py-2 text-left text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              {heading.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
