import { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import React from 'react';
import {Route,Routes,Link} from 'react-router-dom'

export default function App() {

   
  return (
    <>
    <div>
      Welcome to react router
      <Routes>
       {/* <Route path="/cart/*" element={<Cart />} /> */}
        <Route path="/" element={<div>Home</div>}/>
        {/* <Route path="/bout" element={<div>About</div>}></Route> */}
      </Routes>
    </div>
      
    </>
  )
}