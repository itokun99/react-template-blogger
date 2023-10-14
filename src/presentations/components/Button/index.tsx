import React from 'react';
import cx from 'classnames';
import Anchor from '../Anchor';
import type { VariantType } from '@general-types';

interface ButtonProps {
  onPress?: () => void;
  className?: string;
  style?: React.CSSProperties;
  anchor?: boolean;
  href?: string;
  title?: string;
  children?: React.ReactNode;
  target?: string;
  variant: VariantType;
  outline?: boolean;
  block?: boolean;
  radius?: boolean;
  small?: boolean;
  large?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  className,
  style,
  anchor,
  href,
  title,
  children,
  target,
  variant = 'default',
  outline,
  block,
  radius,
  small,
  large,
  disabled,
  ...props
}) => {
  const btnClass = cx('a-button__element', className, {
    [`a-button__element--${variant}`]: variant,
    'a-button__element--outline': outline,
    'a-button__element--block': block,
    'a-button__element--radius': radius,
    'a-button__element--small': small,
    'a-button__element--large': large,
    'a-button__element--disabled': disabled
  });
  if (anchor)
    return (
      <Anchor
        // eslint-disable-next-line no-script-url
        href={disabled ? 'javascript:void(0)' : href}
        title={title}
        style={style}
        className={btnClass}
        onClick={onPress}
        target={target}
        {...props}
      >
        {children}
      </Anchor>
    );

  return (
    <button
      disabled={disabled}
      type="button"
      className={btnClass}
      onClick={onPress}
      {...props}
      style={style}
    >
      {children}
    </button>
  );
};

const ButtonMemo = React.memo(Button);

export default ButtonMemo;
