import React from 'react';
import clsx from 'clsx';
import { Container, SectionTitle, SimpleCard } from '@components';
import { useLatestPosts } from '@hooks';
import { formatDate, createAuthorDataFromPost } from '@utils';

const LOADING_ITEMS = [1, 2, 3, 4];

function Component() {
  const posts = useLatestPosts();

  const renderItems = () => {
    if (posts.isLoading) {
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
              <SimpleCard loading={posts.isLoading} />
            </div>
          ))}
        </>
      );
    }

    return (
      <div className="block sm:pb-8">
        {posts.items.map((item, idx) => (
          <div
            className={clsx(
              'mb-6 inline-block w-full border-b border-slate-300 px-6 pb-6 sm:mb-0 sm:border-none sm:px-0',
              idx === posts.items.length - 1 ? '!mb-0 !border-b-0 sm:!pb-0' : ''
            )}
          >
            <SimpleCard
              key={`simple-post-${item.id}`}
              loading={posts.isLoading}
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
    return <div className="block sm:pb-8">{renderItems()}</div>;
  };

  return (
    <Container className="px-0 sm:px-6">
      <SectionTitle title="Latest" />
      <div className="sm:px-0">{renderContent()}</div>
    </Container>
  );
}

const SimplePost = React.memo(Component);

export default SimplePost;
