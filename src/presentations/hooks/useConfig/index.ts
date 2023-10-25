import { useQuery } from '@tanstack/react-query';
import { appConfigUsecase } from '@domain';

export default function useConfig() {
  const query = useQuery({
    queryKey: ['appConfig'],
    queryFn: appConfigUsecase.getConfig
  });

  return {
    ...query
  };
}
