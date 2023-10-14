import { memo } from 'react';

interface ContainerProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, style, children, ...props }) => (
  <div className={`container ${className || ''}`} style={style} {...props}>
    {children}
  </div>
);

const ContainerMemo = memo(Container)

export default ContainerMemo;
