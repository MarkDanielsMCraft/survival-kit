import { POSTS } from '../data/posts';

export const CategoryFilter = ({ selectedStage, setSelectedStage }) => {
  const stages = ['All', ...new Set(POSTS.map(p => p.stage))];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {stages.map(stage => (
        <button
          key={stage}
          onClick={() => setSelectedStage(stage === 'All' ? null : stage)}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
            (stage === 'All' && !selectedStage) || (stage === selectedStage)
              ? "bg-slate-900 text-white shadow-lg"
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          {stage}
        </button>
      ))}
    </div>
  );
};
