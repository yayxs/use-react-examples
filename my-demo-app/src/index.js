import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
// import "./index.css";
// import App from "./App";

// reducer
const CounterReducer = (state = { num: 0 }, action) => {
  switch (action.type) {
    case "JIA":
      return state.num + 1;

    case "JIAN":
      return state.num - 1;
    default:
      return state;
  }
};

// 创建 store
let store = createStore(CounterReducer);

const handleAdd = () => {
  console.log(`点击了增加`);
  store.dispatch({ type: "JIA" });
};

const handleJian = () => {
  console.log(`点击了减少`);
  store.dispatch({ type: "JIAN" });
};
const Counter = () => {
  return (
    <>
      <h3>{/* {props.state.num} */}</h3>
      <div>
        <button onClick={handleAdd}>加+</button>
        <button onClick={handleJian}>减-</button>
      </div>
    </>
  );
};

ReactDOM.render(<Counter  />, document.getElementById("root"));
