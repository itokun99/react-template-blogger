import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Container } from '@components';

export interface ContentLayoutProps {
  top?: React.ReactNode;
  main: React.ReactNode;
  side: React.ReactNode;
  stickySide?: boolean;
  bottom?: React.ReactNode;
}

function Component({
  top,
  main,
  side,
  stickySide,
  bottom
}: ContentLayoutProps) {
  const innerSideClasses = useMemo(
    () => clsx(`mb-6 sm:px-0 md:top-20`, stickySide && 'md:sticky'),
    [stickySide]
  );

  return (
    <div className="c-content-layout">
      {top}
      <Container>
        <div className="relative flex flex-wrap">
          <div className="c-content-layout-main md:w-8/12">{main}</div>
          <aside className="c-content-layout-side relative md:w-4/12">
            <div className={innerSideClasses}>{side}</div>
          </aside>
        </div>
      </Container>
      {bottom}
    </div>
  );
}

export const ContentLayout = React.memo(Component);
