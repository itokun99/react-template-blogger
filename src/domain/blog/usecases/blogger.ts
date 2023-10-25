import { appStoreRepo } from '../../app/repositories';
import { bloggerRepository } from '../repositories';

async function getInfo() {
  const state = appStoreRepo.configStore.getState();
  if (!state?.appConfig?.google?.apiKey) {
    throw new Error('invalid google api key ');
  }

  if (!state?.appConfig?.blogger?.blogId) {
    throw new Error('invalid blog id ');
  }

  const blogInfo = await bloggerRepository.blogInfo(
    state?.appConfig?.blogger?.blogId,
    state.appConfig?.google?.apiKey
  );
  return blogInfo.data;
}

const bloggerUsecase = {
  getInfo
};

export default bloggerUsecase;
