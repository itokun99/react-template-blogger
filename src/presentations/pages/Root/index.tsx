import type { PropsWithChildren } from 'react';
import { Header } from '@components';

interface RootProps extends PropsWithChildren { }

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Root;