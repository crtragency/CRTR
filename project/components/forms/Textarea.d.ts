import * as React from 'react';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  rows?: number;
  style?: React.CSSProperties;
}

/** Multi-line text field; structural styling matching Input. */
export function Textarea(props: TextareaProps): JSX.Element;
