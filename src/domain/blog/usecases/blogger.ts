import { bloggerRepository, appStoreUsecase } from '@domain';
import { transformPost, createGroupAndCountLabels } from '@utils';

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
    orderBy: 'updated',
    fields: 'items,nextPageToken'
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

async function getLatestPosts() {
  const { blogId, apiKey, authors } = appStoreUsecase.getBloggerCredential();

  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.getPosts(blogId, apiKey, {
    maxResults: 10,
    fetchBodies: true,
    fetchImages: true,
    orderBy: 'published'
  });

  res.data = transformPost(res.data, authors);

  console.log('bloggerUseCase / getLatestPosts ==>', res);
  return res.data;
}

async function getAllLabels() {
  const { blogId, apiKey } = appStoreUsecase.getBloggerCredential();

  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.getPosts(blogId, apiKey, {
    maxResults: 500,
    fetchBodies: true,
    fetchImages: true,
    orderBy: 'published',
    fields: 'items.labels'
  });

  const labels =
    res.data.items.length > 0 ? createGroupAndCountLabels(res.data.items) : [];
  console.log('bloggerUseCase / getAllLabels ==>', labels);
  return labels;
}

const bloggerUsecase = {
  getInfo,
  getFeaturedPosts,
  getPostsByLabel,
  getLatestPosts,
  getAllLabels
};

export default bloggerUsecase;
