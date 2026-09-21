import React, { useState } from "react";
import { Zap, Eye, Target, Flame } from "lucide-react";
import { soundController } from "../utils/audioSynth";
import { StroopGame } from "./gym/StroopGame";
import { ParadoxGame } from "./gym/ParadoxGame";
import { MemoryGame } from "./gym/MemoryGame";

interface AntiBrainRotGymProps {
  onScoreEarned: (points: number, activityName: string) => void;
}

export const AntiBrainRotGym: React.FC<AntiBrainRotGymProps> = ({ onScoreEarned }) => {
  const [selectedGame, setSelectedGame] = useState<"stroop" | "paradox" | "memory">("stroop");

  const selectGame = (game: "stroop" | "paradox" | "memory") => {
    if (selectedGame !== game) {
      soundController.clickSfx();
      setSelectedGame(game);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Gym Minimal Header */}
      <div className="border-b border-slate-800/80 pb-5 space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-novel">
            صالة التنشيط الذهني
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            تمارين مقتضبة من دقيقتين لتحفيز الفص الجبهي والانتباه أثناء فترات العمل.
          </p>
        </div>

        {/* Game Mode Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => selectGame("stroop")}
            className={`p-3.5 sm:p-4 rounded-2xl border text-right transition-all flex items-center justify-between focus-visible:ring-2 focus-visible:ring-emerald-500 card-bezel ${
              selectedGame === "stroop"
                ? "bg-slate-800/90 border-slate-700 text-slate-100 card-bezel-active"
                : "bg-[#0f1523] border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <div>
              <div className="font-semibold text-xs sm:text-sm text-slate-100">تحدي ستروب اللوني</div>
              <div className="text-xs text-slate-400 mt-0.5">مقاومة التشتت البصري</div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Eye className="w-4 h-4" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => selectGame("paradox")}
            className={`p-3.5 sm:p-4 rounded-2xl border text-right transition-all flex items-center justify-between focus-visible:ring-2 focus-visible:ring-amber-500 card-bezel ${
              selectedGame === "paradox"
                ? "bg-slate-800/90 border-slate-700 text-slate-100 card-bezel-active"
                : "bg-[#0f1523] border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <div>
              <div className="font-semibold text-xs sm:text-sm text-slate-100">كاشف التناقض</div>
              <div className="text-xs text-slate-400 mt-0.5">استنتاج منطقي سريع</div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Target className="w-4 h-4" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => selectGame("memory")}
            className={`p-3.5 sm:p-4 rounded-2xl border text-right transition-all flex items-center justify-between focus-visible:ring-2 focus-visible:ring-purple-500 card-bezel ${
              selectedGame === "memory"
                ? "bg-slate-800/90 border-slate-700 text-slate-100 card-bezel-active"
                : "bg-[#0f1523] border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <div>
              <div className="font-semibold text-xs sm:text-sm text-slate-100">الذاكرة البصرية</div>
              <div className="text-xs text-slate-400 mt-0.5">استرجاع الأنماط اللحظية</div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Flame className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Selected Game Playground */}
      <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 sm:p-8 card-bezel">
        {selectedGame === "stroop" && (
          <StroopGame onFinish={(pts) => onScoreEarned(pts, "تحدي ستروب اللوني")} />
        )}
        {selectedGame === "paradox" && (
          <ParadoxGame onFinish={(pts) => onScoreEarned(pts, "كاشف التناقض السريع")} />
        )}
        {selectedGame === "memory" && (
          <MemoryGame onFinish={(pts) => onScoreEarned(pts, "الذاكرة البصرية الومضية")} />
        )}
      </div>
    </div>
  );
};

