import React from 'react';
import HighlightText from '../Reuse/HighlightText';
import Button from '../Reuse/Button';
// import anand from "../images/mypicinsta-removebg-preview.png";
import anand from "../images/anand.png"

const Landing = ({toggle , setToggle}) => {
  return (
    <div className={`${toggle ? "#1f2323 text-white" : ""}`}>
      <div className={`body flex  justify-center  items-center flex-col md:flex-row h-screen max-w-[93vw] m-auto`}>
        <div className="left p-4  w-full md:w-1/2 flex gap-3 flex-col bg-gree-500 h-screen pt-32">
          <div className="name text-lg font-[750]">Hey, I am Anand</div>
          <div className="content text-3xl font-bold">
            I create <HighlightText text="product design" /> <br /> and brand experience
          </div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus numquam facere deleniti animi exercitationem dignissimos adipisci cupiditate odit, la.
          </div>
          <div className="btn mt-5">
            <Button text="Get in Touch" />
          </div>
        </div>

        <div className="right  w-full md:w-1/2 h-screen overflow-hidden bg-cover ">
          <img src={anand} className="mt-14 " alt="Anand's profile" />
        </div>
      </div>

  
    </div>
  );
};

export default Landing;
