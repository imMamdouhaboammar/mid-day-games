# Agent Instructions

## Read This First
Before coding, inspect PRODUCT.md, DESIGN.md, package.json, routing files, component structure, and any existing tests. Do not rush to implementation without understanding the existing architecture.

## Root Cause Mode
Always diagnose before patching. Whenever addressing a bug, regression, layout issue, or design defect:
- Reproduce the problem first under realistic viewport and state conditions.
- Separate symptoms from underlying cause; perform root cause analysis before touching code.
- Identify the smallest root fix that solves the issue from the root rather than applying superficial workarounds.
- Define verification proof and re-check acceptance criteria.

## Install Agent Harness
Harness inventory and tooling guidance for this project:
- Bulk install guard: install only the specific skills and tools this project actually needs. Avoid bulk installs as they add unnecessary context overhead.
- Harness Priority Matrix:
  - Required (High Priority): unslop-preflight for continuous design quality checks and interface polish verification. Use before and after frontend work.
  - Recommended (Medium Priority): React error boundary and React health diagnostics for runtime safety in client interactive components. Skip when editing static styles.
  - Optional (Low Priority): duplicate detector and repository graph analysis for refactoring large modules. Use when reorganizing large components.
- Verification and Trust Note: always verify tool version, run dry run checks where possible, review source credibility, and confirm rollback steps before adopting external utilities.

## What Not To Change
- Do not delete existing features.
- Do not rename public routes or exported APIs without explicit approval.
- Do not replace the design system with unrelated styling.

## Security & API Key Guidelines
- Never expose API keys or secrets in client-facing code.
- If handling tokens, ensure they are masked in UI and not logged to the console.

## Regression Guard
- Preserve existing behavior and Arabic text fidelity.
- Limit changes to the requested scope.
- Check git diff before finalizing.
- Verify that tests and build scripts succeed.

## Verification Checklist (MANDATORY)
You MUST complete these steps and provide proof before considering the task done:
- [ ] App builds successfully with npm run build.
- [ ] Main flows still work.
- [ ] Mobile layout checked with no horizontal overflow and proper dynamic viewport units.
- [ ] Keyboard navigation checked with Tab, Enter, Space, and Escape.
- [ ] Loading, empty, and error states implemented.
- [ ] Run npx unslop-preflight audit in the terminal.
- [ ] Paste the final score and ensure there are 0 Errors before you complete the task.

## When To Stop
Stop and ask for review when a change requires:
- Deleting core features.
- Changing data models or schemas.
- Altering auth/security behavior.
- Making broad redesign decisions.
