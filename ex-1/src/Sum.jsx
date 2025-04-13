import React, { useState } from 'react'

export const Sum = () => {

    const [ans,setAns]=useState(0);
    const [a,setA]=useState('');
    const [b,setB]=useState('');
    const sum= ()=>{
        let A=Number(a)
        let B=Number(b)
        let ans=A*A+B*B;
        setAns(ans);
    }
  return (
    <div>
        <input type="text" name="a" placeholder='enter num 1' value={a}  onChange={(e)=> setA(e.target.value)}/>
        <br />
        <input type="text" name="b" placeholder='enter num 2' value={b}  onChange={(e)=> setB(e.target.value)}/>
        <br />
        <button onClick={sum}>Calculate Sum</button>
        <br />
        <p>Result: {ans}</p>
    </div>
  )
}
