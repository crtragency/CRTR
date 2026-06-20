**CRTR ServiceTile** — the numbered capability cell from the services grid; inverts to ink-on-paper on hover with a rotating red corner arrow.

```jsx
<ServiceTile num="01" title="Video editing" tags={['YouTube','Reels','Color']}>
  Long-form, short-form, ads, podcasts. We cut for rhythm and retention.
</ServiceTile>
```

Pass `num`, `title`, body as children, and `tags` (rendered as `<Tag>`s). Designed to sit in a 2-col bordered grid.
