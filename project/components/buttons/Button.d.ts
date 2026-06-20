import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'dark' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Optional icon node. If omitted on primary/dark, a default arrow is shown. */
  icon?: React.ReactNode;
  /** Place icon after the label. @default true */
  iconRight?: boolean;
  disabled?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * CRTR's primary call-to-action control: a pill with a hard offset ink shadow
 * that lifts on hover and snaps on press.
 *
 * @startingPoint section="Buttons" subtitle="Pill CTA with hard offset shadow" viewport="420x140"
 */
export function Button(props: ButtonProps): JSX.Element;
