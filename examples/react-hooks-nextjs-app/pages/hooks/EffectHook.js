import React, {useState, useEffect } from "react";

export default function EffectHook() {
  const [count, setCount] = useState(0);
  // ---当页面执行完，执行一次-------------------
  // useEffect(() => {
  //   console.log(`useEffect执行了`);
  // });
  useEffect(() => {
    console.log(`useEffect${count}`)
    document.title = `You clicked ${count} times`;
  });
  //---
  useEffect(() => {
      let timerId = setTimeout(()=>{
        console.log(`2s之后定时器执行了`)
      },2000)
      return () => {
          clearTimeout(timerId)
      }
  }, [])
  return <div>
     <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
  </div>;
}
