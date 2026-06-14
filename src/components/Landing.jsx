import React from 'react';
import HighlightText from '../Reuse/HighlightText';
import Button from '../Reuse/Button';
import anand from "../images/anand.png"
import { motion } from 'framer-motion';
import Landing03 from './Landing03';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="w-full min-h-[90vh] flex items-center bg-transparent py-10 md:py-16 font-sans">
      <div className="w-[94%] max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
        
        {/* Left Side Content - Perfectly proportioned space */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start text-left space-y-6 sm:space-y-7 z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
            Welcome to my space
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-500 tracking-tight">
            Hey, I am <span className="text-slate-900 font-black">Anand</span>
          </h3>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] sm:leading-none">
            I am a <HighlightText text="Full Stack Developer" /> <br className="hidden sm:inline" /> and create Websites
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed max-w-xl tracking-tight pt-1">
            I’m a passionate Full Stack Developer specializing in building responsive, accessible, and performance-optimized web interfaces using modern technologies like the <span className="text-indigo-600 font-bold">MERN Stack</span>. With a blend of creativity and technical skill, I turn design concepts into functional, interactive websites that users love.
          </p>

          <div className="pt-4 transition-transform duration-200 ease-out hover:scale-[1.03]">
            <Link to="/contacts" className="inline-block">
              <Button text="Get in Touch" />
            </Link>
          </div>
        </div>
        
        {/* Right Side Content - Enriched & Enlarged Frame Layout for Pic */}
        <div className="w-full md:w-[48%] flex justify-center md:justify-end items-center relative">
          
          {/* Subtle design element to give depth behind the big picture */}
          <div className="absolute -left-6 -top-6 w-32 h-32 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none hidden md:block" />
          <div className="absolute -right-6 -bottom-6 w-44 h-44 bg-pink-100/40 rounded-full blur-3xl pointer-events-none hidden md:block" />

          <div className="relative w-full max-w-[520px] rounded-[2.5rem] overflow-hidden bg-gradient-to-tr from-slate-100/80 via-indigo-50/20 to-white p-3 border-2 border-slate-100 shadow-2xl shadow-slate-300/60 group">
            <img 
              src={anand} 
              className="w-full h-auto object-cover rounded-[1.8rem] transform group-hover:scale-[1.015] transition-transform duration-500 ease-out" 
              alt="Anand's prominent portrait layout" 
            />
            
            {/* Subtle decorative edge gradient border lines */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/60 pointer-events-none" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

// Symmetrical Premium Motion Controller Configs
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
};

const LandingMotion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
  >
    <Landing />
    <Landing03 />
  </motion.div>
);

export default LandingMotion;