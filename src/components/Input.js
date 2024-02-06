import React,{useState} from "react";

const Input = (props)=>{
    // console.log(props.renderTextFunc);
    const [value,setValue] = useState('');
    const textChange = (e)=>{
        setValue(e.target.value)
    }
    // console.log(props)
    return (
        <div>
            <input type="text" value={value} onChange={textChange}/>
            <br/>
            {props.renderTextFunc(value)}
        </div>
    )
}

export default Input;