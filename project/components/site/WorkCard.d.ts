import * as React from 'react';

export interface WorkCardProps {
  /** Mono meta line, e.g. "2025 · Brand film · Motion". */
  meta?: string;
  /** Display title. */
  title?: string;
  /** Field color. @default 'ink' */
  tone?: 'ink' | 'red' | 'redGrad' | 'darkGrad' | 'steel' | 'gold' | 'paper';
  href?: string;
  style?: React.CSSProperties;
}

/**
 * Portfolio tile for the showcase grid; colored field with bottom-left
 * meta + title, lifts with a hard shadow on hover.
 * @startingPoint section="Cards" subtitle="Portfolio showcase tile" viewport="360x220"
 */
export function WorkCard(props: WorkCardProps): JSX.Element;
