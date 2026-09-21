import React, { useEffect, useRef } from "react";
import { Eye } from "lucide-react";

interface TimerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: (minutes: number) => void;
}

export const TimerMenu: React.FC<TimerMenuProps> = ({
  isOpen,
  onClose,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label="خيارات مؤقت استراحة الشاشة"
      className="absolute left-0 mt-2 w-48 bg-[#182133] border border-amber-900/40 rounded-xl shadow-2xl p-2.5 z-50 text-xs text-right"
    >
      <div className="font-bold text-slate-200 mb-2 pb-1 border-b border-slate-800 flex items-center justify-between">
        <span>مؤقت استراحة الشاشة</span>
        <Eye className="w-3.5 h-3.5 text-amber-400" />
      </div>
      <div className="space-y-1 mb-2">
        <button
          type="button"
          onClick={() => {
            onResetTimer(3);
            onClose();
          }}
          className="w-full text-right px-2.5 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 flex items-center justify-between transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <span>استراحة سريعة</span>
          <span className="text-amber-400 font-mono">3 دقائق</span>
        </button>
        <button
          type="button"
          onClick={() => {
            onResetTimer(5);
            onClose();
          }}
          className="w-full text-right px-2.5 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 flex items-center justify-between transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <span>جلسة رواية ولغز</span>
          <span className="text-amber-400 font-mono">5 دقائق</span>
        </button>
        <button
          type="button"
          onClick={() => {
            onResetTimer(10);
            onClose();
          }}
          className="w-full text-right px-2.5 py-1.5 rounded-lg hover:bg-slate-800 text-slate-300 flex items-center justify-between transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <span>استراحة عميقة</span>
          <span className="text-amber-400 font-mono">10 دقائق</span>
        </button>
      </div>
      <button
        type="button"
        onClick={() => {
          onToggleTimer();
          onClose();
        }}
        className={`w-full py-1.5 rounded-lg font-bold text-center transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 ${
          isTimerRunning
            ? "bg-red-950/80 text-red-300 hover:bg-red-900"
            : "bg-amber-600 text-slate-950 hover:bg-amber-500"
        }`}
      >
        {isTimerRunning ? "إيقاف مؤقت" : "بدء المؤقت الآن"}
      </button>
    </div>
  );
};
