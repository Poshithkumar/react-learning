// App.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Count from './Count';

const initialState = {
  count: 0
};

 

function App() {
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>
        Increment
      </button>
      {/* <h1>{state.count}</h1> */}
      <Count />
      <button onClick={() => dispatch({type: 'DECREMENT'})}>
        Decrement
      </button>

    </div>
  );
}

export default App;
