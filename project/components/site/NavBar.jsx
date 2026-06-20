import React from 'react';
import { BrandMark } from './BrandMark.jsx';
import { Badge } from '../data-display/Badge.jsx';

/**
 * CRTR NavBar — sticky top navigation. Paper band, ink underline, brand lockup,
 * link row, and an availability CTA pill on the right.
 */
export function NavBar({
  logoSrc,
  links = [{ label: 'Services', href: '#services' }, { label: 'Work', href: '#work' }, { label: 'Process', href: '#process' }, { label: 'Words', href: '#testimonials' }],
  cta = 'Booking — May',
  ctaHref = '#contact',
  style,
  ...rest
}) {
  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--paper)',
        borderBottom: 'var(--bw) solid var(--ink)',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)',
        height: 'var(--nav-h)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" aria-label="CRTR. Creator Studio"><BrandMark logoSrc={logoSrc} size={38} /></a>

        <nav aria-label="Main" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {links.map((l) => (
            <a key={l.label} href={l.href}
              style={{ fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-medium)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--red)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href={ctaHref} style={{ textDecoration: 'none' }}>
          <Badge tone="ink" dot>{cta}</Badge>
        </a>
      </div>
    </header>
  );
}
