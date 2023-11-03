import React, { PropsWithChildren } from 'react';

export interface BaseLayoutProps extends PropsWithChildren {
  header: React.ReactNode;
  footer: React.ReactNode;
}

export function BaseLayout({ header, children, footer }: BaseLayoutProps) {
  return (
    <React.Fragment>
      {header}
      <div className="pt-20">{children}</div>
      {footer}
    </React.Fragment>
  );
}
