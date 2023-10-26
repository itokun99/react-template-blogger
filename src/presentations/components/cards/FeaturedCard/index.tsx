import React from 'react';
import Thumbnail from './Thumbnail';
import Content from './Content';
import { PostLabel } from '@general-types';

interface FeaturedCardProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  loading?: boolean;
  labels?: PostLabel[];
  date?: string;
}

function Component({
  title,
  description,
  image,
  url,
  loading,
  labels,
  date
}: FeaturedCardProps) {
  return (
    <div className="c-featured-post sm:bg-white sm:border sm:border-slate-300 relative overflow-hidden">
      <div className="flex sm:p-6">
        <Thumbnail
          title={title}
          alt={title}
          image={image}
          url={url}
          loading={loading}
        />
        <Content
          title={title}
          description={description}
          url={url}
          loading={loading}
          labels={labels}
          date={date}
        />
      </div>
    </div>
  );
}

const FeaturedCard = React.memo(Component);

export default FeaturedCard;
