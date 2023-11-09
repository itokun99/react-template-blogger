import { useInfiniteQuery } from '@tanstack/react-query';
import { Post, bloggerUsecase } from '@domain';
import { useBlog, useFeaturedPosts } from '@hooks';

export default function useLatestPosts() {
  const { config } = useBlog();
  const featuredPost = useFeaturedPosts();
  const query = useInfiniteQuery({
    queryKey: ['latestPosts', config.apiKey, config.blogId],
    queryFn: ({ pageParam: pageToken }) => {
      return bloggerUsecase.getLatestPosts({ ...(pageToken && { pageToken }) });
    },
    enabled: config.isEnableQueries,
    getNextPageParam: lastPage => lastPage.nextPageToken,
    initialPageParam: ''
  });

  query.data?.pages;
  const pages = query.data?.pages || [];
  let items: Post[] = [];
  pages.forEach(page => page.items.forEach(item => items.push(item)));

  if (featuredPost.items.length > 0) {
    const excludedPosts = featuredPost.items.map(item => item.id);
    items = items.filter(item => !excludedPosts.includes(item.id));
  }

  return {
    ...query,
    items
  };
}
