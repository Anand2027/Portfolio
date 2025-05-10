import React from 'react';
import HighlightText from '../Reuse/HighlightText';
import Button from '../Reuse/Button';
// import anand from "../images/mypicinsta-removebg-preview.png";
import anand from "../images/anand.png"
import { motion } from 'framer-motion';



const Landing = ({toggle , setToggle}) => {
  return (
    <div className={`${toggle ? "bg-[#1f2323] text-white" : ""}`}>
      <div className={`body flex  justify-center  items-center flex-col md:flex-row  max-w-[93vw] m-auto`}>
        <div className="left p-4  w-full md:w-1/2 flex gap-3 flex-col bg-gree-500  pt-32">
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

        <div className="right  w-full md:w-1/2  overflow-hidden bg-cover ">
          <img src={anand} className="mt-14 " alt="Anand's profile" />
        </div>
      </div>

  
    </div>
  );
};

// export default Landing;



const containerVariants = {
  hidden: { opacity: 0, x: -100 }, // start from left
  visible: {
    opacity: 1,
    x: 0, // move to original position
    transition: { duration: 0.5, ease: "linear" },
  },
};

const LandingMotion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
  >
    <Landing />
  </motion.div>
);

export default LandingMotion;
