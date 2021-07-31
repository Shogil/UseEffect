import React from 'react'
import { useState,useEffect } from 'react'


function Counter() {
    useEffect(()=>{
          console.log('Mounting...')
          return ()=>{
              console.log('Unmounting...')
          }
    })
    const [count,setCount] = useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <h1> Hello I am Component: {count}</h1>
            
        </div>
    )
}

export default Counter
