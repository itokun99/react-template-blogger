import React from 'react';
import { CommentItem } from '@domain';
import { CommentItem as Item } from '@components';

interface CommmentsProps {
  items: CommentItem[];
}

function Component({ items = [] }: CommmentsProps) {
  return (
    <div className="c-comment">
      <div className="c-comment-header"></div>
      <div className="c-comment-body">
        {items.map(comment => (
          <Item key={comment.id} data={comment} />
        ))}
      </div>
      <div className="c-comment-bottom"></div>
    </div>
  );
}

export const Comment = React.memo(Component);
