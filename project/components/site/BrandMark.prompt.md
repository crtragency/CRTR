**CRTR BrandMark** — the logo lockup (red mascot mark + "CRTR." wordmark with a hard offset shadow); use in nav, footer, and anywhere the brand signs off.

```jsx
<BrandMark logoSrc="assets/crtr-logo.jpg" />
<BrandMark onInk size={48} />        {/* footer, on ink */}
<BrandMark showWord={false} />       {/* mark only — favicon-style */}
```

Pass `logoSrc` for the real mascot, else it shows the "C." monogram. Set `onInk` on dark surfaces.
