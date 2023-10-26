import { appStoreRepo } from '../../app/repositories';
import { bloggerRepository } from '../repositories';

async function getInfo() {
  const { blogId, apiKey } = appStoreRepo.getBloggerCredential();
  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.blogInfo(blogId, apiKey);
  return res.data;
}

async function getFeaturedPosts() {
  const { blogId, apiKey } = appStoreRepo.getBloggerCredential();
  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.getPosts(blogId, apiKey, {
    maxResults: 10,
    fetchBodies: true,
    fetchImages: true,
    orderBy: 'updated'
  });
  return res.data;
}

const bloggerUsecase = {
  getInfo,
  getFeaturedPosts
};

export default bloggerUsecase;
