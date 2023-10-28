import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';

interface Config {
  label: string | string[];
}

export default function useLabeledPosts({ label }: Config) {
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['labeledPosts', config.apiKey, config.blogId, label],
    queryFn: () => bloggerUsecase.getPostsByLabel(label),
    enabled: config.isEnableQueries && Boolean(label)
  });

  const items = query.data?.items || [];

  return {
    ...query,
    items
  };
}
