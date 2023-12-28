import React from 'react';
import { BaseEditor } from '@components';

/* import { Button } from '@components'; */

function Component() {
  return (
    <div className="c-comment-form mb-8">
      <BaseEditor placeholder="Write your comment here ..." />
    </div>
  );
}

export const CommentForm = React.memo(Component);
