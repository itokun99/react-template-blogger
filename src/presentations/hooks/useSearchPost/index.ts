import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';

interface Options {
  q: string;
  labels: string;
}

export default function ueSearchPost({ q, labels }: Options) {
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['searchPosts', config.apiKey, config.blogId, q, labels],
    queryFn: () => bloggerUsecase.searchPostsByQueryAndLabels(q, labels),
    enabled: config.isEnableQueries
  });

  let items = query.data?.items || [];

  return {
    ...query,
    items
  };
}
