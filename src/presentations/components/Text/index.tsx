interface TextProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  tag?: 'span' | 'p'
}



const Text: React.FC<TextProps> = ({ className, style, children, tag, ...props }) => {
  const Tag = tag || 'p';
  return (
    <Tag className={className} style={style} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
