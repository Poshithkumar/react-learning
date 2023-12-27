import React from 'react'


const Button = (props)=>{
    // console.log(props.children);
    // const children = props.name;
    const {children,clickAction} = props;
    const handleClick = ()=>{
        // console.log("clicked from button");
        clickAction?.();
    }
    return <button onClick={handleClick}>{children}</button>
}

export default Button;