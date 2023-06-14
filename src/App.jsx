import { createContext, useState } from 'react'
import Login from './pages/Login'
import './App.css'
import Home from './pages/Home'
import Packages from './pages/Packages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPackage from './Admin/AddPackage'
import Signup from './pages/Signup'
import PackageDetails from './pages/PackageDetails'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import AdminLogin from './Admin/AdminLogin'
import AdminHome from './Admin/AdminHome'
export const userContext = createContext();
function App() {
  const [count, setCount] = useState(0)
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false)

  return (
    <>
      <BrowserRouter>
      <userContext.Provider value={{isUserLoggedIn,setIsUserLoggedIn}}>
    
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='login' element = {<Login/>}/>
        <Route path='package' element = {<Packages/>}/>
        <Route path='addPackage' element = {<AddPackage/>}/>
        <Route path='signup' element = {<Signup/>}/>
        <Route path="Services" element = {<Services/>}/>
        <Route path="admin" element = {<AdminLogin/>}/>
        <Route path="adminhome" element = {<AdminHome/>}/>
        
        <Route path='productdetails/:id' element = {<PackageDetails/>}/>
      </Routes>
      </userContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
