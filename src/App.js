import React,{useState,useCallback} from 'react'
import Text from './Text'
import Button from './Button'

const App = ()=>{
     
    const [message,setMessage] = useState("Hello user good morning");
    // console.log(message);
    // // const message = "Hello user good morning";

    // const changeText = () =>{
    //     if (message === "Hello user good morning") {
    //         setMessage("Hello user good afternoon");
    //     } else {
    //         setMessage("Hello user good morning");
    //     }
    // }
    const changeText = useCallback(()=>{
        // console.log(message);
        // setMessage("Hello user good afternoon");
        setMessage((prevdata)=>{
            console.log("previous data is ",prevdata);
            return "Hello user good afternoon"
        })
        // console.log(message);
    },[])

    // return <>
    // <div>{message}</div>
    // <button onClick={changeText}>change text</button>
    // </>
    const [text, setText] = useState('hello');
    const [count,updCounter] = useState(0);

  function handleChange(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.nativeEvent.data);
    console.log(e.target.value);
    setText(e.target.value);    
    console.log(e.target.value);
    // console.log(e.nativeEvent.data);
    // setText(e.nativeEvent.data);
  }

  const handleCounter = ()=>{
    console.log("before update value is ",count)
    updCounter((c)=> c+1 ) ;
    console.log("after update value is ", count);
  }

  return (
    <>
      {/* <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button> */}
      {/* <div>
        Value of counter is : {count}
      </div>
      <button onClick={handleCounter}>add</button> */}
      <div>
        {message}
      </div>
      {/* <button onClick={changeText}>
        
      </button> */}
      <Button clickAction={changeText}>Click me to change the message</Button>

    </>
  );

}
 
export default App;