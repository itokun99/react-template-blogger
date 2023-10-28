import React from 'react';
import clsx from 'clsx';
import { Container, SectionTitle, SimpleCard } from '@components';
import { useLatestPosts } from '@hooks';
import { formatDate, createAuthorDataFromPost } from '@utils';

function Component() {
  const posts = useLatestPosts();

  const renderContent = () => {
    if (posts.isLoading) {
      return <SimpleCard loading={posts.isLoading} />;
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

  return (
    <Container className="px-0 sm:px-6">
      <SectionTitle title="Latest" />
      <div className="sm:px-0">{renderContent()}</div>
    </Container>
  );
}

const SimplePost = React.memo(Component);

export default SimplePost;
