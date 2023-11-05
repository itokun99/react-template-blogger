import {
  bloggerRepository,
  appStoreUsecase,
  BloggerRequestParams
} from '@domain';
import {
  transformPosts,
  transformPost,
  createGroupAndCountLabels,
  removeHtmlTags
} from '@utils';

async function getInfo() {
  const { blogId, apiKey } = appStoreUsecase.getBloggerCredential();
  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.blogInfo(blogId, apiKey);
  console.log('bloggerUseCase / getInfo ==>', res);
  return res.data;
}

async function getFeaturedPosts() {
  const { blogId, apiKey, authors } = appStoreUsecase.getBloggerCredential();
  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.getPosts(blogId, apiKey, {
    maxResults: 1,
    fetchBodies: true,
    fetchImages: true,
    orderBy: 'updated',
    fields: 'items,nextPageToken'
  });

  res.data = transformPosts(res.data, authors);

  console.log('bloggerUseCase / getFeaturedPosts ==>', res);
  return res.data;
}

async function getPostsByLabel(label: string | string[]) {
  const { blogId, apiKey, authors } = appStoreUsecase.getBloggerCredential();

  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const labels =
    typeof label !== 'string' && label.length > 0
      ? (label.map((v, i) =>
          i != label.length - 1 ? `${v},` : v
        ) as unknown as string)
      : (label as string);

  const res = await bloggerRepository.getPosts(blogId, apiKey, {
    maxResults: 8,
    fetchBodies: false,
    fetchImages: true,
    orderBy: 'updated',
    labels
  });

  res.data = transformPosts(res.data, authors);

  console.log('bloggerUseCase / getPostsByLabel ==>', res);
  return res.data;
}

async function getLatestPosts() {
  const { blogId, apiKey, authors } = appStoreUsecase.getBloggerCredential();

  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.getPosts(blogId, apiKey, {
    maxResults: 10,
    fetchBodies: true,
    fetchImages: true,
    orderBy: 'published'
  });

  res.data = transformPosts(res.data, authors);

  console.log('bloggerUseCase / getLatestPosts ==>', res);
  return res.data;
}

async function getAllLabels() {
  const { blogId, apiKey } = appStoreUsecase.getBloggerCredential();

  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.getPosts(blogId, apiKey, {
    maxResults: 500,
    fetchBodies: true,
    fetchImages: true,
    orderBy: 'published',
    fields: 'items.labels'
  });

  const labels =
    res.data.items.length > 0 ? createGroupAndCountLabels(res.data.items) : [];
  console.log('bloggerUseCase / getAllLabels ==>', labels);
  return labels;
}

async function getPostDetail(id: string, params?: BloggerRequestParams) {
  const { blogId, apiKey, authors } = appStoreUsecase.getBloggerCredential();
  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const res = await bloggerRepository.getPost(id, blogId, apiKey, {
    maxResults: 1,
    fetchBodies: true,
    fetchImages: true,
    orderBy: 'updated',
    ...params
  });

  res.data = transformPost(res.data, authors);

  console.log('bloggerUseCase / getPostDetail ==>', res);
  return res.data;
}

async function getPostDetailByPath(path: string) {
  return await getPostDetail(`bypath`, {
    path
  });
}

async function searchPostsByQueryAndLabels(q: string, labels: string) {
  const { blogId, apiKey, authors } = appStoreUsecase.getBloggerCredential();

  if (!apiKey || !blogId) {
    throw new Error('invalid credential');
  }

  const hasLabel = Boolean(labels);
  const hasQuery = Boolean(q);

  if (hasLabel) {
    const res = await bloggerRepository.getPosts(blogId, apiKey, {
      maxResults: 10,
      fetchBodies: true,
      fetchImages: true,
      orderBy: 'published',
      labels
    });

    res.data = transformPosts(res.data, authors);

    if (hasQuery && res.data?.items?.length > 0) {
      res.data.items = res.data.items.filter(item => {
        console.log(
          'nut ==>',
          removeHtmlTags(item.content, 9999999, '').toLowerCase().includes('')
        );
        return (
          item.title.toLowerCase().includes(q) ||
          removeHtmlTags(item.content, 9999999, '')?.toLowerCase()?.includes(q)
        );
      });
    }

    console.log('bloggerUseCase / searchPostsByQueryAndLabels ==>', res);
    return res.data;
  }

  const res = await bloggerRepository.searchPosts(blogId, apiKey, {
    orderBy: 'published',
    q
  });

  res.data = transformPosts(res.data, authors);
  console.log('bloggerUseCase / searchPostsByQueryAndLabels ==>', res);
  return res.data;
}

const bloggerUsecase = {
  getInfo,
  getFeaturedPosts,
  getPostsByLabel,
  getLatestPosts,
  getAllLabels,
  getPostDetail,
  getPostDetailByPath,
  searchPostsByQueryAndLabels
};

export default bloggerUsecase;
