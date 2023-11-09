import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getConfig } from '@utils';

export default function usePostDetailParams() {
  const params = useParams();

  const year = params.year;
  const month = params.month;
  const title = params.title;

  const isBlogger = getConfig().isBlogger;

  const id = useMemo(() => {
    if (year && month && title) {
      return `/${year}/${month}/${title}${isBlogger ? '' : '.html'}`;
    }

    return '';
  }, [year, month, title, isBlogger]);

  return {
    id
  };
}
