import React, { useRef } from 'react';
import { Editor } from 'novel';

/* import { Button } from '@components'; */

function Component() {
  return (
    <div className="c-comment-form mb-8">
      <div className="c-comment-input">
        <Editor
          defaultValue="Type Here"
          className="min-h-[150px] w-full border border-slate-300 p-0"
        />
      </div>
    </div>
  );
}

export const CommentForm = React.memo(Component);
