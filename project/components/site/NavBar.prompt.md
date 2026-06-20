**CRTR NavBar** — sticky top navigation with the brand lockup, link row, and an availability CTA pill.

```jsx
<NavBar logoSrc="assets/crtr-logo.jpg"
  links={[{label:'Services',href:'#services'},{label:'Work',href:'#work'}]}
  cta="Booking — May" />
```

Composes `BrandMark` + `Badge`. Links turn red on hover.
