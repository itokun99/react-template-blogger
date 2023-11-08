import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@components';

interface ListItemProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  image?: string;
  url?: string;
}

function Component({ title, subtitle, image, url }: ListItemProps) {
  return (
    <div className="c-list-item mb-4 border border-slate-300 p-4">
      <div className="flex gap-2">
        {image && (
          <Image
            src={image}
            alt={title as string}
            className="h-10 w-10 overflow-hidden rounded-md"
          />
        )}
        <div className="flex-1">
          {title && (
            <Link to={url as string}>
              <h3 className="text-sm font-bold text-slate-700">{title}</h3>
            </Link>
          )}
          {subtitle && <p className="text-xs text-slate-700">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

export const ListItem = React.memo(Component);
