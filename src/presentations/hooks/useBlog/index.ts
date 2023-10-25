import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useConfig } from '@hooks';

export default function useBlog() {
  const config = useConfig();
  const query = useQuery({
    queryKey: [
      'blog',
      config.data?.blogger?.blogId,
      config.data?.google?.apiKey
    ],
    queryFn: bloggerUsecase.getInfo,
    enabled:
      Boolean(config.data?.blogger?.blogId) &&
      Boolean(config.data?.google?.apiKey)
  });

  return {
    ...query,
    config
  };
}
