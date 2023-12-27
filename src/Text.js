import React,{memo} from 'react'

const Text = memo((props)=>{
    // const {array,children} = props;
    // console.log(array);
    // return <ul>
    //      {array.map(x => (
    //     <li key={x.id}>{x.text}</li>
    //   ))}
    // </ul>
    const {children} = props;
    console.log(children);
    return <div>{children}</div>
      
   
})

export default Text;