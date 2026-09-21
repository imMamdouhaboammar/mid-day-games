import React, { useState } from "react";
import { StoryCase } from "../types";
import {
  Clock,
  MapPin,
  Target,
  CheckCircle2,
  BookOpen,
  Filter,
  Compass,
  ArrowLeft,
  Zap,
  ScrollText,
  Cpu
} from "lucide-react";

interface CasesListProps {
  cases: StoryCase[];
  solvedCaseIds: Set<string>;
  onSelectCase: (c: StoryCase) => void;
  onOpenAiGenerator: () => void;
  onOpenQuickGym: () => void;
}

export const CasesList: React.FC<CasesListProps> = ({
  cases,
  solvedCaseIds,
  onSelectCase,
  onOpenAiGenerator,
  onOpenQuickGym,
}) => {
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");

  const filteredCases = cases.filter((c) => {
    if (filterDifficulty === "all") return true;
    return c.difficulty === filterDifficulty;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-7">
      {/* Minimal Header / Intro */}
      <div className="border-b border-slate-800/80 pb-6 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-novel text-slate-100 tracking-wide">
              استراحة ذهنية واعية
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl leading-relaxed">
              فصول روائية تفاعلية وألغاز استنتاجية لتنشيط التركيز وتصفية الذهن من إرهاق الشاشات.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {cases.length > 0 && (
              <button
                type="button"
                onClick={() => onSelectCase(cases[0])}
                className="px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>أول قضية (4 د)</span>
              </button>
            )}

            <button
              type="button"
              onClick={onOpenQuickGym}
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>صالة التنشيط</span>
            </button>

            <button
              type="button"
              onClick={onOpenAiGenerator}
              className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <ScrollText className="w-3.5 h-3.5 text-amber-400" />
              <span>توليد قضية</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-slate-200 font-novel">
            الملفات المتاحة
          </h3>
          <span className="text-xs text-slate-500">({filteredCases.length})</span>
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 p-0.5 rounded-lg text-xs">
          <Filter className="w-3 h-3 text-slate-500 mr-1.5" />
          {["all", "متوسط", "متقدم", "محقق عبقري"].map((diff) => (
            <button
              type="button"
              key={diff}
              onClick={() => setFilterDifficulty(diff)}
              className={`px-2.5 py-1 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 ${
                filterDifficulty === diff
                  ? "bg-slate-800 text-amber-300 font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {diff === "all" ? "الكل" : diff}
            </button>
          ))}
        </div>
      </div>

      {/* Cases Grid */}
      {filteredCases.length === 0 ? (
        <div className="text-center py-12 bg-slate-900/40 border border-slate-800/80 rounded-2xl text-slate-400 text-sm">
          لا توجد قضايا تطابق مستوى الصعوبة المحدد حالياً.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredCases.map((story) => {
            const isSolved = solvedCaseIds.has(story.id);

            const difficultyClass =
              story.difficulty === "متوسط"
                ? "bg-emerald-950/50 text-emerald-300 border-emerald-800/50"
                : story.difficulty === "متقدم"
                ? "bg-amber-950/50 text-amber-300 border-amber-800/50"
                : "bg-purple-950/50 text-purple-300 border-purple-800/50";

            return (
              <button
                type="button"
                key={story.id}
                onClick={() => onSelectCase(story)}
                className={`w-full text-right bg-[#0f1523] hover:bg-[#141d2f] border rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between relative focus-visible:ring-2 focus-visible:ring-amber-500 group card-bezel ${
                  isSolved
                    ? "border-slate-800 hover:border-emerald-500/40"
                    : "border-slate-800/90 hover:border-amber-500/40 hover:-translate-y-0.5"
                }`}
              >
                {story.isCustomAi && (
                  <div className="absolute top-4 left-4 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Cpu className="w-3 h-3" />
                    <span>مولدة بالذكاء الاصطناعي</span>
                  </div>
                )}

                <div className="space-y-3 w-full">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 font-medium border border-slate-700/50">
                      {story.genre}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md border text-[11px] font-medium ${difficultyClass}`}>
                      {story.difficulty}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{story.estimatedMinutes} دقيقة</span>
                    </span>
                    {isSolved && (
                      <span className="text-emerald-400 flex items-center gap-1 font-medium text-[11px] bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-md">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>مكتملة</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold font-novel text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                      {story.title}
                    </h4>
                    <div className="text-xs text-amber-400/80 font-medium mt-1">
                      {story.chapterTitle}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300/90 font-novel line-clamp-2 leading-relaxed">
                    {story.synopsis}
                  </p>

                  <div className="text-xs text-slate-400 pt-0.5 flex items-center gap-1">
                    <span className="text-slate-500">المهارة المستهدفة:</span>
                    <span className="text-slate-300 font-medium">{story.cognitiveSkillTrained}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs w-full">
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{story.location}</span>
                  </span>

                  <span className="text-amber-400/90 group-hover:text-amber-300 font-medium flex items-center gap-1 transition-colors">
                    <span>قراءة واستنتاج</span>
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
