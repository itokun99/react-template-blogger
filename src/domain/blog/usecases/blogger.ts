import { bloggerRepository, appStoreUsecase } from '@domain';
import { transformPost } from '@utils';

async function getInfo() {
  const { blogId, apiKey } = appStoreUsecase.getBloggerCredential();
  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.blogInfo(blogId, apiKey);
  console.log('bloggerUseCase / getInfo ==>', res);
  return res.data;
}

async function getFeaturedPosts() {
  const { blogId, apiKey, authors } = appStoreUsecase.getBloggerCredential();
  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.getPosts(blogId, apiKey, {
    maxResults: 1,
    fetchBodies: true,
    fetchImages: true,
    orderBy: 'updated'
  });

  res.data = transformPost(res.data, authors);

  console.log('bloggerUseCase / getFeaturedPosts ==>', res);
  return res.data;
}

async function getPostsByLabel(label: string | string[]) {
  const { blogId, apiKey, authors } = appStoreUsecase.getBloggerCredential();

  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const labels =
    typeof label !== 'string' && label.length > 0
      ? (label.map((v, i) =>
          i != label.length - 1 ? `${v},` : v
        ) as unknown as string)
      : (label as string);

  const res = await bloggerRepository.getPosts(blogId, apiKey, {
    maxResults: 8,
    fetchBodies: false,
    fetchImages: true,
    orderBy: 'updated',
    labels
  });

  res.data = transformPost(res.data, authors);

  console.log('bloggerUseCase / getPostsByLabel ==>', res);
  return res.data;
}

const bloggerUsecase = {
  getInfo,
  getFeaturedPosts,
  getPostsByLabel
};

export default bloggerUsecase;
