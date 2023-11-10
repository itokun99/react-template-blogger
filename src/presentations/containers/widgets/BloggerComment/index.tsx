import React from 'react';
import { Comment } from '@components';
import { useComments } from '@hooks';
import { createAuthorDataFromPost, formatDate } from '@utils';

export interface BloggerCommentProps {
  postId: string;
}

function Component({ postId }: BloggerCommentProps) {
  const query = useComments({ postId });
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
              author={{ name: author.title, image: author.image }}
              content={comment.content}
              date={formatDate(comment.published, 'MMM DD, YYYY')}
            />
          );
        })}
      </>
    );
  }

  return <div className="py-6">{renderItems()}</div>;
}

export const BloggerComment = React.memo(Component);
