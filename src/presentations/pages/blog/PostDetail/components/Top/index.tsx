import React from 'react';
import { FeaturedPost, LabeledPost } from '@components';

interface TopProps {
  type: string;
  title: string | React.ReactNode;
  show: boolean;
  label?: string | string[];
}

function Component({ type, show, title, label }: TopProps) {
  if (!show) return null;

  switch (type) {
    case 'featured-post':
      return <FeaturedPost title={title} />;
    case 'labeled-post':
      return <LabeledPost title={title} label={label || ''} />;
    default:
      return null;
  }
}

const Top = React.memo(Component);

export default Top;
