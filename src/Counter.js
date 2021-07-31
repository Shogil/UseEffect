import React from 'react'
import { useState,useEffect } from 'react'
import { count } from 'yargs'


function Counter() {
    const [count,setCount] = useState(0)
 
    useEffect(()=>{
          console.log('Mounting...');
          console.log('updating...'+count);
    },[count])
   
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <h1> Hello I am Component: {count}</h1>
            
        </div>
    )
}

export default Counter
