import React, { useState } from 'react'
import List from './List';
import Ngreet from './Ngreet';

const Greeting = () => {
    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')
    let greeting="";
    let day=""
    let date= new Date();
    let hour=date.getHours();
    day=date.getDay();
    let days=["monday","tuesday","wednusday","thrusday","fryday","saturday","sunday"]
    if(hour<12){
        greeting="morning"
    }
    else{ 
        greeting="evening"
    }
  return (
    <div>
        <h4>today is {days[day-1]}</h4>
        <input type="text" name="" id="" value={fname} onChange={(e)=> setFname((e).target.value)} />
        <input type="text" name="" id="" value={lname} onChange={(e)=> setLname((e).target.value)} />
        <Ngreet greet={greeting} fname={fname} lname={lname}/>
    </div>
    
  )
}

export default Greeting