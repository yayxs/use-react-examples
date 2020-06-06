import { LOGIN_TYPE } from "../actionTypes/index";
// 初始数据
const initState = {
  username: "",
  password: "",
};
// 测试数据
const loginInfo = {
  username: "admin",
  password: "123456",
};

const checkLogin = (username, password) => {
  if (username === "admin" && password === "123456") {
    const TOKEN = Date.now();
    // 登录成功
    return {
      code: 200,
      token: TOKEN,
    };
  }
  return {
    code: 400,
  };
};

const loginReducer = (state = initState, { paylod, type }) => {
  switch (type) {
    case LOGIN_TYPE:
      const { username, password } = paylod;
      const res = checkLogin(username, password);
      console.log(res);
      return res;

    default:
      return state;
  }
};

export { loginReducer };
