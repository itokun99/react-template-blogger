import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Button, AuthorCard, Hashtag } from '@components';
import { PostLabel } from '@general-types';
import { AuthorCardProps } from '../../AuthorCard';
import Skeleton from './Skeleton';
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
  date,
  author,
  loading
}: ContentProps) {
  if (loading) return <Skeleton />;

  return (
    <div className="">
      {/* title */}
      <div className="pb-0 md:pb-2">
        <Link to={url || ''} className="inline-block">
          <h2 className="text-md w-full whitespace-normal font-bold text-slate-700">
            {title}
          </h2>
        </Link>
      </div>

      {/* Date */}
      <div className="pb-4">
        <p className="text-xs text-slate-700">
          {date && `Published on ${date}`}
        </p>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between sm:flex-nowrap">
        <div className="mb-6 w-full sm:mb-0 sm:w-auto">
          <AuthorCard {...author} />
        </div>
      </div>
    </div>
  );
}

const Content = React.memo(Component);

export default Content;
