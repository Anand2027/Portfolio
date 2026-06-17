import React from 'react';
import Cards2Two from './Cards2Two';
import { FiDownload } from "react-icons/fi"; // Using a clean download icon for resume

const Landing04 = () => {
  return (

    

    <div className="w-full py-16 bg-transparent font-sans">
      <div className="w-[92%] max-w-[1140px] mx-auto px-1">
        
        {/* Header Layout Row - Symmetrical on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 text-center md:text-left">
          
          {/* Left Title Block Area */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <span
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "3px",
                textTransform: "uppercase",
                padding: "5px 16px",
                borderRadius: "50px",
                background: "#FCE7F3",
                color: "#DB2777",
                border: "1px solid #FBCFE8",
              }}
            >
              Recent Projects
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
              My{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #DB2777, #EC4899, #F43F5E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Portfolio
              </span>
            </h1>
          </div>

          {/* Right Action Button Block - Full Clickable Wrapper */}
          <div className="flex items-center justify-center">
            <a 
              href="#" // Put your drive or resume asset link here
              target='_blank' 
              rel="noreferrer"
              className="inline-block"
            >
              <button className='flex items-center gap-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.04] shadow-md shadow-pink-500/20 active:scale-[0.98]'>
                <FiDownload size={16} className="animate-bounce" />
                <span>Download My Resume</span>
              </button>
            </a>
          </div>

        </div>

        {/* Dynamic Cards View Grid Component */}
        <div className="w-full pt-4">
          <Cards2Two />
        </div>
        
      </div>
    </div>
  )
}

export default Landing04;