import React from "react";
import cardDataAgain from "./Card_detail02";
import { FaCircleArrowRight } from "react-icons/fa6";

const Card = ({ title, description, image, dribble, link }) => (
  // Fixed tracking, layout margins, and added clean hover lift effects
  <div className="bg-white shadow-xl hover:shadow-2xl rounded-3xl p-3 w-full max-w-[340px] flex flex-col justify-between transform transition-all duration-300 hover:scale-[1.03] border border-slate-100 group">
    
    <div>
      {/* Top Banner Image Cover Frame */}
      <div className="w-full h-[210px] overflow-hidden rounded-2xl bg-slate-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content Space Nodes */}
      <div className="px-2 pt-5 pb-2">
        <h2 className="text-xl font-black text-slate-800 tracking-tight mb-2 text-left">{title}</h2>
        <p className="text-sm font-semibold text-slate-500 leading-relaxed tracking-tight text-left">
          {description}
        </p>
      </div>
    </div>

    {/* Bottom Interactive Link CTA Row - Unified under a single anchor tag */}
    <div className="px-2 pt-2 pb-1">
      <a 
        href={link} 
        target="_blank" 
        rel="noreferrer" 
        className="inline-flex items-center gap-2 text-slate-900 font-extrabold text-sm tracking-wide group/link cursor-pointer"
      >
        <span className="group-hover/link:text-pink-600 transition-colors duration-200 border-b-2 border-transparent group-hover/link:border-pink-500 pb-0.5">
          {dribble || "View Live Project"}
        </span>
        <FaCircleArrowRight 
          size={16} 
          className="text-slate-800 group-hover/link:text-pink-600 transform group-hover/link:translate-x-1 transition-all duration-200" 
        />
      </a>
    </div>
 
  </div>
);

const Cards2Two = () => {
  return (
    <div className="w-full py-6 bg-transparent">
      {/* Dynamic elastic container layout alignment matching upper portfolio elements */}
      <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-10 max-w-[1240px] mx-auto px-4">
        {cardDataAgain.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            dribble={card.dribble}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards2Two;