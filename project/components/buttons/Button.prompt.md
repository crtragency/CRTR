**CRTR Button** — the signature pill CTA with a hard offset ink shadow; use for any primary or secondary action.

```jsx
<Button variant="primary">Start a project</Button>
<Button variant="ghost">See selected work</Button>
<Button variant="dark" size="lg">Book a call</Button>
```

Variants: `primary` (red), `dark` (ink), `ghost` (outline → fills ink on hover). Sizes: `sm` `md` `lg`. Primary/dark show a default arrow icon unless you pass `icon`. Pass `href` to render an anchor. Lifts `translate(-2px,-2px)` on hover, snaps back on press.
