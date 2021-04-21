import axios, { AxiosInstance } from "axios";

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: "http://104.236.34.83:8080/api/",
    timeout: 12000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.request.use(
    (config) => {
      // config.headers.Authorization = ''
      return { ...config };
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};

export default createAxiosInstance;
