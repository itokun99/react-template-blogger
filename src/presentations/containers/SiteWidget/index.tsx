import React from 'react';
import { FeaturedPost, LabeledPost, LabelList, LatestPost } from '@containers';

interface SiteWidgetProps {
  type: string;
  title: string | React.ReactNode;
  show: boolean;
  label?: string | string[];
  data?: any;
}

function Component({ type, show, title, data }: SiteWidgetProps) {
  if (!show) return null;

  switch (type) {
    case 'featured-post':
      return <FeaturedPost title={title} />;
    case 'labeled-post':
      return <LabeledPost title={title} label={data?.label || ''} />;
    case 'label-list':
      return <LabelList title={title} />;
    case 'latest-post':
      return <LatestPost title={title} />;
    default:
      return null;
  }
}

export const SiteWidget = React.memo(Component);
