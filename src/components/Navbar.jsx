

// -------------------------------
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from './Landing'
import Landing04 from './Landing04'
import Landing05 from './Landing05'
import Landing07 from './Landing07';

// ---------------------------------

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Frame from "../images/Frame.svg"
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";
import Landing06 from './Landing06';

const Navbar = ({toggle , setToggle}) => {

  const [isOpen,setIsOpen] = useState(false);
  

   const data=[
    {list:"Home" , path:"/"},
    {list:"Portfolio" , path:"/portfolio"},
    {list:"Sevices" , path:"/services"},
    {list:"Contacts" , path:"/contacts"},
   ];

  return (

  
      

    <div className='  bg-purple-600 relative w-[100vw]  py-4 b-20 flex items-center  '>
      <div className="container flex flex-row items-center justify-evenly">

       <img src={Frame}
       className='bg-white rounded'/>



        {/* Desktop Nav */}
        <nav className={` ${isOpen ? "flex items-center  gap-3 text-white   bg-purple-600 font-bold  p-6 flex-col absolute top-18.5 w-full" : "hidden"} md:flex gap-10 text-white  text-[1.15rem] font-medium`} >
          {
            data.map((link,index) => (
              <Link  key={index} to={link.path}
                             className = {`${isOpen ?  "text-white" : ""} transition duration-500       hover:text-yellow-400 cursor-pointer `}
                           >
                           {link.list}
                           </Link>
            ))}
        </nav>

       

     {/* HAmburger icon */}
      <button className='  md:hidden  text-2xl  text-white' onClick={() => setIsOpen(!isOpen)}>
        {isOpen?<FaTimes /> : <FaBars />}</button>
       

       <button className={`hidden bg-white px-4 py-2 rounded-sm 
       
         md:flex transition duration-400 
          ${isOpen ? "text-red-600" : "text-black"}
         hover:scale-103 border-none  `}>
        Contact Me
        </button>

       <div className="p text-4xl ml-20 cursor-pointer text-white"onClick={()=>setToggle(!toggle)}>
       {toggle ? <BsToggle2On/>:  <BsToggle2Off/> }
       </div>
      </div>
    </div>
    
  )
}

export default Navbar





