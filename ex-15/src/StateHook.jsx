import React from 'react'
import { useState } from 'react'

const StateHook = () => {
    const [count,setCount]=useState(0);
  return (
    <div>StateHook:
        <button onClick={()=>setCount(count+1)}>count: {count}</button>
    </div>
  )
}

export default StateHook