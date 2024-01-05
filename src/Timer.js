import React,{useState,useEffect} from 'react'

const Timer = () =>{
    const [count,setCount] = useState(0)
    useEffect(() => {
        const updatecount = setInterval(()=>{
        console.log("Timer is running");
          setCount((c)=>c+1);
        }, 1000);
        return()=> clearInterval(updatecount);
      },[]);

      return (
        <div>{count}</div>
        );
}

export default Timer;