import React from 'react';
import { createSearchUrl } from '@utils';
import { View, Text, Anchor, Icon } from '..';

interface BreadCrumbProps {
  labels: string[],
  title: string,
  url: string
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ labels, title, url }) => {

  const renderContent = () => {

    if (labels && labels.length > 0) {
      return (
        <>
          <Text tag="span" className="m-breadcrumb__separator">
            /
          </Text>
          <Anchor
            href={createSearchUrl(labels[0], '/search?q=')}
            title={labels[0]}
            className="m-breadcrumb__item"
          >
            {labels[0]}
          </Anchor>
          <Text tag="span" className="m-breadcrumb__separator">
            /
          </Text>
          <Anchor
            href={url}
            title={title}
            className="m-breadcrumb__item m-breadcrumb__item--current"
          >
            {title}
          </Anchor>
        </>
      )
    }

    return (
      <>
        <Text tag="span" className="m-breadcrumb__separator">
          /
        </Text>
        <Anchor
          href={url}
          title={title}
          className="m-breadcrumb__item m-breadcrumb__item--current"
        >
          {title}
        </Anchor>
      </>
    )
  }


  return (
    <View className="m-breadcrumb__wrapper">
      <Anchor href="/" title="Go to home" className="m-breadcrumb__item">
        <Icon name="home" style={{ marginRight: 8, color: '#222' }} />
        Home
      </Anchor>
      {renderContent()}
    </View>
  )
};


const BreadCrumbMemo = React.memo(BreadCrumb);

export default BreadCrumbMemo;
