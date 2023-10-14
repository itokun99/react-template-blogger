import { httpClient, API_ENDPOINT, APP_CONFIG } from '@core';

const getFeaturePost = () => {
  return httpClient.get(API_ENDPOINT.postSummaries, {
    params: {
      alt: 'json',
      'max-results': 1,
    }
  })
};


const getPosts = () => {
  return httpClient.get(API_ENDPOINT.posts, {
    params: {
      alt: 'json',
      maxResults: 6,
      orderBy: 'published',
      key: APP_CONFIG.apiKey,
      fetchBodies: true,
      fetchImages: true,
      
    }
  })
};

const getPostById = (id: string) => {
  return httpClient.get(`${API_ENDPOINT.posts}/${id}`, {
    params: {
      alt: 'json',
      key: APP_CONFIG.apiKey,
    }
  })
}


const blogPostRepo = {
  getFeaturePost,
  getPosts,
  getPostById
}

export default blogPostRepo;