import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Coffee } from "lucide-react";

interface BreakModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExtend: (minutes: number) => void;
}

export const BreakModal: React.FC<BreakModalProps> = ({
  isOpen,
  onClose,
  onExtend,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="break-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-pop"
    >
      <div className="bg-[#0f1523] border border-slate-800/90 rounded-2xl p-6 sm:p-7 max-w-sm w-full space-y-4 text-center card-bezel shadow-2xl">
        <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
          <Coffee className="w-6 h-6" />
        </div>
        <h3 id="break-modal-title" className="text-lg font-bold font-novel text-slate-100">
          اكتملت استراحتك الذهنية
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-novel">
          أحسنت! أرحت عينيك ومرّنت ذهنك. عقلك الآن في أوج يقظته واستعداده لإكمال مهامك بصفاء وتركيز.
        </p>
        <div className="flex items-center justify-center gap-2.5 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            العودة للعمل بتركيز
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onExtend(3);
            }}
            className="px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700 font-medium text-xs transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            تمديد 3 دقائق
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
