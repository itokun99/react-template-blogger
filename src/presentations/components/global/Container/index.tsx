import React from 'react';
import type { PropsWithChildren } from 'react';
import cx from 'classnames';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

function Container({ className, children }: ContainerProps) {
  return (
    <div className={cx('container max-w-5xl mx-auto px-6', className)}>
      {children}
    </div>
  );
}

const ContainerMemo = React.memo(Container);

export default ContainerMemo;
