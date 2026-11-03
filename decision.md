# Decision Log

## 2026-11-02 â€“ Remove Sanity, Prisma and Stripe
- **Why:** simplify the project and make `npm run build` succeed on Vercel without external services or a database.
- **Consequences:**
  - Blog and Sanity studio removed.
  - Email/password login, magic link and password reset removed; auth is Google/GitHub only with JWT sessions.
  - Pricing page kept as static content; "Get the plan" links to `/auth/signup`.
  - Pricing data moved to `src/components/Pricing/pricingData.ts`.

## 2026-11-02 â€“ Adopt VS Code dark color palette
- **Decision:** use `#007ACC` (accent) with `#3E3E42`, `#2D2D30`, `#252526`, `#1E1E1E` as the grays for all future UI.
- **Why:** user-provided palette; a consistent dark, low-contrast layered look with a single accent color.
- **Consequences:** new components must use these colors via Tailwind theme tokens; existing components still use the template colors and should be migrated gradually.

## 2026-11-02 ï¿½ Rebuild as a personal portfolio
- **Decision:** replace the AI-tool template with a single-page portfolio generated from the resume; remove auth, OpenAI, docs, pricing and all unused dependencies.
- **Why:** user wants a personal portfolio with a matte theme and scroll animations.
- **Animations:** hand-rolled with IntersectionObserver and scroll listeners (no animation library), following Emil Kowalski's design-engineering rules (strong ease-out, transform/opacity only, reduced-motion support) and the Taste Skill guidance on avoiding templated looks.
- **Remotion:** not used; it is a video-rendering tool and adds no value to a static portfolio.
- **Privacy:** street address and phone number from the resume are intentionally not published on the site.

## 2026-11-02 – References: names and titles only
- **Decision:** show reference names, titles and organizations; omit their phone numbers and emails (marked 'available upon request').
- **Why:** the site is public and these are third parties' personal contact details.

## 2026-11-02 – Signal theme (blue + amber)
- **Decision:** add amber #E5A13A as a second accent next to #007ACC; blue stays for buttons, focus and the progress bar, amber for labels, dates, stats and details, plus an animated signal-wave line in the hero.
- **Why:** make the site pop while keeping the matte, flat look; amber evokes radio/tactical displays that match the Army radio background.

## 2026-11-02 – Radio-wave animated background
- **Decision:** fixed canvas behind the page with rippling radio rings and a scroll-linked carrier wave, using the existing blue and amber at low opacity; panel sections are 80% opaque so it shows through.
- **Why:** adds motion that fits the radio theme without new colors. Hand-rolled canvas, no library.
