import * as React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Outlined mono chip for listing capabilities; uses currentColor so it inverts on dark surfaces. */
export function Tag(props: TagProps): JSX.Element;
