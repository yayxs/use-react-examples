import { addAction } from "./actions";
// 默认的数据

// reducer
const counterReducer = (state = {num:123}, action) => {
  // 判断传入的动作是什么类型
  switch (action.type) {
    case addAction:
      return Object.assign({}, state, {
        
      });
    default:
      return state;
  }

  // 啥也不干，返回传进来的state(此时默认的initData)
  //   return state;
};

export {
    counterReducer
}