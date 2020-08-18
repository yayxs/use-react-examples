import React, { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log(123);
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  });
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default function App() {
  const [show,setShow] = useState(true)
  return (
    <>
    {show? <Counter></Counter>:null}
     <button onClick={()=>setShow(!show) }>anniu</button>
    </>
  );
}
