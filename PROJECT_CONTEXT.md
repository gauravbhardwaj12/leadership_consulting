# PROJECT_CONTEXT.md

## Project
**Nexora Leadership Advisory** — Premium Leadership & Management Consulting Website Demo

## Purpose
Sales demo for a high-value leadership consulting prospect requesting a website with the executive authority, editorial polish, typography, whitespace, and structural credibility of top-tier global advisory firms like PwC, McKinsey, and BCG, while presenting a completely original brand concept.

## Stack
- **Framework:** React 19 + Vite 8
- **Language:** JavaScript (ESNext / JSX)
- **Styling:** Tailwind CSS v3.4 (with customized corporate editorial tokens)
- **Icons:** Lucide React
- **Routing:** React Router v7 (`react-router-dom`)
- **Typography:** Newsreader & Playfair Display (Serif) paired with Plus Jakarta Sans (Grotesque Sans)

## Design Direction
- **Atmosphere:** Global, executive, intelligent, trustworthy, strategic, minimal, human, results-driven.
- **Palette:**
  - Executive Canvas: Alabaster off-white (`#FBFBF9`), White (`#FFFFFF`), Soft Neutral (`#F4F4F1`)
  - Deep Charcoal: Obsidian (`#0F172A`), Slate (`#1E293B`), Charcoal (`#334155`), Muted Gray (`#64748B`)
  - Strategic Accent: Burnished Cognac / Bronze (`#9A5B2D` / `#B87333`)
  - Contrast Borders: Subtle Hairlines (`#E2E8F0`)
- **Visuals:** High-resolution authentic boardroom, strategy meeting, and architectural photography with subtle overlays; generous whitespace; thin dividers; zero generic tech gradients or cartoon illustrations.

## Brand
- **Company Name:** Nexora Leadership Advisory
- **Tagline:** *Building Leaders. Strengthening Organizations. Creating Lasting Impact.*
- **Persona:** Trusted C-suite, board-level, and private equity management advisors.

## Pages & Routes Implemented
- `/` — Homepage (Executive Hero, Trust & Editorial statement, What We Do [5 Practices], Featured Insight, Strategic Expertise Matrix, Case Studies Preview, Leadership Partners, Why Nexora 4 Principles, Advisory Quote, CTA Banner)
- `/about` — About Firm (Our Purpose, Strategic Timeline Listen → Diagnose → Align → Act → Sustain, Core Values, Global Scale Metrics, Leadership Team)
- `/expertise` — Consulting Practices Directory (5 core disciplines + 8-domain cross-practice matrix)
- `/expertise/:slug` — Deep-dive practice detail page (Diagnostic challenges, 4-step methodology, deliverables, quantifiable metrics, and related insight)
- `/case-studies` — Executive Case Studies Directory (Categorized by industry: Professional Services, Technology, Manufacturing)
- `/case-studies/:slug` — Individual Case Study Detail (Challenge, 3-phase strategic intervention, measurable business outcomes, and CEO testimonial)
- `/insights` — Editorial Publication Hub (Thought leadership articles, interactive category filtering, instant search, and featured spotlight)
- `/insights/:slug` — Rich Editorial Article (Executive summary, pull quotes, key takeaways, author bio, social share, related insights)
- `/contact` — Executive Consultation Request (Split layout, global offices in London, New York, Singapore, Zurich, and interactive inquiry form with validation and confirmation)

## Reusable Components
- `Navbar` — Sticky header with scroll compression, desktop navigation, practice dropdown, mobile drawer, advisor CTA
- `Footer` — Comprehensive multi-column corporate footer with practice links, insights, offices, and executive newsletter
- `Breadcrumbs` — Semantic breadcrumb navigation for all nested routes
- `ScrollToTop` — Automatic scroll reset on route changes + discreet floating back-to-top trigger
- `SEO` — Dynamic document title and meta description synchronization per route
- `AdvisorModal` — Quick executive consultation modal accessible from any page with NDA assurances
- `AdvisorModalContext` — Global context provider for triggering advisory dialogues

## Implemented Features
- [x] Complete Vite + React + Tailwind CSS environment configured
- [x] Custom editorial typography and executive color palette loaded
- [x] Full dataset constructed (`servicesData`, `caseStudiesData`, `insightsData`, `teamData`)
- [x] Homepage with all 10 required executive sections
- [x] About page with 5-stage strategic timeline (Listen → Diagnose → Align → Act → Sustain)
- [x] Comprehensive Practices directory and dynamic practice detail pages
- [x] Case Studies directory with industry filters and detail pages
- [x] Insights publication hub with instant search, category filters, and rich article reader
- [x] Contact page with global office hubs and interactive consultation form with state feedback
- [x] Universal Advisor Modal with instant trigger from headers, CTAs, and banners
- [x] Strict NDA and confidentiality compliance callouts
- [x] Mobile responsiveness verified with zero horizontal overflow

## Pending Features
- None for the current demo phase. Ready for client presentation.

## Known Bugs
- Zero console errors or runtime warnings detected during automated browser testing.

## Design Decisions
- Selected an editorial serif + modern geometric sans combination to match the high-trust gravitas of PwC / Financial Times / Harvard Business Review publications.
- Color palette rooted in neutral alabaster and deep obsidian charcoal, accented by an understated burnished cognac (`#9A5B2D`) rather than generic tech blues.
- Authentic curated Unsplash photography featuring diverse executive teams and modern boardrooms with subtle overlays for high contrast and readability.
- Replaced intrusive full-page reloads with an instant modal dialog for C-suite advisory booking while retaining a dedicated `/contact` route for detailed RFP inquiries.

## Last Completed Task
- Conducted full automated browser inspection on desktop (1440px) and mobile (390px) viewports; validated form submissions, modals, navigation, and visual styling.

## Next Recommended Task
- Client presentation walkthrough and demonstration of custom practice areas or branding swaps if requested.

## Testing Status
- **Desktop Testing (1440px / 1280px):** All routes verified (`/`, `/about`, `/expertise`, `/expertise/executive-leadership`, `/case-studies`, `/case-studies/leadership-growth`, `/insights`, `/insights/why-leadership-teams-struggle-strategy-action`, `/contact`).
- **Mobile Testing (390px / 375px):** Responsive layouts, slide-down hamburger drawer, card stacking, and form inputs verified with zero horizontal overflow.
- **Form Submissions:** Tested with mock executive data; confirmation screens and reset states verified.
- **Console Audit:** 0 errors, 0 warnings.
