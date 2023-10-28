import React from 'react';
import { Container, SectionTitle, FeaturedCard } from '@components';
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
      <SectionTitle title="Featured Post" />
      <div className="px-6 sm:px-0">{renderContent()}</div>
      <div className="mb-6 w-full border-b border-slate-300 pb-6"></div>
    </Container>
  );
}

const FeaturedPost = React.memo(Component);

export default FeaturedPost;
