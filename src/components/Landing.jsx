import React from 'react'
import HighlightText from '../Reuse/HighlightText'
import Button from '../Reuse/Button'
import anand from "../images/anand.png"
const Landing = () => {
  return (
    <div>
      <div className="body flex justify-center items-center flex-row h-screen max-w-[93vw] m-auto">

        <div className="left w-1/2 flex gap-3 flex-col bg-green- h-screen pt-32">
             <div className="name  text-lg font-[550]">Hey , I am Anand</div>
             <div className="content text-3xl font-bold ">
               I create  <HighlightText text="product design"/> <br/> and brand experience
             </div>
             <div className="">Lorem anand ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus numquam facere deleniti animi exercitationem dignissimos adipisci cupiditate odit, la.</div>
             <div className="btn mt-5">
                <Button text="Get in Touch"/>
             </div>
        </div>

        <div className="right  w-1/2  h-screen">
        <img src={anand} className='mt-14' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Landing
