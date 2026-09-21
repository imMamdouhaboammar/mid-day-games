import React from "react";
import { StoryCase } from "../../types";
import { Clock, Target, MapPin } from "lucide-react";

interface CaseHeaderProps {
  storyCase: StoryCase;
}

export const CaseHeader: React.FC<CaseHeaderProps> = ({ storyCase }) => {
  return (
    <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 sm:p-7 card-bezel">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3">
        <span className="px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 font-medium border border-amber-500/30">
          {storyCase.genre}
        </span>
        <span className="text-slate-600">•</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-slate-400" />
          <span>{storyCase.estimatedMinutes} دقائق</span>
        </span>
        <span className="text-slate-600">•</span>
        <span className="text-slate-300">
          {storyCase.cognitiveSkillTrained}
        </span>
        <span className="text-slate-600">•</span>
        <span className="text-slate-400">
          مستوى: {storyCase.difficulty}
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold font-novel text-slate-100 mb-1.5 leading-snug">
        {storyCase.title}
      </h1>
      <h2 className="text-sm sm:text-base text-amber-400/90 font-medium mb-3.5">
        {storyCase.chapterTitle}
      </h2>
      <p className="text-slate-200 text-sm sm:text-base border-r-2 border-amber-500/70 pr-3.5 leading-relaxed font-novel">
        {storyCase.synopsis}
      </p>

      <div className="flex items-center gap-1.5 mt-4 text-xs text-slate-400">
        <MapPin className="w-3.5 h-3.5 text-slate-500" />
        <span>الموقع: {storyCase.location}</span>
      </div>
    </div>
  );
};
