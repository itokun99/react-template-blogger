
interface ViewProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const View: React.FC<ViewProps> = ({ className, style, children, ...props }) => {
  return (
    <div {...props} className={className} style={style}>
      {children}
    </div>
  );
};

export default View;
