import { useState } from 'react'
import Login from './pages/Login'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='login' element = {<Login/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
