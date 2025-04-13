import React, { useState } from 'react'

const Prime = () => {
    let [num,setNum]=useState('');
    let [ans,setAns]=useState('Pls enter num')
    const check=()=>{
        let Num=Number(num)
        for(let i=2;i<Num;i++){
            if(num%i==0){
                setAns("not a prime")
                return;
            }
        }
        setAns("given is prime number")
    }
  return (
    <div>
        <h3>Check prime</h3>
        <input type="text" name="num" value={num} placeholder='enter the number' onChange={(e) => setNum(e.target.value)} />
        <button onClick={check}>Check Number</button>
        <p>{ans}</p>
    </div>
  )
}

export default Prime