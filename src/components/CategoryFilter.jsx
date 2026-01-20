import { POSTS } from '../data/posts';

export const CategoryFilter = ({ selectedStage, setSelectedStage }) => {
  const stages = ['All', ...new Set(POSTS.map(p => p.stage))];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {stages.map(stage => (
        <button
          key={stage}
          onClick={() => setSelectedStage(stage === 'All' ? null : stage)}
          className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
            (stage === 'All' && !selectedStage) || (stage === selectedStage)
              ? "bg-indigo-700 text-white border border-indigo-700"
              : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
          }`}
        >
          {stage}
        </button>
      ))}
    </div>
  );
};
