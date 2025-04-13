import { useState } from 'react'
import './App.css'
import { Displayimg } from './Displayimg'
import Form from './form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hi</h1>
      <Form />
    </>
  )
}

export default App
