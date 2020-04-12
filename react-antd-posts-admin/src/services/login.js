import { get, post } from "../utils/request";

const loginApi = (userInfo) => post(`/login`, userInfo);

export { loginApi };
