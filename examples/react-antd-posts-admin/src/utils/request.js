import axios from "axios";
import {} from "./auth";
// 创建实例
const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const get = (url, params) =>
  instance(url, {
    params,
  });

const post = (url, params) => instance(url, params);
const put = (url, params) => instance(url, params);
const deleteById = (url, params) => instance(url, params);
const patch = (url, params) => instance(url, params);
export { get, post, put, deleteById, patch };
