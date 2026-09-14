# Nexora Leadership Advisory — Website Demo

> **Building Leaders. Strengthening Organizations. Creating Lasting Impact.**

A high-end, production-grade website demo for **Nexora Leadership Advisory**, engineered with the editorial polish, authority, typography, and structure of premier global management consultancies like PwC and McKinsey.

---

## 🏛️ Project Overview

- **Brand:** Nexora Leadership Advisory
- **Tagline:** *Building Leaders. Strengthening Organizations. Creating Lasting Impact.*
- **Persona:** Trusted C-suite, board-level, and private equity management advisors.
- **Visual Language:** Alabaster canvas (`#FBFBF9`), deep obsidian charcoal (`#0F172A`), burnished cognac/bronze accents (`#9A5B2D`), and crisp hairline borders (`#E2E8F0`).
- **Typography:** Serif headlines (*Playfair Display* / *Newsreader*) paired with modern grotesque sans (*Plus Jakarta Sans*).

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v3.4 (with customized corporate design system tokens)
- **Routing:** React Router v7 (`react-router-dom`)
- **Icons:** Lucide React
- **Typography:** Google Fonts (`Playfair Display`, `Plus Jakarta Sans`)

---

## 📂 Project Structure

```
leadership/
├── PROJECT_CONTEXT.md          # Project context, state, decisions, and testing log
├── index.html                  # HTML entry point with metadata, preconnect & fonts
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Editorial design tokens, colors & typography
├── postcss.config.js           # PostCSS Tailwind configuration
├── src/
│   ├── assets/                 # Brand assets & graphics
│   ├── components/             # Reusable UI components
│   │   ├── AdvisorModal.jsx    # Universal executive consultation dialog
│   │   ├── Breadcrumbs.jsx     # Semantic breadcrumbs trail
│   │   ├── Footer.jsx          # Corporate multi-column footer & newsletter
│   │   ├── Navbar.jsx          # Sticky header with scroll compression & mobile drawer
│   │   ├── ScrollToTop.jsx     # Route scroll reset & floating back-to-top
│   │   └── SEO.jsx             # Dynamic page title & meta synchronization
│   ├── context/
│   │   └── AdvisorModalContext.jsx # Global consultation modal state provider
│   ├── data/
│   │   ├── servicesData.js     # 5 core practices & 8-domain expertise matrix
│   │   ├── caseStudiesData.js  # 3 in-depth corporate case studies & metrics
│   │   ├── insightsData.js     # 6 thought-leadership publications & categories
│   │   └── teamData.js         # Partner profiles, credentials & specialties
│   ├── pages/
│   │   ├── Home.jsx            # 10-section executive homepage
│   │   ├── About.jsx           # Purpose, 5-stage framework (Listen->Diagnose->Align->Act->Sustain), values & team
│   │   ├── Expertise.jsx       # Practices directory & cross-practice matrix
│   │   ├── ServiceDetail.jsx   # Deep-dive practice detail (challenges, approach, deliverables, metrics)
│   │   ├── CaseStudies.jsx     # Filterable client case studies repository
│   │   ├── CaseStudyDetail.jsx # Deep-dive case study with metrics & testimonials
│   │   ├── Insights.jsx        # Thought leadership publication hub with search & filters
│   │   ├── InsightDetail.jsx   # Rich article reading experience with key takeaways & pull quotes
│   │   └── Contact.jsx         # Executive split layout, global office hubs & inquiry form
│   ├── App.jsx                 # Application routing & layout wrapper
│   ├── main.jsx                # React root entry point
│   └── index.css               # Tailwind directives & editorial utilities
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Validation
```bash
npm run build
npm run preview
```

---

## 🌐 Routes Implemented

| Route | Description |
| :--- | :--- |
| `/` | **Homepage:** Hero, editorial trust statement, 25+/150+/30+ metrics, 5 numbered practices, featured insight, expertise matrix, case studies, team, 4 principles, quote banner, and consultation CTA. |
| `/about` | **About Firm:** Purpose, 5-stage methodology (*Listen → Diagnose → Align → Act → Sustain*), core values, global impact metrics, and partner bios. |
| `/expertise` | **Practices Directory:** Full overview of all 5 consulting practices + 8-domain cross-practice matrix. |
| `/expertise/:slug` | **Practice Detail:** Specific practice deep dive (e.g. `/expertise/executive-leadership`) with challenges, 4-step approach, deliverables, and metrics. |
| `/case-studies` | **Case Studies:** Filterable repository across Professional Services, Technology, and Manufacturing. |
| `/case-studies/:slug` | **Case Study Detail:** Detailed intervention phasing, measurable business outcomes, and CEO testimonials. |
| `/insights` | **Insights Publication:** Thought leadership hub with category filters (*Leadership*, *Strategy*, *Culture*, *Transformation*, *Talent*, *Governance*) and search. |
| `/insights/:slug` | **Article Detail:** Executive summary callout box, structured subsections, pull-quotes, and author profiles. |
| `/contact` | **Contact & Consultation:** Split layout featuring global office hubs (**London**, **New York**, **Singapore**, **Zurich**) and validated consultation inquiry form. |

---

## 🔒 Confidentiality & Standards

All advisory inquiries, diagnostic tools, and C-suite engagements observe strict corporate non-disclosure protocols.
