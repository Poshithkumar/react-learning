import React,{useState} from 'react'
import Text from './Text'
import Button from './Button'

const App = ()=>{
    // return  <Button name="Poshith"/>;
    // const checkClickAction = ()=>{
    //     console.log("clicked from parent App");
    // }
    // // return <Button clickAction={checkClickAction} name="Poshith" />
    // return <Button  >Poshith</Button>
    const [list,setData] = useState(
        [
            {id:'a',text:"text0"},
            {id:'b',text:"text1"},
            {id:'c',text:"text2"},
            {id:'d',text:"text3"},
            {id:'e',text:"text4"}
    
        ]
    )
    // const list = [
    //     {id:'a',text:"text1"},
    //     {id:'b',text:"text2"},
    //     {id:'c',text:"text3"},
    //     {id:'d',text:"text4"},
    //     {id:'e',text:"text5"},

    // ]
    // return <Text array={list} >list</Text>;

    const [nextId, setNextId] = useState('f');
    const [nextText, setNextText] = useState(5);

    const addData = ()=>{
        setData((prevdata) => [ ...prevdata,{id: nextId, text: "text" + nextText}]);

        // Update nextId and nextText
        setNextId(String.fromCharCode(nextId.charCodeAt(0) + 1));
        setNextText(nextText + 1);
    }
    console.log(list);
    return <>
    {list.map((item,index) => <Text key={item.id} >{item.text}</Text> )}
    <Button clickAction={addData}>add_the_data</Button>
    </>

}
 
export default App;