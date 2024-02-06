import { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import React from 'react';
import {Route,Routes,Link,Router} from 'react-router-dom'
import Input from './Input';

const showValue = (value) => {
  // console.log(value);
    return <h1>Hello {value}</h1>;
}
const multiplyByTen = (value) =>{
  return <h1>Value*10 is {value*10}</h1>
}

export default function App() {

   
  return (
    <>
     <Input renderTextFunc={multiplyByTen} />
      
    </>
  )
}