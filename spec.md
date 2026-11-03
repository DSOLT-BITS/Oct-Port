# Site Spec

## Overview
Single-page personal portfolio for David Solt, built from `src/assets/David Solt Resume 2026.pdf`. Content lives in `src/data/resume.ts`.

## Stack
- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. No other runtime dependencies.
- Fonts: Geist and Geist Mono.

## Sections
Hero, About, Experience, Skills, Education, References (names and titles only), Contact.

## Motion
- Blocks: `Reveal` (fade + 28px rise on scroll into view).
- Headings: `WordReveal` (words rise out of a clipped line).
- Body text: `ScrollText` (words fade in as the text scrolls through the viewport).
- Hero: `Parallax` initials, header scroll-progress bar.
- Background: `RadioBackground` canvas, with radio waves rippling from two antennas (blue, amber) and a carrier wave that shifts with scroll. Low opacity, paused when the tab is hidden, static under reduced motion.
- Ease-out custom curve `cubic-bezier(0.23,1,0.32,1)`; transform/opacity only; all motion disabled under `prefers-reduced-motion`.

## Color Palette (VS Code dark theme)

| Role                     | Hex       | Usage                                      |
|--------------------------|-----------|--------------------------------------------|
| Primary / accent         | `#007ACC` | Buttons, links, highlights, focus rings    |
| Surface – raised         | `#3E3E42` | Borders, hovered/selected items, inputs    |
| Surface – card           | `#2D2D30` | Cards, header, modals                      |
| Surface – panel          | `#252526` | Sidebars, sections, secondary backgrounds  |
| Signal amber             | `#E5A13A` | Section labels, dates, stats, timeline dots, card hover edge, hero signal line |
| Background               | `#1E1E1E` | Page background                            |

### Rules
- All new UI uses only these colors (plus white/neutral grays for text).
- Matte look: flat fills and thin borders, no gradients, glows or shadows.
- Dark theme only; layering goes darker (`#1E1E1E`) to lighter (`#3E3E42`) as elevation increases.
- Text: white on dark surfaces; keep contrast of at least 4.5:1 (white on `#007ACC` passes for large/bold text).
- Define the colors as Tailwind theme tokens in `src/styles/tailwind.css` and reference tokens, never raw hex, in components.

## Deployment
- Target: Vercel, build command `npm run build`. No environment variables required.

