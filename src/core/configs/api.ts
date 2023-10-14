import { APP_CONFIG } from './app';

export const BLOGGER_API_ENDPOINTS = {
  blog: `${APP_CONFIG.blogger.apiUrl}/blogs/${APP_CONFIG.blogger.blogId}`,
  posts: `${APP_CONFIG.blogger.apiUrl}/blogs/${APP_CONFIG.blogger.blogId}/posts`,
  searchPosts: `${APP_CONFIG.blogger.apiUrl}/blogs/${APP_CONFIG.blogger.blogId}/posts/search`,
  pages: `${APP_CONFIG.blogger.apiUrl}/blogs/${APP_CONFIG.blogger.blogId}/pages`,
  users: `${APP_CONFIG.blogger.apiUrl}/blogs/${APP_CONFIG.blogger.blogId}/users`
}

export const BLOGGER_FEED_ENDPOINTS = {
  postSummaries: `${APP_CONFIG.blogger.blogUrl}/feeds/posts/summary`,
  postDefault: `${APP_CONFIG.blogger.blogUrl}/feeds/posts/default`
}