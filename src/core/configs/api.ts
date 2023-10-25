import { APP_CONFIG } from './app';

export const BLOGGER_API_ENDPOINTS = {
  blog: (blogId: string) => `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}`,
  posts: (blogId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/posts`,
  searchPosts: (blogId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/posts/search`,
  pages: (blogId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/pages`,
  users: (blogId: string) =>
    `${APP_CONFIG.blogger.apiUrl}/blogs/${blogId}/users`
};

export const BLOGGER_FEED_ENDPOINTS = {
  postSummaries: (blogUrl: string) => `${blogUrl}/feeds/posts/summary`,
  postDefault: (blogUrl: string) => `${blogUrl}/feeds/posts/default`
};
