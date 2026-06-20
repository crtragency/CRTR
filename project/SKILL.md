---
name: crtr-design
description: Use this skill to generate well-branded interfaces and assets for CRTR (CRTR. Creator Studio — a bold, cinematic creative agency), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** CRTR. Creator Studio — bold, cinematic, brutalist-tinged creative agency. Voice is confident, terse, dry-witty; no emoji. Headlines UPPERCASE.
- **Pillars:** RED `#E5232C` (signal/CTAs), INK `#0B0B0C` (text/borders/dark sections), PAPER `#F4F1EC` (warm canvas).
- **Type:** Archivo Black (display, uppercase, tight), Archivo (body), JetBrains Mono (eyebrows/tags/meta).
- **Signature:** 1.5px ink borders + hard blur-free offset shadows (`4px 4px 0 ink`); pill controls; modest card radii; lift-on-hover.
- **Tokens:** link `styles.css`; everything is a CSS custom property (`var(--red)`, `var(--font-display)`, `var(--shadow-hard)`, …).
- **Components:** `window.CRTRDesignSystem_b33342` — Button, IconButton, Card, ServiceTile, Badge, Tag, Input, Textarea, NavBar, BrandMark, WorkCard, Marquee.
- **Full example:** `ui_kits/website/` recreates the agency landing page from these components.
- **Logo:** `assets/crtr-logo.jpg` — keep the white frame; invert the mark to ink when placed on red.
