import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useConfig } from '@hooks';

export default function useBlog() {
  const config = useConfig();
  const query = useQuery({
    queryKey: ['blog', config.blogId, config.apiKey],
    queryFn: bloggerUsecase.getInfo,
    enabled: config.isEnableQueries
  });

  return {
    ...query,
    config
  };
}
