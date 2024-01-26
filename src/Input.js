import React, {forwardRef} from "react"
const Input = forwardRef( (props,ref)=>{

    // console.log("props are :",props)
    return <>
    <input type="text" ref={ref}></input>

    </>
})

export default Input;