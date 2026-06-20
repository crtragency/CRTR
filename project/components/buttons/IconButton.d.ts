import * as React from 'react';

export interface IconButtonProps {
  /** Icon node — an SVG, mono glyph, or short label like "IG". */
  children?: React.ReactNode;
  /** @default 'outline' */
  variant?: 'outline' | 'solid' | 'red';
  /** @default 'circle' */
  shape?: 'circle' | 'square';
  /** Pixel size of the square. @default 46 */
  size?: number;
  disabled?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  'aria-label'?: string;
  style?: React.CSSProperties;
}

/** Icon-only control for socials, media transport, and corner actions. */
export function IconButton(props: IconButtonProps): JSX.Element;
