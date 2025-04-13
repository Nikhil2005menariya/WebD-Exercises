import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './List.jsx'
import { Sum } from './Sum.jsx'
import Greeting from './greeting.jsx'
import Prime from './Prime.jsx'
import { StringReverse } from './StringReverse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <List />
    <Sum />
    <Greeting />
    <Prime />
    <StringReverse />
  </StrictMode>,
)
