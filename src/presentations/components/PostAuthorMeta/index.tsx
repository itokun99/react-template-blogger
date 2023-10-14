import { View, Text, Image } from '..';

const PostAuthorMeta = ({ data, imageSize, showImage = true }) => (
  <View className="m-author-meta__wrapper">
    {showImage && (
      <Image
        className="m-author-meta__image"
        source={data.image}
        title={data.name}
        alt={data.name}
        style={{
          height: imageSize,
          width: imageSize
        }}
      />
    )}
    <Text tag="span" className="m-author-meta__title">
      {data.name}
    </Text>
  </View>
);

export default PostAuthorMeta;
