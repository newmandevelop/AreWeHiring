import axios, { AxiosInstance } from 'axios';
import { getToken } from '../utils/sessionStorage';

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'http://104.236.34.83:8080/api/',
    //timeout: 12000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  instance.interceptors.request.use(
    config => {
      // config.headers.Authorization = ''
      const token = getToken();
      config.headers.Authorization = token;
      return { ...config };
    },
    error => {
      return Promise.reject(error);
    },
  );
  return instance;
};

export default createAxiosInstance;
