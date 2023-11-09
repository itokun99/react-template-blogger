import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';

interface Config {
  label: string | string[];
  showBody?: boolean;
  showImage?: boolean;
  excludes?: string[];
}

export default function useLabeledPosts({
  label,
  showBody,
  showImage = true,
  excludes = []
}: Config) {
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['labeledPosts', config.apiKey, config.blogId, label],
    queryFn: () =>
      bloggerUsecase.getPostsByLabel(label, {
        fetchBodies: showBody,
        fetchImages: showImage
      }),
    enabled: config.isEnableQueries && Boolean(label)
  });

  let items = query.data?.items || [];

  if (excludes && excludes.length > 0) {
    items = items.filter(item => !excludes.includes(item.id));
  }

  return {
    ...query,
    items
  };
}
