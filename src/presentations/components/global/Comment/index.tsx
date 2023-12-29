import React from 'react';
import { AuthorCard, Button, Icon, Menu } from '@components';
import DOMPurify from 'dompurify';
import { IconNames } from '@general-types';

interface CommentProps {
  id: string;
  author: {
    name: string;
    image: string;
  };
  content?: string;
  date: string;
}

function Component({ id, author, content, date }: CommentProps) {
  return (
    <div id={id} className="c-comment mb-6 border border-slate-300 p-4">
      <div className="c-comment-header mb-4 flex justify-between">
        <div className="c-comment-author">
          <AuthorCard
            title={author.name}
            image={author.image}
            subtitle={date}
            anchor={id}
          />
        </div>
        <div className="c-comment-header-action ">
          <div className="">
            <Menu
              items={[
                {
                  id: 1,
                  title: 'Report',
                  onClick: () => {}
                },
                {
                  id: 2,
                  title: 'Copy Link',
                  url: '#'
                }
              ]}
            >
              <Icon name={IconNames.menu} className="!text-slate-700" />
            </Menu>
          </div>
        </div>
      </div>
      <div className="c-comment-body pb-6">
        {content && (
          <div
            className="c-comment-item-content inner-html small-text"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content)
            }}
          />
        )}
      </div>
      <div className="c-comment-footer">
        <Button
          className="group/cta text-xs text-slate-700 hover:text-sky-600"
          icon={
            <Icon
              name={IconNames.reply}
              className="text-sm !text-slate-700 group-hover/cta:!text-sky-600"
            />
          }
        >
          Reply
        </Button>
      </div>
    </div>
  );
}

export const Comment = React.memo(Component);
