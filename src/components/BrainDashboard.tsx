import React from "react";
import { PlayerStats } from "../types";
import {
  Flame,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Eye,
  BookOpen,
  Calendar,
  Compass,
  Zap
} from "lucide-react";

interface BrainDashboardProps {
  playerStats: PlayerStats;
}

export const BrainDashboard: React.FC<BrainDashboardProps> = ({ playerStats }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-5 card-bezel">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs text-slate-400 font-medium">اليقظة الذهنية</span>
            <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Compass className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-100 mb-1">
            {playerStats.sharpnessScore}
          </div>
          <p className="text-xs text-slate-400">
            مؤشر الحضور والاستنتاج
          </p>
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
          <p className="text-xs text-slate-400">
            استراحات متواصلة
          </p>
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
          <p className="text-xs text-slate-400">
            ألغاز تم حلها بنجاح
          </p>
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
          <p className="text-xs text-slate-400">
            تمارين سريعة مكتملة
          </p>
        </div>
      </div>

      {/* Cognitive Competency Analysis & Health Protocol */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 space-y-4 card-bezel">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <h3 className="font-semibold text-slate-100 flex items-center gap-2 text-xs sm:text-sm">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>الكفاءات الإدراكية</span>
            </h3>
            <span className="text-xs text-slate-400">تحليل الأداء</span>
          </div>

          <div className="space-y-3.5">
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-300 font-medium">التفكير الاستنباطي</span>
                <span className="font-mono text-amber-400 font-bold text-xs">88%</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-amber-500 rounded-full w-[88%]" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-300 font-medium">كبح التشتت</span>
                <span className="font-mono text-emerald-400 font-bold text-xs">82%</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-emerald-500 rounded-full w-[82%]" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-300 font-medium">الذاكرة العاملة</span>
                <span className="font-mono text-purple-400 font-bold text-xs">76%</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-purple-500 rounded-full w-[76%]" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-300 font-medium">قوة الملاحظة</span>
                <span className="font-mono text-blue-400 font-bold text-xs">91%</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-blue-500 rounded-full w-[91%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Worker Health Protocol */}
        <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 space-y-4 card-bezel">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <h3 className="font-semibold text-slate-100 flex items-center gap-2 text-xs sm:text-sm">
              <Eye className="w-4 h-4 text-slate-400" />
              <span>إرشادات العمل المكتبي</span>
            </h3>
            <span className="text-xs text-slate-400">
              صحة الذهن والعينين
            </span>
          </div>

          <div className="space-y-2.5 text-xs text-slate-400">
            <div className="p-3 bg-[#131b2d] rounded-xl border border-slate-800/80">
              <h4 className="font-semibold text-slate-200 mb-0.5 text-xs sm:text-sm">قاعدة 20-20-20</h4>
              <p className="leading-relaxed text-xs text-slate-300">
                كل 20 دقيقة، انظر إلى نقطة تبعد 6 أمتار لمدة 20 ثانية لإرخاء عضلات العين.
              </p>
            </div>

            <div className="p-3 bg-[#131b2d] rounded-xl border border-slate-800/80">
              <h4 className="font-semibold text-slate-200 mb-0.5 text-xs sm:text-sm">كسر الخمول الذهني</h4>
              <p className="leading-relaxed text-xs text-slate-300">
                بدلاً من التمرير اللانهائي العشوائي، العب لغزاً قصيراً يعيد شحن الانتباه.
              </p>
            </div>

            <div className="p-3 bg-[#131b2d] rounded-xl border border-slate-800/80">
              <h4 className="font-semibold text-slate-200 mb-0.5 text-xs sm:text-sm">إرخاء عضلات الرقبة</h4>
              <p className="leading-relaxed text-xs text-slate-300">
                أرجع كتفيك للخلف 5 مرات وخذ ثلاثة أنفاس بطنية عميقة.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solved Cases Archive */}
      <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 space-y-4 card-bezel">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <h3 className="font-semibold text-slate-100 flex items-center gap-2 text-xs sm:text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>سجل القضايا المنجزة</span>
          </h3>
          <span className="text-xs text-slate-400">
            {playerStats.solvedCases.length} قضية
          </span>
        </div>

        {playerStats.solvedCases.length === 0 ? (
          <div className="text-center py-8 space-y-2 text-slate-400 text-xs sm:text-sm">
            <BookOpen className="w-7 h-7 text-slate-600 mx-auto" />
            <p>لم تُحل أي قضية بعد في الجلسة الحالية.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-800/70 text-xs">
            {playerStats.solvedCases.map((rec, idx) => (
              <div key={idx} className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="font-semibold text-slate-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-novel text-sm">{rec.caseTitle}</span>
                  </div>
                  <div className="text-slate-400 text-xs">
                    الحكم: {rec.verdict}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
                  <span className="bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">الدرجة: {rec.score}/100</span>
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
      </div>
    </div>
  );
};
