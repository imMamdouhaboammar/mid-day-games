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
      // ignore
    }
    return CURATED_CASES;
  });

  const [currentCase, setCurrentCase] = useState<StoryCase>(CURATED_CASES[0]);

  const [playerStats, setPlayerStats] = useState<PlayerStats>(() => {
    try {
      const saved = localStorage.getItem("yaqadha_player_stats");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
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
      localStorage.setItem("yaqadha_player_stats", JSON.stringify(playerStats));
    } catch {
      // ignore
    }
  }, [playerStats]);

  const handleSelectCase = (c: StoryCase) => {
    soundController.playSfx("click");
    setCurrentCase(c);
    setActiveTab("reader");
  };

  const handleSolveCase = (score: number, verdict: string, userTheory?: string) => {
    const already = playerStats.solvedCases.some((s) => s.caseId === currentCase.id);
    const newRecord: SolvedRecord = {
      caseId: currentCase.id,
      caseTitle: currentCase.title,
      solvedAt: new Date().toLocaleDateString("ar-EG"),
      score,
      timeSpentSeconds: 180,
      verdict,
      userTheory,
    };

    setPlayerStats((prev) => ({
      ...prev,
      sharpnessScore:
        prev.sharpnessScore +
        (already ? GAME_CONSTANTS.POINTS.CASE_SOLVED_REPEAT : GAME_CONSTANTS.POINTS.CASE_SOLVED_NEW),
      casesSolvedCount: already ? prev.casesSolvedCount : prev.casesSolvedCount + 1,
      totalBreakMinutes: prev.totalBreakMinutes + (currentCase.estimatedMinutes || 5),
      solvedCases: [newRecord, ...prev.solvedCases.filter((s) => s.caseId !== currentCase.id)],
    }));
  };

  const handleScoreEarnedFromGym = (points: number) => {
    setPlayerStats((prev) => ({
      ...prev,
      sharpnessScore: prev.sharpnessScore + points,
      quickGamesPlayed: prev.quickGamesPlayed + 1,
      totalBreakMinutes: prev.totalBreakMinutes + 2,
    }));
  };

  const handleCaseCreated = (newCase: StoryCase) => {
    setCases((prev) => {
      const updated = [newCase, ...prev];
      try {
        const customOnly = updated.filter((c) => c.isCustomAi);
        localStorage.setItem("yaqadha_custom_cases", JSON.stringify(customOnly));
      } catch {
        // ignore
      }
      return updated;
    });
    setCurrentCase(newCase);
    setActiveTab("reader");
  };

  const handleToggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const handleResetTimer = (minutes: number) => {
    setBreakTimerSeconds(minutes * 60);
    setIsTimerRunning(true);
  };

  return (
    <div className="min-h-dvh bg-[#0a0e17] text-[#f1f5f9] flex flex-col font-ui selection:bg-amber-600/30 selection:text-amber-200">
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

      <main className="flex-1 py-4 sm:py-6">
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
              <BrainDashboard playerStats={playerStats} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
