import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);
  const handleScroll = (event) => {
    // if (event.isComposing || event.keyCode === 229) {
    //   return;
    // }
    if (event.keyCode === 13) {
      console.log(event);
    }
    // do something
  }
  useEffect(() => {
    window.addEventListener('keydown', handleScroll, false);

    return ()=>{
      console.log(`return 返货`)
      return window.removeEventListener('keydown', handleScroll);
    }
  },[]);
  return (
    <div>
      {show ? (
        <input value={name} onChange={(e) => setName(e.target.value)} />
      ) : null}
      <button onClick={()=> setShow(!show)}>切换输入框</button>
    </div>
  );
}
