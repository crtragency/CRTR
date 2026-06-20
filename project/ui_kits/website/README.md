# CRTR Website — UI kit

A full, navigable recreation of the CRTR. Creator Studio marketing site, composed entirely from this design system's components (`window.CRTRDesignSystem_b33342`). Six interlinked pages.

## Pages
| File | Page | Notable interactions |
|---|---|---|
| `index.html` | **Home** | Start-a-project modal, hero meta, services/work teasers |
| `work.html` | **Work index** | Live discipline filter (All / Video / Motion / Web / Graphic) |
| `case-study.html` | **Case study** (sample: *Halftime*) | Hero film tile, media grid, pull quote, next-project |
| `services.html` | **Services** | Alternating service blocks, pricing, engagement models |
| `about.html` | **Studio** | Stats, team grid, values, client logo strip |
| `contact.html` | **Contact** | Working form (chip selects + success state), FAQ accordion |

## Architecture
- **`kit.css`** — shared layout CSS (grids, page-hero, CTA band, footer, case-study & contact layouts). Linked by every page alongside `../../styles.css`.
- **`chrome.jsx`** — shared chrome exported to `window`: `SiteNav`, `SectionHead`, `Stroke`, `CtaBand`, `Footer`, `ContactModal`, plus `NAV_LINKS` / `KIT_LOGO`. Loaded **before** each page's script.
- **`sections.jsx` + `app.jsx`** — the home page's sections and shell.
- **`work.jsx` / `caseStudy.jsx` / `servicesPage.jsx` / `about.jsx` / `contactPage.jsx`** — one script per internal page; each renders into `#root`.

Each page HTML loads React + Babel (pinned), then `_ds_bundle.js`, then `chrome.jsx`, then its page script.

## Notes
- All imagery is **placeholder** (colored tiles / monograms / PLAY tiles) in the brand's visual language. Swap in real film stills, project shots, and team photos — `image-slot`s or `<img>`s drop straight into the tiles.
- Copy is representative agency voice; project names (Halftime, Marrow, Northwall…) are placeholders.
- Nav links and footer links are wired across all six pages; `case-study.html` is reachable from any Work tile.
