import { appStoreRepo } from '../../app/repositories';
import { bloggerRepository } from '../repositories';
import { transformPost } from '@utils';

async function getInfo() {
  const { blogId, apiKey } = appStoreRepo.getBloggerCredential();
  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.blogInfo(blogId, apiKey);
  return res.data;
}

async function getFeaturedPosts() {
  const { blogId, apiKey, authors } = appStoreRepo.getBloggerCredential();
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

const bloggerUsecase = {
  getInfo,
  getFeaturedPosts
};

export default bloggerUsecase;
