import { createStore } from 'zustand/vanilla';
import { createBoundedUseStore } from '@core';
import { AppConfig } from '../entities';

interface AppConfigState {
  appConfig: AppConfig | null | undefined;
  setAppConfig: (appConfig: any) => void;
}

const configStore = createStore<AppConfigState>(set => ({
  appConfig: null,
  setAppConfig: (config: any) => set({ appConfig: config })
}));

const useConfigStore = createBoundedUseStore(configStore);

function getBloggerCredential() {
  const state = configStore.getState();
  const blogId = state.appConfig?.blogger?.blogId;
  const apiKey = state.appConfig?.google?.apiKey;
  const blogUrl = state.appConfig?.blogger?.blogUrl;

  return {
    blogId,
    apiKey,
    blogUrl
  };
}

const appStoreRepo = {
  configStore: configStore,
  getBloggerCredential,
  useConfigStore
};

export default appStoreRepo;
