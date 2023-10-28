import React, { PropsWithChildren, useMemo } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  ButtonRounded,
  ButtonType,
  ButtonVariant,
  ButtonWidth,
  VariantType
} from '@general-types';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  type?: ButtonType;
  rounded?: ButtonRounded;
  variant?: ButtonVariant;
  width?: ButtonWidth;
  kind?: VariantType;
  url?: string;
  icon?: React.ReactNode;
  iconAlign?: 'start' | 'end';
}

function Component({
  children,
  className,
  type = 'button',
  url,
  icon,
  iconAlign = 'start'
}: ButtonProps) {
  const buttonClasses = useMemo(() => {
    return clsx(
      'c-button',
      'bg-sky-600 px-4 py-2 text-sm font-bold text-white',
      className
    );
  }, [className]);

  function renderContent() {
    if (icon) {
      return (
        <div className="flex gap-2">
          {iconAlign === 'start' && <div>{icon}</div>}
          <div className="flex-1">{children}</div>
          {iconAlign === 'end' && <div>{icon}</div>}
        </div>
      );
    }

    return children;
  }

  if (url?.includes('http')) {
    return (
      <a href={url} className={buttonClasses}>
        {renderContent()}
      </a>
    );
  }

  if (url) {
    return (
      <Link to={url} className={buttonClasses}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses}>
      {renderContent()}
    </button>
  );
}

const Button = React.memo(Component);

export default Button;
