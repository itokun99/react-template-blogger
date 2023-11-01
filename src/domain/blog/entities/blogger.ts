export interface BloggerRequestParams {
  q?: string;
  key?: string;
  maxResults?: string | number;
  fetchImages?: boolean;
  pageToken?: string;
  fetchBodies?: boolean;
  labels?: string;
  orderBy?: 'published' | 'updated';
  endDate?: string;
  sortOption?: 'descending' | 'ascending';
  startDate?: string;
  status?: 'draft' | 'live' | 'scheduled' | 'imported';
  view?: 'ADMIN' | 'AUTHOR' | 'READER';
  maxComments?: string | number;
  fields?: string;
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
