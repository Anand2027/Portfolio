import React from 'react'
import Frame from "../images/Frame.svg"



import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6"

import { FaHeart } from "react-icons/fa";

const Landing07 = () => {
  return (
    <div className='bg-gray-800 text-white'>
      <div className="upper flex justify-around items-center pt-3">
        <img src={Frame} className='bg-white '></img>

     <div className="middle "> 
     <ul className='flex  '>
            <li  className='p-3 hover:underline '>Home  </li>
            <li  className='p-3 hover:underline '>About Me </li>
            <li  className='p-3 hover:underline '>Portfolio  </li>
            <li  className='p-3 hover:underline '>Contacts  </li>
            <li  className='p-3 hover:underline '>Testimonials</li>
        </ul>
        
     </div>
       
        <ul className='flex'>
            <li  className='p-2 transform transition:transform duration-300 hover:scale-120'><FaFacebook /></li>
            <li  className='p-2 transform transition:transform duration-300 hover:scale-120'><FaInstagramSquare /></li>
            <li  className='p-2 transform transition:transform duration-300 hover:scale-120'><FaTwitter /></li>
            <li  className='p-2 transform transition:transform duration-300 hover:scale-120'><FaLinkedin /></li>
        </ul>
       
      </div>

      <hr className="border-t-2 border-whi my-4" />

      <div className="lower flex flex-row justify-between p-15">
        <div className="upar flex">
        <p>made with </p><span className='p-1'><FaHeart/></span><span>by Anand</span>
        </div>
       

        <ul className='flex'>
          <li className='pr-3 hover:underline '>Privacy Policy</li>
          <li className='pr-3 hover:underline' >Terms of Service</li>
          <li className='pr-3 hover:underline '> Cookies Settings</li>
        </ul>
      </div>
    </div>
  )
}

export default Landing07;

