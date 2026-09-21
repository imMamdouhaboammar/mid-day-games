import React, { useState, useEffect } from "react";
import { soundController } from "../../utils/audioSynth";
import { GAME_CONSTANTS } from "../../config/gameConstants";
import { Trophy, RotateCcw, Flame } from "lucide-react";

interface StroopGameProps {
  onFinish: (pts: number) => void;
}

const STROOP_COLORS = [
  { name: "أحمر", hex: "#ef4444", key: "1" },
  { name: "أزرق", hex: "#3b82f6", key: "2" },
  { name: "أخضر", hex: "#10b981", key: "3" },
  { name: "أصفر", hex: "#eab308", key: "4" },
  { name: "بنفسجي", hex: "#a855f7", key: "5" },
];

export const StroopGame: React.FC<StroopGameProps> = ({ onFinish }) => {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [wordText, setWordText] = useState("أزرق");
  const [inkColor, setInkColor] = useState(STROOP_COLORS[0]);
  const [isDone, setIsDone] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [scorePopup, setScorePopup] = useState<number | null>(null);

  const generateRound = () => {
    const textIdx = Math.floor(Math.random() * STROOP_COLORS.length);
    let colorIdx = Math.floor(Math.random() * STROOP_COLORS.length);
    if (Math.random() < 0.75 && colorIdx === textIdx) {
      colorIdx = (colorIdx + 1) % STROOP_COLORS.length;
    }
    setWordText(STROOP_COLORS[textIdx].name);
    setInkColor(STROOP_COLORS[colorIdx]);
    setFeedback(null);
  };

  useEffect(() => {
    generateRound();
  }, []);

  const handleAnswer = (chosenName: string) => {
    if (feedback !== null) return; // Prevent double clicking during transition

    const isCorrect = chosenName === inkColor.name;
    let nextStreak = streak;

    if (isCorrect) {
      nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > highestStreak) setHighestStreak(nextStreak);

      // Streak milestones check
      if (nextStreak === 3 || nextStreak === 5) {
        soundController.streakSfx();
      } else {
        soundController.scoreSfx();
      }

      setScore((s) => s + GAME_CONSTANTS.POINTS.STROOP_CORRECT);
      setScorePopup(GAME_CONSTANTS.POINTS.STROOP_CORRECT);
      setFeedback("صحيح! كبح ممتاز للمشتتات البصرية");
    } else {
      nextStreak = 0;
      setStreak(0);
      soundController.wrongSfx();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), GAME_CONSTANTS.SPECTACLE.SHAKE_DURATION_MS);
      setFeedback(`خطأ! لون الحبر كان: ${inkColor.name}`);
    }

    setTimeout(() => {
      setScorePopup(null);
      if (round >= 8) {
        setIsDone(true);
        const finalScore = score + (isCorrect ? GAME_CONSTANTS.POINTS.STROOP_CORRECT : 0);
        onFinish(finalScore);
      } else {
        setRound((r) => r + 1);
        generateRound();
      }
    }, GAME_CONSTANTS.SPECTACLE.FEEDBACK_DELAY_MS);
  };

  const restart = () => {
    setRound(1);
    setScore(0);
    setStreak(0);
    setHighestStreak(0);
    setIsDone(false);
    setIsShaking(false);
    setScorePopup(null);
    generateRound();
  };

  if (isDone) {
    return (
      <div className="text-center py-8 space-y-4 animate-pop">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
          <Trophy className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold font-novel text-amber-200">
          اكتمل تدريب كبح التشتت والتركيز!
        </h3>
        <p className="text-slate-300 text-sm">
          أحرزت <span className="font-bold text-emerald-400 font-mono text-xl">{score}</span> من 80 نقطة في اليقظة الإدراكية.
        </p>
        {highestStreak >= 3 && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-bold">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>أعلى تتابع إجابات صحيحة: {highestStreak} متتالية!</span>
          </div>
        )}
        <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
          هذا التمرين يجبر الدماغ على كبح القراءة الأوتوماتيكية ويحرر خلايا الانتباه التنفيذي من إرهاق التصفح الروتيني.
        </p>
        <button
          type="button"
          onClick={restart}
          className="mt-4 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 mx-auto min-h-[44px] transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <RotateCcw className="w-4 h-4" />
          <span>إعادة التحدي</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`space-y-6 text-center ${isShaking ? "animate-shake" : ""}`}>
      {/* Top Header & Streak Pill */}
      <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span>الجولة {round} من 8</span>
          {streak >= 2 && (
            <span className="flex items-center gap-1 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-2 py-0.5 rounded-full font-bold animate-pop">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>تتابع: {streak}x</span>
            </span>
          )}
        </div>
        <span className="text-amber-400 font-bold hidden sm:inline">القاعدة: اضغط على لون الخط وتجاهل الكلمة المكتوبة!</span>
        <div className="flex items-center gap-1 relative font-mono font-bold">
          <span className="text-slate-400">النقاط:</span>
          <span className="text-amber-300">{score}</span>
          {scorePopup && (
            <span className="absolute -top-6 right-0 text-emerald-400 text-sm font-bold animate-float-score">
              +{scorePopup}
            </span>
          )}
        </div>
      </div>

      {/* Main Flash Card */}
      <div className="py-8 sm:py-10 bg-slate-950/70 border border-slate-800/90 rounded-2xl flex flex-col items-center justify-center relative shadow-inner">
        <span
          style={{ color: inkColor.hex }}
          className="text-5xl sm:text-6xl font-black font-novel tracking-widest select-none"
        >
          {wordText}
        </span>
        {feedback && (
          <span className={`text-xs mt-3 font-semibold px-3 py-1 rounded-full ${feedback.startsWith("صحيح") ? "text-emerald-300 bg-emerald-950/40" : "text-red-300 bg-red-950/40"}`}>
            {feedback}
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {STROOP_COLORS.map((c) => (
          <button
            type="button"
            key={c.name}
            onClick={() => handleAnswer(c.name)}
            className="p-3.5 min-h-[48px] rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500 text-slate-100 font-bold text-sm transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-500 active:scale-95"
          >
            <span
              className="w-4 h-4 rounded-full inline-block shrink-0 shadow-md ring-1 ring-white/20"
              style={{ backgroundColor: c.hex }}
            />
            <span>{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

