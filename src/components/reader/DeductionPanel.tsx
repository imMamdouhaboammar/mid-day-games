import React from "react";
import { Hypothesis } from "../../types";
import {
  Compass,
  CheckCircle2,
  XCircle,
  Circle,
  Send,
  Target,
  Zap,
  Lightbulb
} from "lucide-react";

interface DeductionPanelProps {
  puzzleQuestion: string;
  hypotheses: Hypothesis[];
  selectedHypothesis: Hypothesis | null;
  onSelectHypothesis: (hyp: Hypothesis) => void;
  customTheory: string;
  onCustomTheoryChange: (val: string) => void;
  onSubmitCustomTheory: (e: React.FormEvent) => void;
  isEvaluatingAi: boolean;
  aiEvaluation: {
    isCorrect: boolean;
    score: number;
    verdict: string;
    feedback: string;
    cognitivePointsEarned: number;
    brainAlertnessBoost: string;
  } | null;
}

export const DeductionPanel: React.FC<DeductionPanelProps> = ({
  puzzleQuestion,
  hypotheses,
  selectedHypothesis,
  onSelectHypothesis,
  customTheory,
  onCustomTheoryChange,
  onSubmitCustomTheory,
  isEvaluatingAi,
  aiEvaluation,
}) => {
  return (
    <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 sm:p-7 space-y-6 card-bezel">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs text-amber-400/90 font-medium">
            تحدي الاستنتاج واليقظة الذهنية
          </span>
          <h3 className="text-lg sm:text-xl font-bold font-novel text-slate-100 mt-1 leading-snug">
            {puzzleQuestion}
          </h3>
        </div>
      </div>

      {/* Hypotheses Options */}
      <div className="space-y-2.5">
        <p className="text-xs text-slate-400">
          اختر الفرضية الأكثر تماسكاً منطقياً مع الأدلة وتناقضات الأقوال:
        </p>

        <div className="space-y-2.5">
          {hypotheses.map((hyp) => {
            const isSelected = selectedHypothesis?.id === hyp.id;
            return (
              <button
                type="button"
                key={hyp.id}
                onClick={() => onSelectHypothesis(hyp)}
                className={`w-full text-right p-4 sm:p-5 rounded-xl border transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 card-bezel ${
                  isSelected
                    ? hyp.isCorrect
                      ? "bg-emerald-950/40 border-emerald-500/80 text-emerald-100 shadow-sm"
                      : "bg-rose-950/40 border-rose-500/80 text-rose-100 shadow-sm"
                    : "bg-[#131b2d] border-slate-800/80 hover:border-slate-700 text-slate-200 hover:bg-[#162035]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                      isSelected
                        ? hyp.isCorrect
                          ? "bg-emerald-500 text-slate-950 font-bold"
                          : "bg-rose-500 text-white font-bold"
                        : "border border-slate-600 text-slate-500"
                    }`}
                  >
                    {isSelected ? (
                      hyp.isCorrect ? (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      ) : (
                        <XCircle className="w-3.5 h-3.5" />
                      )
                    ) : (
                      <Circle className="w-2.5 h-2.5" />
                    )}
                  </span>
                  <div className="space-y-1.5 w-full">
                    <p className="text-sm font-medium leading-relaxed font-novel">{hyp.text}</p>
                    {isSelected && (
                      <div
                        className={`mt-2.5 pt-2.5 border-t text-xs sm:text-sm leading-relaxed ${
                          hyp.isCorrect
                            ? "border-emerald-800/60 text-emerald-300"
                            : "border-rose-800/60 text-rose-300"
                        }`}
                      >
                        <span className="font-semibold block mb-1 text-xs">
                          {hyp.isCorrect ? "تحليل الاستنتاج الدقيق:" : "مغالطة منطقية خفية:"}
                        </span>
                        <span className="font-novel leading-relaxed">{hyp.shortExplanation}</span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Deductive Theory Input (AI Evaluated) */}
      <div className="pt-5 border-t border-slate-800/80 space-y-3">
        <div className="flex items-center justify-between">
          <label
            htmlFor="user-deduction-theory"
            className="text-xs font-semibold text-slate-200 flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>أو اكتب استنتاجك الحر ليحلله نموذج الذكاء الاصطناعي:</span>
          </label>
        </div>

        <form onSubmit={onSubmitCustomTheory} className="space-y-2.5">
          <textarea
            id="user-deduction-theory"
            rows={2}
            value={customTheory}
            onChange={(e) => onCustomTheoryChange(e.target.value)}
            aria-label="نظريتك الاستنتاجية المستندة للأدلة"
            placeholder="اكتب نظريتك بناءً على تفاصيل القضية وتناقضات الشهود والأدلة المادية..."
            className="w-full bg-[#0a0e17] border border-slate-700/80 rounded-xl p-3.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500 resize-none font-novel leading-relaxed"
          />
          <button
            type="submit"
            disabled={isEvaluatingAi || !customTheory.trim()}
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {isEvaluatingAi ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                <span>جاري تحليل استنتاجك بدقة...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>تحليل استنتاجي</span>
              </>
            )}
          </button>
        </form>

        {aiEvaluation && (
          <div
            className={`p-4 sm:p-5 rounded-2xl border mt-3 text-xs sm:text-sm card-bezel ${
              aiEvaluation.isCorrect || aiEvaluation.score >= 70
                ? "bg-emerald-950/30 border-emerald-600/60 text-emerald-100"
                : "bg-amber-950/30 border-amber-600/60 text-amber-100"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold flex items-center gap-2 text-slate-100">
                <Compass className="w-4 h-4 text-amber-400" />
                النتيجة: {aiEvaluation.verdict} ({aiEvaluation.score}/100)
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                +{aiEvaluation.cognitivePointsEarned} نقطة
              </span>
            </div>
            <p className="leading-relaxed mb-2 font-novel text-slate-200">
              {aiEvaluation.feedback}
            </p>
            <div className="text-xs text-slate-300 border-t border-slate-800/80 pt-2 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>{aiEvaluation.brainAlertnessBoost}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
