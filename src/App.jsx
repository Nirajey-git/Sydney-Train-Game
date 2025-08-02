import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutGame from './components/AboutGame';
import Calculate from './components/Calculate';

function App() {


  return (
    
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/home" element={<HeroSection />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/aboutgame" element={<AboutGame />} /> 
      </Routes>
      
    </>

    
    
  )
}

export default App
