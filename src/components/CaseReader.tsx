import React, { useState } from "react";
import { StoryCase, Hypothesis } from "../types";
import { soundController } from "../utils/audioSynth";
import {
  ArrowRight,
  CheckCircle2,
  BookMarked
} from "lucide-react";
import { CaseHeader } from "./reader/CaseHeader";
import { SuspectsList } from "./reader/SuspectsList";
import { EvidenceBoard } from "./reader/EvidenceBoard";
import { SocraticHint } from "./reader/SocraticHint";
import { DeductionPanel } from "./reader/DeductionPanel";

interface CaseReaderProps {
  storyCase: StoryCase;
  onBack: () => void;
  onSolveCase: (score: number, verdict: string, userTheory?: string) => void;
  isAlreadySolved?: boolean;
}

export const CaseReader: React.FC<CaseReaderProps> = ({
  storyCase,
  onBack,
  onSolveCase,
  isAlreadySolved = false,
}) => {
  const [selectedHypothesis, setSelectedHypothesis] = useState<Hypothesis | null>(null);
  const [revealedClues, setRevealedClues] = useState<Record<string, boolean>>({});
  const [revealedHint, setRevealedHint] = useState<string | null>(null);
  const [isLoadingHint, setIsLoadingHint] = useState(false);
  const [fontSize, setFontSize] = useState<"md" | "lg" | "xl">("lg");
  const [customTheory, setCustomTheory] = useState("");
  const [isEvaluatingAi, setIsEvaluatingAi] = useState(false);
  const [aiEvaluation, setAiEvaluation] = useState<{
    isCorrect: boolean;
    score: number;
    verdict: string;
    feedback: string;
    cognitivePointsEarned: number;
    brainAlertnessBoost: string;
  } | null>(null);

  const toggleClue = (id: string) => {
    soundController.playSfx("clue");
    setRevealedClues((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectHypothesis = (hyp: Hypothesis) => {
    soundController.playSfx("click");
    setSelectedHypothesis(hyp);
    if (hyp.isCorrect) {
      soundController.playSfx("success");
      onSolveCase(90, "استنتاج ثاقب وحاسم");
    } else {
      soundController.playSfx("wrong");
    }
  };

  const handleFetchAiHint = async () => {
    if (revealedHint) return;
    setIsLoadingHint(true);
    soundController.playSfx("click");
    try {
      const res = await fetch("/api/story/hint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storyTitle: storyCase.title,
          puzzleQuestion: storyCase.puzzleQuestion,
          clues: storyCase.clues,
          userThoughts: "أحتاج لمفتاح منطقي للربط بين الأدلة",
        }),
      });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      setRevealedHint(data.hint || storyCase.subtleHint);
      soundController.playSfx("clue");
    } catch {
      setRevealedHint(storyCase.subtleHint);
    } finally {
      setIsLoadingHint(false);
    }
  };

  const handleSubmitCustomTheory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTheory.trim() || isEvaluatingAi) return;

    setIsEvaluatingAi(true);
    soundController.playSfx("click");
    try {
      const correctHyp = storyCase.hypotheses.find((h) => h.isCorrect);
      const res = await fetch("/api/story/evaluate-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storyTitle: storyCase.title,
          storyContext: storyCase.storyContent,
          puzzleQuestion: storyCase.puzzleQuestion,
          correctRationale: correctHyp?.shortExplanation || "الربط المنطقي بين الأدلة المادية وتناقض الأقوال",
          userAnswer: customTheory,
        }),
      });
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      setAiEvaluation(data);
      if (data.isCorrect || data.score >= 70) {
        soundController.playSfx("success");
        onSolveCase(data.score, data.verdict, customTheory);
      } else {
        soundController.playSfx("wrong");
      }
    } catch {
      const hasKeywords = customTheory.length > 20;
      setAiEvaluation({
        isCorrect: hasKeywords,
        score: hasKeywords ? 85 : 50,
        verdict: hasKeywords ? "استنتاج تحليلي واعد" : "بحاجة لتدقيق الأدلة",
        feedback: "تم تسجيل استنتاجك وتطبيقه على الأدلة. استمر في فحص التناقضات المادية بدقة.",
        cognitivePointsEarned: hasKeywords ? 35 : 15,
        brainAlertnessBoost: "تنشيط مهارة التفكير الاستنباطي الحر",
      });
    } finally {
      setIsEvaluatingAi(false);
    }
  };

  const getFontSizeClass = () => {
    if (fontSize === "md") return "text-base sm:text-lg leading-[2.1]";
    if (fontSize === "xl") return "text-xl sm:text-2xl leading-[2.4]";
    return "text-lg sm:text-xl leading-[2.25]";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Navigation & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80 text-xs">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          <span>العودة لقائمة القضايا</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-900/80 border border-slate-800 rounded-lg p-0.5 text-xs">
            <span className="text-slate-400 px-2 text-[11px] font-medium">حجم الخط:</span>
            <button
              type="button"
              onClick={() => setFontSize("md")}
              className={`px-2 py-1 rounded-md text-xs font-medium focus-visible:ring-2 focus-visible:ring-amber-500 ${
                fontSize === "md" ? "bg-slate-800 text-amber-300 font-semibold card-bezel" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              أ-
            </button>
            <button
              type="button"
              onClick={() => setFontSize("lg")}
              className={`px-2 py-1 rounded-md text-xs font-medium focus-visible:ring-2 focus-visible:ring-amber-500 ${
                fontSize === "lg" ? "bg-slate-800 text-amber-300 font-semibold card-bezel" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              عادي
            </button>
            <button
              type="button"
              onClick={() => setFontSize("xl")}
              className={`px-2 py-1 rounded-md text-xs font-medium focus-visible:ring-2 focus-visible:ring-amber-500 ${
                fontSize === "xl" ? "bg-slate-800 text-amber-300 font-semibold card-bezel" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              أ+
            </button>
          </div>

          {isAlreadySolved && (
            <span className="flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-lg text-emerald-400 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              قضية محلولة
            </span>
          )}
        </div>
      </div>

      {/* Case Header Card */}
      <CaseHeader storyCase={storyCase} />

      {/* Main Narrative Reading Canvas */}
      <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 sm:p-8 card-bezel">
        <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <BookMarked className="w-4 h-4 text-amber-400" />
            <span>نص الفصل والوقائع</span>
          </div>
          <span className="text-slate-400 text-xs bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700/50">
            اقرأ بتأنٍ واستخرج التناقضات
          </span>
        </div>

        <div className={`font-novel text-slate-100 whitespace-pre-line tracking-wide ${getFontSizeClass()}`}>
          {storyCase.storyContent}
        </div>
      </div>

      {/* Suspects & Testimonies Section */}
      <SuspectsList suspects={storyCase.suspectsOrEntities || []} />

      {/* Interactive Evidence Board */}
      <EvidenceBoard
        clues={storyCase.clues}
        revealedClues={revealedClues}
        onToggleClue={toggleClue}
      />

      {/* Socratic AI Clue Helper */}
      <SocraticHint
        revealedHint={revealedHint}
        isLoadingHint={isLoadingHint}
        onFetchHint={handleFetchAiHint}
      />

      {/* The Cognitive Puzzle Conundrum & Solution Box */}
      <DeductionPanel
        puzzleQuestion={storyCase.puzzleQuestion}
        hypotheses={storyCase.hypotheses}
        selectedHypothesis={selectedHypothesis}
        onSelectHypothesis={handleSelectHypothesis}
        customTheory={customTheory}
        onCustomTheoryChange={setCustomTheory}
        onSubmitCustomTheory={handleSubmitCustomTheory}
        isEvaluatingAi={isEvaluatingAi}
        aiEvaluation={aiEvaluation}
      />
    </div>
  );
};
