import React from 'react';
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

function Container({ className, children }: ContainerProps) {
  return (
    <div className={clsx('container mx-auto max-w-5xl', className)}>
      {children}
    </div>
  );
}

const ContainerMemo = React.memo(Container);

export default ContainerMemo;
