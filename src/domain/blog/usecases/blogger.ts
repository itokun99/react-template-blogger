import { appStoreRepo } from '../../app/repositories';
import { bloggerRepository } from '../repositories';
import {} from '@utils';

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

  if (res.data) {
    const tempData = { ...res.data };

    // merge author data with custom author from config
    if (authors.length > 0 && tempData.items.length > 0) {
      tempData.items = tempData.items.map(item => {
        // find the match data
        const customAuthorData = authors.filter(
          d => d.id === item.author.id
        )[0];

        // add when custom author defined as detail
        if (customAuthorData) {
          return {
            ...item,
            author: {
              ...item.author,
              detail: customAuthorData
            }
          };
        }

        return item;
      });
    }

    res.data = tempData;
  }

  return res.data;
}

const bloggerUsecase = {
  getInfo,
  getFeaturedPosts
};

export default bloggerUsecase;
