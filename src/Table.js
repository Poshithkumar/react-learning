import React,{memo,useMemo} from 'react'

const getTable = (num)=>{
    const arr=[];
    let startTime = performance.now();
  while (performance.now() - startTime < 800) {
    // Do nothing for 500 ms to emulate extremely slow code
  }
    for(let i=1;i<=10;i++){
        arr.push(<div>{num*i}</div>)
    }
    return arr

}
const Table = memo((props)=>{

    const {num,obj,arr} = props
    const table = getTable(num);
    console.log(table);
    return <>
            {table}
            <br/>
            {obj.age} <br/>
            {arr.map((item)=>{return <><span>{item}</span> <br/></>})}
    </>
})

export default Table;
 

