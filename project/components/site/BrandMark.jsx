import React from 'react';

/**
 * CRTR BrandMark — the lockup: red rounded-square mascot mark with a hard
 * ink shadow, plus the "CRTR." wordmark. Pass logoSrc to use the real mascot
 * image; omits to the "C." monogram fallback.
 */
export function BrandMark({ logoSrc, size = 38, showWord = true, word = 'CRTR.', onInk = false, style, ...rest }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', ...style }} {...rest}>
      <span style={{
        width: size, height: size,
        borderRadius: 'var(--r-sm)',
        background: 'var(--red)',
        display: 'grid', placeItems: 'center',
        color: '#fff',
        fontFamily: 'var(--font-display)',
        fontSize: size * 0.37,
        border: 'var(--bw) solid var(--ink)',
        boxShadow: onInk ? 'var(--shadow-hard-inv-sm)' : 'var(--shadow-hard-sm)',
        overflow: 'hidden',
      }}>
        {logoSrc
          ? <img src={logoSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <span style={{ transform: 'translateY(-1px)' }}>C.</span>}
      </span>
      {showWord && (
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: size * 0.53,
          letterSpacing: '-0.02em',
          color: onInk ? 'var(--paper)' : 'var(--ink)',
        }}>
          {word}
        </span>
      )}
    </span>
  );
}
