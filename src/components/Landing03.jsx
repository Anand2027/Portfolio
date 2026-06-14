import React from 'react';
import photoTwo from "../images/photoTwo.png"; // Adjust the path based on the actual location of the image

const Landing03 = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-transparent font-sans">
      <div className="w-[92%] max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Side Content - Fixed Photo Container */}
        <div className="w-full md:w-[46%] flex justify-center items-center order-2 md:order-1">
          <div className="relative w-full max-w-[480px] rounded-[2rem] overflow-hidden bg-gradient-to-tr from-slate-100 to-indigo-50/20 p-2.5 border border-slate-200/60 shadow-xl shadow-slate-200/40 group">
            <img 
              src={photoTwo} 
              alt='About Me profile illustration'
              // Changed object-cover to object-contain and removed forced max-height to stop image cropping
              className='w-full h-auto object-contain rounded-[1.5rem] transform group-hover:scale-[1.015] transition-transform duration-500 ease-out mx-auto'
            />
          </div>
        </div>

        {/* Right Side Content - Aligned typography matching the testimonial grids */}
        <div className="w-full md:w-[54%] flex flex-col justify-center items-center md:items-start order-1 md:order-2 space-y-4 sm:space-y-5 text-center md:text-left">
          
          {/* Section Indicator Pill */}
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "5px 16px",
              borderRadius: "50px",
              background: "#F3E8FF",
              color: "#9333EA",
              border: "1px solid #E9D5FF",
            }}
          >
            My Story
          </span>

          {/* Clean Big Heading Title */}
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            About{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #9333EA, #A855F7, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h2>
          
          {/* Beautiful and Clear Description Text Frame */}
          <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed max-w-xl tracking-tight pt-1">
            Full Stack Developer skilled in <span className="text-purple-700 font-bold">React.js, Node.js, Express.js, and MongoDB</span>, with experience building responsive web applications and RESTful APIs. Proficient in developing scalable solutions, integrating AI-powered features, and writing clean, maintainable code.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Landing03;