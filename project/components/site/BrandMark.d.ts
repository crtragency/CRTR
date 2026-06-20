import * as React from 'react';

export interface BrandMarkProps {
  /** URL to the mascot image; falls back to the "C." monogram if omitted. */
  logoSrc?: string;
  /** Mark size in px (wordmark scales from it). @default 38 */
  size?: number;
  /** Show the wordmark next to the mark. @default true */
  showWord?: boolean;
  /** Wordmark text. @default 'CRTR.' */
  word?: string;
  /** Use paper-colored shadow/text for dark backgrounds. @default false */
  onInk?: boolean;
  style?: React.CSSProperties;
}

/** The CRTR logo lockup — red mascot mark + wordmark, with a hard offset shadow. */
export function BrandMark(props: BrandMarkProps): JSX.Element;
