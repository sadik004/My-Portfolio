# Design System: Md. Moynul Hasan Sadik Portfolio
**Aesthetic Profile:** Dennis Snellenberg Editorial Minimalism & Tactile Creative Engineering

---

## 1. Visual Theme & Atmosphere
The design language embodies high-end creative engineering, inspired by the minimalist and tactile design aesthetics of Dutch digital designer **Dennis Snellenberg**. 

* **Atmosphere:** Deep, moody, confident, and architecturally precise.
* **Mood:** Calm professionalism juxtaposed with playful, physics-driven micro-interactions.
* **Density:** Generous, breathable whitespace (`py-24`, `gap-16`) paired with high-impact monumental typography.
* **Theme Support:** Dark-mode native with seamless dual-mode capability (`#fafafa` canvas transitioning into obsidian `#141517` depths).

---

## 2. Color Palette & Roles

| Semantic Role | Natural Language Name | Hex / Value | Usage & Application |
| :--- | :--- | :--- | :--- |
| **Canvas Dark** | Charcoal Obsidian | `#141517` | Primary background for Preloader, Footer, and Contact sections |
| **Canvas Light** | Soft Alabaster White | `#fafafa` | Default background for editorial hero and portfolio sections |
| **Canvas Deep Dark** | Night Abyss | `#0a0a0c` | Dark mode base surface |
| **Primary Text Dark** | Arctic Off-White | `#e9e9ea` | High-contrast body text and headers on dark backgrounds |
| **Primary Text Light** | Pitch Charcoal | `#171717` | High-contrast headers on light backgrounds |
| **Accent Action** | Electric Cobalt Blue | `#334BD3` (`#455ce9`) | Giant magnetic circular CTA fill and interactive primary buttons |
| **Status Indicator** | Signal Emerald | `#10b981` | Real-time live status indicator ("Available for Work", active pulse dot) |
| **Border / Rule** | Subdued Frost | `rgba(255, 255, 255, 0.15)` | Numbered questionnaire dividing lines and card borders |
| **Muted Meta** | Slate Mist | `#737373` (`#a3a3a3`) | Timestamps, micro-labels, category tags, and captions |

---

## 3. Typography Rules

The typography pairs modern geometric sans-serifs with high-precision monospace accents and expressive editorial serif flourishes.

* **Primary Body & Display:** `Geist Sans`
  * *Hero Headings:* Bold to Black (`font-black`), extreme tight tracking (`tracking-tighter`), tight line height (`leading-[0.96]`), font sizes up to `text-8xl` and `text-9xl`.
  * *Section Headlines:* Medium to Semibold (`font-medium`, `font-semibold`), clean tracking (`tracking-tight`).
* **Technical Monospace:** `Geist Mono`
  * *Labels & Status:* Extra-small (`text-xs` / `text-[11px]`), uppercase (`uppercase`), wide tracking (`tracking-widest` / `tracking-[0.25em]`).
  * *Usage:* Project indices (`01`, `02`), location tags, live timezone clocks, and form numbers.
* **Editorial Emphasis:** High-contrast italic serifs for emotional anchor words (e.g., *"together."*).

---

## 4. Motion & Animation Physics

Motion is not decorative; it provides physical weight and tactile feedback to every user action.

### 1. The Multi-language Greeting Preloader
* **Behavior:** Plays exclusively on the user's first visit per browser session (persisted via `sessionStorage`).
* **Word Carousel:** Cycles through global greetings at a snappy cadence (~160ms each: *Hello, Bonjour, Ciao, Olà, やあ, Hallå, Guten Tag*).
* **Hero Pause:** Extended dwell time for **"• হ্যালো বাংলাদেশ"** (800ms) and **"• Hello World"** (1000ms).
* **The Exit Curve:** An elastic SVG curve (`initial: Q width/2 320 -> exit: Q width/2 0`) that slowly slides up (`duration: 1.4s`) using the signature cubic bezier:
  $$\text{cubic-bezier}(0.76, 0, 0.24, 1)$$

### 2. Magnetic Cursor Physics
* **Physics Model:** Spring tension (`stiffness: 350`, `damping: 25`).
* **Interaction:** Pulls navigational links, action buttons, and circular CTAs toward the user's cursor within a defined proximity threshold.

### 3. Floating Project Preview Cards
* **Behavior:** On hovering over project rows, a floating 16:9 thumbnail modal reveals (`scale: 1, opacity: 1`) and smoothly follows the cursor via spring damping (`stiffness: 300`, `damping: 20`).

### 4. Page Transition Curtain (`Curve`)
* **Behavior:** On navigating between routes (`Work`, `About`, `Contact`, `Home`), a full-viewport curved obsidian curtain glides upward over 1.15s, displaying the route label (`• Work`, `• About`) for readable comprehension before revealing the page content.

### 5. Liquid Button Filling
* **Behavior:** Giant circular white CTA (`w-60 h-60`) in the footer fills from bottom to top with Electric Cobalt liquid (`#334BD3`) upon mouse enter, while the internal diagonal arrow rotates 45°.

---

## 5. Component Stylings

### Floating Island Navbar
* **Geometry:** Pill-shaped (`rounded-full`).
* **Surface:** Translucent glassmorphism (`bg-white/80 dark:bg-neutral-900/80`, `backdrop-blur-md`).
* **Border & Elevation:** Subtle hair-line stroke (`border-neutral-200/80`), soft ambient shadow (`shadow-black/5`).
* **Structure:** Centered floating island with semantic navigation links (`Home.` • `Work` • `About` • `Contact`).

### Editorial Project Rows
* **Geometry:** Border-separated horizontal bands (`border-b border-neutral-200 dark:border-neutral-800`).
* **Interaction:** Rows expand padding (`hover:px-4`) and translate titles slightly leftward (`group-hover:-translate-x-2`), accompanied by an unveiling 45° arrow.

### Dennis Snellenberg Form Questionnaire
* **Geometry:** Border-delimited numbered sections (`01`, `02`, `03`...).
* **Inputs:** Borderless, transparent background (`bg-transparent`), focus-responsive placeholder styling.
* **Submission Button:** Giant circular magnetic button with state-responsive checkmark indicators.

### Parallax Footer
* **Geometry:** Seamlessly morphing top SVG arch that flattens from `130px` to `0px` in direct synchronization with window scroll progress (`useTransform(scrollYProgress, [0, 0.7], [130, 0])`).
* **Information Hierarchy:** Bold typographic invitation on the left, giant magnetic circular action on the right, and live GMT+6 clock in the footer base.

---

## 6. Layout Principles & Spatial Grid

* **Container Max-Widths:** Standardized to `max-w-7xl` (1280px) for wide editorial spreads and `max-w-6xl` (1152px) for reading narratives.
* **Vertical Rhythm:** Deliberate generous section spacing (`py-24` / `pt-28 pb-20`) to establish an unhurried, luxury agency aesthetic.
* **Responsive Fluidity:** Mobile-first responsive hierarchy: single-column stacks on viewports under 768px (`<md`), expanding to asymmetric 12-column grids on desktop (`lg:grid-cols-12`).
