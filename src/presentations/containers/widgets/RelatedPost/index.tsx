import React from 'react';
import { SimplePostList } from '@components';
import { useLabeledPosts, usePostDetail, usePostDetailParams } from '@hooks';

export interface RelatedPostProps {
  label: string | string[];
  title?: string | React.ReactNode;
  loading?: boolean;
}

function Component({ label, title, loading }: RelatedPostProps) {
  const { id } = usePostDetailParams();
  const queryDetail = usePostDetail({ id, byPath: true });
  const query = useLabeledPosts({
    label,
    showImage: false,
    excludes: queryDetail.data?.id ? [queryDetail.data?.id] : []
  });

  return (
    <SimplePostList
      title={title || 'Related Post'}
      loading={loading || query.isLoading}
      items={query.items}
    />
  );
}

export const RelatedPost = React.memo(Component);
