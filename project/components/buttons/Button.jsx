import React, { useState } from 'react';

/**
 * CRTR Button — the signature pill control with a hard offset ink shadow.
 * Variants: primary (red), dark (ink), ghost (outline). Lifts on hover.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight = true,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);

  const sizes = {
    sm: { padding: '10px 16px', fontSize: 'var(--fs-sm)' },
    md: { padding: '14px 22px', fontSize: 'var(--fs-body-sm)' },
    lg: { padding: '18px 30px', fontSize: 'var(--fs-body)' },
  };

  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    borderRadius: 'var(--r-pill)',
    border: 'var(--bw) solid var(--ink)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textTransform: 'none',
    transition: 'transform var(--dur-fast) var(--ease-snap), box-shadow var(--dur-fast) var(--ease-ui), background var(--dur-fast) var(--ease-ui), color var(--dur-fast) var(--ease-ui)',
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: 'var(--red)',
      color: 'var(--white)',
      boxShadow: hover && !disabled ? 'var(--shadow-hard-lg)' : 'var(--shadow-hard)',
    },
    dark: {
      background: 'var(--ink)',
      color: 'var(--white)',
      boxShadow: hover && !disabled ? 'var(--shadow-hard-lg)' : 'var(--shadow-hard)',
    },
    ghost: {
      background: hover && !disabled ? 'var(--ink)' : 'transparent',
      color: hover && !disabled ? 'var(--paper)' : 'var(--ink)',
      boxShadow: 'none',
    },
  };

  const lift =
    !disabled && hover
      ? { transform: press ? 'translate(0,0)' : 'var(--lift)' }
      : {};

  const arrow = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      style={{ transition: 'transform var(--dur-base) var(--ease-out)', transform: hover ? 'translateX(3px)' : 'none' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const Tag = href ? 'a' : as;

  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...lift, ...style }}
      {...rest}
    >
      {icon && !iconRight ? icon : null}
      {children}
      {icon && iconRight ? icon : (iconRight && variant !== 'ghost' ? arrow : null)}
    </Tag>
  );
}
