import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './Routes'
import "./globalStyles.css"

export function App() {
  const [count, setCount] = useState(0)

  return ( 
  <BrowserRouter>

    <AppRoutes />

  </BrowserRouter> )
}


