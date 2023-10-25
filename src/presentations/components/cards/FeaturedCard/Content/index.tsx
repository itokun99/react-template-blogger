import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Button, AuthorCard, Hashtag } from '@components';

interface ContentProps {
  title?: string;
  description?: string;
  url?: string;
}

function Component({ title, description, url }: ContentProps) {
  return (
    <div className="flex-1 pt-6 pr-6 pb-6 flex flex-col">
      {/* Tags */}
      <div className="pt-2">
        {[
          { title: 'Tutorial', url: '/tutorial' },
          { title: 'CSS', url: '/css' }
        ].map(v => (
          <Hashtag key={v.title} title={v.title} url={v.url} />
        ))}
      </div>
      {/* title */}
      <div className="pb-2">
        <Link to={url || ''}>
          <h2 className="font-bold text-xl text-slate-700">{title}</h2>
        </Link>
      </div>

      {/* Date */}
      <div className="pb-4">
        <p className="text-xs text-slate-700">Published on Oct 23, 2023</p>
      </div>

      {/* Description */}
      <div className="flex-1 pb-6">
        <p className="text-sm text-slate-700">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between">
        <div>
          <AuthorCard />
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
