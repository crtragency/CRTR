import React, { useState } from 'react';

/**
 * CRTR Textarea — multi-line companion to Input. Same structural styling.
 */
export function Textarea({ label, hint, error, rows = 4, id, style, ...rest }) {
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
      <textarea
        id={inputId}
        rows={rows}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--fs-body-sm)',
          lineHeight: 'var(--lh-body)',
          color: 'var(--ink)',
          background: 'var(--white)',
          border: `var(--bw) solid ${error ? 'var(--red)' : 'var(--ink)'}`,
          borderRadius: 'var(--r-sm)',
          padding: '12px 14px',
          outline: 'none',
          resize: 'vertical',
          boxShadow: focus ? 'var(--ring)' : 'none',
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
