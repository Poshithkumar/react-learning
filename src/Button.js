import React,{memo,useContext} from 'react'
import { ThemeContext } from './Context'; 



const Button = memo((props)=>{
    // console.log(props.children);
    // const children = props.name;
    // console.log("rendering button");
    const [themeValue,toggleTheme]= useContext(ThemeContext);
    const {children,clickAction} = props;
    const handleClick = ()=>{
        // console.log("clicked from button");
        clickAction?.();
        toggleTheme(themeValue==='dark'?'light':'dark');
    }
    return <button onClick={handleClick}>{children} {themeValue}</button>
})

export default Button;