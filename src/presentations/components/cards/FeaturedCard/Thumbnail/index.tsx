import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { Image } from '@components';

interface ThumbnailProps {
  image?: string;
  title?: string;
  alt?: string;
  url?: string;
  loading?: boolean;
}

function Component({ image, alt, title, url, loading }: ThumbnailProps) {
  const classes = useMemo(
    () => cx('c-featured-card-thumbnail', 'basis-6/12 md:block hidden pr-6'),
    []
  );

  if (url && url.includes('http')) {
    return (
      <a href={url} title={title} className={classes}>
        <Image
          loading={loading}
          src={image}
          alt={alt}
          title={title}
          className="w-full h-full"
        />
      </a>
    );
  }

  if (url) {
    return (
      <Link className={classes} to={url} title={title}>
        <Image
          loading={loading}
          src={image}
          alt={alt}
          title={title}
          className="w-full h-full"
        />
      </Link>
    );
  }

  return (
    <div className={classes}>
      <Image
        loading={loading}
        src={image}
        alt={alt}
        title={title}
        className="w-full h-full"
      />
    </div>
  );
}

const Thumbnail = React.memo(Component);

export default Thumbnail;
