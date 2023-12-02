import React from 'react';
import { createPortal } from 'react-dom';
import { Comment, CommentForm, Dialog, useDialog } from '@components';
import { useComments, usePostDetail, usePostDetailParams } from '@hooks';
import { createAuthorDataFromPost, formatDate } from '@utils';

function Component() {
  const { id } = usePostDetailParams();
  const dialog = useDialog();
  const queryDetail = usePostDetail({ id, byPath: true });
  const query = useComments({ postId: queryDetail.data?.id || '' });
  const items = query.data?.items || [];
  const totalComments = queryDetail.data?.replies?.totalItems || 0;

  function renderItems() {
    if (query.isLoading) {
      return null;
    }

    return (
      <>
        <div className="mb-4">
          <p className="text-lg font-bold text-slate-700">{`Total Comments (${totalComments})`}</p>
        </div>

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
        {createPortal(
          <Dialog
            visible={dialog.visible}
            title={dialog.content.title}
            description={dialog.content.description}
          />,
          document.getElementById('root') || document.body
        )}
      </>
    );
  }

  return <div className="px-6 py-6">{renderItems()}</div>;
}

export const BloggerComment = React.memo(Component);
