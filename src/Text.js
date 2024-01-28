import React,{memo, useEffect} from 'react'

const Text = memo((props)=>{
     
    const {children} = props;
    console.log(children);
    useEffect(()=>{
        console.log("rendering in Text");
    },[children]);
    return <div>{children}</div>
      
   
})

export default Text;