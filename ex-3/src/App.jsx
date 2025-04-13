import { useState } from 'react'
import './App.css'
import { Content } from './Content'
import { Footer } from './Footer'
import { Mheader } from './Mheader'
import StateHook from './StateHook'
import RefHookExample from './RefHookExample'
import { ThemeProvider } from './ThemeProvider'
import Child from './Child'
import FormUsingRef from './FormUsingRef'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      <Mheader name="nikhil"/>
      <Content />
      <Footer />
      <StateHook />
      <FormUsingRef />



     
    </>
  )
}

export default App
