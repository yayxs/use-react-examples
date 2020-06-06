import { LOGIN_TYPE } from "../actionTypes/index";
const loginAction = (paylod) => {
  return {
    type: LOGIN_TYPE,
    paylod,
  };
};
export default loginAction;
