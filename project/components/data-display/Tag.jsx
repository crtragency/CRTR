import React from 'react';

/**
 * CRTR Tag — outlined mono chip used to list capabilities/skills.
 * Inherits currentColor for its border so it inverts cleanly on dark hover.
 */
export function Tag({ children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-2xs)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '5px 10px',
        border: '1px solid currentColor',
        borderRadius: 'var(--r-pill)',
        opacity: 0.85,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
