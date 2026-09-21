# PRODUCT.md

## Product Summary
Yaqadha (يقظة) is an immersive Arabic narrative deduction and cognitive agility web application. It trains critical thinking, attention to detail, and problem-solving through historical and deductive Arabic mystery narratives and rapid cognitive gym challenges.

## Target Users & Roles
- **Investigator / Solo Player**: Solves narrative cases, inspects clues, interrogates suspects, and exercises cognitive focus.
- **Story Creator**: Generates custom detective cases powered by AI with verified clues and plausible suspect motivations.
- **Casual Learner**: Practices daily cognitive gym exercises to combat digital fatigue and screen drowsiness.

## Jobs To Be Done
- When I feel mental fog and distraction from passive screen consumption, I want to engage with interactive Arabic mystery cases and deductive logic puzzles, so I can sharpen my focus and analytical reasoning.

## Main Use Cases
- Interactive mystery investigation: reading cases, unlocking physical and circumstantial clues, cross-examining suspects, and submitting verdicts.
- Mental agility drills: Stroop interference tests, deductive contradiction checks, and rapid pattern recall.
- AI Case Generation: crafting novel bespoke Arabic detective mysteries via structured LLM prompt generation.
- Screen break and mindfulness management: 5-minute Pomodoro rest timer with acoustic chimes to protect focus.

## Non-Goals
- Real-time multiplayer PvP tournaments or matchmaking lobbies.
- Complex third-party payment gateways or subscription walls.
- Heavy social feed with user follow graphs or infinite video feeds.

## Data Boundaries & State Behavior
- Core Curated Cases: static curated historical and logical mysteries loaded on client initialization.
- Player Progress & Custom Cases: saved and synchronized locally in browser localStorage.
- AI Generation: proxied through server-side API endpoints (`/api/generate-case`) keeping API keys secure.
- Audio Synthesis: client-side Web Audio API synthesizer for acoustic alerts and ambient soundscapes.

## Core User Flows
1. User selects a case from the curated mystery library.
2. User studies the story narrative, inspects revealed clues, and reads suspect statements.
3. User evaluates hypotheses, submits their conclusion or types an original theory, and receives instant logical analysis.
4. User visits the cognitive gym to complete rapid focus drills and views updated cognitive sharpness metrics.

## Feature List
- Narrative case reader with chapter navigation and font size adjustments.
- Interactive clue ledger with progressive discovery mechanisms.
- Cognitive gym mini-games for attention control and pattern recognition.
- Cognitive dashboard displaying sharpness score, daily streaks, and solved case archive.
- Focus break timer with audio chimes.

## Functional Requirements
- High-contrast Arabic typography with full right-to-left layout compliance.
- Responsive mobile and desktop layout with adaptive touch targets.
- Local persistence without forced authentication hurdles.

## Acceptance Criteria
- Given an investigator opens a mystery case, when they tap an unexamined clue, the clue reveals its forensic significance.
- Given an investigator submits a hypothesis, when verified, the verdict score and feedback display immediately.
- Given a user completes an agility challenge, when time expires, their player stats update and persist in local storage.

## Constraints
- Offline-capable for core curated cases and gym exercises.
- Responsive layout adapting from 320px mobile screens up to 1440px desktop displays.

## Risk Notes
- Arabic text rendering requires proper line height and readability measures to prevent eye strain during long story reading sessions.

## AI-Agent Implementation Boundaries
- Inspect existing files before editing.
- Change one feature area at a time.
- Preserve existing behavior and Arabic localization.
- Never hardcode secrets or remove error boundaries.
