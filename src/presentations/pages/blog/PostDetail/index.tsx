import { SiteWidget } from '@containers';
import { Content } from '@components';
import { usePostDetail, useConfig, usePostDetailParams } from '@hooks';
import { createAuthorDataFromPost, formatDate } from '@utils';
import { ContentLayout } from '@layouts';

function PostDetail() {
  const { id } = usePostDetailParams();

  const config = useConfig();
  const section = config.data?.sectionConfig?.postDetail;
  const side = section?.side || [];

  const query = usePostDetail({ id, byPath: true });
  const datePublished = query.data?.published
    ? `Published on ${formatDate(query.data.published, 'MMM DD, YYYY')}`
    : '';

  const authorData = query.data?.author
    ? {
        ...createAuthorDataFromPost(query.data.author),
        subtitle: datePublished
      }
    : { title: 'Anonim', subtitle: datePublished, image: '' };

  return (
    <ContentLayout
      top={<></>}
      main={
        <Content
          loading={query.isLoading}
          title={query.data?.title || ''}
          author={authorData}
          breadcrumb={query.breadCrumb}
          content={query.data?.content || ''}
        />
      }
      side={
        <>
          {side.map(v => {
            if (v.type === 'related-post') {
              v.data = {
                label: query.breadCrumb[0]?.title || '',
                loading: query.isLoading
              };
            }
            return <SiteWidget key={v.id} {...v} />;
          })}
        </>
      }
      stickySide
    />
  );
}

export default PostDetail;
