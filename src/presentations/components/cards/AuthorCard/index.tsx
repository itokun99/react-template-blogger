import React from 'react';
import { Image } from '@components';
import Content from './Content';

function Component() {
  return (
    <div className="c-author-card">
      <div className="flex gap-2">
        <Image
          src=""
          alt=""
          title=""
          className="w-9 h-9 overflow-hidden rounded-full"
        />
        <Content title="Indrawan Lisanto" subtitle="Front-End Developer" />
      </div>
    </div>
  );
}

const AuthorCard = React.memo(Component);

export default AuthorCard;
