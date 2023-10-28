import React from 'react';
import { FeaturedCard } from '../../cards';
import { Container } from '@components';
import { useFeaturedPosts } from '@hooks';
import { formatDate, createAuthorDataFromPost } from '@utils';

function Component() {
  const featuredPosts = useFeaturedPosts();

  const renderContent = () => {
    if (featuredPosts.isLoading) {
      return <FeaturedCard loading={featuredPosts.isLoading} />;
    }

    return (
      <>
        {featuredPosts.items.map(item => (
          <FeaturedCard
            key={`featured-post-${item.id}`}
            loading={featuredPosts.isLoading}
            image={item.images?.[0].url}
            title={item.title}
            labels={item.labels}
            url={item.to}
            description={item.summary}
            date={formatDate(item.published, 'MMM DD, YYYY')}
            author={createAuthorDataFromPost(item.author)}
          />
        ))}
      </>
    );
  };

  return (
    <Container className="px-0 sm:px-6">
      <div className="px-6 sm:px-0">{renderContent()}</div>
      <div className="pb-6 mb-6 border-b border-slate-300"></div>
    </Container>
  );
}

const FeaturedPost = React.memo(Component);

export default FeaturedPost;
