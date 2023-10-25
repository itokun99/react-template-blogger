import React, { useMemo } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

interface HashtagProps {
  title?: string;
  url?: string;
  className?: string;
}

function Component({ title, url, className }: HashtagProps) {
  const hasUrl = Boolean(url);
  const isHref = hasUrl && url?.includes('http');
  const isLink = hasUrl && !isHref;

  const classes = useMemo(
    () =>
      cx(
        'c-hastag',
        'inline-block text-xs text-slate-700 font-bold mr-2 mb-1',
        className
      ),
    [className]
  );

  if (isHref) {
    return <a href={url} title={title} className={classes}>{`#${title}`}</a>;
  }

  if (isLink) {
    return (
      <Link to={url || ''} title={title} className={classes}>
        {`#${title}`}
      </Link>
    );
  }

  return <span className={classes}></span>;
}

const Hashtag = React.memo(Component);

export default Hashtag;
