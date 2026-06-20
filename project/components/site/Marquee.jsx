import React from 'react';

/**
 * CRTR Marquee — the scrolling capability strip. Ink band, paper text,
 * red star separators. Pause-on-hover, reduced-motion safe.
 */
export function Marquee({ items = [], speed = 28, star = '★', style, ...rest }) {
  const run = (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span>{it}</span>
          <span style={{ color: 'var(--red)', fontSize: '0.7em' }}>{star}</span>
        </React.Fragment>
      ))}
    </span>
  );

  return (
    <div
      style={{
        borderTop: 'var(--bw) solid var(--ink)',
        borderBottom: 'var(--bw) solid var(--ink)',
        background: 'var(--ink)',
        color: 'var(--paper)',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <div
        className="crtr-marquee-track"
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          padding: '18px 0',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
          fontSize: '28px',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          animation: `crtr-marq ${speed}s linear infinite`,
        }}
      >
        {run}{run}
      </div>
      <style>{`
        @keyframes crtr-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .crtr-marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .crtr-marquee-track { animation: none !important; } }
      `}</style>
    </div>
  );
}
