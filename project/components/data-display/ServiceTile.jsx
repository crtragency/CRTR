import React, { useState } from 'react';
import { Tag } from './Tag.jsx';

/**
 * CRTR ServiceTile — the numbered capability cell from the services grid.
 * Inverts to ink-on-paper on hover, with the corner arrow flipping red.
 */
export function ServiceTile({ num = '01', title, children, tags = [], style, ...rest }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '48px 1fr auto',
        gap: '20px',
        alignItems: 'start',
        padding: '36px',
        background: hover ? 'var(--ink)' : 'var(--paper)',
        color: hover ? 'var(--paper)' : 'var(--ink)',
        border: 'var(--bw) solid var(--ink)',
        borderRadius: 'var(--r-lg)',
        transition: 'background var(--dur-slow) var(--ease-ui), color var(--dur-slow) var(--ease-ui)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-sm)', color: hover ? 'var(--red)' : 'var(--muted)', paddingTop: 6 }}>
        / {num}
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', lineHeight: 1, letterSpacing: 'var(--ls-display)', textTransform: 'uppercase', margin: '0 0 12px' }}>
          {title}
        </h3>
        <p style={{ color: 'inherit', opacity: 0.78, fontSize: 'var(--fs-body-sm)', margin: '0 0 18px', maxWidth: '38ch' }}>
          {children}
        </p>
        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        )}
      </div>
      <div
        style={{
          width: 46, height: 46, borderRadius: '50%',
          display: 'grid', placeItems: 'center',
          border: '1px solid currentColor',
          background: hover ? 'var(--red)' : 'var(--paper-2)',
          color: hover ? 'var(--white)' : 'var(--ink)',
          borderColor: hover ? 'var(--red)' : 'var(--ink)',
          transform: hover ? 'rotate(-45deg)' : 'none',
          transition: 'all var(--dur-slow) var(--ease-out)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 12L12 4M6 4h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
