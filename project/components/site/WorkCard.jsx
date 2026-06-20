import React, { useState } from 'react';

/**
 * CRTR WorkCard — portfolio tile for the showcase grid. Colored field,
 * mono meta + display title at the bottom-left, lifts with a hard shadow.
 */
export function WorkCard({ meta, title, tone = 'ink', href = '#', style, ...rest }) {
  const [hover, setHover] = useState(false);

  const tones = {
    ink:   { background: 'var(--ink)', color: '#fff' },
    red:   { background: 'var(--red)', color: '#fff' },
    redGrad: { background: 'linear-gradient(135deg, var(--red) 0%, var(--red-darker) 100%)', color: '#fff' },
    darkGrad: { background: 'linear-gradient(135deg, #0B0B0C 0%, #2a2a2d 100%)', color: '#fff' },
    steel: { background: 'var(--steel)', color: '#fff' },
    gold:  { background: 'var(--gold)', color: 'var(--ink)' },
    paper: { background: 'var(--paper-3)', color: 'var(--ink)' },
  };

  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: 200,
        border: 'var(--bw) solid var(--ink)',
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        padding: 22,
        transition: 'transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)',
        boxShadow: hover ? 'var(--shadow-hard-lg)' : 'none',
        transform: hover ? 'var(--lift-lg)' : 'none',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-2xs)', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85 }}>
        {meta}
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '-0.02em', textTransform: 'uppercase', marginTop: 4, lineHeight: 1 }}>
        {title}
      </div>
    </a>
  );
}
