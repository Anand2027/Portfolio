import React from 'react'
// import Frame from "../images/Frame.svg"
import Logo from "../images/2222.png";
import { FaGithub, FaFacebook, FaInstagramSquare, FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Landing07 = () => {
  return (
    <div className='bg-gradient-to-b from-slate-900 via-slate-900 to-black text-slate-300 font-sans border-t border-slate-800/80'>
      
      {/* Increased Padding (py-16) for a taller and spacious upper row */}
      <div className="upper flex flex-col sm:flex-row justify-between items-center max-w-[1140px] mx-auto px-6 py-16 gap-8 sm:gap-0">
        
        {/* Logo Frame Brand Container */}
        <div className="flex items-center justify-center transition-transform duration-300 hover:scale-[1.05]">
          <img src={Logo} alt="Logo" className='bg-white p-1.35 rounded-lg h-11 shadow-lg shadow-white/5' />
        </div>

        {/* Middle Navigation Link Nodes - Increased text to text-base & font-bold */}
        <div className="middle"> 
          <ul className='flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 text-center font-bold text-base tracking-wide text-slate-400'>
            <Link to="/">
              <li className='px-4 py-2 rounded-xl hover:text-white hover:bg-slate-800/60 transition-all duration-200'>Home</li>
            </Link>

            <Link to="/projects">
              <li className='px-4 py-2 rounded-xl hover:text-white hover:bg-slate-800/60 transition-all duration-200'>My Projects</li>
            </Link>

            <Link to="/academics">
              <li className='px-4 py-2 rounded-xl hover:text-white hover:bg-slate-800/60 transition-all duration-200'>Academics</li>
            </Link>

            <Link to="/feedbacks">
              <li className='px-4 py-2 rounded-xl hover:text-white hover:bg-slate-800/60 transition-all duration-200'>Feedbacks</li>
            </Link>
          </ul>
        </div>
        
        {/* Social Media CTA Links Block - Scaled Icons from text-xl to text-2xl */}
        <ul className='flex items-center gap-5'>
          <a href="https://www.facebook.com/share/165ZsHCUBS/" target='_blank' rel="noreferrer">
            <li className='p-2 text-2xl text-slate-400 hover:text-indigo-500 transition-all duration-300 transform hover:scale-115 hover:-translate-y-0.5 cursor-pointer'><FaFacebook /></li>
          </a>
          <a href="https://www.instagram.com/anand_100roop/profilecard/?igsh=MTB5dHJteWdqOXNmag==" target='_blank' rel="noreferrer">
            <li className='p-2 text-2xl text-slate-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-115 hover:-translate-y-0.5 cursor-pointer'><FaInstagramSquare /></li>
          </a>
          <a href="https://github.com/Anand2027" target='_blank' rel="noreferrer">
            <li className='p-2 text-2xl text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-115 hover:-translate-y-0.5 cursor-pointer'><FaGithub /></li>
          </a>
          <a href="https://www.linkedin.com/in/anand-swaroop-gupta-42b72623b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noreferrer">
            <li className='p-2 text-2xl text-slate-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-115 hover:-translate-y-0.5 cursor-pointer'><FaLinkedin /></li>
          </a>
        </ul>
      </div>

      {/* Decorative Premium Border Break Line */}
      <div className="max-w-[1140px] mx-auto px-6">
        <hr className="border-t border-slate-800/70" />
      </div>

      {/* Lower Footer Details - Increased vertical height (py-12) and font to text-sm */}
      <div className="lower flex flex-col-reverse sm:flex-row text-center justify-between items-center max-w-[1140px] mx-auto px-6 py-12 gap-6 sm:gap-0 text-sm font-semibold text-slate-500">
        
        {/* Heart Beat Dev Attribution Node - Enriched layout spacing */}
        <div className="upar flex flex-row gap-2 items-center justify-center text-slate-400 bg-slate-800/40 px-4 py-2 rounded-full border border-slate-800/50 shadow-inner">
          <p>Made with</p>
          <span className="animate-pulse text-red-500 text-base flex items-center justify-center"><FaHeart /></span>
          <p>by <span className="font-extrabold text-slate-200 hover:text-indigo-400 transition-colors duration-200">Anand</span></p>
        </div>
        
        {/* Privacy, Terms and Legals List Links - Text sizes updated to text-sm and tracking-wide */}
        <ul className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-slate-400'>
          <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noreferrer">
            <li className='hover:text-white transition-colors duration-200 hover:underline decoration-slate-600 underline-offset-4'>Privacy Policy</li>
          </a>

          <a href="https://en.wikipedia.org/wiki/Terms_of_service" target="_blank" rel="noreferrer">
            <li className='hover:text-white transition-colors duration-200 hover:underline decoration-slate-600 underline-offset-4'>Terms of Service</li>
          </a>
          
          <a href="https://support.google.com/accounts/answer/61416?hl=en&co=GENIE.Platform%3DDesktop" target="_blank" rel="noreferrer">
            <li className='hover:text-white transition-colors duration-200 hover:underline decoration-slate-600 underline-offset-4'>Cookies Settings</li>
          </a>

          <span className="hidden sm:inline text-slate-800">|</span>

          <a href='https://copyright.gov.in/' target="_blank" rel="noreferrer">
            <li className='hover:text-white transition-colors duration-200 tracking-wide font-bold text-slate-500'>© Copyright Reserved</li>
          </a>
        </ul>

      </div>
    </div>
  )
}

// Sleek Motion Wrapper Configurations
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Landing07Motion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
  >
    <Landing07 />
  </motion.div>
);

export default Landing07Motion;