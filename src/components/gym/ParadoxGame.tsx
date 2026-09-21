import React, { useState } from "react";
import { soundController } from "../../utils/audioSynth";
import { GAME_CONSTANTS } from "../../config/gameConstants";
import { Trophy, RotateCcw, ArrowLeft, Flame, Target } from "lucide-react";

interface ParadoxItem {
  id: number;
  options: string[];
  impossibleIndex: number;
  explanation: string;
}

const PARADOX_QUESTIONS: ParadoxItem[] = [
  {
    id: 1,
    options: [
      "سافر السائح من القاهرة إلى دبي بالطائرة واستغرقت رحلته ساعتين.",
      "نظر المتسلق إلى ظله وقت الظهيرة تماماً في يوم صيفي فرآه ممتداً لأمتار أمامه.",
      "قرأ الباحث كتاباً قديماً من 400 صفحة في هدوء مكتبته.",
    ],
    impossibleIndex: 1,
    explanation: "في وقت الظهيرة الصيفية تكون الشمس عمودية تقريباً ولا يمكن للظل أن يمتد لأمتار طويلة أمام الشخص!",
  },
  {
    id: 2,
    options: [
      "احتفل الجد بعيد ميلاده الستين في الثلاثين من شهر فبراير.",
      "هطل المطر الغزير على شوارع الإسكندرية لثلاثة أيام متواصلة.",
      "أوقد الحارس موقداً صغيراً من الخشب في ليلة شاتية.",
    ],
    impossibleIndex: 0,
    explanation: "شهر فبراير في التقويم الميلادي لا يتجاوز 28 أو 29 يوماً أبداً؛ لا وجود ليوم 30 فبراير!",
  },
  {
    id: 3,
    options: [
      "التقى الصديقان في مقهى مطل على البحر وتبادلا الحديث.",
      "رأى الشاهد وجه السارق ينعكس في المرآة المستوية المعلقة أمامه وظهره ملاصق لها.",
      "سمع صوت رنين الهاتف من الغرفة المجاورة في منتصف الليل.",
    ],
    impossibleIndex: 1,
    explanation: "المرايا المستوية لا تعكس وجه الشخص إذا كان ظهره ملاصقاً لها والنظر في اتجاه معاكس!",
  },
  {
    id: 4,
    options: [
      "استيقظ المهندس في السادسة صباحاً وشرب قهوته على شرفته.",
      "أعلن الطيار أن درجة حرارة الجو في ارتفاع بينما نصعد لارتفاع 30 ألف قدم بدون تدفئة.",
      "كتب الطالب ملخص مادته على حاسوبه المحمول.",
    ],
    impossibleIndex: 1,
    explanation: "في طبقة التروبوسفير تنخفض درجة حرارة الهواء بشدة مع الارتفاع الشاهق وليس العكس!",
  },
];

interface ParadoxGameProps {
  onFinish: (pts: number) => void;
}

export const ParadoxGame: React.FC<ParadoxGameProps> = ({ onFinish }) => {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [scorePopup, setScorePopup] = useState<number | null>(null);

  const cur = PARADOX_QUESTIONS[idx];

  const handleChoose = (optIndex: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(optIndex);
    const isCorrect = optIndex === cur.impossibleIndex;
    let nextStreak = streak;

    if (isCorrect) {
      nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > highestStreak) setHighestStreak(nextStreak);

      if (nextStreak >= 3) {
        soundController.streakSfx();
      } else {
        soundController.scoreSfx();
      }

      setScore((s) => s + GAME_CONSTANTS.POINTS.PARADOX_CORRECT);
      setScorePopup(GAME_CONSTANTS.POINTS.PARADOX_CORRECT);
    } else {
      setStreak(0);
      soundController.wrongSfx();
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), GAME_CONSTANTS.SPECTACLE.SHAKE_DURATION_MS);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    setSelectedOpt(null);
    setShowResult(false);
    setScorePopup(null);
    if (idx + 1 >= PARADOX_QUESTIONS.length) {
      setIsDone(true);
      onFinish(score);
    } else {
      setIdx((i) => i + 1);
    }
  };

  const restart = () => {
    setIdx(0);
    setScore(0);
    setStreak(0);
    setIsDone(false);
    setSelectedOpt(null);
    setShowResult(false);
    setScorePopup(null);
  };

  if (isDone) {
    return (
      <div className="text-center py-8 space-y-4 animate-pop">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
          <Trophy className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold font-novel text-amber-200">
          اكتمل تدريب التحري المنطقي وكشف التناقضات!
        </h3>
        <p className="text-slate-300 text-sm">
          أحرزت <span className="font-bold text-amber-400 font-mono text-xl">{score}</span> نقطة في سرعة التقاط التناقضات.
        </p>
        {highestStreak >= 2 && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-bold">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>تتابع استنتاجي دقيق: {highestStreak} متتالية!</span>
          </div>
        )}
        <button
          type="button"
          onClick={restart}
          className="mt-4 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 mx-auto min-h-[44px] focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <RotateCcw className="w-4 h-4" />
          <span>إعادة المحاولة</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${isShaking ? "animate-shake" : ""}`}>
      <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span>السؤال {idx + 1} من {PARADOX_QUESTIONS.length}</span>
          {streak >= 2 && (
            <span className="flex items-center gap-1 bg-orange-500/20 border border-orange-500/30 text-orange-300 px-2 py-0.5 rounded-full font-bold animate-pop">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>تتابع: {streak}x</span>
            </span>
          )}
        </div>
        <span className="text-amber-300 font-bold hidden sm:inline">المطلوب: انقر على العبارة المستحيلة أو المتناقضة منطقياً</span>
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

      <div className="space-y-3">
        {cur.options.map((opt, oIdx) => {
          const isChosen = selectedOpt === oIdx;
          const isTheImpossible = oIdx === cur.impossibleIndex;

          return (
            <button
              type="button"
              key={oIdx}
              onClick={() => handleChoose(oIdx)}
              disabled={selectedOpt !== null}
              className={`w-full text-right p-4 rounded-xl border text-sm transition-all flex items-start gap-3 min-h-[48px] focus-visible:ring-2 focus-visible:ring-amber-500 ${
                showResult
                  ? isTheImpossible
                    ? "bg-emerald-950/40 border-emerald-500 text-emerald-100 font-bold shadow-md shadow-emerald-950/30"
                    : isChosen
                    ? "bg-red-950/40 border-red-500 text-red-100"
                    : "bg-slate-900/40 border-slate-800 text-slate-400 opacity-60"
                  : "bg-slate-900 border-slate-800 hover:border-amber-600/50 text-slate-200 active:scale-[0.99]"
              }`}
            >
              <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                {oIdx + 1}
              </span>
              <p className="leading-relaxed font-novel text-base">{opt}</p>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="bg-amber-950/30 border border-amber-800/40 p-4 rounded-xl text-xs text-amber-200 space-y-2.5 animate-pop">
          <div className="font-bold text-amber-400 flex items-center gap-1.5">
            <Target className="w-4 h-4" />
            <span>تحليل المغالطة والتناقض الخفي:</span>
          </div>
          <p className="leading-relaxed font-novel text-sm text-slate-200">{cur.explanation}</p>
          <div className="pt-2">
            <button
              type="button"
              onClick={nextQuestion}
              className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 min-h-[44px] transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>الانتقال للتحدي التالي</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

