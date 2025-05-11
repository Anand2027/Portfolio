import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
// -------------------------------
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// ---------------------------------

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Frame from "../images/Frame.svg"



const Navbar = ({toggle , setToggle}) => {

  const [isOpen,setIsOpen] = useState(false);
  

   const data=[
    {list:"Home" , path:"/"},
    {list:"My Projects" , path:"/projects"},
    {list:"Academics / Certificates" , path:"/academics"},
    {list:"Feedbacks" , path:"/feedbacks"},
   ];

  return (

  
      

    <div className='  bg-purple-600 relative w-[100vw]  py-4    '>
      <div className="container flex flex-row items-center justify-evenly">

       <Link to="/">
       <img src={Frame}
       className='bg-white rounded'/>
       </Link>


        {/* Desktop Nav */}
        <nav className={` ${isOpen ? "flex items-center  gap-3 text-white   bg-purple-600 font-bold  p-6 flex-col absolute top-18.5 w-full" : "hidden"} md:flex gap-4 text-white  text-[1.15rem] font-medium`} >
          {
            data.map((link,index) => (
              <Link  key={index} to={link.path}
                             className = {`${isOpen ?  "text-white" : ""} transition duration-500  hover:underline      hover:text-yellow-400 cursor-pointer px-3 `}
                           >
                           {link.list}
                           </Link>
            ))}
        </nav>

       

     {/* HAmburger icon */}
      <button className='  md:hidden text-2xl  text-white' onClick={() => setIsOpen(!isOpen)}>
        {isOpen?<FaTimes /> : <FaBars />}</button>
       
        <Link to="/contacts">       <button className={`hidden bg-white px-4 py-2 rounded-sm 
       
         md:flex transition duration-400 
          ${isOpen ? "text-red-600" : "text-black"}
         hover:scale-103 border-none  `}>
        Contact Me
        </button>
        </Link>


       <div className="p text-4xl ml-20 cursor-pointer text-white"onClick={()=>setToggle(!toggle)}>
       {toggle ? <MdOutlineLightMode/> : <MdDarkMode/>}
       </div>
      </div>
    </div>
    
  )
}

// const containerVariants = {
//   hidden: { opacity: 0, x: -100 }, // start from left
//   visible: {
//     opacity: 1,
//     x: 0, // move to original position
//     transition: { duration: 1, ease: "linear" },
//   },
// };

// const NavbarMotion = () => (
//   <motion.div
//     variants={containerVariants}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: false, amount: 0.2 }}
//   >
//     <Navbar/>
//   </motion.div>
// );

export default Navbar;






