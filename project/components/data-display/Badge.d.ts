import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** Color treatment. @default 'paper' */
  tone?: 'paper' | 'ink' | 'red' | 'softred';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Small mono pill for status, availability and eyebrow labels. */
export function Badge(props: BadgeProps): JSX.Element;
