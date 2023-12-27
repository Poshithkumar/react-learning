import React from 'react'

import Button from './Button'

const App = ()=>{
    // return  <Button name="Poshith"/>;
    const checkClickAction = ()=>{
        console.log("clicked from parent App");
    }
    // return <Button clickAction={checkClickAction} name="Poshith" />
    return <Button  >Poshith</Button>

}
export const a = 6;
export const b = 3;

export default App;