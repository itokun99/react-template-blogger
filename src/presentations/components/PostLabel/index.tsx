import _ from 'lodash';
import { View, Anchor } from '..';
import { createSearchUrl } from '@utils';

const PostLabel = ({ data }) => {
  if (data && !_.isEmpty(data) && _.isArray(data)) {
    return (
      <View className="m-post-label__wrapper">
        {data.map((label, index) => {
          if (index === 0) {
            return (
              <Anchor
                href={createSearchUrl(label, '/search?q=')}
                key={index}
                className="m-post-label__item"
              >
                {label}
              </Anchor>
            );
          }
          return null;
        })}
      </View>
    );
  }
  return null;
};

export default PostLabel;
