<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent Guidelines & Repository Architecture

Welcome, AI Agent or Engineer. This repository houses the personal portfolio and creative engineering showcase for **Md. Moynul Hasan Sadik** (Software Engineer & Creative Developer).

---

## 1. Tech Stack Overview

* **Framework:** Next.js 16 (App Router with Turbopack)
* **Runtime & Library:** React 19 / Node.js
* **Language:** TypeScript (Strict Mode)
* **Styling:** Tailwind CSS v4 + PostCSS
* **Animation & Motion:** Framer Motion 13+ (physics-based spring animations, cubic-bezier curves)
* **Icons:** Lucide React
* **Components & Utilities:** Shadcn UI primitives, `class-variance-authority`, `clsx`, `tailwind-merge`

---

## 2. Project Architecture & Directory Layout

```
my-portfolio/
├── app/
│   ├── about/page.tsx      # About narrative, bio, and engineering background
│   ├── contact/page.tsx    # Questionnaire form & contact details
│   ├── work/page.tsx       # Comprehensive project gallery
│   ├── globals.css         # Tailwind v4 theme tokens & CSS resets
│   ├── layout.tsx          # Root layout with metadata and Geist font definitions
│   ├── page.tsx            # Homepage composition (Hero, Marquee, Projects, Footer)
│   └── template.tsx        # Route transition wrapper rendering <Curve />
├── components/
│   ├── motion/
│   │   ├── curve.tsx       # Dennis Snellenberg full-page curved SVG route transition
│   │   ├── magnetic.tsx    # Spring physics magnetic attraction wrapper
│   │   ├── marquee.tsx     # Infinite smooth typography ticker
│   │   └── preloader.tsx   # Multi-language greeting preloader (session-cached)
│   ├── sections/
│   │   ├── hero.tsx        # Hero section with large typography & status badge
│   │   ├── navbar.tsx      # Floating pill navigation island
│   │   ├── project-list.tsx# Project rows with cursor-following floating preview
│   │   ├── footer.tsx      # Parallax scroll footer with live clock & liquid button
│   │   └── about.tsx       # Reusable skills and background grid component
│   └── ui/
│       └── button.tsx      # Standardized Shadcn button variants
├── lib/
│   └── utils.ts            # cn() classnames helper utility
├── DESIGN.md               # Complete semantic design system documentation
├── package.json            # Dependencies and development scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 3. Key Development Commands

Always run commands from the project root (`c:\Users\User\my-portfolio`):

```bash
# Start local development server with Turbopack (defaults to port 3000)
npm run dev

# Run ESLint validation (Must pass with 0 errors for CI/CD)
npm run lint

# Compile production build & static pages (Ensures type safety and Turbopack validity)
npm run build

# Start production server
npm start
```

---

## 4. Core Motion & UX Rules (Do Not Break)

### A. Preloader Behavior (`components/motion/preloader.tsx`)
1. **Initial Visit Only:** The preloader uses `sessionStorage.getItem("portfolio_preloader_seen")` to run once per browser session. Do **not** remove this guard; returning to the home page via navigation must skip the preloader.
2. **Greeting Sequence & Timing:**
   * Global greetings (*Hello, Bonjour, Ciao, Olà, やあ, Hallå, Guten Tag*) cycle briskly (~160ms).
   * **"• হ্যালো বাংলাদেশ"** dwells for `800ms`.
   * **"• Hello World"** dwells for `1000ms`.
3. **Elastic Exit Curve:** The black backdrop must slide up over `1.4s` using `cubic-bezier(0.76, 0, 0.24, 1)` while the bottom SVG arch flattens from `320px` to `0px`.

### B. Page Route Transitions (`components/motion/curve.tsx` & `app/template.tsx`)
1. Every page navigation must trigger the curved curtain transition via Next.js `template.tsx`.
2. The route name (`• Work`, `• About`, `• Contact`, `• Home`) must remain visibly paused on screen long enough for comfortable reading before the curtain sweeps upward over `1.15s`.

### C. Magnetic Hover Physics (`components/motion/magnetic.tsx`)
* Wrap interactive action buttons and brand links with `<Magnetic>` for the tactile cursor suction effect. Keep spring physics at `stiffness: 350`, `damping: 25`.

---

## 5. React 19 & Next.js 16 Conventions

1. **Avoid Synchronous `setState` in Effects:**
   * Never invoke `setState()` synchronously directly inside a top-level `useEffect` body; ESLint (`react-hooks/set-state-in-effect`) will fail the build.
   * If state must synchronize on mount, wrap the call in `requestAnimationFrame()` or trigger it inside asynchronous callbacks.
2. **Metadata in Layout & Pages:**
   * Ensure page title and descriptions reflect the engineer's actual identity (`Md. Moynul Hasan Sadik`). Never leave default `"Create Next App"`.
3. **Clean Unused Imports:**
   * Avoid dangling or unreferenced imports in any `.tsx` or `.ts` files to maintain zero-warning builds.

---

## 6. Pre-Commit / CI/CD Checklist

Before committing or opening pull requests:
- [ ] Run `npm run lint` and verify output is **0 errors**.
- [ ] Run `npm run build` and verify that all static pages (7/7) compile without error.
- [ ] Ensure large binary media files (`*.mp4`, `*.webm`, large recordings) are ignored via `.gitignore`.
- [ ] Commit with clean semantic commit messages (`feat:`, `fix:`, `docs:`, `chore:`).
