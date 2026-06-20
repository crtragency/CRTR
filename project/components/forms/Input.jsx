import React, { useState } from 'react';

/**
 * CRTR Input — structural text field. Ink border, paper fill, red focus ring.
 * Square-ish corners to match the brand's architectural feel.
 */
export function Input({
  label,
  hint,
  error,
  type = 'text',
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-2xs)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--ls-eyebrow)',
          color: 'var(--muted)',
        }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--ink)',
          background: 'var(--white)',
          border: `var(--bw) solid ${error ? 'var(--red)' : 'var(--ink)'}`,
          borderRadius: 'var(--r-sm)',
          padding: '12px 14px',
          outline: 'none',
          boxShadow: focus ? (error ? '0 0 0 3px rgba(229,35,44,.30)' : 'var(--ring)') : 'none',
          transition: 'box-shadow var(--dur-fast) var(--ease-ui)',
          ...style,
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{
          fontSize: 'var(--fs-2xs)',
          fontFamily: 'var(--font-mono)',
          color: error ? 'var(--red)' : 'var(--muted)',
        }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
