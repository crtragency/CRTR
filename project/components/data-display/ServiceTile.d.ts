import * as React from 'react';

export interface ServiceTileProps {
  /** Two-digit index, e.g. "01". @default '01' */
  num?: string;
  title: string;
  /** Description copy. */
  children?: React.ReactNode;
  /** Capability chips rendered as <Tag>s. */
  tags?: string[];
  style?: React.CSSProperties;
}

/**
 * Numbered capability cell that inverts to ink-on-paper on hover with a
 * red rotating corner arrow.
 * @startingPoint section="Cards" subtitle="Numbered service cell, inverts on hover" viewport="520x220"
 */
export function ServiceTile(props: ServiceTileProps): JSX.Element;
