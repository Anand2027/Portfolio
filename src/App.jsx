import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing'
import Landing02 from './components/Landing02'
import { useEffect } from 'react'
// import Landing03 from './components/landing03'
import Landing03 from './components/Landing03'
import Cards from './components/Cards'
import Landing04 from './components/Landing04'
import Landing05 from './components/Landing05'
import Landing06 from './components/Landing06'
import Landing07 from './components/Landing07'
import Navbar from './components/Navbar'
import ScrollToTopButton from './components/ScrollToTopButton'
import { Particles } from "react-tsparticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from './components/Address'
import PurpleParticles from './components/PurpleParticles'
import Final from './components/Final'


function App() {
  // const [count, setCount] = useState(0)
  const [toggle , setToggle] = useState(false)




  return (
    <div style={{background : toggle ? '#1f2323' : "" , color : toggle ? 'white' : ''}}>
       
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
      <Address/>
      <Landing07/>
      {/* <ScrollToTopButton/>

      <div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginTop: "100px" }}>
        <h1>Welcome to My App</h1>
        <p>Purple particles on a white background</p>
      </div>
    </div>
  
      {/* <Navbar toggle={toggle} setToggle={setToggle} /> */}
     
    </BrowserRouter>
    </div>
  )
}

export default App
