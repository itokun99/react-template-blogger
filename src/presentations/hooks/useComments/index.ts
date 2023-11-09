import { useQuery } from '@tanstack/react-query';
import { bloggerUsecase } from '@domain';
import { useBlog } from '@hooks';

interface Option {
  postId: string;
}

export default function useComments(option: Option) {
  const { config } = useBlog();
  const query = useQuery({
    queryKey: ['comments', config.apiKey, config.blogId, option.postId],
    queryFn: () => bloggerUsecase.getPostComments(option.postId),
    enabled: config.isEnableQueries && Boolean(option.postId)
  });

  return {
    ...query
  };
}
