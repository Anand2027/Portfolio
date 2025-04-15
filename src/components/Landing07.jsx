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
      <div className="upper flex justify-around flex-col sm:flex-row items-center pt-3">
        <img src={Frame} className='bg-white rounded-sm '></img>

     <div className="middle "> 
     <ul className='flex max-[400px]:flex-col text-center gap-2 sm:gap-0 mt-5 mb-3 flex-row'>
            <li  className='sm:p-3 p-0 hover:underline '>Home  </li>
            <li  className='sm:p-3 p-0 hover:underline '>About Me </li>
            <li  className='sm:p-3 p-0 hover:underline '>Portfolio  </li>
            <li  className='sm:p-3 p-0 hover:underline '>Contacts  </li>
            <li  className='sm:p-3 p-0 hover:underline '>Testimonials</li>
        </ul>
        
     </div>
       
        <ul className='flex'>
            <li  className='p-2 transform transition:transform duration-300 hover:scale-120'><FaFacebook /></li>
            <a href="">
            <li  className='p-2 transform transition:transform duration-300 hover:scale-120'><FaInstagramSquare /></li>
            </a>
            <li  className='p-2 transform transition:transform duration-300 hover:scale-120'><FaTwitter /></li>
            <li  className='p-2 transform transition:transform duration-300 hover:scale-120'><FaLinkedin /></li>
        </ul>
       
      </div>

      <hr className="border-t-2 border-whi my-4" />

      <div className="lower flex sm:flex-row flex-col text-center justify-between p-15">
        <div className="upar flex flex-row gap-2  items-center justify-center pb-5">
        <p>made with </p><span className="pt-2"><FaHeart/></span><span>by Anand</span>
        </div>
       

        <ul className='flex flex-col gap-2 sm:flex-row'>
          <li className='pr-3 hover:underline '>Privacy Policy</li>
          <li className='pr-3 hover:underline' >Terms of Service</li>
          <li className='pr-3 hover:underline '> Cookies Settings</li>
        </ul>
      </div>
    </div>
  )
}

export default Landing07;

