# Unslop Autopilot Report

## 1. Executive Summary
**Score:** 0/100
**Readiness:** blocked
**Stop reason:** no-safe-repairs
> **Decision:** Do not hand this to an AI coding agent yet. Resolve errors and blocked source issues first.


**Totals:** 98 Blockers | 75 Warnings | 24 Info

Autopilot was executed in **safe-fix** mode. It applied safe, low-risk deterministic source code fixes and verified them against available project checks.

## Before / After

| Metric | Before | After | Delta |
| :--- | :---: | :---: | :---: |
| **Unslop Score** | `0/100` | `0/100` | **+0** |
| **Blockers / Errors** | `98` | `98` | **-0** |
| **Source Findings** | `194` | `194` | **-0** |

## 2. Top Blockers

- **[`sparkle, brain, or magic icon default (anti-slop)`]** at `/app/applet/src/App.tsx`
  - Root cause: Code implementation error or omission
  - Fix strategy: Fix the flagged source-level pattern, then rerun `npx unslop-preflight scan` or `npx unslop-preflight autopilot`.
  - Verify: N/A
- **[`blind 100vh full-page height (V2)`]** at `/app/applet/src/App.tsx`
  - Root cause: Code implementation error or omission
  - Fix strategy: Fix the flagged source-level pattern, then rerun `npx unslop-preflight scan` or `npx unslop-preflight autopilot`.
  - Verify: N/A
- **[`Tailwind h-screen used without dvh/min-h fallback (V4)`]** at `/app/applet/src/App.tsx`
  - Root cause: Code implementation error or omission
  - Fix strategy: Fix the flagged source-level pattern, then rerun `npx unslop-preflight scan` or `npx unslop-preflight autopilot`.
  - Verify: N/A
- **[`decorative glass default (anti-slop)`]** at `/app/applet/src/App.tsx`
  - Root cause: Code implementation error or omission
  - Fix strategy: Fix the flagged source-level pattern, then rerun `npx unslop-preflight scan` or `npx unslop-preflight autopilot`.
  - Verify: N/A
- **[`sparkle, brain, or magic icon default (anti-slop)`]** at `/app/applet/src/components/AICaseGenerator.tsx`
  - Root cause: Code implementation error or omission
  - Fix strategy: Fix the flagged source-level pattern, then rerun `npx unslop-preflight scan` or `npx unslop-preflight autopilot`.
  - Verify: N/A

## 3. Source Scan Stats

- Files scanned: 12
- Files skipped: 0
- Source findings: 194
- Scanner failures: 0
- Duration: 209ms
- Scanners run: ui, accessibility, modular
- Scanners skipped: none

## 5. Pass History

| Pass | Before | After | Safe repairs | Source findings | Scanner failures | Stop reason |
|------|--------|-------|--------------|-----------------|------------------|-------------|
| 1 | 0 (blocked) | 0 (blocked) | 0 | 194 | 0 | no-safe-repairs |

## 6. Safe Documentation Repairs Applied

No safe documentation repairs were applied.

## 7. Source Code Issues Requiring Manual/Agent Action

- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/App.tsx:12`: import { CheckCircle2, Coffee, Sparkles, X } from "lucide-react";
- **blind 100vh full-page height (V2)** at `/app/applet/src/App.tsx:161`: <div className="min-h-screen bg-[#0f141c] text-[#f1f3f7] flex flex-col font-ui selection:bg-amber-600/30 selection:text-amber-200">
- **Tailwind h-screen used without dvh/min-h fallback (V4)** at `/app/applet/src/App.tsx:161`: <div className="min-h-screen bg-[#0f141c] text-[#f1f3f7] flex flex-col font-ui selection:bg-amber-600/30 selection:text-amber-200">
- **decorative glass default (anti-slop)** at `/app/applet/src/App.tsx:175`: <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AICaseGenerator.tsx:5`: Sparkles,
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AICaseGenerator.tsx:6`: Brain,
- **generic gradient identity (B2)** at `/app/applet/src/components/AICaseGenerator.tsx:141`: <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-purple-950/40 border border-amber-600/30 rounded-2xl p-6 shadow-xl">
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AICaseGenerator.tsx:144`: <Sparkles className="w-5 h-5" />
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AICaseGenerator.tsx:210`: <Brain className="w-4 h-4 text-emerald-400" />
- **focus outline removed, verify focus-visible fallback (A2/A4)** at `/app/applet/src/components/AICaseGenerator.tsx:245`: className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder:text-slate-500 focus:focus-visible:outline-none focus-v
- **generic gradient identity (B2)** at `/app/applet/src/components/AICaseGenerator.tsx:260`: className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm s
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AICaseGenerator.tsx:269`: <Sparkles className="w-4 h-4" />
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AntiBrainRotGym.tsx:5`: Brain,
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AntiBrainRotGym.tsx:13`: Sparkles,
- **generic gradient identity (B2)** at `/app/applet/src/components/AntiBrainRotGym.tsx:27`: <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-amber-950/40 border border-emerald-500/30 rounded-2xl p-6 shadow-xl">
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AntiBrainRotGym.tsx:79`: <Brain className="w-4 h-4 text-amber-400" />
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AntiBrainRotGym.tsx:94`: <Sparkles className="w-4 h-4 text-purple-400" />
- **emoji used in UI source (icon system)** at `/app/applet/src/components/AntiBrainRotGym.tsx:407`: const SYMBOLS = ["⚱️", "📜", "🗝️", "🧭", "🕯️", "⏳", "🗡️", "💎"];
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/AntiBrainRotGym.tsx:458`: <Brain className="w-12 h-12 text-purple-400 mx-auto animate-pulse" />
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/BrainDashboard.tsx:6`: Brain,
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/BrainDashboard.tsx:12`: Sparkles,
- **blanket overflow:hidden on layout container (D2)** at `/app/applet/src/components/BrainDashboard.tsx:27`: <div className="bg-[#131926] border border-amber-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">
- **sparkle, brain, or magic icon default (anti-slop)** at `/app/applet/src/components/BrainDashboard.tsx:31`: <Brain className="w-4 h-4" />
- **blanket overflow:hidden on layout container (D2)** at `/app/applet/src/components/BrainDashboard.tsx:43`: <div className="bg-[#131926] border border-orange-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">
- **blanket overflow:hidden on layout container (D2)** at `/app/applet/src/components/BrainDashboard.tsx:59`: <div className="bg-[#131926] border border-emerald-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">

## 8. Evidence Table

| Severity | Type | Rule | Location | Symptom / Excerpt | Confidence |
|----------|------|------|----------|-------------------|------------|
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/App.tsx:12` | import { CheckCircle2, Coffee, Sparkles, X } from "lucide-react"; | high |
| ERROR | ui | `blind 100vh full-page height (V2)` | `/app/applet/src/App.tsx:161` | <div className="min-h-screen bg-[#0f141c] text-[#f1f3f7] flex flex-col font-ui selection:bg-amber-600/30 selection:text-amber-200"> | high |
| ERROR | ui | `Tailwind h-screen used without dvh/min-h fallback (V4)` | `/app/applet/src/App.tsx:161` | <div className="min-h-screen bg-[#0f141c] text-[#f1f3f7] flex flex-col font-ui selection:bg-amber-600/30 selection:text-amber-200"> | high |
| ERROR | ui | `decorative glass default (anti-slop)` | `/app/applet/src/App.tsx:175` | <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AICaseGenerator.tsx:5` | Sparkles, | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AICaseGenerator.tsx:6` | Brain, | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/AICaseGenerator.tsx:141` | <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-purple-950/40 border border-amber-600/30 rounded-2xl p-6 shadow-xl"> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AICaseGenerator.tsx:144` | <Sparkles className="w-5 h-5" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AICaseGenerator.tsx:210` | <Brain className="w-4 h-4 text-emerald-400" /> | high |
| ERROR | ui | `focus outline removed, verify focus-visible fallback (A2/A4)` | `/app/applet/src/components/AICaseGenerator.tsx:245` | className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder:text-slate-500 focus:focus-visible:outline-none focus-v | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/AICaseGenerator.tsx:260` | className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm s | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AICaseGenerator.tsx:269` | <Sparkles className="w-4 h-4" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AntiBrainRotGym.tsx:5` | Brain, | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AntiBrainRotGym.tsx:13` | Sparkles, | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/AntiBrainRotGym.tsx:27` | <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-amber-950/40 border border-emerald-500/30 rounded-2xl p-6 shadow-xl"> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AntiBrainRotGym.tsx:79` | <Brain className="w-4 h-4 text-amber-400" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AntiBrainRotGym.tsx:94` | <Sparkles className="w-4 h-4 text-purple-400" /> | high |
| ERROR | ui | `emoji used in UI source (icon system)` | `/app/applet/src/components/AntiBrainRotGym.tsx:407` | const SYMBOLS = ["⚱️", "📜", "🗝️", "🧭", "🕯️", "⏳", "🗡️", "💎"]; | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/AntiBrainRotGym.tsx:458` | <Brain className="w-12 h-12 text-purple-400 mx-auto animate-pulse" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/BrainDashboard.tsx:6` | Brain, | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/BrainDashboard.tsx:12` | Sparkles, | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/BrainDashboard.tsx:27` | <div className="bg-[#131926] border border-amber-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden"> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/BrainDashboard.tsx:31` | <Brain className="w-4 h-4" /> | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/BrainDashboard.tsx:43` | <div className="bg-[#131926] border border-orange-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden"> | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/BrainDashboard.tsx:59` | <div className="bg-[#131926] border border-emerald-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden"> | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/BrainDashboard.tsx:75` | <div className="bg-[#131926] border border-purple-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden"> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/BrainDashboard.tsx:96` | <Brain className="w-5 h-5 text-amber-400" /> | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/BrainDashboard.tsx:108` | <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"> | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/BrainDashboard.tsx:109` | <div className="h-full bg-gradient-to-l from-amber-400 to-amber-600 rounded-full w-[88%]" /> | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/BrainDashboard.tsx:118` | <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"> | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/BrainDashboard.tsx:119` | <div className="h-full bg-gradient-to-l from-emerald-400 to-emerald-600 rounded-full w-[82%]" /> | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/BrainDashboard.tsx:128` | <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"> | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/BrainDashboard.tsx:129` | <div className="h-full bg-gradient-to-l from-purple-400 to-purple-600 rounded-full w-[76%]" /> | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/BrainDashboard.tsx:138` | <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"> | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/BrainDashboard.tsx:139` | <div className="h-full bg-gradient-to-l from-blue-400 to-blue-600 rounded-full w-[91%]" /> | high |
| ERROR | ui | `emoji used in UI source (icon system)` | `/app/applet/src/components/BrainDashboard.tsx:172` | ⚡ | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/BrainDashboard.tsx:175` | <h4 className="font-bold text-slate-200 text-xs mb-0.5">مكافحة التصفح السلبي (Brain Rot)</h4> | high |
| ERROR | ui | `emoji used in UI source (icon system)` | `/app/applet/src/components/BrainDashboard.tsx:184` | 🧘 | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/CaseReader.tsx:12` | Sparkles, | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/CaseReader.tsx:195` | <div className="bg-gradient-to-br from-[#161f30] to-[#121824] border border-amber-900/40 rounded-2xl p-6 shadow-xl relative overflow-hidden"> | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/CaseReader.tsx:195` | <div className="bg-gradient-to-br from-[#161f30] to-[#121824] border border-amber-900/40 rounded-2xl p-6 shadow-xl relative overflow-hidden"> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/CaseReader.tsx:357` | <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/CaseReader.tsx:366` | <div className="bg-gradient-to-b from-[#141b27] to-[#10151f] border-2 border-amber-600/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl"> | high |
| ERROR | ui | `emoji used in UI source (icon system)` | `/app/applet/src/components/CaseReader.tsx:410` | {isSelected ? (hyp.isCorrect ? "✓" : "✗") : "○"} | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/CaseReader.tsx:436` | <Sparkles className="w-3.5 h-3.5" /> | high |
| ERROR | ui | `focus outline removed, verify focus-visible fallback (A2/A4)` | `/app/applet/src/components/CaseReader.tsx:448` | className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-50 | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/CaseReader.tsx:478` | <Sparkles className="w-4 h-4 text-amber-400" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/CasesList.tsx:8` | Sparkles, | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/CasesList.tsx:40` | <div className="relative rounded-3xl bg-gradient-to-br from-[#182236] via-[#121824] to-[#1a1528] border border-amber-900/40 p-6 sm:p-8 overflow-hidden shadow-2x | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/CasesList.tsx:40` | <div className="relative rounded-3xl bg-gradient-to-br from-[#182236] via-[#121824] to-[#1a1528] border border-amber-900/40 p-6 sm:p-8 overflow-hidden shadow-2x | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/CasesList.tsx:44` | <Sparkles className="w-3.5 h-3.5" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/CasesList.tsx:53` | العمل المتواصل لساعات أمام اللابتوب يسبب خمولاً ذهنياً وتشتتاً (Brain Rot). | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/CasesList.tsx:78` | <Sparkles className="w-4 h-4 text-amber-400" /> | high |
| ERROR | ui | `blanket overflow:hidden on layout container (D2)` | `/app/applet/src/components/CasesList.tsx:125` | className="group bg-[#131926] hover:bg-[#161e2e] border border-slate-800 hover:border-amber-700/50 rounded-2xl p-5 shadow-lg transition-all cursor-pointer flex  | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/CasesList.tsx:129` | <Sparkles className="w-3 h-3" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/Header.tsx:6` | Brain, | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/Header.tsx:7` | Sparkles, | high |
| ERROR | ui | `decorative glass default (anti-slop)` | `/app/applet/src/components/Header.tsx:68` | <header className="sticky top-0 z-40 bg-[#121824]/90 backdrop-blur-md border-b border-amber-900/30 text-slate-100"> | high |
| ERROR | ui | `generic gradient identity (B2)` | `/app/applet/src/components/Header.tsx:78` | <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-600/20 group-hover:sc | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/Header.tsx:79` | <Brain className="w-6 h-6 text-slate-950" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/Header.tsx:107` | <Brain className="w-4 h-4 text-amber-400" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/Header.tsx:292` | <Brain className="w-4 h-4 text-emerald-400" /> | high |
| ERROR | ui | `sparkle, brain, or magic icon default (anti-slop)` | `/app/applet/src/components/Header.tsx:307` | <Sparkles className="w-4 h-4 text-amber-400" /> | high |
| ERROR | a11y | `<input> has no label association (add a <label for>, id, or aria-label)` | `/app/applet/src/components/AICaseGenerator.tsx:240` | <input             type="text"             value={customIdea}             onChange={(e) => | high |
| ERROR | a11y | `clickable <div> missing role, tabindex, key handler (prefer <button>/<a>)` | `/app/applet/src/components/AntiBrainRotGym.tsx:362` | <div               key={oIdx}               onClick={() => | high |
| ERROR | a11y | `heading level jumps from h2 to h4 (skipped level)` | `/app/applet/src/components/CaseReader.tsx:261` | <h4> | high |
| ERROR | a11y | `<textarea> has no label association (add a <label for>, id, or aria-label)` | `/app/applet/src/components/CaseReader.tsx:443` | <textarea               rows={3}               value={customTheory}               onChange={(e) => | high |
| ERROR | a11y | `clickable <div> missing role, tabindex, key handler (prefer <button>/<a>)` | `/app/applet/src/components/CaseReader.tsx:291` | <div                 key={clue.id}                 onClick={() => | high |
| ERROR | a11y | `clickable <div> missing role, tabindex, key handler (prefer <button>/<a>)` | `/app/applet/src/components/CaseReader.tsx:391` | <div                   key={hyp.id}                   onClick={() => | high |
| ERROR | a11y | `clickable <div> missing role, tabindex, key handler (prefer <button>/<a>)` | `/app/applet/src/components/CasesList.tsx:122` | <div               key={story.id}               onClick={() => | high |
| ERROR | a11y | `clickable <div> missing role, tabindex, key handler (prefer <button>/<a>)` | `/app/applet/src/components/Header.tsx:74` | <div                onClick={() => | high |
| WARNING | modular | `motion-without-reduced-motion-review` | `/app/applet/src/App.tsx:209` | Motion behavior detected without a reduced-motion guard. | high |
| WARNING | modular | `collection-map-empty-state-review` | `/app/applet/src/App.tsx:62` | Collection rendering appears to lack an empty state. | high |
| WARNING | modular | `height-100vh-mobile-risk` | `/app/applet/src/App.tsx:161` | <div className="min-h-screen bg-[#0f141c] text-[#f1f3f7] flex flex-col font-ui selection:bg-amber-600/30 selection:text-amber-200"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/App.tsx:161` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/App.tsx:176` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/App.tsx:282` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/App.tsx:288` | <div className="text-slate-500 text-[11px]"> | high |
| WARNING | modular | `overlay-missing-portal` | `/app/applet/src/App.tsx:175` | High z-index overlay detected without a Portal. Use portals for safe stacking. | high |
| WARNING | modular | `collection-map-empty-state-review` | `/app/applet/src/components/AICaseGenerator.tsx:166` | Collection rendering appears to lack an empty state. | high |
| WARNING | modular | `async-view-state-review` | `/app/applet/src/components/AICaseGenerator.tsx:57` | Async view should prove loading, error, and empty states before handoff. | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/AICaseGenerator.tsx:144` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/AICaseGenerator.tsx:158` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/AICaseGenerator.tsx:171` | Broad transition-all found. Prefer targeted transition properties. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/AICaseGenerator.tsx:195` | Broad transition-all found. Prefer targeted transition properties. | high |
| ERROR | modular | `no-brain-icons-source` | `/app/applet/src/components/AICaseGenerator.tsx:210` | Brain icons or emojis detected in source. Brain icons are considered AI slop. Remove or replace with standard icons. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/AICaseGenerator.tsx:219` | Broad transition-all found. Prefer targeted transition properties. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/AICaseGenerator.tsx:238` | <span className="text-[11px] text-slate-500 font-normal">مثال: في مكتبة إسكندرية، أو قصر شتوي</span> | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/AICaseGenerator.tsx:269` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `collection-map-empty-state-review` | `/app/applet/src/components/AntiBrainRotGym.tsx:223` | Collection rendering appears to lack an empty state. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/AntiBrainRotGym.tsx:54` | Broad transition-all found. Prefer targeted transition properties. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/AntiBrainRotGym.tsx:62` | <div className="text-[11px] text-slate-400">مقاومة التشتت وكبح التلقائية</div> | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/AntiBrainRotGym.tsx:69` | Broad transition-all found. Prefer targeted transition properties. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/AntiBrainRotGym.tsx:77` | <div className="text-[11px] text-slate-400">اكتشاف المستحيل المنطقي في ثوانٍ</div> | high |
| ERROR | modular | `no-brain-icons-source` | `/app/applet/src/components/AntiBrainRotGym.tsx:79` | Brain icons or emojis detected in source. Brain icons are considered AI slop. Remove or replace with standard icons. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/AntiBrainRotGym.tsx:84` | Broad transition-all found. Prefer targeted transition properties. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/AntiBrainRotGym.tsx:92` | <div className="text-[11px] text-slate-400">استرجاع الأنماط العابرة</div> | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/AntiBrainRotGym.tsx:94` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/AntiBrainRotGym.tsx:100` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/AntiBrainRotGym.tsx:113` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/AntiBrainRotGym.tsx:114` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/AntiBrainRotGym.tsx:115` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/AntiBrainRotGym.tsx:116` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/AntiBrainRotGym.tsx:117` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| ERROR | modular | `fixed-inside-transform-bug` | `/app/applet/src/components/AntiBrainRotGym.tsx:210` | className="text-5xl sm:text-6xl font-black font-novel tracking-widest select-none transition-transform hover:scale-105" | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/AntiBrainRotGym.tsx:227` | Broad transition-all found. Prefer targeted transition properties. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/AntiBrainRotGym.tsx:365` | Broad transition-all found. Prefer targeted transition properties. | high |
| ERROR | modular | `no-emojis-source` | `/app/applet/src/components/AntiBrainRotGym.tsx:407` | Emojis detected in source. Emojis are strictly forbidden in production UI code. Replace with vector icons. | high |
| ERROR | modular | `no-brain-icons-source` | `/app/applet/src/components/AntiBrainRotGym.tsx:458` | Brain icons or emojis detected in source. Brain icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `array-index-key-reorder-risk` | `/app/applet/src/components/AntiBrainRotGym.tsx:482` | Array index key detected. Confirm the list cannot reorder, insert, filter, or delete items. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/AntiBrainRotGym.tsx:486` | <span className="text-[10px] text-slate-500 mt-1">#{idx + 1}</span> | high |
| ERROR | modular | `fixed-inside-transform-bug` | `/app/applet/src/components/AntiBrainRotGym.tsx:503` | className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-400 hover:bg-slate-800 text-3xl transition-transform hover:scale-105" | high |
| WARNING | modular | `array-index-key-reorder-risk` | `/app/applet/src/components/AntiBrainRotGym.tsx:533` | Array index key detected. Confirm the list cannot reorder, insert, filter, or delete items. | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/BrainDashboard.tsx:27` | <div className="bg-[#131926] border border-amber-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/BrainDashboard.tsx:27` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| ERROR | modular | `no-brain-icons-source` | `/app/applet/src/components/BrainDashboard.tsx:31` | Brain icons or emojis detected in source. Brain icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/BrainDashboard.tsx:37` | <p className="text-[11px] text-amber-400/80"> | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/BrainDashboard.tsx:43` | <div className="bg-[#131926] border border-orange-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/BrainDashboard.tsx:43` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/BrainDashboard.tsx:53` | <p className="text-[11px] text-orange-400/80"> | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/BrainDashboard.tsx:59` | <div className="bg-[#131926] border border-emerald-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/BrainDashboard.tsx:59` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/BrainDashboard.tsx:69` | <p className="text-[11px] text-emerald-400/80"> | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/BrainDashboard.tsx:75` | <div className="bg-[#131926] border border-purple-900/40 rounded-2xl p-5 shadow-lg relative overflow-hidden"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/BrainDashboard.tsx:75` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/BrainDashboard.tsx:85` | <p className="text-[11px] text-purple-400/80"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/BrainDashboard.tsx:93` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| ERROR | modular | `no-brain-icons-source` | `/app/applet/src/components/BrainDashboard.tsx:96` | Brain icons or emojis detected in source. Brain icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/BrainDashboard.tsx:108` | <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"> | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/BrainDashboard.tsx:118` | <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"> | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/BrainDashboard.tsx:128` | <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"> | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/BrainDashboard.tsx:138` | <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/BrainDashboard.tsx:146` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/BrainDashboard.tsx:152` | <span className="text-[11px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded"> | high |
| ERROR | modular | `no-emojis-source` | `/app/applet/src/components/BrainDashboard.tsx:172` | Emojis detected in source. Emojis are strictly forbidden in production UI code. Replace with vector icons. | high |
| ERROR | modular | `no-emojis-source` | `/app/applet/src/components/BrainDashboard.tsx:184` | Emojis detected in source. Emojis are strictly forbidden in production UI code. Replace with vector icons. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/BrainDashboard.tsx:198` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `array-index-key-reorder-risk` | `/app/applet/src/components/BrainDashboard.tsx:218` | Array index key detected. Confirm the list cannot reorder, insert, filter, or delete items. | high |
| WARNING | modular | `collection-map-empty-state-review` | `/app/applet/src/components/CaseReader.tsx:255` | Collection rendering appears to lack an empty state. | high |
| WARNING | modular | `async-view-state-review` | `/app/applet/src/components/CaseReader.tsx:74` | Async view should prove loading, error, and empty states before handoff. | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/CaseReader.tsx:195` | <div className="bg-gradient-to-br from-[#161f30] to-[#121824] border border-amber-900/40 rounded-2xl p-6 shadow-xl relative overflow-hidden"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/CaseReader.tsx:195` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/CaseReader.tsx:232` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `array-index-key-reorder-risk` | `/app/applet/src/components/CaseReader.tsx:257` | Array index key detected. Confirm the list cannot reorder, insert, filter, or delete items. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/CaseReader.tsx:258` | Broad transition-all found. Prefer targeted transition properties. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/CaseReader.tsx:262` | <span className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded"> | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/CaseReader.tsx:294` | Broad transition-all found. Prefer targeted transition properties. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/CaseReader.tsx:331` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/CaseReader.tsx:345` | Broad transition-all found. Prefer targeted transition properties. | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/CaseReader.tsx:357` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/CaseReader.tsx:366` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/CaseReader.tsx:394` | Broad transition-all found. Prefer targeted transition properties. | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/CaseReader.tsx:436` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/CaseReader.tsx:439` | <span className="text-[11px] text-slate-500">تقييم منطقي فوري</span> | high |
| ERROR | modular | `outline-none-without-focus-visible` | `/app/applet/src/components/CaseReader.tsx:448` | Focus outline is removed without a visible keyboard focus replacement. | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/CaseReader.tsx:478` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/CaseReader.tsx:481` | <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[11px] font-mono"> | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/CaseReader.tsx:488` | <div className="text-[11px] text-amber-300 font-sans border-t border-amber-800/40 pt-1.5 flex items-center gap-1"> | high |
| WARNING | modular | `collection-map-empty-state-review` | `/app/applet/src/components/CasesList.tsx:100` | Collection rendering appears to lack an empty state. | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/CasesList.tsx:40` | <div className="relative rounded-3xl bg-gradient-to-br from-[#182236] via-[#121824] to-[#1a1528] border border-amber-900/40 p-6 sm:p-8 overflow-hidden shadow-2xl"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/CasesList.tsx:40` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| ERROR | modular | `fixed-width-mobile-risk` | `/app/applet/src/components/CasesList.tsx:41` | <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" /> | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/CasesList.tsx:44` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/CasesList.tsx:60` | Broad transition-all found. Prefer targeted transition properties. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/CasesList.tsx:68` | Broad transition-all found. Prefer targeted transition properties. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/CasesList.tsx:76` | Broad transition-all found. Prefer targeted transition properties. | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/CasesList.tsx:78` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/CasesList.tsx:104` | Broad transition-all found. Prefer targeted transition properties. | high |
| WARNING | modular | `blind-overflow-hidden` | `/app/applet/src/components/CasesList.tsx:125` | className="group bg-[#131926] hover:bg-[#161e2e] border border-slate-800 hover:border-amber-700/50 rounded-2xl p-5 shadow-lg transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden" | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/CasesList.tsx:125` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/CasesList.tsx:125` | Broad transition-all found. Prefer targeted transition properties. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/CasesList.tsx:128` | <div className="absolute top-3 left-3 bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1"> | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/CasesList.tsx:129` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/CasesList.tsx:136` | <span className="text-[11px] bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-medium"> | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/CasesList.tsx:139` | <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded flex items-center gap-1"> | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/CasesList.tsx:143` | <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded"> | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/CasesList.tsx:147` | <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded flex items-center gap-1 font-bold"> | high |
| ERROR | modular | `fixed-inside-transform-bug` | `/app/applet/src/components/CasesList.tsx:179` | <span className="text-amber-400 font-bold group-hover:translate-x-[-4px] transition-transform flex items-center gap-1"> | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/Header.tsx:68` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| ERROR | modular | `fixed-inside-transform-bug` | `/app/applet/src/components/Header.tsx:78` | <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-600/20 group-hover:scale-105 transition-transform"> | high |
| ERROR | modular | `no-brain-icons-source` | `/app/applet/src/components/Header.tsx:79` | Brain icons or emojis detected in source. Brain icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/Header.tsx:84` | <span className="text-[11px] bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-medium"> | high |
| ERROR | modular | `no-brain-icons-source` | `/app/applet/src/components/Header.tsx:107` | Brain icons or emojis detected in source. Brain icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/Header.tsx:142` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| WARNING | modular | `hardcoded-color-token-drift` | `/app/applet/src/components/Header.tsx:203` | Hardcoded color found. Move durable color decisions into tokens or theme files. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/Header.tsx:274` | Broad transition-all found. Prefer targeted transition properties. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/Header.tsx:286` | Broad transition-all found. Prefer targeted transition properties. | high |
| ERROR | modular | `no-brain-icons-source` | `/app/applet/src/components/Header.tsx:292` | Brain icons or emojis detected in source. Brain icons are considered AI slop. Remove or replace with standard icons. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/Header.tsx:294` | <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono"> | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/Header.tsx:301` | Broad transition-all found. Prefer targeted transition properties. | high |
| ERROR | modular | `no-sparkle-icons-source` | `/app/applet/src/components/Header.tsx:307` | Sparkle icons or emojis detected in source. Sparkle icons are considered AI slop. Remove or replace with standard icons. | high |
| INFO | modular | `transition-all-animation-slop` | `/app/applet/src/components/Header.tsx:313` | Broad transition-all found. Prefer targeted transition properties. | high |
| WARNING | modular | `overlay-missing-portal` | `/app/applet/src/components/Header.tsx:68` | High z-index overlay detected without a Portal. Use portals for safe stacking. | high |
| WARNING | modular | `oversized-typography-mobile-risk` | `/app/applet/src/components/Header.tsx:84` | Oversized text utility found without a responsive constraint. This will break mobile layouts. | high |
| INFO | harness | `missing-skill-frontend-ui-engineering` | `N/A` | Complex UI framework detected without explicit UI engineering guards. | high |
| INFO | harness | `missing-skill-chrome-devtools` | `N/A` | Web project detected. Agent lacks live browser validation. | high |
| INFO | harness | `missing-skill-a11y-debugging` | `N/A` | High risk of inaccessible modals, missing ARIA tags, and bad contrast. | high |

## 9. Verification Notes

Review PRODUCT.md, DESIGN.md, AGENTS.md, package.json, routing files, component structure, existing tests, and `.unslop/fix-list.md`. Documentation repairs do not prove implementation quality. Run tests, browser QA, accessibility checks, and Unslop again before release.

## 10. Verification Checklist
- [ ] Build succeeds without errors
- [ ] Tests pass
- [ ] Mobile viewports checked
- [ ] Keyboard navigation and focus traps work
- [ ] RTL layout checked if applicable
- [ ] Overlays and modals render correctly without scroll cutoff