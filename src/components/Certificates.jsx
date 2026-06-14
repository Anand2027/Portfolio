import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiExternalLink } from 'react-icons/fi';

import one from "../components/pdf/infosys01.png";
import two from "../components/pdf/youtube01.png";
import three from "../components/pdf/infosys02.png";

const Data = [
  {
    title: "Machine Learning",
    description: "Completed a Machine Learning certification program, gaining hands-on experience in data preprocessing, model training, evaluation techniques, and predictive analytics using real-world datasets.",
    image: one,
    link: "https://drive.google.com/file/d/1BxXSKDW5oeHCOftg8aaZpo5Wyfg7adSK/view?usp=drivesdk"
  },
  {
    title: "HTML/CSS",
    description: "Completed an HTML & CSS certification, gaining strong knowledge of web page structure, responsive layouts, styling techniques, and modern user interface design.",
    image: two,
    link: "https://drive.google.com/file/d/1JZbeWvyc1kMh_vUBSmE94JiTf7smNbQp/view?usp=sharing"
  },
  {
    title: "Python Programming",
    description: "Completed a Python Programming certification, gaining knowledge of core Python concepts, object-oriented programming, data structures, and problem-solving techniques.",
    image: three,
    link: "https://drive.google.com/file/d/1C-7prd-RhwQ9MbJldhtmNJ5iMKh_JYS4/view?usp=drivesdk"
  },
];

const Certificates = () => {
  return (
    <div className="py-16 bg-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Centered & Enlarged Main Heading Section */}
      <div className="max-w-[1100px] mx-auto px-4 mb-12 text-center flex flex-col items-center justify-center">
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "6px 18px",
            borderRadius: "50px",
            background: "#E0E7FF",
            color: "#4F46E5",
            border: "1px solid #C7D2FE",
            marginBottom: "1.25rem",
          }}
        >
          Credentials
        </span>
        
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-center leading-tight max-w-2xl">
          Certificates &{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4F46E5, #7C3AED, #DB2777)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Achievements
          </span>
        </h2>
        
        <p className="text-sm sm:text-base text-slate-500 font-semibold mt-3 text-center max-w-xl leading-relaxed">
          Validated milestones and academic credentials earned through formal technical training
        </p>
      </div>

      {/* Main Structural 3-Column Grid Area */}
      <div className="w-[92%] max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-1">
        {Data.map((certi, index) => (
          <div className="p-1.5" key={index}>
            <div 
              className="rounded-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden relative group"
              style={{
                background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
                border: "2px solid #E2E8F0",
                boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.04)"
              }}
            >
              {/* Top Media Block with Slate Borders */}
              <div className="p-4 pb-0 relative">
                <div className="rounded-xl overflow-hidden relative border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <img 
                    src={certi.image}
                    alt={certi.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating badge overlay node */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-indigo-600 border border-slate-100">
                    <FiAward size={14} />
                  </div>
                </div>
              </div>

              {/* Title Header Block Area - Changed to text-center */}
              <div className="p-5 pb-3 relative z-10 text-center">
                <h3 className="text-center font-black text-slate-900 text-base tracking-tight mb-1 inline-block">
                  {certi.title}
                </h3>
              </div>

              {/* Lower Content Wrapper - Beautiful Indigo/Slate Tint Accent with Centered Description */}
              <div 
                className="p-5 pt-4 flex flex-col bg-gradient-to-b from-indigo-50/40 via-slate-50/60 to-slate-50/90"
                style={{ borderTop: "1.5px solid #E2E8F0" }}
              >
                {/* Changed text-left to text-center */}
                <p className="text-center font-semibold text-slate-600 text-xs sm:text-sm leading-relaxed tracking-tight min-h-[72px] line-clamp-4">
                  "{certi.description}"
                </p>

                {/* Symmetrical Inline Download CTA Block */}
                <div className="mt-4 pt-3.5 border-t border-slate-200/60">
                  <a 
                    href={certi.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 border border-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform duration-200 ease-out hover:scale-[1.03] shadow-md shadow-indigo-600/10"
                  >
                    <FiDownload size={13} />
                    Verify Document
                    <FiExternalLink size={11} className="opacity-80 ml-0.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Layout Motion Wrapping Configurations
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const CertificatesWithMotion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12 }}
  >
    <Certificates />
  </motion.div>
);

export default CertificatesWithMotion;