import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './redux/store';
import {
    BrowserRouter, Routes,Route,Link
  } from "react-router-dom";

  
  
   
const Home = ()=>{
    return (
        <div>
            <h1>Hello we are in home!</h1>
        </div>
    )
}
const About = ()=>{
    console.log("in about")
    return (
        <div>
            <h1>Hello we are in about!</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
// document.querySelector('#root').csp = "default-src 'none'; font-src 'self';"




// console.log(<App />);
// console.log(a+b);
{/* <Provider store={store}>
<App />
</Provider> */}
root.render(
    <App />
);



