const fs = require('fs');

setTimeout(()=>{console.log("I am in setTimeout function Timer 1")},0);

setImmediate(()=>{console.log("I am in setImmediate function")});

fs.readFile('sample.txt','utf-8',()=>{
    console.log("I/O Polling happening");
    setTimeout(()=>{console.log("I am in setTimeout function of I/O Polling Timer 2")},0);
    setTimeout(()=>{console.log("I am in setTimeout function of I/O Polling Timer 3")},5*1000);
    setImmediate(()=>{console.log("I am in setImmediate function of I/O Polling")});

})

console.log("top level code executed");