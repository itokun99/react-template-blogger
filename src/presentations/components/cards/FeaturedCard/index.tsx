import React from 'react';
import Thumbnail from './Thumbnail';
import Content from './Content';

interface FeaturedCardProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

function Component({ title, description, image, url }: FeaturedCardProps) {
  return (
    <div className="c-featured-post bg-white border border-slate-300 relative overflow-hidden">
      <div className="flex">
        <Thumbnail title={title} alt={title} image={image} url={url} />
        <Content title={title} description={description} url={url} />
      </div>
    </div>
  );
}

const FeaturedCard = React.memo(Component);

export default FeaturedCard;
