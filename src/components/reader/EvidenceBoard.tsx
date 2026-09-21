import React from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Clue } from "../../types";

interface EvidenceBoardProps {
  clues: Clue[];
  revealedClues: Record<string, boolean>;
  onToggleClue: (id: string) => void;
}

export const EvidenceBoard: React.FC<EvidenceBoardProps> = ({
  clues,
  revealedClues,
  onToggleClue,
}) => {
  const examinedCount = Object.values(revealedClues).filter(Boolean).length;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-medium">
          <Search className="w-4 h-4 text-amber-400" />
          <span>الأدلة المادية المتاحة للفحص</span>
        </div>
        <span className="text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60 font-mono text-[11px]">
          فُحص {examinedCount} من {clues.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {clues.map((clue) => {
          const isRevealed = Boolean(revealedClues[clue.id]);
          return (
            <button
              type="button"
              key={clue.id}
              onClick={() => onToggleClue(clue.id)}
              className={`w-full text-right border rounded-2xl p-4 sm:p-5 transition-all duration-200 select-none focus-visible:ring-2 focus-visible:ring-amber-500 card-bezel ${
                isRevealed
                  ? "bg-[#141d2f] border-amber-500/40 text-slate-100"
                  : "bg-[#0f1523] border-slate-800/90 hover:border-slate-700 text-slate-300 hover:bg-[#121929]"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-semibold text-xs sm:text-sm text-slate-100">{clue.title}</h3>
                {isRevealed ? (
                  <ChevronUp className="w-4 h-4 text-amber-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                )}
              </div>

              <p className="text-xs text-slate-300/90 leading-relaxed font-novel">
                {clue.detail}
              </p>

              {isRevealed && (
                <div className="mt-3 pt-2.5 border-t border-slate-800 text-xs text-amber-300 font-medium">
                  <span className="text-amber-400/80 block mb-1 text-[11px] font-semibold">المغزى الاستنتاجي:</span>
                  <span className="leading-relaxed">{clue.significance}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
