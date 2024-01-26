import React, { useCallback} from 'react';
import ThirdComp from './ThirdComp';


const SecondComp = ()=>{

    const halkath = useCallback(()=>{
        console.log("halkath called");
    },[])


    return <>
    I am in second comp
    <br/>
    <ThirdComp halkath={halkath}/>
    </>
}

export default SecondComp;