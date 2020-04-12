import { get, post, patch, deleteById } from "../utils/request";

const getPostsApi = (params) => get(`/posts`, params);

const getPostByIdApi = (id) => get(`/posts/${id}`);

const deletePostApi = (id) => deleteById(`/posts/${id}`);

const updateStatusApi = (id, status) => patch(`/posts${id}/status`, status);

const createPostApi = (params) => post(`/posts`, params);
export {
  getPostsApi,
  getPostByIdApi,
  deletePostApi,
  updateStatusApi,
  createPostApi,
};
