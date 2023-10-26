import React from 'react';
import { Image } from '@components';
import Content from './Content';

export interface AuthorCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  loading?: boolean;
}

function Component({ title, subtitle, image, loading }: AuthorCardProps) {
  return (
    <div className="c-author-card">
      <div className="flex gap-2">
        <Image
          src={image}
          alt={title}
          title={title}
          loading={loading}
          className="w-9 h-9 overflow-hidden rounded-full"
        />
        <Content title={title} subtitle={subtitle} />
      </div>
    </div>
  );
}

const AuthorCard = React.memo(Component);

export default AuthorCard;
