
import React from 'react'
import { useState, useEffect } from 'react';
function Greeting({ name }) {
  const [counter, setCounter] = useState(0);
  

  useEffect(() => {
    console.log(`effext执行了`)
    document.title = 'Hello, ' + name;
  },);
  return (
    <h1 className="Greeting">
      Hello, {name}
      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </h1>
  );
}
export default Greeting
