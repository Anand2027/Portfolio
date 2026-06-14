import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Data = [
  {
    title: "CBSE 2018-2020",
    description: "CBSE CLASS 10 RESULT",
    button: "Download ->",
    link: "//drive.google.com/file/d/1-L2PihDq2oUIo4M9fGdtB-KRT9Sora_V/view?usp=drive_link",
    dc: "#4F46E5",
    lbg: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
    lb: "#C7D2FE",
    dt: "#3730A3"
  },
  {
    title: "CBSE 2020-2022",
    description: "CBSE CLASS 12 RESULT",
    button: "Download ->",
    link: "//drive.google.com/file/d/1hE_-wcuNdT_7XWnIx8oTPuSUCxN5GBzy/view?usp=drive_link",
    dc: "#9333EA",
    lbg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    lb: "#DDD6FE",
    dt: "#6B21A8"
  },
  {
    title: "B.Tech SEM I",
    description: "AKTU B.TECH SEM I RESULT",
    button: "Download ->",
    link: "https://drive.google.com/file/d/1eZmblPMFmBHZe06MDb29fth9gbWIyqZN/view?usp=drive_link",
    dc: "#DB2777",
    lbg: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
    lb: "#FBCFE8",
    dt: "#9D174D"
  },
  {
    title: "B.Tech SEM II",
    description: "AKTU B.TECH SEM II RESULT",
    button: "Download ->",
    link: "https://drive.google.com/file/d/1pMLl08v0ApIJIEhdJRfA3r4u-pEWJjqq/view?usp=drive_link",
    dc: "#EA580C",
    lbg: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
    lb: "#FED7AA",
    dt: "#9A3412"
  },
];

// Custom Arrows with proper visibility overrides
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        background: "#4F46E5", // Visible high contrast theme color
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        boxShadow: "0 4px 15px rgba(79, 70, 229, 0.3)",
        zIndex: 20,
        left: "-25px",
      }}
      onClick={onClick}
    >
      <span style={{ color: "#fff", fontWeight: "900", fontSize: "16px" }}>‹</span>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        background: "#4F46E5", // Visible high contrast theme color
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        boxShadow: "0 4px 15px rgba(79, 70, 229, 0.3)",
        zIndex: 20,
        right: "-25px",
      }}
      onClick={onClick}
    >
      <span style={{ color: "#fff", fontWeight: "900", fontSize: "16px" }}>›</span>
    </button>
  );
};

const Results = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Header Styled Exactly Like Timeline Section */}
      <div className="max-w-[850px] mx-auto px-4 mb-12 text-center">
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "6px 20px",
            borderRadius: "50px",
            background: "#E0E7FF",
            color: "#4F46E5",
            border: "1px solid #C7D2FE",
            marginBottom: "1rem",
          }}
        >
          Performance
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Academic{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4F46E5, #7C3AED, #DB2777)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Results
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-500 font-semibold mt-1">
          Official semester transcripts and scorecard records
        </p>
      </div>

      {/* Main Slider Container (Slightly larger width to let bigger cards look fantastic) */}
      <div className="w-[88%] max-w-[880px] mx-auto relative px-2">
        <Slider {...settings}>
          {Data.map((certi, index) => (
            <div className="p-4" key={index}>
              <div 
                className="rounded-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden relative group"
                style={{
                  background: certi.lbg,
                  border: `2.5px solid ${certi.lb}`,
                  boxShadow: `0 14px 30px -8px ${certi.dc}25`,
                  minHeight: "290px" // Cards size increased for a premium look
                }}
              >
                {/* Decorative Abstract Accent Block inside card to remove emptiness */}
                <div 
                  className="absolute right-[-20px] top-[-20px] w-24 height-24 rounded-full opacity-10 pointer-events-none"
                  style={{ backgroundColor: certi.dc, width: "100px", height: "100px" }}
                />

                {/* Upper Content Area */}
                <div className="p-6 relative z-10">
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    {/* Ring Node matching timeline */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "6px" }}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: certi.dc,
                          boxShadow: `0 0 0 4px ${certi.dc}20`,
                        }}
                      />
                    </div>
                    
                    <div>
                      <span 
                        className="inline-block font-extrabold text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-md mb-3" 
                        style={{ color: certi.dt, background: "rgba(255,255,255,0.5)", border: `1px solid ${certi.lb}` }}
                      >
                        {certi.title}
                      </span>
                      <h3 className="font-black text-xl leading-snug tracking-tight text-slate-900 mt-1">
                        {certi.description}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button Layout */}
                <div className="p-6 pt-0 mt-auto relative z-10">
                  <a href={certi.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button
                      className="w-full font-extrabold text-xs tracking-wider uppercase py-3 px-4 rounded-xl transition-all duration-300 shadow-sm"
                      style={{
                        background: "#ffffff",
                        color: certi.dt,
                        border: `1.5px solid ${certi.lb}`,
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = certi.dc;
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.borderColor = certi.dc;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "#ffffff";
                        e.currentTarget.style.color = certi.dt;
                        e.currentTarget.style.borderColor = certi.lb;
                      }}
                    >
                      {certi.button}
                    </button>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* CSS Overrides to fix slick defaults and native button icon hiding */}
      <style>{`
        /* Fix slick arrow default blank content hiding our text arrows */
        .slick-prev:before, .slick-next:before {
          display: none !important;
        }
        .slick-prev, .slick-next {
          width: 40px !important;
          height: 40px !important;
        }
        .slick-dots li button:before {
          color: #64748b !important;
          font-size: 8px !important;
          opacity: 0.25 !important;
        }
        .slick-dots li.slick-active button:before {
          color: #4F46E5 !important;
          opacity: 1 !important;
          font-size: 10px !important;
        }
        .slick-dots {
          bottom: -35px !important;
        }
      `}</style>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ResultsWithMotion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    <Results />
  </motion.div>
);

export default ResultsWithMotion;