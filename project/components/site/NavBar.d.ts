import * as React from 'react';

export interface NavLink { label: string; href: string; }

export interface NavBarProps {
  /** Mascot image URL for the brand mark. */
  logoSrc?: string;
  /** Nav links. */
  links?: NavLink[];
  /** Availability CTA label. @default 'Booking — May' */
  cta?: string;
  ctaHref?: string;
  style?: React.CSSProperties;
}

/**
 * Sticky top navigation — brand lockup, link row, availability CTA pill.
 * @startingPoint section="Navigation" subtitle="Sticky agency nav with availability pill" viewport="1280x80"
 */
export function NavBar(props: NavBarProps): JSX.Element;
