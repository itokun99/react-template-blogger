export interface PostsRequestParams {
  q?: string;
  key: string;
  maxResults?: string | number;
  fetchImages?: boolean;
  pageToken?: string;
  fetchBodies?: boolean;
  labels?: string;
  orderBy?: string | 'published' | 'updated';
  endDate?: string;
  sortOption?: string | 'descending' | 'ascending';
  startDate?: string;
  status?: string | 'draft' | 'live' | 'scheduled';
  view?: string | 'ADMIN' | 'AUTHOR' | 'READER';
}

export interface BlogInfo {
  kind: string;
  id: string;
  name: string;
  description: string;
  published: string;
  updated: string;
  url: string;
  selfLink: string;
  posts: Posts;
  pages: Pages;
  locale: Locale;
}

interface Posts {
  totalItems: number;
  selfLink: string;
}

interface Pages {
  totalItems: number;
  selfLink: string;
}

interface Locale {
  language: string;
  country: string;
  variant: string;
}
