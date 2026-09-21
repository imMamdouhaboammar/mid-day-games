import React, { useEffect, useRef } from "react";
import { CloudRain, Library, Waves } from "lucide-react";
import { soundController } from "../../utils/audioSynth";

interface AmbientMenuProps {
  isOpen: boolean;
  onClose: () => void;
  ambientMode: "off" | "rain" | "library" | "binaural";
  setAmbientMode: (mode: "off" | "rain" | "library" | "binaural") => void;
}

export const AmbientMenu: React.FC<AmbientMenuProps> = ({
  isOpen,
  onClose,
  ambientMode,
  setAmbientMode,
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

  const toggleAmbient = (mode: "rain" | "library" | "binaural") => {
    if (ambientMode === mode) {
      soundController.stopAmbient();
      setAmbientMode("off");
    } else {
      soundController.playAmbient(mode);
      setAmbientMode(mode);
    }
    onClose();
  };

  const stopAmbient = () => {
    soundController.stopAmbient();
    setAmbientMode("off");
    onClose();
  };

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label="قائمة أصوات التركيز وصفاء الذهن"
      className="absolute left-0 mt-2 w-52 bg-[#182133] border border-amber-900/40 rounded-xl shadow-2xl p-2.5 z-50 text-xs text-right"
    >
      <div className="font-bold text-slate-200 mb-2 pb-1 border-b border-slate-800 flex items-center justify-between">
        <span>أصوات صفاء الذهن</span>
        <Waves className="w-3.5 h-3.5 text-amber-400" />
      </div>
      <div className="space-y-1">
        <button
          type="button"
          onClick={() => toggleAmbient("rain")}
          className={`w-full text-right px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 ${
            ambientMode === "rain"
              ? "bg-amber-500/20 text-amber-300 font-bold"
              : "hover:bg-slate-800 text-slate-300"
          }`}
        >
          <span className="flex items-center gap-2">
            <CloudRain className="w-3.5 h-3.5 text-blue-400" />
            <span>صوت المطر العازل للضجيج</span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => toggleAmbient("library")}
          className={`w-full text-right px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 ${
            ambientMode === "library"
              ? "bg-amber-500/20 text-amber-300 font-bold"
              : "hover:bg-slate-800 text-slate-300"
          }`}
        >
          <span className="flex items-center gap-2">
            <Library className="w-3.5 h-3.5 text-amber-400" />
            <span>أجواء مكتبة دافئة</span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => toggleAmbient("binaural")}
          className={`w-full text-right px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 ${
            ambientMode === "binaural"
              ? "bg-amber-500/20 text-amber-300 font-bold"
              : "hover:bg-slate-800 text-slate-300"
          }`}
        >
          <span className="flex items-center gap-2">
            <Waves className="w-3.5 h-3.5 text-purple-400" />
            <span>ترددات ألفا (10Hz لليقظة)</span>
          </span>
        </button>
        {ambientMode !== "off" && (
          <button
            type="button"
            onClick={stopAmbient}
            className="w-full text-center mt-2 pt-2 border-t border-slate-800 text-red-400 hover:text-red-300 py-1 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            إيقاف الصوت
          </button>
        )}
      </div>
    </div>
  );
};
