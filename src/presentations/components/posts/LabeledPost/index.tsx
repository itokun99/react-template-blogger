import React from 'react';
import clsx from 'clsx';
import { Container, SectionTitle, PostCard } from '@components';
import { useLabeledPosts } from '@hooks';
import { formatDate, createAuthorDataFromPost, removeHtmlTags } from '@utils';

interface LabeledPostProps {
  label: string | string[];
  title?: string;
}

function Component({ label, title }: LabeledPostProps) {
  const posts = useLabeledPosts({ label });

  console.log('posts =>', posts);

  const renderContent = () => {
    if (posts.isLoading) {
      return <PostCard loading={posts.isLoading} />;
    }

    return (
      <div className="block flex-nowrap pb-8 sm:overflow-x-auto sm:whitespace-nowrap">
        {posts.items.map((item, idx) => (
          <div
            className={clsx('inline-block w-72', {
              'mr-6': idx !== posts.items.length - 1
            })}
          >
            <PostCard
              key={`featured-post-${item.id}`}
              loading={posts.isLoading}
              image={item.images?.[0].url}
              title={removeHtmlTags(item.title, 45, '...')}
              labels={item.labels}
              url={item.to}
              date={formatDate(item.published, 'MMM DD, YYYY')}
              author={createAuthorDataFromPost(item.author)}
              wrapperClassName="p-0 sm:p-6"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container className="px-0 sm:px-6">
      <SectionTitle title={title || String(label)} />
      <div className="px-6 sm:px-0">{renderContent()}</div>
      <div className="mb-6 w-full border-b border-slate-300"></div>
    </Container>
  );
}

const LabeledPost = React.memo(Component);

export default LabeledPost;
