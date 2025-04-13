import React, { useState } from 'react'

export const StringReverse = () => {

    const [str,setString]=useState('');
    const [ans,setAns]=useState('pls enter string to reverse');

    const reverse=()=>{
        let a="";
        for(let i=str.length-1;i>=0;i--){
            a+=str.charAt(i);
        }
        setAns(a);
    }
  return (
    <div>
        <h3>Reverse the string</h3>
        <input type="text" value={str} onChange={(e)=> setString(e.target.value)} />
        <button onClick={reverse}>Click to reverse</button>
        <p>{ans}</p>
    </div>
  )
}
