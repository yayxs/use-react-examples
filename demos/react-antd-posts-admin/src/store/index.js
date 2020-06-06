import { createStore, combineReducers } from "redux";
import { loginReducer } from "./reducers/loginReducer";
const rootReducer = combineReducers({
  loginReducer,
});

// 构建store
const store = createStore(rootReducer);
export default store;
