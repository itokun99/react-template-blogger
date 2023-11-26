import React, { useMemo } from 'react';
import clsx from 'clsx';
import { FiMenu, FiSearch, FiLink } from 'react-icons/fi';

enum IconNameEnum {
  search = 'search',
  menu = 'menu',
  link = 'link'
}

type IconName = keyof typeof IconNameEnum;

interface IconData {
  name: IconName;
  icon: React.ElementType | string | null;
  type: 'component' | 'image';
}

const ICONS: IconData[] = [
  { name: 'search', icon: FiSearch, type: 'component' },
  { name: 'menu', icon: FiMenu, type: 'component' },
  { name: 'link', icon: FiLink, type: 'component' }
]

interface IconProps {
  name: string;
  className?: string
}

function Component({ name, className }: IconProps) {
  const classes = useMemo(() => clsx('c-icon', className), [className]);

  function renderIcon() {
    const source = ICONS.filter(data => data.name === name)[0];

    if (!source || !source.icon) return null;

    if (source.type === 'component' && typeof source.icon !== 'string' && source.icon) {
      const Comp = source.icon;

      return <Comp className={classes} />;
    }
    return <img src={source.icon as string} alt="" className={classes} />;
  }

  return renderIcon();
}

export const Icon = React.memo(Component);
