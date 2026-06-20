import React, { useState } from 'react';

/**
 * CRTR Card — bordered paper surface with the signature hard offset shadow
 * on hover. The brand's default container for grouped content & testimonials.
 */
export function Card({
  children,
  interactive = true,
  padding = 24,
  tone = 'paper',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);

  const tones = {
    paper: { background: 'var(--paper)', color: 'var(--ink)' },
    ink:   { background: 'var(--ink)', color: 'var(--paper)' },
    red:   { background: 'var(--red)', color: 'var(--white)' },
  };

  const hoverShadow = tone === 'paper' ? 'var(--shadow-hard-lg)' : 'var(--shadow-hard-inv)';

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: 'var(--bw) solid var(--ink)',
        borderRadius: 'var(--r-lg)',
        padding,
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        boxShadow: interactive && hover ? hoverShadow : 'none',
        transform: interactive && hover ? 'var(--lift)' : 'none',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
