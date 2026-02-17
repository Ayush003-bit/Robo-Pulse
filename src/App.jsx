

import React from 'react'
import {Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/HomePage'
import Resources from './Pages/Resources'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Impact from './Pages/Impact'

function App() {



  return (
    <>
       <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/impact" element={<Impact/>} />


      </Routes>

      <Footer/> 
   
     
    </>
  )
}

export default App
