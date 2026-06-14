import React from 'react';
import card_new from './card_detail03';
import Avatar from "../images/Avatar.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ logo, kuchh, Name }) => (
  <div className="p-2.5"> {/* Optimized padding for 4-card grid layout */}
    <div 
      className="rounded-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden relative group"
      style={{
        background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
        border: "2px solid #E2E8F0",
        boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.04)",
        minHeight: "250px" // Uniform height across all 4 tracks
      }}
    >
      {/* Decorative accent element */}
      <div className="absolute right-[-15px] top-[-15px] w-16 h-16 bg-indigo-500/5 rounded-full pointer-events-none" />

      <div className="p-5 relative z-10">
        {/* Five Star Dynamic Logo Row */}
        <div className="flex gap-0.5 text-amber-500 text-xs mb-3 tracking-wide group-hover:scale-105 transition-transform duration-300 origin-left">
          {logo} {logo} {logo} {logo} {logo}
        </div>

        {/* Client Review Text Content */}
        <p className="text-left font-semibold text-slate-700 text-xs sm:text-sm leading-relaxed tracking-tight italic line-clamp-5">
          "{kuchh}"
        </p>
      </div>

      {/* User Information Profile Footer */}
      <div 
        className="p-3.5 px-5 mt-auto flex items-center gap-2.5 bg-white"
        style={{ borderTop: "1.5px solid #E2E8F0" }}
      >
        <div className="relative flex-shrink-0">
          <img 
            src={Avatar} 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500/20 bg-slate-100" 
          />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-white" />
        </div>
        
        <div className="text-left min-w-0">
          <div className="text-slate-900 font-extrabold text-xs tracking-tight truncate">{Name}</div>
          <div className="text-indigo-600 font-bold text-[9px] uppercase tracking-wider truncate">Verified Client</div>
        </div>
      </div>
    </div>
  </div>
);

// High Visibility Navigation Controls
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
        background: "#4F46E5",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        boxShadow: "0 4px 12px rgba(79, 70, 229, 0.25)",
        zIndex: 20,
        left: "-18px",
      }}
      onClick={onClick}
    >
      <span style={{ color: "#fff", fontWeight: "900", fontSize: "14px" }}>‹</span>
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
        background: "#4F46E5",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        boxShadow: "0 4px 12px rgba(79, 70, 229, 0.25)",
        zIndex: 20,
        right: "-18px",
      }}
      onClick={onClick}
    >
      <span style={{ color: "#fff", fontWeight: "900", fontSize: "14px" }}>›</span>
    </button>
  );
};

const Cards3Three = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Locked to 4 items simultaneously on desktop viewports
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ],
  };

  return (
    <div className="py-16 bg-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Header Styled Uniformly */}
      <div className="max-w-[1100px] mx-auto px-4 mb-10 text-center">
        <span
          style={{
            display: "inline-block",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "5px 16px",
            borderRadius: "50px",
            background: "#E0E7FF",
            color: "#4F46E5",
            border: "1px solid #C7D2FE",
            marginBottom: "1rem",
          }}
        >
          Endorsements
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Client{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4F46E5, #7C3AED, #DB2777)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Reviews
          </span>
        </h2>
        <p className="text-sm text-slate-500 font-semibold mt-1">
          Feedback and collaborative testimonials from recent project creators
        </p>
      </div>

      {/* Main Managed Slider Section Container (Expanded max-width to host 4 grids cleanly) */}
      <div className="w-[92%] max-w-[1140px] mx-auto relative px-1">
        <Slider {...settings}>
          {card_new.map((cardss, index) => (
            <Card
              key={index}
              logo={cardss.logo}
              kuchh={cardss.kuchh}
              photo={cardss.photo}
              Name={cardss.Name}
            />
          ))}
        </Slider>
      </div>

      {/* Native Slick Slider Overwrite Rules CSS */}
      <style>{`
        .slick-prev:before, .slick-next:before {
          display: none !important;
        }
        .slick-prev, .slick-next {
          width: 36px !important;
          height: 36px !important;
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

export default Cards3Three;