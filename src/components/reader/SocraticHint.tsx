import React from "react";
import { Lightbulb, Compass } from "lucide-react";

interface SocraticHintProps {
  revealedHint: string | null;
  isLoadingHint: boolean;
  onFetchHint: () => void;
}

export const SocraticHint: React.FC<SocraticHintProps> = ({
  revealedHint,
  isLoadingHint,
  onFetchHint,
}) => {
  return (
    <div className="space-y-3">
      <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 card-bezel">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-slate-100">
              تحتاج توجيهاً ذهنياً دون حرق الإجابة؟
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              تلميح سقراطي يرشد تفكيرك لاكتشاف التناقض بنفسك
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onFetchHint}
          disabled={isLoadingHint || Boolean(revealedHint)}
          aria-label={
            isLoadingHint
              ? "جاري إعداد التلميح الاستنباطي"
              : revealedHint
                ? "تم عرض التلميح الاستنباطي"
                : "عرض تلميح استنباطي"
          }
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 ${
            revealedHint
              ? "bg-slate-800/60 text-slate-500 border border-slate-800 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold active:scale-95 shadow-sm"
          }`}
        >
          {isLoadingHint
            ? "جاري التفكير..."
            : revealedHint
            ? "تم الكشف"
            : "تلميح استنباطي"}
        </button>
      </div>

      {revealedHint && (
        <div className="bg-[#141d2f] border border-amber-500/30 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-200 flex items-start gap-3 card-bezel">
          <Compass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed font-novel text-slate-200">
            <span className="text-amber-300 font-semibold font-ui ml-1.5">همسة سقراطية:</span>
            {revealedHint}
          </div>
        </div>
      )}
    </div>
  );
};
