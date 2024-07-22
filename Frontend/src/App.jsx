import React from 'react'
import Home from './home/Home'
import {Navigate, Route,Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import  { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider"
function App() {
  const [authuser,setAuthuser]=useAuth()
  console.log(authuser);
  return (
  <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Course" element={authuser?<Courses/>:<Navigate to="/signup"/>}/>
    <Route path="/Signup" element={<Signup/>}/>
   </Routes>
   <Toaster/>
  </div>
  </> 
  )
}

export default App
