# CRTR Design System

**CRTR. — Creator Studio** is a full-service creative agency: complete branding & design systems, motion graphics, premium high-end motion video, professional video editing, and website design/development. This design system codifies CRTR's bold, cinematic, brutalist-tinged identity into tokens, components, and full-screen recreations so any team can produce on-brand work fast.

> Brand in one line: **confident, cinematic, high-end** — a studio that "makes brands that refuse to sit still."

## Sources
- **Logo (source of truth for color & identity):** `uploads/crtr.jpg` → `assets/crtr-logo.jpg` — vivid red field, black scribble-mascot with eyes inside a white frame, "CRTR." wordmark.
- **Reference repo:** [`crtragency/CRTR`](https://github.com/crtragency/CRTR) — contains the production landing page (`CRTR Landing.html`), the established inline token set, and the mascot image. Explore it further for deeper structure and copy. *(Note: the repo's `colors_and_type.css` is a stale leftover from a different brand — Swar Marine — and was **not** used; the real CRTR tokens live inline in `CRTR Landing.html` and are reproduced here in `tokens/`.)*

---

## CONTENT FUNDAMENTALS — how CRTR writes

The voice is **confident, terse, and a little cocky** — a studio that knows it's good and doesn't pad. Premium without being corporate.

- **Person:** "We" (the studio) talking to "you" (the client). First-person plural, direct address.
- **Tone:** Bold declaratives. Short sentences. Dry confidence with occasional wit. Never hype-y or buzzwordy.
- **Casing:** Headlines are **UPPERCASE** (Archivo Black). Body is sentence case. Mono labels/eyebrows are UPPERCASE with wide tracking.
- **Numbers as proof:** Hard metrics, stated flatly — "120+ projects shipped", "retention is up 41%", "first reply in under a day". Let the number do the bragging.
- **Anti-corporate asides:** Signature dry one-liners — "No decks of decks — just the thing, made well, on time." / "Made on a Tuesday." / "If it doesn't make sense in a page, it doesn't make sense yet."
- **Emoji:** **None.** The only "emoji-like" glyphs are the red **★** star (separators, ratings) and the arrow **→**. Mono glyphs (IG, X, YT, VM) stand in for social icons.
- **Examples of the voice:**
  - Hero: *"We make brands that refuse to sit still."*
  - CTA: *"Got a thing? Let's make it."*
  - Process: *"Two divergent directions, in low fidelity. We pick a winner together and kill the other before it gets pretty."*
  - Testimonial framing: *"We have referenceable references."*

---

## VISUAL FOUNDATIONS

**The system rests on three pillars: RED (the signal), INK (authority), PAPER (a warm, premium canvas).** It reads as architectural and print-like — think risograph poster meets editorial grid.

- **Color:** Vivid logo red `#E5232C` for energy/CTAs/accents (used decisively, not washed). Near-black ink `#0B0B0C` for text, borders, and full dark sections. Warm cream paper `#F4F1EC` as the default background (never pure white pages — white is reserved for inputs). Supporting accents (gold `#F2C94C`, steel blue `#0F2438`) appear only inside the work/showcase grid for variety. See `tokens/colors.css`.
- **Type:** **Archivo Black** for display — uppercase, very tight tracking (`-0.045em` at hero scale), line-height `0.92`. **Archivo** for body/UI (modern grotesque, weights 400–900). **JetBrains Mono** for eyebrows, tags, meta, and numerics — the "technical layer." An *italic Archivo 900* word occasionally breaks a headline for tension. See `tokens/typography.css`.
- **Backgrounds:** Flat paper or flat ink — **no photographic hero backgrounds, no soft mesh gradients.** Texture comes from subtle **repeating diagonal/linear stripe overlays** (e.g. the red CTA band) and the scrolling marquee. Gradients appear *only* on a few work tiles (red→dark, dark→charcoal), never as page chrome.
- **Borders:** The **1.5px solid ink line is the load-bearing visual element** — every card, tile, button, and section is drawn with it. Hairlines (1px) divide sub-cells; 2px marks hero frames. Borders never disappear into soft shadow.
- **Elevation / shadows:** The signature depth is a **hard, blur-free OFFSET ink shadow** (`4px 4px 0 ink`, up to `8px 8px 0`) — a printed/sticker feel. On dark or red surfaces the offset flips to paper-colored. Soft ambient shadows are used sparingly (floating chrome only). **Avoid generic soft drop shadows.** See `tokens/shadows.css`.
- **Corner radii:** Modest on surfaces (cards/tiles `18px`, inputs/marks `8px`), **pill (`999px`)** on all controls, eyebrows, and badges. Never fully sharp, never overly rounded — deliberate and architectural.
- **Cards:** Bordered paper rectangle, `18px` radius, **no resting shadow**; on hover they **lift `translate(-2px,-2px)` and gain the hard offset shadow.** Service tiles invert to ink-on-paper on hover with a rotating red corner arrow.
- **Hover states:** Buttons lift + deepen their hard shadow; links turn **red**; ghost buttons fill **ink**; outline icon buttons fill **red**; service tiles invert to ink. Motion is the reward.
- **Press states:** Buttons **snap back to `translate(0,0)`** with a reduced shadow (the sticker "presses down"). Easing `--ease-snap` adds a touch of tactility.
- **Motion:** Cinematic and intentional. Reveals use expo-out (`cubic-bezier(0.22,1,0.36,1)`, ~600ms); general UI uses `cubic-bezier(0.4,0,0.2,1)` (~250ms); button presses use a snappy curve (~180ms). The production landing layers **pointer-tracked 3D tilt** and **scroll-driven marquee rotation** for a premium, alive feel. No bouncy defaults, no infinite decorative spinners on content. All looping/scroll motion is reduced-motion safe. See `tokens/motion.css`.
- **Transparency & blur:** Used only for overlays — the contact modal scrim is `rgba(ink,.55)` + a light `backdrop-filter: blur(4px)`. Surfaces themselves are opaque.
- **Layout:** Max width `1320px`, `32px` gutters. Sections are tall (`120px` vertical padding) and separated by full-width ink rules. Two-column section heads (title left, lede right). Sticky paper nav with a bottom ink border. Imagery vibe: high-contrast, bold, graphic — not soft or pastel.

---

## ICONOGRAPHY

CRTR is **deliberately icon-light** — the brand leans on type, borders, and the mascot rather than a dense icon set.

- **Inline stroke SVGs**, hand-set at 16px, `stroke-width: 2`, round caps/joins — used only for the **arrow** (CTAs, service-tile corner) and small chevrons. Match this weight if you add more.
- **The red ★ star** is the brand's signature glyph — marquee separators, star ratings, decorative accents.
- **Mono letter-glyphs** stand in for social icons: `IG`, `X`, `YT`, `VM` in circular bordered buttons (see `IconButton`). This is intentional brand styling, not a placeholder.
- **The mascot mark** (red rounded square with the scribble creature / "C." monogram) is the primary brand icon — used as favicon, nav mark, and footer sign-off. See `BrandMark`.
- **No emoji. No icon font.** If a project genuinely needs a broader UI icon set (e.g. an app surface), use **[Lucide](https://lucide.dev)** from CDN — its 2px round-cap stroke matches the brand's existing SVGs — and flag the addition. *(No icon font or sprite existed in the source repo to import.)*

---

## LOGO USAGE

- **Primary lockup:** mascot mark + "CRTR." wordmark (Archivo Black). See the *Logo · Lockup* card and `BrandMark` component.
- **Clearspace:** keep at least the height of the mark's "C." as breathing room on all sides; never crowd the wordmark.
- **Minimum size:** mark `28px`, full lockup `120px` wide. Below that, use the mark alone (favicon / app icon).
- **Placement:** top-left in the nav (38px mark), footer sign-off (40px, on ink). Always preserve the white frame around the mascot when using the full logo image.
- **On color:** on paper or ink, the mark stays **red with an ink border**. **On a red field, invert the mark to ink** so it doesn't disappear. The offset shadow flips to paper-colored on dark/red backgrounds (`onInk` prop).
- **Don't:** recolor the mascot, stretch it, add gradients/glows, place the red mark on red, or drop the ink border.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (the single file consumers link); `@import`s everything below.
- `base.css` — element resets + brand utility classes (`.crtr-eyebrow`, `.crtr-tag`, `.crtr-stroke`, `.crtr-wrap`).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `shadows.css`, `motion.css`, `fonts.css`.
- `assets/crtr-logo.jpg` — the mascot logo (source of truth).

**Components** (`components/`, `window.CRTRDesignSystem_b33342`)
- `buttons/` — **Button** (primary/dark/ghost, sizes, hard-shadow lift), **IconButton** (outline/solid/red, circle/square).
- `data-display/` — **Card**, **ServiceTile** (numbered, inverts on hover), **Badge** (status pill + dot), **Tag** (mono capability chip).
- `forms/` — **Input**, **Textarea** (ink border, mono label, red focus ring).
- `site/` — **NavBar**, **BrandMark**, **WorkCard** (portfolio tile), **Marquee** (scrolling strip).
- Each directory has a `*.card.html` specimen, and each component a `.d.ts` + `.prompt.md`.

**Foundation cards** (`guidelines/`) — Colors (red / ink / paper / accents), Type (display / body / mono / scale), Spacing (radii / shadows / space / borders), Brand (logo lockup / contexts / motion). These populate the Design System tab.

**UI kit** (`ui_kits/website/`) — full interactive recreation of the CRTR agency website, **six interlinked pages**, composed entirely from the DS components. See `ui_kits/website/README.md` for the architecture.
- **Home** (`index.html`) — hero, services, work grid, process, testimonials, CTA + working *Start a project* modal.
- **Work** (`work.html`) — filterable portfolio index (live discipline filter).
- **Case study** (`case-study.html`) — single project detail (hero film, media grid, pull quote, next-project).
- **Services** (`services.html`) — detailed services, pricing, engagement models.
- **Studio** (`about.html`) — stats, team grid, values, client strip.
- **Contact** (`contact.html`) — working brief form (chip selects + success state) and an FAQ accordion.
Shared chrome lives in `chrome.jsx`; shared layout in `kit.css`. Home is also registered as a **Starting Point**.

**Other**
- `SKILL.md` — makes this system usable as a downloadable Claude Agent Skill.

---

## Substitutions & flags
- **Fonts** load via Google Fonts `@import` (Archivo, Archivo Black, JetBrains Mono — all open-source, the exact families used in production). No binaries are self-hosted; swap `tokens/fonts.css` for local `@font-face` rules if you need offline/self-hosted fonts.
- **Icons** — no icon font/sprite existed in the source; the brand is intentionally icon-light. Use Lucide (CDN) if a broader set is ever needed.
