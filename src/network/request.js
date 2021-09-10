import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
  });
  // 添加请求拦截器
  instance.interceptors.request.use(config => {
    // 在发送请求前做些什么
    // ...
    return config;
  }, error => {
    return Promise.reject(error);
  });
  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  // 用途？
  return instance(config);
}





