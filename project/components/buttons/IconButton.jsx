import React, { useState } from 'react';

/**
 * CRTR IconButton — square/circular icon-only control. Used for socials,
 * close buttons, media controls, and the service-tile corner arrow.
 */
export function IconButton({
  children,
  variant = 'outline',
  shape = 'circle',
  size = 46,
  disabled = false,
  href,
  onClick,
  'aria-label': ariaLabel,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);

  const base = {
    width: size,
    height: size,
    display: 'inline-grid',
    placeItems: 'center',
    borderRadius: shape === 'circle' ? '50%' : 'var(--r-sm)',
    border: 'var(--bw) solid var(--ink)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-snap), background var(--dur-fast) var(--ease-ui), color var(--dur-fast) var(--ease-ui), box-shadow var(--dur-fast) var(--ease-ui)',
  };

  const variants = {
    outline: {
      background: hover && !disabled ? 'var(--red)' : 'var(--paper-2)',
      color: hover && !disabled ? 'var(--white)' : 'var(--ink)',
      borderColor: hover && !disabled ? 'var(--red)' : 'var(--ink)',
    },
    solid: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      boxShadow: hover && !disabled ? 'var(--shadow-hard-sm)' : 'none',
      transform: hover && !disabled ? 'var(--lift)' : 'none',
    },
    red: {
      background: 'var(--red)',
      color: 'var(--white)',
      borderColor: 'var(--ink)',
      boxShadow: hover && !disabled ? 'var(--shadow-hard-sm)' : 'none',
      transform: hover && !disabled ? 'var(--lift)' : 'none',
    },
  };

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      aria-label={ariaLabel}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
