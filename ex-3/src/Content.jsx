import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const Content = () => {
    const [joke,setJoke]=useState('');
    const fetchjoke=()=>{
        fetch("https://icanhazdadjoke.com/",{
            method:"GET",
            headers:{
                "Accept":"application/json"
            }
        })
        .then(response=>response.json())
        .then(data=> setJoke(data.joke))
        .catch(error=>console.log(error));
    }
    useEffect(()=>{
        fetchjoke();
    },[])
  return (
    <div>
        <h1>Here is a joke:</h1>
        <h5>{joke}</h5>
        <br />
        <button onClick={fetchjoke}>Generate New</button>
    </div>
  )
}
