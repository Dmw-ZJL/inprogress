// api.ts

import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://your-api-domain.com/api', // 设置你的 API 地址
  timeout: 5000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json', // 设置默认请求头
  },
});

// 拦截器示例
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response;
  },
  (error: AxiosError) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
