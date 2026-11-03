# Copilot Instructions

See [spec.md](./spec.md) for the full spec and [decision.md](./decision.md) for past decisions.

## Project
- Single-page portfolio (Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4) deployed on Vercel.
- Content comes from `src/data/resume.ts`; edit data there, not in components.
- Keep dependencies minimal; animations are hand-rolled in `src/components/motion`.
- Do not publish the resume's street address or phone number.

## Color palette (use for all new UI)
- Accent: `#007ACC`
- Grays, lightest to darkest: `#3E3E42`, `#2D2D30`, `#252526`, `#1E1E1E` (page background)
- Dark theme only. Use Tailwind theme tokens from `src/styles/tailwind.css`, not raw hex values in components.

## Conventions
- Run `npm run build` after changes and make sure it passes without errors.
- Keep changes small and focused; don't comment obvious code.
- Record notable decisions in [decision.md](./decision.md) and update [spec.md](./spec.md) when requirements change.

