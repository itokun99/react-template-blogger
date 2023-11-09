import React from 'react';
import { Button } from '@components';

function Component() {
  return (
    <div className="c-comment mb-6 border border-slate-300 p-6">
      <div className="c-comment-header"></div>
      <div className="c-comment-body">
        <div className="c-comment-form">
          <div className="c-comment-input mb-4">
            <textarea className="w-full resize-none border" />
          </div>
          <div className="c-comment-action">
            <Button type="button">Submit</Button>
          </div>
        </div>
      </div>
      <div className="c-comment-bottom"></div>
    </div>
  );
}

export const Comment = React.memo(Component);
