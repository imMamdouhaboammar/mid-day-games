import React, { useState } from "react";
import { StoryCase } from "../types";
import { soundController } from "../utils/audioSynth";
import {
  Compass,
  Sliders,
  BookOpen,
  AlertCircle,
  ScrollText,
  Activity
} from "lucide-react";
import {
  GENRE_OPTIONS,
  DIFFICULTY_OPTIONS,
  SKILL_OPTIONS,
  buildFallbackCase,
} from "./generator/generatorConfig";

interface AICaseGeneratorProps {
  onCaseCreated: (newCase: StoryCase) => void;
}

export const AICaseGenerator: React.FC<AICaseGeneratorProps> = ({ onCaseCreated }) => {
  const [genre, setGenre] = useState(GENRE_OPTIONS[0]);
  const [difficulty, setDifficulty] = useState<"متوسط" | "متقدم" | "محقق عبقري">("متوسط");
  const [skill, setSkill] = useState(SKILL_OPTIONS[0]);
  const [customIdea, setCustomIdea] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setErrorMsg(null);
    soundController.playSfx("click");

    try {
      const response = await fetch("/api/story/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          genre: `${genre}${customIdea ? ` - فكرة إضافية: ${customIdea}` : ""}`,
          difficulty,
          chapterNumber: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("فشل إنشاء القضية من خادم الذكاء الاصطناعي");
      }

      const data = await response.json();

      if (data.fallback || !data.title) {
        const fallbackCase = buildFallbackCase(genre, difficulty, skill, customIdea);
        soundController.playSfx("success");
        onCaseCreated(fallbackCase);
        return;
      }

      const formattedCase: StoryCase = {
        id: `ai-case-${Date.now()}`,
        title: data.title,
        chapterTitle: data.chapterTitle || "الفصل الأول: الغموض يبدأ",
        genre,
        difficulty,
        estimatedMinutes: 5,
        synopsis: data.synopsis || "قضية روائية من تأليف الذكاء الاصطناعي شحذاً للذهن.",
        storyContent: data.storyContent,
        location: data.location || "مسرح الجريمة الغامض",
        suspectsOrEntities: data.suspectsOrEntities || [],
        clues: data.clues || [],
        puzzleQuestion: data.puzzleQuestion,
        puzzleType: data.puzzleType || skill,
        cognitiveSkillTrained: data.cognitiveSkillTrained || skill,
        hypotheses: data.hypotheses || [],
        subtleHint: data.subtleHint || "انظر إلى التناقضات بين الأقوال والأثر المادي.",
        isCustomAi: true,
      };

      soundController.playSfx("success");
      onCaseCreated(formattedCase);
    } catch {
      setErrorMsg("حدث خطأ أثناء توليد الرواية. يرجى التأكد من الاتصال وإعادة المحاولة.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-5">
      {/* Title Card */}
      <div className="border-b border-slate-800/80 pb-4">
        <h2 className="text-xl sm:text-2xl font-bold font-novel text-slate-100">
          توليد قضية مخصصة
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          حدد تصنيف الرواية ومستوى التحدي المنطقي لصياغة قضية جديدة.
        </p>
      </div>

      {/* Generator Form */}
      <form onSubmit={handleGenerate} className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 sm:p-7 space-y-6 card-bezel">
        {/* Genre Selection */}
        <div className="space-y-2.5">
          <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>تصنيف الرواية والأجواء:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {GENRE_OPTIONS.map((g) => (
              <button
                type="button"
                key={g}
                onClick={() => setGenre(g)}
                aria-label={`اختيار التصنيف: ${g}`}
                aria-pressed={genre === g}
                className={`p-3 rounded-xl border text-right text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-amber-500 card-bezel ${
                  genre === g
                    ? "bg-slate-800/95 border-amber-500/40 text-amber-300 card-bezel-active font-semibold"
                    : "bg-[#131b2d] border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Selection */}
        <div className="space-y-2.5">
          <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-amber-400" />
            <span>مستوى الصعوبة المنطقية:</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {DIFFICULTY_OPTIONS.map((d) => (
              <button
                type="button"
                key={d}
                onClick={() => setDifficulty(d)}
                aria-label={`اختيار مستوى الصعوبة: ${d}`}
                aria-pressed={difficulty === d}
                className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-amber-500 card-bezel ${
                  difficulty === d
                    ? "bg-slate-800/95 border-amber-500/40 text-amber-300 card-bezel-active font-semibold"
                    : "bg-[#131b2d] border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Cognitive Skill Target */}
        <div className="space-y-2.5">
          <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>المهارة الذهنية المستهدفة:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {SKILL_OPTIONS.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setSkill(s)}
                aria-label={`اختيار المهارة: ${s}`}
                aria-pressed={skill === s}
                className={`p-3 rounded-xl border text-right text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-emerald-500 card-bezel ${
                  skill === s
                    ? "bg-slate-800/95 border-emerald-500/40 text-emerald-300 card-bezel-active font-semibold"
                    : "bg-[#131b2d] border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Idea / Prompt (Optional) */}
        <div className="space-y-2">
          <label htmlFor="custom-case-idea" className="text-xs font-semibold text-slate-200 flex items-center justify-between cursor-pointer">
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>فكرة مخصصة ترغب بإدراجها (اختياري):</span>
            </span>
          </label>
          <input
            id="custom-case-idea"
            type="text"
            value={customIdea}
            onChange={(e) => setCustomIdea(e.target.value)}
            placeholder="مثلاً: اختفاء مخطوطة فلكية في مرصد مراغة الأثري..."
            className="w-full bg-[#0a0e17] border border-slate-700/80 rounded-xl p-3 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-amber-500 font-novel"
          />
        </div>

        {errorMsg && (
          <div className="p-3 bg-rose-950/30 border border-rose-800/80 rounded-xl text-xs text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isGenerating}
          className="w-full py-3 px-5 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-amber-500 shadow-md"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              <span>جاري صياغة الرواية وبناء اللغز...</span>
            </>
          ) : (
            <>
              <ScrollText className="w-4 h-4" />
              <span>توليد القضية الروائية الآن</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
