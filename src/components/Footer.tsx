import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-[#0c1017] py-4 text-center text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-amber-500 font-novel">يَقَظَة</span>
          <span>- رفيقك اليومي لاستراحات العمل الذكية وشحذ الذهن</span>
        </div>
        <div className="text-slate-500 text-xs">
          مدعوم بنماذج Gemini 3.8 Flash لابتكار الروايات وتحليل الاستنتاجات المنطقية
        </div>
      </div>
    </footer>
  );
};
