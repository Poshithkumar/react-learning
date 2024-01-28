import React, { useState, useEffect,useRef, useMemo,lazy, Suspense } from 'react';
import Table from './Table'
// import Text from './Text' //this static importing

const Textlazy = lazy(()=>delayForDemo(import('./Text')))

export default function App() {
  
  const [showText,toggleText] = useState(false);
   

  return <>
    {showText && <Suspense fallback={<div>loading...</div>}>
      <Textlazy>hello world</Textlazy>
    </Suspense>
 }
    {/* {showText && <Text>hello world</Text>} */}
      <br></br> 
    <button onClick={()=>toggleText((prev)=>!prev)}>toggle Text</button>
  </>
}

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

 
