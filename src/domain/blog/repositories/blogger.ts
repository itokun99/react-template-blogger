import { BLOGGER_API_ENDPOINTS, httpClient } from '@core';
import { BlogInfo } from '../entities/blogger';

function blogInfo(blogId: string, apiKey: string) {
  return httpClient.get<BlogInfo>(BLOGGER_API_ENDPOINTS.blog(blogId), {
    params: {
      key: apiKey
    }
  });
}

function getPosts(blogId: string, apiKey: string, params: any) {
  return httpClient.get(BLOGGER_API_ENDPOINTS.posts(blogId), {
    params: {
      ...params,
      key: apiKey
    }
  });
}

const bloggerRepository = {
  blogInfo,
  getPosts
};

export default bloggerRepository;
