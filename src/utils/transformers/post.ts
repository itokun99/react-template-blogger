import { Posts, AppConfig } from '@domain';
import { removeDomainAndSubdomain, removeHtmlTags } from '@utils';

export function transformPostLabel(labels: Posts['items'][0]['labels']) {
  if (labels && labels.length > 0) {
    labels = labels.map(value => ({
      title: value as unknown as string,
      url: `/search/label/${encodeURIComponent(value as unknown as string)}`
    }));
  }

  return labels;
}

export function createPostUrl(url: string) {
  return removeDomainAndSubdomain(url);
}

export function transformPostAuthor(
  author: Posts['items'][0]['author'],
  authors: AppConfig['author']
) {
  // find the match data
  const customAuthorData = authors.filter(d => d.id === author.id)[0];

  if (customAuthorData) {
    author = {
      ...author,
      detail: customAuthorData
    };
  }
  return author;
}

// Function to group items by label and count occurrences
export function createGroupAndCountLabels(items: Posts['items']) {
  const labelCounts: {
    [key: string]: {
      id: string;
      title: string;
      count: number;
      url: string;
    };
  } = {};

  items.forEach(item => {
    if (item.labels) {
      item.labels.forEach(label => {
        const l = label as unknown as string;
        if (labelCounts[l]) {
          labelCounts[l].count++;
        } else {
          labelCounts[l] = {
            id: `tags-${l}`,
            title: l,
            count: 1,
            url: `/search/label/${encodeURIComponent(l)}`
          };
        }
      });
    }
  });

  // Convert the labelCounts object into an array
  const groupedLabels = Object.values(labelCounts);

  const newItems = groupedLabels;

  return newItems;
}

export function transformPost(
  post: Posts['items'][0],
  authors: AppConfig['author']
) {
  if (post.author) post.author = transformPostAuthor(post.author, authors);
  if (post.labels) post.labels = transformPostLabel(post.labels);
  if (post.url) post.to = createPostUrl(post.url);
  if (post.content) post.summary = removeHtmlTags(post.content, 250, '[...]');
  return post;
}

export function transformPosts(data: Posts, authors: AppConfig['author']) {
  if (data?.items?.length > 0) {
    data.items = data.items.map(post => transformPost(post, authors));
  }

  return data;
}
