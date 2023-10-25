import { BLOGGER_API_ENDPOINTS, httpClient } from '@core';
import { BlogInfo, Posts, BloggerRequestParams, Pages } from '../entities';

function blogInfo(blogId: string, apiKey: string) {
  return httpClient.get<BlogInfo>(BLOGGER_API_ENDPOINTS.blog(blogId), {
    params: {
      key: apiKey
    }
  });
}

function getPosts(
  blogId: string,
  apiKey: string,
  params?: BloggerRequestParams
) {
  return httpClient.get<Posts>(BLOGGER_API_ENDPOINTS.posts(blogId), {
    params: {
      ...params,
      key: apiKey
    }
  });
}

function getPages(
  blogId: string,
  apiKey: string,
  params?: BloggerRequestParams
) {
  return httpClient.get<Pages>(BLOGGER_API_ENDPOINTS.pages(blogId), {
    params: {
      ...params,
      key: apiKey
    }
  });
}

function searchPosts(
  blogId: string,
  apiKey: string,
  params?: BloggerRequestParams
) {
  return httpClient.get<Pages>(BLOGGER_API_ENDPOINTS.searchPosts(blogId), {
    params: {
      ...params,
      key: apiKey
    }
  });
}

const bloggerRepository = {
  blogInfo,
  getPosts,
  getPages,
  searchPosts
};

export default bloggerRepository;
