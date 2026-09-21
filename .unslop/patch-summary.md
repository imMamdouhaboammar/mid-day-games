# Unslop Patch Summary

## Executive Dashboard

| Metric | Before Autopilot | After Autopilot | Change | Status |
| :--- | :---: | :---: | :---: | :--- |
| **Unslop Score** | `0/100` | `0/100` | **+0** | ⚪ NO CHANGE |
| **Readiness Band** | `BLOCKED` | `BLOCKED` | ➡️ | 🟡 NEEDS WORK |
| **Blockers / Errors** | `98` | `98` | **-0** | 🔴 ACTION REQUIRED |

---

## Code Modification Ledger

Total of **0** source file patches were automatically applied. **135** files were skipped defensively to prevent unintended code breaks.

### Complex / High-Risk Areas Skipped (Requires Manual Edits):
1. **sparkle, brain, or magic icon default (anti-slop)** inside `src/App.tsx` — *Reason:* no-fixer
2. **blind 100vh full-page height (V2)** inside `src/App.tsx` — *Reason:* no-fixer
3. **Tailwind h-screen used without dvh/min-h fallback (V4)** inside `src/App.tsx` — *Reason:* no-fixer
4. **decorative glass default (anti-slop)** inside `src/App.tsx` — *Reason:* no-fixer
5. **motion-without-reduced-motion-review** inside `src/App.tsx` — *Reason:* no-fixer
6. **collection-map-empty-state-review** inside `src/App.tsx` — *Reason:* no-fixer
7. **height-100vh-mobile-risk** inside `src/App.tsx` — *Reason:* no-fixer
8. **hardcoded-color-token-drift** inside `src/App.tsx` — *Reason:* no-fixer
9. **hardcoded-color-token-drift** inside `src/App.tsx` — *Reason:* no-fixer
10. **hardcoded-color-token-drift** inside `src/App.tsx` — *Reason:* no-fixer
11. **oversized-typography-mobile-risk** inside `src/App.tsx` — *Reason:* no-fixer
12. **overlay-missing-portal** inside `src/App.tsx` — *Reason:* no-fixer
13. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
14. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
15. **generic gradient identity (B2)** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
16. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
17. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
18. **focus outline removed, verify focus-visible fallback (A2/A4)** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
19. **generic gradient identity (B2)** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
20. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
21. **<input> has no label association (add a <label for>, id, or aria-label)** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
22. **collection-map-empty-state-review** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
23. **async-view-state-review** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
24. **no-sparkle-icons-source** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
25. **hardcoded-color-token-drift** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
26. **transition-all-animation-slop** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
27. **transition-all-animation-slop** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
28. **no-brain-icons-source** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
29. **transition-all-animation-slop** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
30. **oversized-typography-mobile-risk** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
31. **no-sparkle-icons-source** inside `src/components/AICaseGenerator.tsx` — *Reason:* no-fixer
32. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
33. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
34. **generic gradient identity (B2)** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
35. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
36. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
37. **emoji used in UI source (icon system)** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
38. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
39. **clickable <div> missing role, tabindex, key handler (prefer <button>/<a>)** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
40. **collection-map-empty-state-review** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
41. **transition-all-animation-slop** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
42. **oversized-typography-mobile-risk** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
43. **transition-all-animation-slop** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
44. **oversized-typography-mobile-risk** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
45. **no-brain-icons-source** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
46. **transition-all-animation-slop** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
47. **oversized-typography-mobile-risk** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
48. **no-sparkle-icons-source** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
49. **hardcoded-color-token-drift** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
50. **hardcoded-color-token-drift** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
51. **hardcoded-color-token-drift** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
52. **hardcoded-color-token-drift** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
53. **hardcoded-color-token-drift** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
54. **hardcoded-color-token-drift** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
55. **fixed-inside-transform-bug** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
56. **transition-all-animation-slop** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
57. **transition-all-animation-slop** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
58. **no-emojis-source** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
59. **no-brain-icons-source** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
60. **array-index-key-reorder-risk** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
61. **oversized-typography-mobile-risk** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
62. **fixed-inside-transform-bug** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
63. **array-index-key-reorder-risk** inside `src/components/AntiBrainRotGym.tsx` — *Reason:* no-fixer
64. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
65. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
66. **blanket overflow:hidden on layout container (D2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
67. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
68. **blanket overflow:hidden on layout container (D2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
69. **blanket overflow:hidden on layout container (D2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
70. **blanket overflow:hidden on layout container (D2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
71. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
72. **blanket overflow:hidden on layout container (D2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
73. **generic gradient identity (B2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
74. **blanket overflow:hidden on layout container (D2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
75. **generic gradient identity (B2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
76. **blanket overflow:hidden on layout container (D2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
77. **generic gradient identity (B2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
78. **blanket overflow:hidden on layout container (D2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
79. **generic gradient identity (B2)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
80. **emoji used in UI source (icon system)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
81. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
82. **emoji used in UI source (icon system)** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
83. **blind-overflow-hidden** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
84. **hardcoded-color-token-drift** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
85. **no-brain-icons-source** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
86. **oversized-typography-mobile-risk** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
87. **blind-overflow-hidden** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
88. **hardcoded-color-token-drift** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
89. **oversized-typography-mobile-risk** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
90. **blind-overflow-hidden** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
91. **hardcoded-color-token-drift** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
92. **oversized-typography-mobile-risk** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
93. **blind-overflow-hidden** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
94. **hardcoded-color-token-drift** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
95. **oversized-typography-mobile-risk** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
96. **hardcoded-color-token-drift** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
97. **no-brain-icons-source** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
98. **blind-overflow-hidden** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
99. **blind-overflow-hidden** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
100. **blind-overflow-hidden** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
101. **blind-overflow-hidden** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
102. **hardcoded-color-token-drift** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
103. **oversized-typography-mobile-risk** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
104. **no-emojis-source** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
105. **no-emojis-source** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
106. **hardcoded-color-token-drift** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
107. **array-index-key-reorder-risk** inside `src/components/BrainDashboard.tsx` — *Reason:* no-fixer
108. **transition-all-animation-slop** inside `src/components/CaseReader.tsx` — *Reason:* unsafe
109. **outline-none-without-focus-visible** inside `src/components/CaseReader.tsx` — *Reason:* unsafe
110. **transition-all-animation-slop** inside `src/components/CasesList.tsx` — *Reason:* unsafe
111. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/Header.tsx` — *Reason:* no-fixer
112. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/Header.tsx` — *Reason:* no-fixer
113. **decorative glass default (anti-slop)** inside `src/components/Header.tsx` — *Reason:* no-fixer
114. **generic gradient identity (B2)** inside `src/components/Header.tsx` — *Reason:* no-fixer
115. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/Header.tsx` — *Reason:* no-fixer
116. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/Header.tsx` — *Reason:* no-fixer
117. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/Header.tsx` — *Reason:* no-fixer
118. **sparkle, brain, or magic icon default (anti-slop)** inside `src/components/Header.tsx` — *Reason:* no-fixer
119. **clickable <div> missing role, tabindex, key handler (prefer <button>/<a>)** inside `src/components/Header.tsx` — *Reason:* no-fixer
120. **hardcoded-color-token-drift** inside `src/components/Header.tsx` — *Reason:* no-fixer
121. **fixed-inside-transform-bug** inside `src/components/Header.tsx` — *Reason:* no-fixer
122. **no-brain-icons-source** inside `src/components/Header.tsx` — *Reason:* no-fixer
123. **oversized-typography-mobile-risk** inside `src/components/Header.tsx` — *Reason:* no-fixer
124. **no-brain-icons-source** inside `src/components/Header.tsx` — *Reason:* no-fixer
125. **hardcoded-color-token-drift** inside `src/components/Header.tsx` — *Reason:* no-fixer
126. **hardcoded-color-token-drift** inside `src/components/Header.tsx` — *Reason:* no-fixer
127. **transition-all-animation-slop** inside `src/components/Header.tsx` — *Reason:* no-fixer
128. **transition-all-animation-slop** inside `src/components/Header.tsx` — *Reason:* no-fixer
129. **no-brain-icons-source** inside `src/components/Header.tsx` — *Reason:* no-fixer
130. **oversized-typography-mobile-risk** inside `src/components/Header.tsx` — *Reason:* no-fixer
131. **transition-all-animation-slop** inside `src/components/Header.tsx` — *Reason:* no-fixer
132. **no-sparkle-icons-source** inside `src/components/Header.tsx` — *Reason:* no-fixer
133. **transition-all-animation-slop** inside `src/components/Header.tsx` — *Reason:* no-fixer
134. **overlay-missing-portal** inside `src/components/Header.tsx` — *Reason:* no-fixer
135. **oversized-typography-mobile-risk** inside `src/components/Header.tsx` — *Reason:* no-fixer

---

## Next Steps & Verification Checklist

To guarantee your changes did not introduce regression, complete the following validation checklist:

- [ ] **Build succeeds without errors**
  - *How to verify:* Run command: `npm run build`

- [ ] **Tests pass**
  - *How to verify:* Run command: `npm test`

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blind 100vh full-page height (V2)' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'Tailwind h-screen used without dvh/min-h fallback (V4)' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'decorative glass default (anti-slop)' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'motion-without-reduced-motion-review' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'collection-map-empty-state-review' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'height-100vh-mobile-risk' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'overlay-missing-portal' in src/App.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'generic gradient identity (B2)' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'focus outline removed, verify focus-visible fallback (A2/A4)' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'generic gradient identity (B2)' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule '<input> has no label association (add a <label for>, id, or aria-label)' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'collection-map-empty-state-review' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'async-view-state-review' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-sparkle-icons-source' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-brain-icons-source' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-sparkle-icons-source' in src/components/AICaseGenerator.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'generic gradient identity (B2)' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'emoji used in UI source (icon system)' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'clickable <div> missing role, tabindex, key handler (prefer <button>/<a>)' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'collection-map-empty-state-review' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-brain-icons-source' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-sparkle-icons-source' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'fixed-inside-transform-bug' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-emojis-source' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-brain-icons-source' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'array-index-key-reorder-risk' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'fixed-inside-transform-bug' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'array-index-key-reorder-risk' in src/components/AntiBrainRotGym.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blanket overflow:hidden on layout container (D2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blanket overflow:hidden on layout container (D2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blanket overflow:hidden on layout container (D2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blanket overflow:hidden on layout container (D2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blanket overflow:hidden on layout container (D2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'generic gradient identity (B2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blanket overflow:hidden on layout container (D2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'generic gradient identity (B2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blanket overflow:hidden on layout container (D2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'generic gradient identity (B2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blanket overflow:hidden on layout container (D2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'generic gradient identity (B2)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'emoji used in UI source (icon system)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'emoji used in UI source (icon system)' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blind-overflow-hidden' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-brain-icons-source' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blind-overflow-hidden' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blind-overflow-hidden' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blind-overflow-hidden' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-brain-icons-source' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blind-overflow-hidden' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blind-overflow-hidden' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blind-overflow-hidden' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'blind-overflow-hidden' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-emojis-source' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-emojis-source' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'array-index-key-reorder-risk' in src/components/BrainDashboard.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/CaseReader.tsx**
  - *How to verify:* Required proof: *Review code and apply fix manually*

- [ ] **Manually review and resolve skipped rule 'outline-none-without-focus-visible' in src/components/CaseReader.tsx**
  - *How to verify:* Required proof: *Review code and apply fix manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/CasesList.tsx**
  - *How to verify:* Required proof: *Review code and apply fix manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'decorative glass default (anti-slop)' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'generic gradient identity (B2)' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'sparkle, brain, or magic icon default (anti-slop)' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'clickable <div> missing role, tabindex, key handler (prefer <button>/<a>)' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'fixed-inside-transform-bug' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-brain-icons-source' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-brain-icons-source' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'hardcoded-color-token-drift' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-brain-icons-source' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'no-sparkle-icons-source' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'transition-all-animation-slop' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'overlay-missing-portal' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*

- [ ] **Manually review and resolve skipped rule 'oversized-typography-mobile-risk' in src/components/Header.tsx**
  - *How to verify:* Required proof: *Handle manually*
