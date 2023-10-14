import React from 'react';


interface ImageProps {
  source?: string;
  width?: number | string;
  height?: number | string;
  resizeMode?: "auto" | "contain" | "cover";
  backgroundImage?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Image: React.FC<ImageProps> = ({
  source,
  width,
  height,
  resizeMode,
  backgroundImage,
  title,
  className,
  style,
  children,
  ...props
}) => {
  if (backgroundImage) {
    return (
      <div
        title={title}
        className={className}
        style={{
          ...(source && { backgroundImage: `url(${source})` }),
          ...(width && { width }),
          ...(height && { height }),
          ...(resizeMode && { backgroundSize: resizeMode }),
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <img
      src={source}
      title={title}
      className={className}
      style={style}
      width={width}
      height={height}
      {...props}
    />
  );
};

const ImageMemo = React.memo(Image)

export default ImageMemo;
