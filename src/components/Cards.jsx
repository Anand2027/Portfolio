import React from "react";
import cardData from "./Card_deatail";

const Card = ({ title, description, image, toggle }) => (
  // Fixed invalid bg-blue-70 class and added elegant fallback dark/light borders
  <div className={`shadow-xl rounded-[1.8rem] p-6 w-full max-w-[290px] flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 border ${
    toggle 
      ? "bg-white border-slate-100 shadow-slate-200/60" 
      : "bg-slate-900/60 border-slate-800/80 shadow-black/20 text-slate-200"
  }`}>
    
    {/* Clean Image Circle Frame */}
    <div className={`p-3 rounded-2xl mb-5 transition-transform duration-300 ${
      toggle ? "bg-slate-50" : "bg-slate-800/50"
    }`}>
      <img
        src={image}
        alt={title}
        className="w-[70px] h-[70px] object-contain rounded-xl"
      />
    </div>
    
    {/* Text Layout Block */}
    <h2 className="text-xl font-black tracking-tight mb-2">{title}</h2>
    
    <p className={`text-sm font-semibold leading-relaxed tracking-tight ${
      toggle ? "text-slate-600" : "text-slate-400"
    }`}>
      {description}
    </p>
  </div>
);

const Cards = ({ toggle, setToggle }) => {
  return (
    <div className="w-full py-12 bg-transparent">
      {/* Optimized flex wrap grid alignment with symmetric responsive spacing */}
      <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-10 max-w-[1240px] mx-auto px-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            toggle={toggle} // Fixed missing prop passing inside map block
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;