import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Lift + hard shadow on hover. @default true */
  interactive?: boolean;
  /** Inner padding in px. @default 24 */
  padding?: number;
  /** Surface color. @default 'paper' */
  tone?: 'paper' | 'ink' | 'red';
  style?: React.CSSProperties;
}

/**
 * Bordered surface with the brand's hard offset shadow on hover.
 * @startingPoint section="Cards" subtitle="Bordered paper card with hard shadow" viewport="380x220"
 */
export function Card(props: CardProps): JSX.Element;
