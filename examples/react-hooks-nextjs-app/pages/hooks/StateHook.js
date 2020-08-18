import React, { useState } from "react";
import Link from "next/link";

function StateHook() {
  // ---------------状态是Number--------------------
  // 声明一个叫 “count” 的 state 变量。
  const res = useState(0);
  console.log(Array.isArray(res)); // 返回一个数组
  const count = res[0]; //当前状态
  const fn = res[1]; // 一个让你更新它的函数
  // ---------------状态是字符串--------------------
  const [name, setName] = useState("yayxs"); // 这里采用直接解构

  // ---------------状态是数组--------------------
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  return (
    <div>
      <p>你点击了 {count} 次</p>
      <p>我的名字是：{name}</p>
      <p>我的任务是:{todos[0].text}</p>
      <button onClick={() => fn(count + 1)}>点一下</button>
      <Link href="/">
        <a>返回首页</a>
      </Link>
    </div>
  );
}
export default StateHook;
