# DESIGN.md

## Design Read
Reading this as an Arabic narrative deduction application for Arabic-speaking knowledge seekers and mystery enthusiasts, with an editorial investigative visual language, leaning toward dark scholarly atmospheric aesthetics.

## Taste Controls
Set these from the brief, then let them guide layout, motion, and density decisions:
- DESIGN_VARIANCE: 6
- MOTION_INTENSITY: 4
- VISUAL_DENSITY: 5

## Design System Decision
Chosen foundation: Tailwind CSS with native CSS variables and Lucide vector icons.
Direction: Scholarly atmospheric dark palette with parchment and amber accents tailored for prolonged reading sessions.

## Design Principles
- Clear before clever.
- Mobile behavior must be explicit with responsive layout guards.
- Every interactive component needs loading, empty, error, disabled, hover, focus, and success states.
- High typographic contrast respecting Arabic font letterforms and diacritics.

## Information Architecture & Routes
- Cases View: Library of mystery stories categorized by difficulty and genre.
- Reader View: Focused chapter-by-chapter story reading with clue ledger and deduction board.
- Agility Gym View: Focus training drills testing cognitive agility and attention control.
- Insights View: Investigation record, solved archive, and cognitive sharpness score metrics.
- Creator View: Custom case architect powered by server-side generative logic.

## Component Inventory
- Layout: PageShell, NavigationHeader, BreakTimerBanner, SectionContainer.
- UI: Button, ModalDialog, CaseCard, ClueCard, HypothesisSelector, ScoreCounter.

## Responsive Behavior
- Mobile under 768px: Use flex-col, w-full, safe-area insets, and p-4. Avoid full viewport fixed heights; use min-h-screen or min-h-dvh with dynamic units.
- Tablet md 768px: Use md:grid-cols-2, md:flex-row, and md:p-6.
- Desktop lg 1024px: Use lg:grid-cols-3 and max-w-7xl mx-auto constraints.

## Typography Scale and Hierarchy
Explicit typographic system designed for Arabic and bilingual readability:
- Display: text-4xl to text-5xl font-black leading-tight for main headlines.
- Headline H1: text-2xl to text-3xl font-bold leading-snug for primary section headers.
- Title H2: text-xl to text-2xl font-bold leading-normal for case titles and card headings.
- Subtitle H3: text-lg font-semibold leading-normal for chapter headers and secondary groupings.
- Body text: text-base font-normal leading-relaxed for narrative prose, constrained to 65-75 characters per line for optical readability.
- Caption: text-sm font-normal text-slate-400 leading-normal for metadata and timestamps.
- Label: text-xs to text-sm font-semibold tracking-wide for pills and category tags.
- Helper text: text-xs text-slate-400 leading-normal for form instructions.
- Error text: text-xs text-rose-400 font-medium leading-normal for validation notices.
Line-height and text measure rules ensure Arabic letterforms maintain ample breathing room without vertical collision.

## Modal Viewport Governance & Viewport Contract
All overlay dialogs adhere to this strict viewport contract:
- The modal shell must fit inside the visual viewport across mobile, desktop, landscape, and keyboard-open states with no clipping and no viewport overflow.
- Dynamic width guard: max-w-lg w-full mx-auto with clamp sizing min width 320px and max width 640px.
- Dynamic height guard: max-h-screen bounded sizing using 100dvh or 100svh units.
- Modal body scroll: long overlay content uses an internal scroll container with overflow-y-auto and overscroll-contain.
- Scrollbar aesthetic: thin scrollbar and scroll shadow fade affordance ensure clear scroll cues without heavy native scrollbar clutter.
- Mobile behavior under 768px: full-screen or bottom sheet with safe margins and safe-area padding.
- Focus management: modal dialog implements an active focus trap with focus restoration and Escape key dismissal.
- Viewport QA proof: certified for 320x568, 375x667, 390x844, landscape orientation, keyboard-open state, with no horizontal overflow.

## Stacking Plan and Layer Reasoning
Placement plan for all layered components:
- Stacking context audit: parent containers audited for transform, opacity, filter, contain, isolation, will-change, and overflow-hidden clipping before assigning z-index.
- Named layer scale:
  - Base content: z-0
  - Sticky navigation header: z-40
  - Dropdowns and tooltips: z-45
  - Modals and dialog overlays: z-50
  - Alerts and toast notifications: z-60
- Portal policy: all modals and high-level dialogs render via a portal root appended directly to document body or top layer native dialog.
- Conflict matrix and layer order:
  - Sticky header vs modal dialog: modal overlay (z-50) renders above header (z-40).
  - Toast alerts vs modal: toast alerts (z-60) render above modal backdrop.
  - Dropdown vs drawer: dropdown inside drawer uses local context containment.

## Auth State and Session Handling
- Guest session: default experience runs entirely without account friction; progress is preserved in client localStorage.
- Auth state handling: the application displays logged in status or guest indicator gracefully; handles empty session states seamlessly with clear local recovery.

## Security & Sensitive Information Display
- Secrets and API key tokens must be masked and redacted: never render raw values in the client UI.

## Accessibility & Contrast
- Contrast math uses deterministic step delta rules: text colors (slate-100 to slate-200) lighter than 600 against dark background tokens (slate-900 to slate-950).
- Focus rings: all focusable items use focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2. Never use outline-none without a focus-visible ring replacement.
- Keyboard navigation: full support for Tab, Shift+Tab, Enter, Space, and Escape.

## Layout and Overflow Rules
- Avoid overflow hidden as a bug mask. Any overflow hidden must be intentional for clipping rounded borders or decorative art.

## Agent Handoff Instructions
- Follow the visual variance and density dials specified in this document.
- Never add decorative slop icons or unnecessary visual noise.
- Validate layout resilience across mobile and desktop viewport profiles.

## Pre-flight Proof
- [x] Design read and dials confirmed.
- [x] Mobile layout rules with dynamic units defined.
- [x] Deterministic contrast delta verified.
- [x] Modal focus trap and viewport contract established.
- [x] Layer scale and stacking plan audited.
