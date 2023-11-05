import React from 'react';
import clsx from 'clsx';
import { Container, SectionTitle, SimpleCard } from '@components';
import { useLatestPosts } from '@hooks';
import { formatDate, createAuthorDataFromPost } from '@utils';

const LOADING_ITEMS = [1, 2, 3, 4];

export interface LatestPostProps {
  title?: string | React.ReactNode;
}

function Component({ title }: LatestPostProps) {
  const query = useLatestPosts();

  const renderItems = () => {
    if (query.isLoading) {
      return (
        <>
          {LOADING_ITEMS.map((i, idx) => (
            <div
              key={i}
              className={clsx(
                'mb-6 inline-block w-full border-b border-slate-300 px-6 pb-6 sm:mb-0 sm:border-none sm:px-0',
                idx === LOADING_ITEMS.length - 1
                  ? '!mb-0 !border-b-0 sm:!pb-0'
                  : ''
              )}
            >
              <SimpleCard loading={query.isLoading} />
            </div>
          ))}
        </>
      );
    }

    return (
      <div className="block sm:pb-6">
        {query.items.map((item, idx) => (
          <div
            key={`simple-post-${item.id}`}
            className={clsx(
              'mb-6 inline-block w-full border-b border-slate-300 px-6 pb-6 sm:mb-0 sm:border-none sm:px-0',
              idx === query.items.length - 1 ? '!mb-0 !border-b-0 sm:!pb-0' : ''
            )}
          >
            <SimpleCard
              loading={query.isLoading}
              image={item.images?.[0].url}
              title={item.title}
              labels={item.labels}
              url={item.to}
              description={item.summary}
              date={formatDate(item.published, 'MMM DD, YYYY')}
              author={createAuthorDataFromPost(item.author)}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    return <div className="block">{renderItems()}</div>;
  };

  return (
    <Container className="px-0 sm:px-6">
      <SectionTitle title={title || 'Recently Post'} />
      <div className="sm:px-0">{renderContent()}</div>
    </Container>
  );
}

export const LatestPost = React.memo(Component);
