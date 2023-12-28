import React,{memo} from 'react'


const Button = memo((props)=>{
    // console.log(props.children);
    // const children = props.name;
    console.log("rendering button");
    const {children,clickAction} = props;
    const handleClick = ()=>{
        // console.log("clicked from button");
        clickAction?.();
    }
    return <button onClick={handleClick}>{children}</button>
})

export default Button;