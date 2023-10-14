import axios from "axios";
import { APP_CONFIG } from '../../configs/app';

// instance of xhr / fetch call it "fetcher"
export const httpClient = axios.create({
  timeout: APP_CONFIG.httpClient.timeout
});

// implement interceptor
// TODO: enhance this if needed in future
httpClient.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
})

httpClient.interceptors.response.use(response => {
  return response;
}, err => {
  return Promise.reject(err);
})