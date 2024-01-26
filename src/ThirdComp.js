import React, { useState, useEffect,useRef,memo } from 'react';


const ThirdComp = memo((props)=>{

    const {halkath} = props;

    const [count,setCount]  = useState(0);

  const increment = ()=>{
    setCount((prev)=>prev+1);
    halkath?.();
    // console.log("increment called");
  }

  let startTime = performance.now();
  while (performance.now() - startTime < 800) {
    // Do nothing for 500 ms to emulate extremely slow code
  }


    return <>
    I am in third comp and I am very slow
    <br/>
    {count} <button onClick={increment}>count++</button>
    </>
})

export default ThirdComp;