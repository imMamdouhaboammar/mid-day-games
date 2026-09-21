import React from "react";
import { PlayerStats, StoryCase } from "../types";
import {
  Flame,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Eye,
  BookOpen,
  Calendar,
  Compass,
  Zap,
  Timer,
  Target,
} from "lucide-react";
import {
  formatLastPlayedDate,
  getAverageCaseScore,
  getBestCaseScore,
} from "../utils/playerProgress";

interface BrainDashboardProps {
  playerStats: PlayerStats;
  cases: StoryCase[];
}

export const BrainDashboard: React.FC<BrainDashboardProps> = ({ playerStats, cases }) => {
  const averageScore = getAverageCaseScore(playerStats);
  const bestScore = getBestCaseScore(playerStats);
  const solvedCaseMap = new Map(cases.map((story) => [story.id, story]));

  const skillStats = new Map<string, { count: number; totalScore: number }>();
  for (const record of playerStats.solvedCases) {
    const story = solvedCaseMap.get(record.caseId);
    if (!story) continue;

    const current = skillStats.get(story.cognitiveSkillTrained) || {
      count: 0,
      totalScore: 0,
    };
    skillStats.set(story.cognitiveSkillTrained, {
      count: current.count + 1,
      totalScore: current.totalScore + record.score,
    });
  }

  const strongestSignals = [...skillStats.entries()]
    .map(([skill, stats]) => ({
      skill,
      count: stats.count,
      average: Math.round(stats.totalScore / stats.count),
    }))
    .sort((a, b) => b.count - a.count || b.average - a.average)
    .slice(0, 3);

  const totalThinkingSeconds = playerStats.solvedCases.reduce(
    (sum, record) => sum + Math.max(0, record.timeSpentSeconds || 0),
    0,
  );
  const thinkingMinutes = Math.round(totalThinkingSeconds / 60);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-5 card-bezel">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs text-slate-400 font-medium">نقاط اليقظة</span>
            <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-100 mb-1">
            {playerStats.sharpnessScore}
          </div>
          <p className="text-xs text-slate-400">نقاط مكتسبة من اللعب الفعلي</p>
        </div>

        <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-5 card-bezel">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs text-slate-400 font-medium">أيام التتابع</span>
            <div className="w-7 h-7 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-100 mb-1">
            {playerStats.streakDays} <span className="text-xs font-normal text-slate-400">يوم</span>
          </div>
          <p className="text-xs text-slate-400">يتغير فقط بعد نشاط في يوم جديد</p>
        </div>

        <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-5 card-bezel">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs text-slate-400 font-medium">القضايا المحلولة</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-100 mb-1">
            {playerStats.casesSolvedCount}
          </div>
          <p className="text-xs text-slate-400">قضايا فريدة تم إنهاؤها</p>
        </div>

        <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-5 card-bezel">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs text-slate-400 font-medium">جلسات التنشيط</span>
            <div className="w-7 h-7 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-100 mb-1">
            {playerStats.quickGamesPlayed}
          </div>
          <p className="text-xs text-slate-400">تمارين قصيرة مكتملة</p>
        </div>
      </div>

      <section className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 space-y-5 card-bezel" aria-labelledby="performance-heading">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
          <div>
            <h3 id="performance-heading" className="font-semibold text-slate-100 flex items-center gap-2 text-sm">
              <Target className="w-4 h-4 text-amber-400" />
              <span>قراءة من سجل لعبك</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">كل رقم هنا مشتق من نشاط مسجل، بدون نسب جاهزة أو تقديرات ثابتة.</p>
          </div>
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            آخر نشاط: {formatLastPlayedDate(playerStats)}
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-[#131b2d] border border-slate-800/80 rounded-xl p-4">
            <span className="text-xs text-slate-500">متوسط القضايا</span>
            <div className="mt-1 text-xl font-mono font-bold text-slate-100">
              {averageScore === null ? "لا يوجد" : `${averageScore}/100`}
            </div>
          </div>
          <div className="bg-[#131b2d] border border-slate-800/80 rounded-xl p-4">
            <span className="text-xs text-slate-500">أفضل نتيجة</span>
            <div className="mt-1 text-xl font-mono font-bold text-slate-100">
              {bestScore === null ? "لا يوجد" : `${bestScore}/100`}
            </div>
          </div>
          <div className="bg-[#131b2d] border border-slate-800/80 rounded-xl p-4">
            <span className="text-xs text-slate-500">وقت التفكير المقاس</span>
            <div className="mt-1 text-xl font-mono font-bold text-slate-100 flex items-center gap-1.5">
              <Timer className="w-4 h-4 text-slate-500" />
              <span>{thinkingMinutes} د</span>
            </div>
          </div>
          <div className="bg-[#131b2d] border border-slate-800/80 rounded-xl p-4">
            <span className="text-xs text-slate-500">إجمالي الاستراحات</span>
            <div className="mt-1 text-xl font-mono font-bold text-slate-100">
              {playerStats.totalBreakMinutes} د
            </div>
          </div>
        </div>

        {strongestSignals.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-700/80 p-5 text-xs sm:text-sm text-slate-400">
            بعد أول قضية محلولة، سيظهر هنا توزيع المهارات التي تدربت عليها ومتوسط نتيجتك في كل مهارة.
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-300">المهارات التي ظهرت في القضايا التي أنهيتها</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {strongestSignals.map((signal) => (
                <div key={signal.skill} className="bg-[#131b2d] border border-slate-800/80 rounded-xl p-4">
                  <div className="text-sm font-semibold text-slate-100 leading-snug">{signal.skill}</div>
                  <div className="text-xs text-slate-400 mt-2">
                    {signal.count} {signal.count === 1 ? "قضية" : "قضايا"} · متوسط {signal.average}/100
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 space-y-4 card-bezel">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <h3 className="font-semibold text-slate-100 flex items-center gap-2 text-xs sm:text-sm">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>ماذا تفعل بعد ذلك؟</span>
            </h3>
          </div>
          <div className="space-y-2.5 text-xs text-slate-300">
            <p className="leading-relaxed">
              {playerStats.casesSolvedCount === 0
                ? "ابدأ بقضية واحدة قصيرة. أول سجل حقيقي أهم من أي مؤشر."
                : averageScore !== null && averageScore < 70
                  ? "جرّب قضية أخرى من نفس المستوى قبل رفع الصعوبة، وركز على ربط الدليل بالفرضية."
                  : "غيّر نوع التحدي في الجلسة القادمة بين قضية وتمرين سريع حتى لا تصبح الاستجابة آلية."}
            </p>
            <p className="text-slate-500 leading-relaxed">
              هذه توصية بسيطة مبنية على سجلك المحلي وليست تقييما طبيا أو معرفيا.
            </p>
          </div>
        </div>

        <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 space-y-4 card-bezel">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <h3 className="font-semibold text-slate-100 flex items-center gap-2 text-xs sm:text-sm">
              <Eye className="w-4 h-4 text-slate-400" />
              <span>استراحة الشاشة</span>
            </h3>
          </div>

          <div className="space-y-2.5 text-xs text-slate-400">
            <div className="p-3 bg-[#131b2d] rounded-xl border border-slate-800/80">
              <h4 className="font-semibold text-slate-200 mb-0.5 text-xs sm:text-sm">20-20-20</h4>
              <p className="leading-relaxed text-xs text-slate-300">
                كل 20 دقيقة، انظر إلى نقطة تبعد نحو 6 أمتار لمدة 20 ثانية.
              </p>
            </div>

            <div className="p-3 bg-[#131b2d] rounded-xl border border-slate-800/80">
              <h4 className="font-semibold text-slate-200 mb-0.5 text-xs sm:text-sm">غيّر وضعك</h4>
              <p className="leading-relaxed text-xs text-slate-300">
                بعد الجلسة القصيرة، قم من مكانك أو حرّك الكتفين والرقبة قبل الرجوع للعمل.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 space-y-4 card-bezel" aria-labelledby="archive-heading">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <h3 id="archive-heading" className="font-semibold text-slate-100 flex items-center gap-2 text-xs sm:text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>سجل القضايا المنجزة</span>
          </h3>
          <span className="text-xs text-slate-400">{playerStats.solvedCases.length} قضية</span>
        </div>

        {playerStats.solvedCases.length === 0 ? (
          <div className="text-center py-8 space-y-2 text-slate-400 text-xs sm:text-sm">
            <BookOpen className="w-7 h-7 text-slate-600 mx-auto" />
            <p>لم تُحل أي قضية بعد.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-800/70 text-xs">
            {playerStats.solvedCases.map((rec) => (
              <div key={rec.caseId} className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="font-semibold text-slate-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-novel text-sm">{rec.caseTitle}</span>
                  </div>
                  <div className="text-slate-400 text-xs">الحكم: {rec.verdict}</div>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                    الدرجة: {rec.score}/100
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {rec.solvedAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
