import React from 'react';
import Cards2Two from './Cards2Two';
import { FaEarthAfrica } from "react-icons/fa6";
// import Button from '../Reuse/Button';


const Landing04 = () => {
  return (
    <div>
      <div className="container max-w-[93vw] m-auto">
        <div className="first flex flex-row justify-between pr-[30px] pl-[30px]">
            <div className="left">
            <p className='text-2xl font-medium'>Recent Projects</p>
            <h1 className='text-4xl font-[750]'>My Portfolio</h1>
            </div>

            <div className="right ">
                <button className='flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 cursor-pointer  transition-all ease-in-out duration-500 hover:scale-110 pr-[20px]'>
                <FaEarthAfrica className=' transition-all ease-in-out duration-500 hover:scale-110 '/>
                <p className='font-[400] text-[15px] '>Visit My Dribble</p>
                </button>
                 
            </div>
           

        </div>

        <div className="second pt-[60px]"><Cards2Two/></div>
      </div>
    </div>
  )
}

export default Landing04
