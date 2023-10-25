import {
  APP_CONFIG,
  BLOGGER_API_ENDPOINTS,
  httpClient,
  appConfigStore
} from '@core';
import { BlogInfo } from '../entities/blogger';

function blogInfo(blogId: string, apiKey: string) {
  return httpClient.get<BlogInfo>(BLOGGER_API_ENDPOINTS.blog(blogId), {
    params: {
      key: apiKey
    }
  });
}

const bloggerRepository = {
  blogInfo
};

export default bloggerRepository;
