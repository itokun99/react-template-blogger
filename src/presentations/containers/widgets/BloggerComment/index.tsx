import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Comment, CommentForm } from '@components';

import { useComments, usePostDetail, usePostDetailParams } from '@hooks';
import { createAuthorDataFromPost, formatDate } from '@utils';

function Component() {
  const {} = useInView({
    triggerOnce: true,
    delay: 500,
    initialInView: false,
    threshold: [0, 0.25, 0.5, 0.75, 1]
  });

  const { id } = usePostDetailParams();
  const queryDetail = usePostDetail({ id, byPath: true });
  const query = useComments({ postId: queryDetail.data?.id || '' });
  const items = query.data?.items || [];
  const totalComments = queryDetail.data?.replies?.totalItems || 0;

  function renderTop() {
    return (
      <div className="mb-4">
        <p className="text-lg font-bold text-slate-700">{`Total Comments (${totalComments})`}</p>
      </div>
    );
  }

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

  function renderBottom() {
    // return <CommentForm />;

    return null;
  }

  return (
    <div className="px-6 py-6">
      {renderTop()}
      {renderItems()}
      {renderBottom()}
    </div>
  );
}

export const BloggerComment = React.memo(Component);
