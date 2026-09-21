import React, { useState } from "react";
import { ActiveTab, PlayerStats } from "../types";
import { soundController } from "../utils/audioSynth";
import {
  BookOpen,
  Compass,
  BarChart3,
  Volume2,
  VolumeX,
  CloudRain,
  Library,
  Waves,
  Timer,
  Flame,
  Coffee,
  Zap,
  ScrollText
} from "lucide-react";
import { TimerMenu } from "./header/TimerMenu";
import { AmbientMenu } from "./header/AmbientMenu";

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  playerStats: PlayerStats;
  breakTimerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: (minutes: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  playerStats,
  breakTimerSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
}) => {
  const [ambientMode, setAmbientMode] = useState<"off" | "rain" | "library" | "binaural">("off");
  const [isMuted, setIsMuted] = useState(() => soundController.getMuted());
  const [showAmbientMenu, setShowAmbientMenu] = useState(false);
  const [showTimerMenu, setShowTimerMenu] = useState(false);

  // Sync with global keyboard shortcut 'M'
  React.useEffect(() => {
    const handleSync = () => {
      setIsMuted(soundController.getMuted());
    };
    window.addEventListener("keydown", handleSync);
    return () => window.removeEventListener("keydown", handleSync);
  }, []);

  const toggleMute = () => {
    const next = soundController.toggleMute();
    setIsMuted(next);
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0a0e17]/95 backdrop-blur-md border-b border-slate-800/80 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-4">
          {/* Minimal Brand */}
          <button
            type="button"
            onClick={() => setActiveTab("cases")}
            className="flex items-center gap-2.5 text-right focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 transition-colors group-hover:bg-amber-500/25">
              <Compass className="w-4 h-4" />
            </div>
            <div className="flex items-baseline gap-2">
              <h1 className="text-base font-bold font-novel tracking-wide text-slate-100">يَـقَـظَـة</h1>
              <span className="hidden sm:inline text-xs text-slate-400 font-normal">روايات وألغاز ذهنية</span>
            </div>
          </button>

          {/* Minimal Metrics Bar */}
          <div className="hidden md:flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5" title="نقاط اليقظة">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>اليقظة: <strong className="text-slate-100 font-mono font-medium">{playerStats.sharpnessScore}</strong></span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5" title="سلسلة الأيام المتتالية">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>التتابع: <strong className="text-slate-100 font-mono font-medium">{playerStats.streakDays} يوم</strong></span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5" title="القضايا المحلولة">
              <Coffee className="w-3.5 h-3.5 text-emerald-400" />
              <span>المحلولة: <strong className="text-slate-100 font-mono font-medium">{playerStats.casesSolvedCount}</strong></span>
            </span>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-1.5">
            {/* Timer Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowTimerMenu(!showTimerMenu)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isTimerRunning
                    ? "bg-amber-950/50 border-amber-700/60 text-amber-300 card-bezel-active"
                    : "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-slate-100 hover:border-slate-700"
                }`}
              >
                <Timer className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono">{formatTimer(breakTimerSeconds)}</span>
              </button>

              <TimerMenu
                isOpen={showTimerMenu}
                onClose={() => setShowTimerMenu(false)}
                isTimerRunning={isTimerRunning}
                onToggleTimer={onToggleTimer}
                onResetTimer={onResetTimer}
              />
            </div>

            {/* Ambient Sound Menu */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowAmbientMenu(!showAmbientMenu)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  ambientMode !== "off"
                    ? "bg-amber-950/50 border-amber-700/60 text-amber-300 card-bezel-active"
                    : "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-slate-100 hover:border-slate-700"
                }`}
              >
                {ambientMode === "rain" && <CloudRain className="w-3.5 h-3.5 text-blue-400" />}
                {ambientMode === "library" && <Library className="w-3.5 h-3.5 text-amber-400" />}
                {ambientMode === "binaural" && <Waves className="w-3.5 h-3.5 text-purple-400" />}
                {ambientMode === "off" && <Waves className="w-3.5 h-3.5 text-slate-500" />}
                <span className="hidden sm:inline">
                  {ambientMode === "off" ? "الهدوء" : ambientMode === "rain" ? "مطر" : ambientMode === "library" ? "مكتبة" : "ألفا"}
                </span>
              </button>

              <AmbientMenu
                isOpen={showAmbientMenu}
                onClose={() => setShowAmbientMenu(false)}
                ambientMode={ambientMode}
                setAmbientMode={setAmbientMode}
              />
            </div>

            {/* Mute Button */}
            <button
              type="button"
              onClick={toggleMute}
              title="كتم/تشغيل الصوت (اضغط M)"
              aria-label={isMuted ? "إلغاء كتم الصوت" : "كتم الصوت"}
              className={`p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg border transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 ${
                isMuted
                  ? "bg-rose-950/40 border-rose-900/60 text-rose-400"
                  : "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-slate-100 hover:border-slate-700"
              }`}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Minimal Navigation Tabs */}
        <nav className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-800/70 overflow-x-auto text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab("cases")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 ${
              activeTab === "cases" || activeTab === "reader"
                ? "bg-slate-800/90 border border-slate-700/70 text-amber-300 font-semibold card-bezel"
                : "border border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>القضايا</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("quick-gym")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              activeTab === "quick-gym"
                ? "bg-slate-800/90 border border-slate-700/70 text-amber-300 font-semibold card-bezel"
                : "border border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>صالة التنشيط</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("custom-case")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 ${
              activeTab === "custom-case"
                ? "bg-slate-800/90 border border-slate-700/70 text-amber-300 font-semibold card-bezel"
                : "border border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
            }`}
          >
            <ScrollText className="w-3.5 h-3.5 text-amber-400" />
            <span>توليد قضية</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("stats")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 ${
              activeTab === "stats"
                ? "bg-slate-800/90 border border-slate-700/70 text-amber-300 font-semibold card-bezel"
                : "border border-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>اللياقة والأرشيف</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
