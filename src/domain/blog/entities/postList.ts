export interface Posts {
  kind: string;
  nextPageToken: string;
  items: Item[];
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
  images: Image[];
  author: Author;
  replies: Replies;
  labels: string[];
  etag: string;
}

interface Blog {
  id: string;
}

interface Image {
  url: string;
}

interface Author {
  id: string;
  displayName: string;
  url: string;
  image: Image2;
}

interface Image2 {
  url: string;
}

interface Replies {
  totalItems: string;
  selfLink: string;
}
