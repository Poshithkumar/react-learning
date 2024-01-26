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


import React, { useState, useEffect,useRef } from 'react';
import Timer from './Timer';
import Input from './Input'
import SecondComp from './SecondComp';

export default function App() {
  
  const [count,setCount]  = useState(0);

  const increment = ()=>{
    setCount((prev)=>prev+1);
    console.log("increment called");
  }


  return (
    <div>
      You're in parent body <br></br>
     {count} <button onClick={increment}>increment</button> <br/>
     <SecondComp />

    </div>
  );
}

 
