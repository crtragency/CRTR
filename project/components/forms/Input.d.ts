import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Mono uppercase label shown above the field. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message; turns the border & ring red. */
  error?: string;
  style?: React.CSSProperties;
}

/** Structural text field — ink border, paper fill, red focus ring. */
export function Input(props: InputProps): JSX.Element;
