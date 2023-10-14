import { View, Text, Image, Anchor } from '..';

const PostList = ({ title, image, url, showImage = true }) => (
  <View className="m-post-list__wrapper">
    {showImage && (
      <Anchor href={url} title={title}>
        <Image
          className="m-post-list__image"
          backgroundImage
          resizeMode="cover"
          source={image}
          title={title}
          alt={title}
        />
      </Anchor>
    )}
    <View className="m-post-list__content">
      <Anchor href={url} title={title}>
        <Text tag="h2" className="m-post-list__title">
          {title}
        </Text>
      </Anchor>
    </View>
  </View>
);

export default PostList;
