import React from 'react';
import clsx from 'clsx';
import { Container, SectionTitle, PostCard } from '@components';
import { useLatestPosts, useMediaQuery } from '@hooks';
import { formatDate, createAuthorDataFromPost, removeHtmlTags } from '@utils';

function Component() {
  const posts = useLatestPosts();

  const isSM = useMediaQuery(`(min-width: 640px)`);

  const renderContent = () => {
    if (posts.isLoading) {
      return <PostCard loading={posts.isLoading} />;
    }

    return (
      <div className="block flex-nowrap sm:overflow-x-auto sm:whitespace-nowrap sm:pb-8">
        {posts.items.map((item, idx) => (
          <div
            className={clsx(
              'inline-block w-full border-b p-6 sm:w-72 sm:border-none sm:p-0',
              {
                'sm:mr-6': idx !== posts.items.length - 1
              }
            )}
          >
            <PostCard
              key={`featured-post-${item.id}`}
              loading={posts.isLoading}
              image={item.images?.[0].url}
              title={isSM ? removeHtmlTags(item.title, 45, '...') : item.title}
              labels={item.labels}
              url={item.to}
              date={formatDate(item.published, 'MMM DD, YYYY')}
              author={createAuthorDataFromPost(item.author)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container className="px-0 sm:px-6">
      <SectionTitle title="Latest" />
      <div className="sm:px-0">{renderContent()}</div>
      <div className="mb-6 w-full border-b border-slate-300"></div>
    </Container>
  );
}

const SimplePost = React.memo(Component);

export default SimplePost;
