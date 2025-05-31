import { useState } from 'react'

import './App.css'
import Landing from './components/Landing'

import { useEffect } from 'react'
// import Landing02 from './components/landing02'

import Landing04 from './components/Landing04'
import Landing05 from './components/Landing05'
import Landing06 from './components/Landing06'
import Landing07 from './components/Landing07'
import Navbar from './components/Navbar'
import ScrollToTopButton from './components/ScrollToTopButton'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from './components/Address'

import Final from './components/Final'

import Certificates from './components/Certificates'
import ParticlesBackground from './components/ParticlesBackground';

import Results from './components/Results'


import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Landing02 from './components/Landing02'
import Landing03 from './components/Landing03'
import WhatsAppButton from './components/WhatsAppButton'





function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation runs once on scroll
    });
  }, []);


  // const [count, setCount] = useState(0)
  const [toggle , setToggle] = useState(false)




  return (
    <div style={{background : toggle ? '#1f2323' : "" , color : toggle ? 'white' : ''}}>
       
    

       
       <ParticlesBackground/>
      <BrowserRouter>
      <Navbar toggle={toggle} setToggle={setToggle}/>
      <Final/>
      
      <Routes>
        <Route path="/" element={<Landing />} />
         
        <Route path="/projects" element={<Landing04 />} />
        <Route path="/academics" element={<Certificates />} />
        <Route path="/contacts" element={<Landing06 />} />
        <Route path="/feedbacks" element={<Landing05 />} />
    
      </Routes>
      {/* <Certificates/> */}
      <Results/>
     
      <Landing06/>
      <Address/>
      <Landing07/>
      <WhatsAppButton/>
       <ScrollToTopButton/>

    </BrowserRouter>
    </div>
  )
}

export default App
