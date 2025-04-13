import { useState } from 'react'
import './App.css'
import { Content } from './Content'
import { Footer } from './Footer'
import { Mheader } from './Mheader'
import StateHook from './StateHook'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <Mheader name="nikhil"/>
      <Content />
      <Footer />
      <StateHook />



     
    </>
  )
}

export default App
