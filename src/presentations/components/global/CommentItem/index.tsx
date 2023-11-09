import React from 'react';
import { Image } from '@components';
import { CommentItem as CommentItemType } from '@domain';
import DOMPurify from 'dompurify';
import { createAuthorDataFromPost } from '@utils';

interface CommentItemProps {
  data: CommentItemType;
}

function Component({ data }: CommentItemProps) {
  const authorData = createAuthorDataFromPost(data.author);
  return (
    <div className="c-comment-item mb-6">
      <div className="flex">
        <div className="mr-4 w-12">
          <Image
            src={authorData.image || ''}
            alt={authorData.title}
            className="h-12 w-12 overflow-hidden rounded-full"
          />
        </div>
        <div className="flex-1 overflow-hidden border border-slate-300">
          <div className="bg-slate-300">
            <p>{authorData.title}</p>
          </div>
          <div
            className="c-comment-item-content inner-html"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.content)
            }}
          />
        </div>
      </div>
    </div>
  );
}

export const CommentItem = React.memo(Component);
