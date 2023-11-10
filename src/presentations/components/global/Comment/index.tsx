import React from 'react';
import { AuthorCard } from '@components';
import DOMPurify from 'dompurify';

interface CommentProps {
  author: {
    name: string;
    image: string;
  };
  content?: string;
  date: string;
}

function Component({ author, content, date }: CommentProps) {
  return (
    <div className="c-comment mb-6">
      <div className="c-comment-header">
        <div className="c-commemt-author">
          <AuthorCard
            title={author.name}
            image={author.image}
            subtitle={date}
          />
        </div>
        <div className="c-comment-header-action">
          <span>Test</span>
        </div>
      </div>
      <div className="c-comment-body">
        {content && (
          <div
            className="c-comment-item-content inner-html"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content)
            }}
          />
        )}
      </div>
      <div className="c-comment-footer">
        <span>Footer</span>
      </div>
    </div>
  );
}

export const Comment = React.memo(Component);
