import { useState } from 'react'
import Login from './pages/Login'
import './App.css'
import Home from './pages/Home'
import Packages from './pages/Packages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPackage from './pages/AddPackage'
import Signup from './pages/Signup'
import PackageDetails from './pages/PackageDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='login' element = {<Login/>}/>
        <Route path='package' element = {<Packages/>}/>
        <Route path='addPackage' element = {<AddPackage/>}/>
        <Route path='signup' element = {<Signup/>}/>
        <Route path='productdetails/:id' element = {<PackageDetails/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
