import { useState } from 'react'
import Login from './pages/Login'
import './App.css'
import Home from './pages/Home'
import Packages from './pages/Packages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='login' element = {<Login/>}/>
        <Route path='package' element = {<Packages/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
