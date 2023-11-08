import React from 'react';
import { SimplePostList } from '@components';
import { useLabeledPosts } from '@hooks';

export interface RelatedPostProps {
  label: string | string[];
  title?: string | React.ReactNode;
}

function Component({ label, title }: RelatedPostProps) {
  const query = useLabeledPosts({ label, showImage: false });

  return <SimplePostList title={title || 'Related Post'} items={query.items} />;
}

export const RelatedPost = React.memo(Component);
