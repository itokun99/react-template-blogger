import React from 'react';


interface SkeletonProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}


const Skeleton: React.FC<SkeletonProps> = ({ style, className, children, ...props }) => (
  <div style={style} className={`a-skeleton ${className || ''}`} {...props}>
    {children}
  </div>
);

const SkeletonMemo = React.memo(Skeleton);

export default SkeletonMemo;
