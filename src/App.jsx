import { useState } from 'react'

import './App.css'
import Landing from './components/Landing'

import { useEffect } from 'react'
// import Landing03 from './components/landing03'

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
        <Route path="/" element={<Landing04 />} />
        <Route path="/" element={<Landing05 />} />
        <Route path="/" element={<Landing06 />} />
        <Route path="/portfolio" element={<Landing04 />} />
        <Route path="/services" element={<Landing05 />} />
        <Route path="/contacts" element={<Landing06 />} />
      </Routes>
      {/* <Landing toggle={toggle} setToggle={setToggle}/>
      <Landing02 toggle={toggle} setToggle={setToggle}/>
      <Cards toggle={toggle} setToggle={setToggle}/>
      <Landing04/>
      <Landing05/>
      <Landing06 toggle={toggle} setToggle={setToggle}/> */} */}




      <Certificates/>
      <Results/>
      <Address/>
      <Landing07/>
       <ScrollToTopButton/>

       

     
    </BrowserRouter>
    </div>
  )
}

export default App
