import React from 'react';
import { Post } from '@domain';
import { ListItem } from '@components';
import { Container, SectionTitle } from '@components';

export interface SimplePostItem {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  url?: string;
}

export interface SimplePostListProps {
  title?: string | React.ReactNode;
  items: Post[];
}

function Component({ title, items }: SimplePostListProps) {
  return (
    <div className="c-simple-post-list">
      <Container className="px-0 sm:px-6">
        <SectionTitle title={title || 'Post List'} />
        <div className="sm:px-0">
          {items.map(item => (
            <ListItem key={item.id} title={item.title} url={item.to} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export const SimplePostList = React.memo(Component);
