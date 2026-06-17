import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link as ScrollLink } from 'react-scroll';
// import Logo from "../images/navbarLogo.png";
import Logo from "../images/2222.png";
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { list: "Home", to: "home" },
    { list: "My Projects", to: "projects" },
    { list: "Certifications", to: "certifications" },
    { list: "Skills", to: "skills" },
    { list: "Feedbacks", to: "feedbacks" },
    { list: "Timeline", to: "timeline" },

  ];

  return (
    <div className="w-full bg-purple-700 sticky top-0 z-50 shadow-xl border-b border-purple-600 font-sans">

      <div className="w-[92%] max-w-[1280px] mx-auto py-5 flex items-center justify-between">

        {/* Logo */}
        <ScrollLink to="home" smooth={true} duration={700} offset={-70}>
           <img src={Logo} alt="Logo" className='bg-white p-1.45 rounded-lg h-11 shadow-lg shadow-white/5' />
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-white font-extrabold text-lg tracking-tight">
          {data.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-70}
              activeClass="text-yellow-400 font-black scale-105"
              spy={true}
              className="cursor-pointer px-4 py-2.5 rounded-xl text-purple-100 hover:text-white hover:bg-purple-600 transition-all duration-300"
            >
              {link.list}
            </ScrollLink>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center">
          <ScrollLink to="contacts" smooth={true} duration={700} offset={-70}>
            <button className="bg-white px-6 py-3 rounded-xl text-purple-700 font-black text-sm uppercase tracking-widest hover:bg-purple-50 active:scale-95 shadow-lg shadow-purple-900/30 transition-all duration-200 cursor-pointer">
              Contact Me
            </button>
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            className="text-2xl text-white focus:outline-none p-1.5 bg-purple-600 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[90%] left-1/2 -translate-x-1/2 w-[92%] bg-purple-800 border border-purple-600 rounded-3xl shadow-2xl shadow-purple-950/50 transition-all duration-300 ease-out md:hidden overflow-hidden ${
          isOpen
            ? "opacity-100 translate-y-3 visible pointer-events-auto"
            : "opacity-0 translate-y-0 invisible pointer-events-none"
        }`}
      >
        <div className="p-6 flex flex-col gap-4 font-black text-xl tracking-wide text-purple-100">
          {data.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-70}
              activeClass="bg-purple-900 text-yellow-400 pl-4 border-l-4 border-yellow-400"
              spy={true}
              className="cursor-pointer py-3.5 px-4 rounded-2xl hover:bg-purple-700 hover:text-white transition-all duration-200 block text-left"
              onClick={() => setIsOpen(false)}
            >
              {link.list}
            </ScrollLink>
          ))}

          <div className="h-[2px] bg-purple-700/60 my-2" />

          <ScrollLink
            to="contacts"
            smooth={true}
            duration={700}
            offset={-70}
            onClick={() => setIsOpen(false)}
          >
            <button className="w-full bg-white text-purple-800 font-black uppercase text-sm tracking-widest py-4 rounded-2xl transition active:scale-[0.98] shadow-md">
              Contact Me
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;