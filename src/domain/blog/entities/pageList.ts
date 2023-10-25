export interface Pages {
  kind: string;
  items: Item[];
  nextPageToken: string;
  etag: string;
}

interface Item {
  kind: string;
  id: string;
  blog: Blog;
  published: string;
  updated: string;
  url: string;
  selfLink: string;
  title: string;
  content: string;
  author: Author;
  etag: string;
}

interface Blog {
  id: string;
}

interface Author {
  id: string;
  displayName: string;
  url: string;
  image: Image;
}

interface Image {
  url: string;
}
