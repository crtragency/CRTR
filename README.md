# Swar Marine — Design System

> Premium marine tourism in Hurghada, on Egypt's Red Sea coast. Boat tours, fishing trips, snorkeling experiences, and luxury yacht charters.

This is the design system extracted from the **Swar Marine** Next.js codebase. It captures the visual language, copy voice, components, and screens needed to design new surfaces (web pages, decks, mocks) that look and feel like the real product.

---

## Index

| File | What it is |
|---|---|
| `colors_and_type.css` | Design tokens — colors, typography, radii, shadows, motion |
| `assets/` | Brand logos, icon notes |
| `preview/` | HTML preview cards rendered in the Design System tab |
| `ui_kits/website/` | React + HTML recreation of the Swar Marine marketing site |
| `SKILL.md` | Agent-Skill manifest (use as a Claude Code skill) |

---

## Brand context

| | |
|---|---|
| **Name** | Swar Marine *(also styled "Sewar Marine" / "سوار" in Arabic)* |
| **Domain** | sewarmarine.com |
| **Location** | Hurghada, Red Sea, Egypt |
| **Founded** | 2014 (≥10 yrs operating per copy) |
| **Category** | Marine tourism / experiences |
| **Audience** | International tourists & couples; affluent leisure travelers |

### What they sell
Four core experience categories, sold as bookable **trips**:

1. **Boat Tours** — coastline cruises, sunset catamaran cruises
2. **Fishing** — deep-sea expeditions, family-friendly reef fishing
3. **Snorkeling** — guided coral-reef tours
4. **Yacht Charter** — full-day private luxury charters

Each trip has: title, slug, hero description, short description, category, duration, price (USD/person), max guests, "what's included" list, featured flag.

### Surfaces represented in the codebase
- Marketing site (Next.js 16 App Router): Home, Trips index, Trip detail + booking form, About, Contact, Booking success
- Floating WhatsApp CTA (international tourist support)

> **Single product:** the marketing + booking site. We build one UI kit, `ui_kits/website/`.

---

## Sources

- **Codebase**: GitHub `omaremad212/Swar` @ `main` — Next.js 16 + Tailwind v4 + Supabase
- **Live logo**: `https://sewarmarine.com/wp-content/uploads/2024/07/شعار_سوار-removebg-preview.png`
- **Design tokens**: extracted from `src/app/globals.css`
- **Copy voice**: extracted from `src/app/page.tsx`, `src/app/about/page.tsx`, `src/lib/data.ts`

> Files behind logins were not provided. We have full read-only code access; no Figma was attached.

---

## CONTENT FUNDAMENTALS

### Voice
**Aspirational, warm, lightly aristocratic.** Reads like a curated boutique experience — not a budget tour operator and not a corporate cruise line. The site sells *feelings* (memories, magic, escape) backed by *credibility* signals (years of experience, certified safety, expert crew).

### Person & address
- **You** is used freely. The brand speaks directly to the guest.
- **We** is used to refer to Swar — almost always with concrete claims attached ("we never compromise on safety", "we combine expertise with passion").
- **First-person plural ownership**: "Our story", "Our values", "Our experiences", "Our most sought-after". This recurs as a section-header pattern.
- **Imperative CTAs**: "Discover", "Book", "Start", "Explore", "Witness", "Indulge", "Cruise".

### Casing
- **Sentence case** for body, captions, and most CTAs ("Book your experience", "View all trips").
- **Title Case** for section titles, page titles, and trip titles ("Featured Adventures", "Coastal Adventure Boat Tour").
- **UPPERCASE** is reserved for two micro-uses: badges/eyebrow tags ("PREMIUM MARINE EXPERIENCES") and the "SCROLL" wayfinder. Always paired with wide letter-spacing.

### Punctuation & length
- Short, declarative headlines (5–8 words). Sub-headlines run one or two clauses.
- No exclamation marks in headlines. One ! is allowed in success states ("Booking Submitted!", "Message Sent!").
- Em-dashes are not used — copy stays clean with periods and commas.
- No abbreviations except units and "+" (e.g. "10+ Years", "50K+ Happy Guests").

### Vibe / lexicon
The brand reaches for evocative words that conjure ocean and luxury: *breathtaking, pristine, magical, ultimate, gourmet, unforgettable, exclusive, indulge, paradise, vibrant, crystal waters, hidden caves*. It also leans on quietly confident craft words: *handcrafted, curated, certified, dedicated*.

Avoid: technical jargon, marketing buzzwords (synergy, leverage), discount-led language ("deal", "save", "cheap"), and youth-coded slang.

### Emoji
**Heavily used as functional iconography**, not decoration. Each trip category maps 1:1 to a glyph:

| Category | Emoji |
|---|---|
| Boat tours | ⛵ |
| Fishing | 🎣 |
| Snorkeling | 🤿 |
| Yacht charter | 🛥️ |
| All / generic | 🌊 |

Other emoji used for sectional iconography: ⚓ (about), 🛡️ (safety), 💫 (excellence), 🌱 (sustainability), 📍📧📞🕐 (contact info), 🗺️ (map placeholder), 🔍 (empty state), ✓ (form success), ★ (gold-fill SVG star, not the emoji).

### Concrete copy examples

> **Hero (home)** — "Discover the **Beauty of the Sea**" / "From thrilling boat adventures to luxurious yacht charters, create unforgettable memories on the water with our expert crew."
>
> **Section header (services)** — "Our Experiences" / "Choose from a curated selection of premium marine adventures designed for unforgettable moments on the water"
>
> **Trip description (yacht)** — "Indulge in the ultimate marine luxury experience aboard our private yacht. This exclusive charter offers personalized service, gourmet dining, and access to secluded coves inaccessible to larger vessels."
>
> **CTA** — "Ready for Your Marine Adventure?" / "Book now and create memories that will last a lifetime."
>
> **Trust microcopy** — "Free cancellation up to 24h before"
>
> **Stat block** — "10+ Years Experience · 50K+ Happy Guests · 98% Return Rate"

---

*See VISUAL FOUNDATIONS, ICONOGRAPHY, and the rest of the manifest for component-level specifics.*
