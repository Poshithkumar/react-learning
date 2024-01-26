// import React,{useState,useCallback,useEffect} from 'react'
// import ReactDOM  from 'react-dom'
// import {createPortal} from 'react-dom'
// import Text from './Text'
// import Button from './Button'
// import Timer from './Timer'
// import ButtonToolTip from './ButtonWithTooltip'


// const Modal = ({ children }) => {
//   return createPortal(children, document.body);
// };

// const App = ()=>{
    
//     const [timer,toggleTimer] = useState(true);  
//   return (
//     <>
//     {/* <ButtonToolTip></ButtonToolTip> */}
//     <div style={{ border: '2px solid black' }}>
//       <p>This is a regular content.</p>
//       {/* <Modal>
//         <p>This is a modal content rendered outside of the component hierarchy.</p>
//       </Modal> */}
//       {/* <div className='modal'>hello</div> */}
//     </div>
       
//     </>
//   );

// }
 
// export default App;


import React, { useState, useEffect,useRef, useMemo } from 'react';
import Table from './Table'
 

export default function App() {
  
  const [counter1,setCounter1] = useState(0);
  const [counter2,setCounter2] = useState(0);
  const obj = useMemo(()=>({age:18}),[])
  const arr = useMemo(()=> ([1,2,3]),[])

  

  return <>

   counter1: {counter1} <br/>
   <button onClick={()=>setCounter1((prev)=>prev+1)}>count++</button> <br/>
   counter2: {counter2} <br/>
   <button onClick={()=>setCounter2((prev)=>prev+1)}>count++</button> <br/>

  <Table num={counter1} obj={obj} arr={arr}/>
  </>
}

 
