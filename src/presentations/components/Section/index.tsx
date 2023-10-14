import React from 'react'

interface SectionProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, style, children, ...props }) => (
  <section className={className} style={style} {...props}>
    {children}
  </section>
);

const SectionMemo = React.memo(Section)

export default SectionMemo;
