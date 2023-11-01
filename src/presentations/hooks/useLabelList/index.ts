import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';

export default function useLabelList() {
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['label-list', config.apiKey, config.blogId],
    queryFn: bloggerUsecase.getAllLabels,
    enabled: config.isEnableQueries
  });

  let items = query.data || [];

  return {
    ...query,
    items
  };
}
