import React,{useState,useEffect,useRef} from 'react'

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isTimerRunning,setisTimerRunning] = useState(true);
  let interval = useRef(null);

  useEffect(() => {
    if(isTimerRunning){
      interval.current = setInterval(() => {
        console.log("Timer is running");
    
          setCount((c) => c + 1);
        }, 1000);
    }
      
    return () => clearInterval(interval.current);
  }, [isTimerRunning]);

  const stopTimer = () => {
    console.log("stopping timer")
    console.log("interval:",interval);
    clearInterval(interval.current);
    setisTimerRunning(false);
  };

  const startTimer = ()=>{
    console.log("starting timer")
    setisTimerRunning(true);
  }

  const resetTimer = ()=>{
    console.log("resetting timer")
    setCount(0);
  }
  return <>
  <div>The timer count is : {count}</div>
  <button onClick={stopTimer}>stop timer</button>
  <button onClick={startTimer}>start timer</button>
  <button onClick={resetTimer}>reset timer</button>


  </>
};

export default Timer;

