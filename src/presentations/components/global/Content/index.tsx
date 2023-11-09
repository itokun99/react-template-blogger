import React from 'react';
import DOMPurify from 'dompurify';
import Header from './components/Header';
import { Container, Comment } from '@components';
import { CommentItem } from '@domain';

interface ContentProps {
  breadcrumb: { title: string; url: string; id: number }[];
  loading?: boolean;
  content: string;
  title: string;
  comments?: CommentItem[];
  author: {
    title: string;
    subtitle: string;
    image: string;
  };
}

function Component({
  title,
  author,
  breadcrumb,
  loading,
  content,
  comments = []
}: ContentProps) {
  return (
    <div className="c-content">
      <Container className="px-6">
        <Header
          loading={loading}
          breadcrumb={breadcrumb}
          title={title}
          author={author}
        />
        {loading ? (
          <div>
            <div className="mb-6 h-0 w-full rounded-2xl bg-slate-300 pb-[62.5%]"></div>
            <div className="mb-4 h-6 w-8/12 rounded-full bg-slate-300"></div>
            <div className="mb-4 h-4 w-full rounded-full bg-slate-300"></div>
            <div className="mb-4 h-4 w-9/12 rounded-full bg-slate-300"></div>
          </div>
        ) : (
          <div
            className="c-content-body inner-html mb-14"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content)
            }}
          />
        )}
        <Comment items={comments} />
      </Container>
    </div>
  );
}

const Content = React.memo(Component);

export default Content;
