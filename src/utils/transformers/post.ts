import { Posts, AppConfig } from '@domain';
import { removeDomainAndSubdomain, removeHtmlTags } from '@utils';

export function transformPostLabel(post: Posts['items'][0]) {
  if (post.labels && post.labels.length > 0) {
    post.labels = post.labels.map(value => ({
      title: value as unknown as string,
      url: `/search/label/${encodeURIComponent(value as unknown as string)}`
    }));
  }

  return post;
}

export function createPostUrl(url: string) {
  return removeDomainAndSubdomain(url);
}

export function transformPostAuthor(
  post: Posts['items'][0],
  authors: AppConfig['author']
) {
  // find the match data
  const customAuthorData = authors.filter(d => d.id === post.author.id)[0];

  if (customAuthorData) {
    post.author = {
      ...post.author,
      detail: customAuthorData
    };
  }
  return post;
}

export function transformPost(data: Posts, authors: AppConfig['author']) {
  if (data?.items?.length > 0) {
    data.items = data.items.map(post => {
      post = transformPostAuthor(post, authors);
      post = transformPostLabel(post);
      post.to = createPostUrl(post.url);
      if (post.content) {
        post.summary = removeHtmlTags(post.content, 250, '[...]');
      }
      return post;
    });
  }

  return data;
}
