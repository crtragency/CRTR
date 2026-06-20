import * as React from 'react';

export interface MarqueeProps {
  /** Phrases to scroll, e.g. ['Video editing','Motion design']. */
  items?: string[];
  /** Seconds per loop. Lower = faster. @default 28 */
  speed?: number;
  /** Separator glyph between items. @default '★' */
  star?: string;
  style?: React.CSSProperties;
}

/** Scrolling capability strip — ink band, red star separators, pause-on-hover. */
export function Marquee(props: MarqueeProps): JSX.Element;
