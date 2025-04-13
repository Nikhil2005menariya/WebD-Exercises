import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let msg="hi i am nikhil i am 19 years old"

  return (
    <>
     <h1 style={{color: "red", fontFamily:"monospace", fontSize:"25px"}}>{msg}</h1>
    </>
  )
}

export default App
