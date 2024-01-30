import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store';


const root = ReactDOM.createRoot(document.querySelector('#root'));

// console.log(<App />);
// console.log(a+b);
root.render(
<Provider store={store}>
<App />
</Provider>
);

