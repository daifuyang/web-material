import * as React from 'react';
import { createElement } from 'react';
import BsButton from 'react-bootstrap/Button';

export interface ButtonProps {
  /**
   * 类型
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'link';
  outline?: boolean;
  children?: string;
}

const Button: React.FC<ButtonProps> = function Button({
  variant = 'primary',
  outline = false,
  children,
  ...otherProps
}) {
  let newVariant: any = variant;
  if (outline && variant != 'link') {
    newVariant = `outline-${variant}`;
  }

  return (
    <BsButton variant={newVariant} {...otherProps}>
      {children}
    </BsButton>
  );
};

export default Button;
