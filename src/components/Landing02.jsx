import React from 'react'

const Landing02 = ({toggle , setToggle}) => {
  return (
    <div className={`${toggle ? "#1f2323 text-white" : ""}`}>
    <div className={'${toggle ? "bg-black text-white" : "max-w-[93vw]  mt-40 text-center sm:pl-18 sm:text-left"}'}>
      <p className='text-lg font-[550]'>My Skills</p>
      <p className='text-3xl font-bold'>My Expertise</p>
      

    </div>
    </div>
  )
}
export default Landing02
