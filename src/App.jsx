import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Regions from './pages/Regions';
import Register from './components/Register';

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-poppins min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/regions/:name' element={<Regions />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
