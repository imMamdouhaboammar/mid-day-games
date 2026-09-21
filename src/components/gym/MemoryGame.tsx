import React, { useState, useEffect } from "react";
import { soundController } from "../../utils/audioSynth";
import { GAME_CONSTANTS } from "../../config/gameConstants";
import {
  Key,
  Compass,
  ScrollText,
  Hourglass,
  Flame,
  Gem,
  Shield,
  Award,
  CheckCircle2,
  XCircle,
  Eye,
  RotateCcw
} from "lucide-react";

interface MemorySymbol {
  id: string;
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const MEMORY_SYMBOLS: MemorySymbol[] = [
  { id: "key", name: "مفتاح", Icon: Key },
  { id: "compass", name: "بوصلة", Icon: Compass },
  { id: "scroll", name: "مخطوطة", Icon: ScrollText },
  { id: "hourglass", name: "ساعة رملية", Icon: Hourglass },
  { id: "flame", name: "شعلة", Icon: Flame },
  { id: "gem", name: "جوهرة", Icon: Gem },
  { id: "shield", name: "درع", Icon: Shield },
  { id: "award", name: "وسام", Icon: Award },
];

interface MemoryGameProps {
  onFinish: (pts: number) => void;
}

export const MemoryGame: React.FC<MemoryGameProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<"prepare" | "flashing" | "recall" | "result">("prepare");
  const [sequence, setSequence] = useState<MemorySymbol[]>([]);
  const [targetIndex, setTargetIndex] = useState(2);
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(3);
  const [isShaking, setIsShaking] = useState(false);

  const startRound = () => {
    const shuffled = [...MEMORY_SYMBOLS].sort(() => 0.5 - Math.random()).slice(0, 4);
    setSequence(shuffled);
    setTargetIndex(Math.floor(Math.random() * 4));
    setUserChoice(null);
    setPhase("flashing");
    setTimeLeft(3);
    soundController.clueSfx();
  };

  useEffect(() => {
    if (phase !== "flashing") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setPhase("recall");
          soundController.playTone(520, "sine", 0.08, 0.15, 2000);
          return 0;
        }
        soundController.clickSfx();
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  const handleSelectSymbol = (symId: string) => {
    setUserChoice(symId);
    setPhase("result");
    const isCorrect = symId === sequence[targetIndex]?.id;
    if (isCorrect) {
      soundController.scoreSfx();
      onFinish(GAME_CONSTANTS.POINTS.MEMORY_CORRECT);
    } else {
      soundController.wrongSfx();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), GAME_CONSTANTS.SPECTACLE.SHAKE_DURATION_MS);
      onFinish(GAME_CONSTANTS.POINTS.MEMORY_PARTIAL);
    }
  };

  return (
    <div className={`space-y-6 text-center py-4 ${isShaking ? "animate-shake" : ""}`}>
      <div className="text-xs text-slate-400 pb-3 border-b border-slate-800 flex items-center justify-between">
        <span>تمرين الذاكرة العاملة اللحظية (تنشيط التثبيت البصري)</span>
        <span className="text-purple-400 font-bold font-mono">25 نقطة عند الإصابة</span>
      </div>

      {phase === "prepare" && (
        <div className="space-y-4 py-8 animate-pop">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mx-auto text-purple-400">
            <Eye className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold font-novel text-purple-200">
            ستظهر 4 رموز أثرية لمدة 3 ثوانٍ فقط بالترتيب
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
            احفظ مواقع الرموز من اليمين إلى اليسار ثم سنفحص استرجاعك لموقع رمز معين.
          </p>
          <button
            type="button"
            onClick={startRound}
            className="px-6 py-3 min-h-[44px] rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs focus-visible:ring-2 focus-visible:ring-purple-500 transition-all active:scale-95"
          >
            بدء وميض الذاكرة الآن
          </button>
        </div>
      )}

      {phase === "flashing" && (
        <div className="space-y-6 py-8 animate-pop">
          <div className="text-amber-400 font-bold font-mono text-sm flex items-center justify-center gap-2">
            <Hourglass className="w-4 h-4 animate-pulse" />
            <span>احفظ الترتيب! المتبقي: {timeLeft} ثانية</span>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {sequence.map((item, idx) => {
              const ItemIcon = item.Icon;
              return (
                <div
                  key={item.id}
                  className="w-16 h-20 sm:w-20 sm:h-24 bg-slate-900 border-2 border-purple-500/70 rounded-xl flex flex-col items-center justify-center shadow-lg text-purple-300"
                >
                  <ItemIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                  <span className="text-[10px] text-slate-400 mt-1 font-mono font-bold">#{idx + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {phase === "recall" && (
        <div className="space-y-6 py-6 animate-pop">
          <h3 className="text-amber-300 font-bold text-base font-novel">
            ما هو الرمز الذي كان في الموقع رقم ({targetIndex + 1})؟
          </h3>
          <div className="grid grid-cols-4 gap-2.5 sm:gap-3 max-w-md mx-auto">
            {MEMORY_SYMBOLS.map((sym) => {
              const SymIcon = sym.Icon;
              return (
                <button
                  type="button"
                  key={sym.id}
                  aria-label={sym.name}
                  onClick={() => handleSelectSymbol(sym.id)}
                  className="p-3 sm:p-4 min-h-[56px] rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-400 hover:bg-slate-800 text-purple-300 transition-all flex flex-col items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-purple-500 active:scale-95"
                >
                  <SymIcon className="w-6 h-6" />
                  <span className="text-[10px] text-slate-300 font-medium">{sym.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {phase === "result" && (
        <div className="space-y-4 py-6 animate-pop">
          {userChoice === sequence[targetIndex]?.id ? (
            <div className="text-emerald-400 font-bold space-y-1">
              <CheckCircle2 className="w-10 h-10 mx-auto" />
              <h3 className="text-lg font-novel">ذاكرة حاضرة وممتازة!</h3>
              <p className="text-xs text-slate-300">استرجعت الرمز الصحيح بنجاح (+25 نقطة يقظة).</p>
            </div>
          ) : (
            <div className="text-red-400 font-bold space-y-1">
              <XCircle className="w-10 h-10 mx-auto" />
              <h3 className="text-lg font-novel">كاد ذهنك أن يصيب!</h3>
              <p className="text-xs text-slate-300">
                الرمز الصحيح في الموقع {targetIndex + 1} كان: {sequence[targetIndex]?.name}
              </p>
            </div>
          )}

          <div className="flex items-center justify-center gap-2.5 sm:gap-3 pt-3">
            {sequence.map((item, idx) => {
              const ItemIcon = item.Icon;
              return (
                <div
                  key={item.id}
                  className={`w-14 h-18 sm:w-16 sm:h-20 rounded-xl border flex flex-col items-center justify-center ${
                    idx === targetIndex
                      ? "border-amber-400 bg-amber-950/50 text-amber-300 shadow-md ring-1 ring-amber-400/40"
                      : "border-slate-800 bg-slate-950 text-slate-500"
                  }`}
                >
                  <ItemIcon className="w-6 h-6" />
                  <span className="text-[10px] font-mono mt-1">#{idx + 1}</span>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={startRound}
            className="mt-4 px-6 py-2.5 min-h-[44px] rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 mx-auto focus-visible:ring-2 focus-visible:ring-purple-500 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>جولة وميض جديدة</span>
          </button>
        </div>
      )}
    </div>
  );
};

