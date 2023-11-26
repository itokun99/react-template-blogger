import React from 'react';
import { Comment } from '@components';
import { useComments, usePostDetail, usePostDetailParams } from '@hooks';
import { createAuthorDataFromPost, formatDate } from '@utils';

function Component() {
  const { id } = usePostDetailParams();
  const queryDetail = usePostDetail({ id, byPath: true });
  const query = useComments({ postId: queryDetail.data?.id || '' });
  const items = query.data?.items || [];

  function renderItems() {
    if (query.isLoading) {
      return null;
    }

    return (
      <>
        {items.map(comment => {
          const author = createAuthorDataFromPost(comment.author);

          return (
            <Comment
              key={comment.id}
              id={comment.id}
              author={{ name: author.title, image: author.image }}
              content={comment.content}
              date={formatDate(comment.published, 'Commented on MMM DD, YYYY')}
            />
          );
        })}
      </>
    );
  }

  return <div className="px-6 py-6">{renderItems()}</div>;
}

export const BloggerComment = React.memo(Component);
