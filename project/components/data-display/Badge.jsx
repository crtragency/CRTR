import React from 'react';

/**
 * CRTR Badge — small pill for status, availability, eyebrows.
 * `dot` adds a status indicator; tone sets the color treatment.
 */
export function Badge({ children, tone = 'paper', dot = false, style, ...rest }) {
  const tones = {
    paper: { background: 'var(--paper-2)', color: 'var(--ink)', border: 'var(--bw) solid var(--ink)' },
    ink:   { background: 'var(--ink)', color: 'var(--paper)', border: 'var(--bw) solid var(--ink)' },
    red:   { background: 'var(--red)', color: 'var(--white)', border: 'var(--bw) solid var(--ink)' },
    softred: { background: 'var(--red-soft)', color: 'var(--red-deep)', border: 'var(--bw) solid var(--red-deep)' },
  };

  const dotColors = { paper: 'var(--red)', ink: '#22c55e', red: 'var(--white)', softred: 'var(--red)' };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-xs)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-eyebrow)',
        fontWeight: 'var(--fw-medium)',
        padding: '6px 12px',
        borderRadius: 'var(--r-pill)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: dotColors[tone],
          boxShadow: tone === 'ink' ? '0 0 0 3px rgba(34,197,94,.25)' : 'none',
        }} />
      )}
      {children}
    </span>
  );
}
