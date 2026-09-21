import React from "react";
import { UserCheck } from "lucide-react";

interface Suspect {
  name: string;
  role: string;
  statement: string;
}

interface SuspectsListProps {
  suspects: Suspect[];
}

export const SuspectsList: React.FC<SuspectsListProps> = ({ suspects }) => {
  if (!suspects || suspects.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-slate-300 font-medium text-xs">
        <UserCheck className="w-4 h-4 text-amber-400" />
        <span>إفادات الأطراف والشهود</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {suspects.map((s, idx) => (
          <div
            key={idx}
            className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-4 sm:p-5 card-bezel space-y-2"
          >
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/70">
              <h3 className="font-semibold text-slate-100 text-xs sm:text-sm">{s.name}</h3>
              <span className="text-[11px] text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                {s.role}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-novel">
              "{s.statement}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
