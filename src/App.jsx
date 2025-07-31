import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutGame from './components/AboutGame';

function App() {


  return (
    
      <>
      <Navbar/>
      <Routes>
      <Route path="/home" element={<HeroSection />} />
      {/* * <Route path="/calculate" element={<Calculate />} /> */}
      <Route path="/aboutgame" element={<AboutGame />} /> 
      </Routes>
      
    
      
    
      
    </>

    
    
  )
}

export default App
