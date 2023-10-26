import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';

export default function useFeaturedPosts() {
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['featuredPosts', config.apiKey, config.blogId],
    queryFn: bloggerUsecase.getFeaturedPosts,
    enabled: config.isEnableQueries
  });

  const items = query.data?.items || [];

  return {
    ...query,
    items
  };
}
