import { ReactElement } from 'react';

export interface IButtonProps {
  bgColor: string;
  color?: string;
  w: string | string[];
  boxShadow?: string;
  pl?: string;
  fontWeight?: string;
  fontSize?: string;
  text: string;
  type: 'button' | 'submit';
  display?: string[];
  onClickEvent?: () => void;
  fontFamily?: string;
  icon?: ReactElement<unknown, string>;
  children?: JSX.Element | string;
}
