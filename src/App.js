import React,{useState,useCallback,useEffect} from 'react'
import Text from './Text'
import Button from './Button'
import Timer from './Timer'

const App = ()=>{
    
    const [timer,toggleTimer] = useState(true);  
  return (
    <>
      {timer &&<Timer />}
      <button onClick={()=>{toggleTimer(()=>!timer)}}>toggle the timer</button>
    </>
  );

}
 
export default App;