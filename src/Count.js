import React from "react";
import {  useSelector } from "react-redux";

const Count = ()=>{
     const counter = useSelector((state)=>state.count);
    return <h1>{counter.count}</h1>
}

export default Count;