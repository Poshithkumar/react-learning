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

export default function App() {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(1);
  const inputRef = useRef();
  // console.log(renderCount);

  // useEffect(() => {
  //   // setRenderCount(prevRenderCount => prevRenderCount + 1);
  //   renderCount.current = renderCount.current + 1;
  // });
  const focus = ()=>{
    inputRef.current.focus();
    console.log(inputRef.current.getBoundingClientRect())
    // console.log(inputRef.current);
  }

  return (
    <div>
      {/* <input ref={inputRef} onChange={(e) => setName(e.target.value)} /> */}
      {/* <div>My name is {name}, rendered {renderCount.current} times</div> */}
      <Input ref={inputRef}></Input>
      <button onClick={focus}>focus</button>
      <Timer></Timer>

    </div>
  );
}
