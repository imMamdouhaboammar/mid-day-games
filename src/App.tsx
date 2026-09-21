import React, { useState, useEffect } from "react";
import { ActiveTab, StoryCase, PlayerStats, SolvedRecord, INITIAL_PLAYER_STATS } from "./types";
import { CURATED_CASES } from "./data/curatedStories";
import { Header } from "./components/Header";
import { CasesList } from "./components/CasesList";
import { CaseReader } from "./components/CaseReader";
import { AntiBrainRotGym } from "./components/AntiBrainRotGym";
import { AICaseGenerator } from "./components/AICaseGenerator";
import { BrainDashboard } from "./components/BrainDashboard";
import { BreakModal } from "./components/BreakModal";
import { Footer } from "./components/Footer";
import { soundController } from "./utils/audioSynth";
import { GAME_CONSTANTS } from "./config/gameConstants";
import {
  LAST_CASE_STORAGE_KEY,
  PLAYER_STATS_STORAGE_KEY,
  markDailyActivity,
} from "./utils/playerProgress";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("cases");
  const [cases, setCases] = useState<StoryCase[]>(() => {
    try {
      const saved = localStorage.getItem("yaqadha_custom_cases");
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...CURATED_CASES];
      }
    } catch {
      // Fall back to curated cases when local storage is unavailable or malformed.
    }
    return CURATED_CASES;
  });

  const [currentCase, setCurrentCase] = useState<StoryCase>(() => {
    try {
      const savedCaseId = localStorage.getItem(LAST_CASE_STORAGE_KEY);
      const savedCase = cases.find((story) => story.id === savedCaseId);
      if (savedCase) return savedCase;
    } catch {
      // Ignore storage failures and start from the first available case.
    }
    return cases[0] || CURATED_CASES[0];
  });
  const [caseStartedAt, setCaseStartedAt] = useState(() => Date.now());

  const [playerStats, setPlayerStats] = useState<PlayerStats>(() => {
    try {
      const saved = localStorage.getItem(PLAYER_STATS_STORAGE_KEY);
      if (saved) return { ...INITIAL_PLAYER_STATS, ...JSON.parse(saved) };
    } catch {
      // Start from a clean profile if persisted state cannot be read.
    }
    return INITIAL_PLAYER_STATS;
  });

  const solvedCaseIds = new Set(playerStats.solvedCases.map((s) => s.caseId));

  const [breakTimerSeconds, setBreakTimerSeconds] = useState(300);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showTimerAlert, setShowTimerAlert] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && breakTimerSeconds > 0) {
      interval = setInterval(() => {
        setBreakTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            setShowTimerAlert(true);
            soundController.timerChimeSfx();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, breakTimerSeconds]);

  useEffect(() => {
    try {
      localStorage.setItem(PLAYER_STATS_STORAGE_KEY, JSON.stringify(playerStats));
    } catch {
      // Progress remains available for the current session if storage is blocked.
    }
  }, [playerStats]);

  useEffect(() => {
    try {
      if (currentCase?.id) {
        localStorage.setItem(LAST_CASE_STORAGE_KEY, currentCase.id);
      }
    } catch {
      // Remembering the last case is a convenience, not a critical path.
    }
  }, [currentCase]);

  const handleSelectCase = (storyCase: StoryCase) => {
    soundController.playSfx("click");
    setCurrentCase(storyCase);
    setCaseStartedAt(Date.now());
    setActiveTab("reader");
  };

  const handleSolveCase = (score: number, verdict: string, userTheory?: string) => {
    const elapsedSeconds = Math.max(1, Math.round((Date.now() - caseStartedAt) / 1000));
    const newRecord: SolvedRecord = {
      caseId: currentCase.id,
      caseTitle: currentCase.title,
      solvedAt: new Date().toLocaleDateString("ar-EG"),
      score,
      timeSpentSeconds: elapsedSeconds,
      verdict,
      userTheory,
    };

    setPlayerStats((prev) => {
      const alreadySolved = prev.solvedCases.some((s) => s.caseId === currentCase.id);
      const updated: PlayerStats = {
        ...prev,
        sharpnessScore:
          prev.sharpnessScore +
          (alreadySolved
            ? GAME_CONSTANTS.POINTS.CASE_SOLVED_REPEAT
            : GAME_CONSTANTS.POINTS.CASE_SOLVED_NEW),
        casesSolvedCount: alreadySolved ? prev.casesSolvedCount : prev.casesSolvedCount + 1,
        totalBreakMinutes: prev.totalBreakMinutes + Math.max(1, currentCase.estimatedMinutes || 5),
        solvedCases: [newRecord, ...prev.solvedCases.filter((s) => s.caseId !== currentCase.id)],
      };
      return markDailyActivity(updated);
    });
  };

  const handleScoreEarnedFromGym = (points: number) => {
    setPlayerStats((prev) =>
      markDailyActivity({
        ...prev,
        sharpnessScore: prev.sharpnessScore + points,
        quickGamesPlayed: prev.quickGamesPlayed + 1,
        totalBreakMinutes: prev.totalBreakMinutes + 2,
      }),
    );
  };

  const handleCaseCreated = (newCase: StoryCase) => {
    setCases((prev) => {
      const updated = [newCase, ...prev];
      try {
        const customOnly = updated.filter((c) => c.isCustomAi);
        localStorage.setItem("yaqadha_custom_cases", JSON.stringify(customOnly));
      } catch {
        // Keep the generated case in the current session even if storage is blocked.
      }
      return updated;
    });
    setCurrentCase(newCase);
    setCaseStartedAt(Date.now());
    setActiveTab("reader");
  };

  const handleToggleTimer = () => {
    setIsTimerRunning((running) => !running);
  };

  const handleResetTimer = (minutes: number) => {
    setBreakTimerSeconds(minutes * 60);
    setIsTimerRunning(true);
  };

  return (
    <div className="min-h-dvh bg-[#0a0e17] text-[#f1f5f9] flex flex-col font-ui selection:bg-amber-600/30 selection:text-amber-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber-500 focus:text-slate-950 focus:font-bold"
      >
        انتقل إلى المحتوى الرئيسي
      </a>

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        playerStats={playerStats}
        breakTimerSeconds={breakTimerSeconds}
        isTimerRunning={isTimerRunning}
        onToggleTimer={handleToggleTimer}
        onResetTimer={handleResetTimer}
      />

      <BreakModal
        isOpen={showTimerAlert}
        onClose={() => setShowTimerAlert(false)}
        onExtend={handleResetTimer}
      />

      <main id="main-content" tabIndex={-1} className="flex-1 py-4 sm:py-6">
        <AnimatePresence mode="wait">
          {activeTab === "cases" && (
            <motion.div
              key="cases"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <CasesList
                cases={cases}
                solvedCaseIds={solvedCaseIds}
                playerStats={playerStats}
                onSelectCase={handleSelectCase}
                onOpenAiGenerator={() => setActiveTab("custom-case")}
                onOpenQuickGym={() => setActiveTab("quick-gym")}
              />
            </motion.div>
          )}

          {activeTab === "reader" && (
            <motion.div
              key="reader"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <CaseReader
                storyCase={currentCase}
                onBack={() => setActiveTab("cases")}
                onSolveCase={handleSolveCase}
                isAlreadySolved={solvedCaseIds.has(currentCase.id)}
              />
            </motion.div>
          )}

          {activeTab === "quick-gym" && (
            <motion.div
              key="quick-gym"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <AntiBrainRotGym onScoreEarned={handleScoreEarnedFromGym} />
            </motion.div>
          )}

          {activeTab === "custom-case" && (
            <motion.div
              key="custom-case"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <AICaseGenerator onCaseCreated={handleCaseCreated} />
            </motion.div>
          )}

          {activeTab === "stats" && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <BrainDashboard playerStats={playerStats} cases={cases} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
