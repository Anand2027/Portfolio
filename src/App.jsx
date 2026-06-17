import { useState, useEffect } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Landing04 from "./components/Landing04";
import Landing05 from "./components/Landing05";
import Landing06 from "./components/Landing06";
import Landing07 from "./components/Landing07";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
// import { BrowserRouter, Routes, Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Address from "./components/Address";
import Final from "./components/Final";
import Certificates from "./components/Certificates";
import ParticlesBackground from "./components/ParticlesBackground";
import Results from "./components/Results";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { Element } from "react-scroll";
import ChatBot from "./components/ChatBot";
import RealtimeChat from "./components/RealtimeChat";
// import Timeline from './components/Timeline';
import AnimatedTimeline from "./components/Timeline";
import Skills from "./components/Skills";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <div
      style={{
        background: toggle ? "#1f2323" : "",
        color: toggle ? "white" : "",
      }}
    >

      
      {/* <ParticlesBackground /> */}
      <BrowserRouter>
        <Final />

        <Navbar toggle={toggle} setToggle={setToggle} />

        <Element name="home">
          <Landing />
        </Element>

        <Element name="projects">
          <Landing04 />
        </Element>

        <Element name="certifications">
          <Certificates />
        </Element>

        <Element name="skills">
          <Skills />
        </Element>

        <Element name="timeline">
          <AnimatedTimeline />
        </Element>

        <Element name="feedbacks">
          <Landing05 />
        </Element>

        <Results />
        
          <AnimatedTimeline />
        

        <Element name="contacts">
          <Landing06 />
        </Element>

        {/* <Routes>
          <Route path="/contacts" element={<Landing06/>} />
        </Routes> */}

        <Address />
        <Landing07 />
        <WhatsAppButton />
        <ScrollToTopButton />
        <ChatBot />
        <RealtimeChat />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
