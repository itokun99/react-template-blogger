import React from 'react';
import { BasePostList, Button, Container } from '@components';
import { useLatestPosts } from '@hooks';

export interface LatestPostProps {
  title?: string | React.ReactNode;
}

function Component({ title }: LatestPostProps) {
  const query = useLatestPosts();

  const renderButton = () => {
    return (
      <Container className="px-6">
        <div className="pb-6 text-center">
          {query.isFetchingNextPage ? (
            <Button onClick={() => query.fetchNextPage()} className="">
              Loading...
            </Button>
          ) : query.hasNextPage ? (
            <Button onClick={() => query.fetchNextPage()} className="">
              See More
            </Button>
          ) : null}
        </div>
      </Container>
    );
  };

  return (
    <div className="latest-post">
      <BasePostList
        title={title}
        loading={query.isLoading}
        items={query.items}
      />
      {renderButton()}
    </div>
  );
}

export const LatestPost = React.memo(Component);
