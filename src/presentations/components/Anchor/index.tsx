import { memo } from 'react';

interface AnchorProps {
  href?: string;
  title?: string;
  target?: string;
  children?: React.ReactNode,
  style?: React.CSSProperties,
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const Anchor: React.FC<AnchorProps> = ({
  href,
  title,
  target,
  children,
  className,
  style,
  onClick,
  ...props
}) => (
  <a
    {...props}
    href={href}
    title={title}
    target={target}
    className={className}
    style={style}
    onClick={onClick}
  >
    {children}
  </a>
);

const AnchorMemo = memo(Anchor);

export default AnchorMemo;
