// CREATE URL FOR SEARCH ON LABEL
export const createSearchUrl = (
  value: string = '',
  customPath?: string
): string => `${customPath || '/search/label/'}${value}`;

// RESIZE IMAGE FOR POST IMAGE
export const resizeImage = (
  image: string,
  width = 400,
  height = 400,
  crop = true
) => {
  const target = /\/s[0-9]+\-c/g;
  const result = `/w${width}-h${height}-${crop ? 'c' : ''}`;
  return image.replace(target, result);
};

// GET IMAGE
export function getImage(defaultImage: string, image?: string) {
  if (image) return image;
  return defaultImage;
}

export function getConfig() {
  const w = window as any;
  const configs = w?.__REACT_TEMPLATE_BLOGGER__ as {
    configId?: string;
    configUrl?: string;
  };
  return configs;
}
