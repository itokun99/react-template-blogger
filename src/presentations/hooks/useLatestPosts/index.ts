import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog, useFeaturedPosts } from '@hooks';

export default function useLatestPosts() {
  const { config } = useBlog();
  const featuredPost = useFeaturedPosts();
  const query = useQuery({
    queryKey: ['latestPosts', config.apiKey, config.blogId],
    queryFn: bloggerUsecase.getLatestPosts,
    enabled: config.isEnableQueries
  });

  let items = query.data?.items || [];

  if (featuredPost.items.length > 0) {
    const excludedPosts = featuredPost.items.map(item => item.id);
    items = items.filter(item => !excludedPosts.includes(item.id));
  }

  return {
    ...query,
    items
  };
}
