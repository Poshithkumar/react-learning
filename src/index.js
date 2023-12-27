import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {a,b} from './App'

// const p = document.createElement("p");
// p.innerText = "manchodiva ra nuvvu";
// // root.appendChild(p);
// const child1 = React.createElement('p',{},"I am child1");
// const child2 = React.createElement('p',{},"I am child2");

// // const div = React.createElement('div',{className:'text'},[child1,child2]);

// const isMorning = true
// const morningText = "good morning user"
// const noonText = "good afternoon user"



// const div = <div className="text"> hello I am inside React</div>; // div is a jsx and react eleemnt.
// const div2 = (
//      <div className="text">
//        {isMorning ? morningText : noonText}
//      </div>
//    ); // div is a jsx and react elemnt.
// // root.render(div2);

// // console.log(div);

// const handleClick= (state) => {
//      console.log("you clicked",state);
// }


// const morningElement = <div onClick={()=>handleClick("hell")}>{morningText}</div>
// const noonElement = <div>{noonText}</div>

// const greetingElement = isMorning ? morningElement : noonElement;

// const Greet = (props)=>{
//      // const greetingStyles = {
//      //      display: 'inline-block', // Ensures all content is displayed in the same line
//      //    };
      
//         return <>
//                <div >
//             {greetingElement}
//             <span>hello world</span>
//             {/* <div>Hello {props.name}. How are you? Your age {props.age}</div> */}
//           </div>
//         </>
          
        
// }

// root.render(<Greet name="Poshith Kumar" age={20}/>);
// root.render(Greet({name:"posh" ,age:9}))
// console.log(Greet)



// const div_comp = () =>{
//     return <div className="text"> hello I am inside React</div>;
// }
// // root.appendChild(div);
// root.render(<div_comp />);
// console.log(div);


// const root = document.querySelector("#root");
const root = ReactDOM.createRoot(document.querySelector('#root'));

console.log(<App />);
// console.log(a+b);
root.render(<App />);

