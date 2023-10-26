import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Button, AuthorCard, Hashtag } from '@components';
import { PostLabel } from '@general-types';
import { AuthorCardProps } from '../../AuthorCard';
interface ContentProps {
  title?: string;
  description?: string;
  url?: string;
  loading?: boolean;
  labels?: PostLabel[];
  date?: string;
  author?: AuthorCardProps;
}

function Component({
  title,
  description,
  url,
  labels = [],
  date,
  author
}: ContentProps) {
  return (
    <div className="flex-1 flex flex-col">
      {/* Tags */}
      <div className="pt-0 md:pt-2">
        {labels.map(v => (
          <Hashtag key={v.title} title={v.title} url={v.url} />
        ))}
      </div>
      {/* title */}
      <div className="pb-0 md:pb-2">
        <Link to={url || ''}>
          <h2 className="font-bold text-xl text-slate-700">{title}</h2>
        </Link>
      </div>

      {/* Date */}
      <div className="pb-4">
        <p className="text-xs text-slate-700">
          {date && `Published on ${date}`}
        </p>
      </div>

      {/* Description */}
      <div className="flex-1 pb-6">
        <p className="text-sm text-slate-700">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between flex-wrap sm:flex-nowrap">
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <AuthorCard {...author} />
        </div>
        <Button
          url={url}
          iconAlign="end"
          icon={<FiArrowRight className="text-lg !text-white" />}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}

const Content = React.memo(Component);

export default Content;
