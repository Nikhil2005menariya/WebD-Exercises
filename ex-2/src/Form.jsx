import React, { useState } from 'react'
import Dashboard from './Dashboard';

const Form = () => {
    const [name,setName]=useState('');
    const [city,setCity]=useState('');
    const [password,setPass]=useState('');
    const [role,setRole]=useState('');
    const [selected,setSelected] =useState([]);
    const [login,setLogin]=useState(false)

    const handleChange=(e)=>{
        const value=e.target.value;
        if(selected.includes(value)){
            setSelected(selected.filter((item)=> item!==value));
        }
        else{
            setSelected([...selected,value]);
        }

    }
    if(login){
        return <Dashboard name={name}/>
    }
  return (
    <>
        <label htmlFor="name">Enter Name: </label>
        <input type="text" name="name" value={name} onChange={(e)=>setName((e).target.value)} />
        <br />
        <label htmlFor="password">Enter Password: </label>
        <input type="password" name="password" value={password} onChange={(e)=>setPass((e).target.value)} />
        <br />
        <label htmlFor="city">Enter Employment City: </label>
        <input type="text" name="city" value={city} onChange={(e)=> setCity((e).target.value)} />
        <br />
        <h4>select job role : </h4>
        <label>
         <input type="radio" name="job role" value="Admin" onChange={(e)=>setRole((e).target.value)} checked={role==="Admin"} />Admin
        </label>
        <label>
         <input type="radio" name="job role" value="Engineer" onChange={(e)=>setRole((e).target.value)} checked={role==="Engineer"} />Engineer
        </label>
        <label>
         <input type="radio" name="job role" value="Manager" onChange={(e)=>setRole((e).target.value)} checked={role==="Manager"} />Manager
        </label>
        <label>
         <input type="radio" name="job role" value="Guest" onChange={(e)=>setRole((e).target.value)} checked={role==="Guest"} />Guest
        </label>
        <h4>select the options: </h4>
        <label>
            <input type="checkbox" name="" value="Mail" checked={selected.includes("Mail")} onChange={handleChange} />Mail
        </label>
        <label>
            <input type="checkbox" name="" value="Pay-role" checked={selected.includes("Pay-role")} onChange={handleChange} />Pay-role
        </label>
        <label>
            <input type="checkbox" name="" value="Self-service" checked={selected.includes("Self-service")} onChange={handleChange} />Self-service
        </label>
        <br />
        <button onClick={()=>setLogin(true)}>Login</button>

        
        
    </>
  )
}

export default Form