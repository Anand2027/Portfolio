import React from 'react'

import Frame from "../images/Frame.svg"

const Navbar = () => {
  return (
    <div className='flex sm:flex-row flex-col items-center justify-between px-6 py-3 bg-purple-600 sticky top-0 z-10 rounded-sm'>
      <img src={Frame}
      className='bg-white rounded-sm'/>
      <ul className='sm:flex flex-row hidden gap-10 text-white font-bold cursor-pointer '>
        <li>Home</li>
        <li>Portfolio</li>
        <li>About Me</li>
        <li>Testimonials</li>
      </ul>

      <button className='bg-white px-4 py-2 rounded-sm hidden sm:flex transition duration-300 hover:scale-103 border-none'>Contact Me</button>
    </div>
  )
}

export default Navbar
