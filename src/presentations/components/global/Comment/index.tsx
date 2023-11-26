import React, { useState } from 'react';
import { AuthorCard, Icon, Menu } from '@components';
import DOMPurify from 'dompurify';

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


  function onClickReply() {
    alert("ready to reply message");
  }


  return (
    <div id={id} className="c-comment mb-8 border border-slate-300 p-4">
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
            <Menu items={[
              {
                id: 1,
                title: "Reply Comment", 
                onClick: () => onClickReply()
              },
              {
                id: 2,
                title: "Menu 2",
                url: 'Copy Link'
              }
            ]} >
              <Icon name='menu' className="!text-slate-700" />
            </Menu>
          </div>
        </div>
      </div>
      <div className="c-comment-body">
        {content && (
          <div
            className="c-comment-item-content inner-html small-text"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content)
            }}
          />
        )}
      </div>
      <div className="c-comment-footer">{/* <span>Footer</span> */}</div>
    </div>
  );
}

export const Comment = React.memo(Component);
