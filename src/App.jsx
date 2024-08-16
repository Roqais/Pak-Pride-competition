import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Regions from './pages/Regions'
import Register from './components/Register'
import Diversity from './components/Diversity'

const App = () => {

  return (
    <>

      <BrowserRouter>

        <div className="font-poppins">
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/regions/:name' element={<Regions />} />
            <Route path='/register' element={<Register />} />
            <Route path='/unity-diversity' element={<Diversity />} />
          </Routes>

        </div>

      </BrowserRouter>


    </>
  )
}

export default App