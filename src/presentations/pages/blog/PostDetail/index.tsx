import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content, SimpleLabelList } from '@components';
import { usePostDetail } from '@hooks';
import { createAuthorDataFromPost, formatDate } from '@utils';

function PostDetail() {
  const params = useParams();

  const year = params.year;
  const month = params.month;
  const title = params.title;

  const id = useMemo(() => {
    if (year && month && title) {
      return `/${year}/${month}/${title}.html`;
    }

    return '';
  }, [year, month, title]);

  const query = usePostDetail({ id, byPath: true });
  const datePublished = query.data?.published
    ? `Published on ${formatDate(query.data.published, 'MMM DD, YYYY')}`
    : '';

  return (
    <Container className="px-0">
      <div className="md:flex">
        <div className="w-full px-6 md:w-8/12">
          <Content
            loading={query.isLoading}
            title={query.data?.title || ''}
            author={
              query.data?.author
                ? {
                    ...createAuthorDataFromPost(query.data.author),
                    subtitle: datePublished
                  }
                : { title: 'Anonim', subtitle: datePublished, image: '' }
            }
            breadcrumb={query.breadCrumb}
            content={query.data?.content || ''}
          />
        </div>
        <div className="relative w-full md:w-4/12">
          <div className="sticky top-20 mb-6">
            <SimpleLabelList title="All Tags" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PostDetail;
