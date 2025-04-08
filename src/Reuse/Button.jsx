import React from 'react'

const Button = ({text}) => {
  return (
    <div className='bg-[#5E3BEE] hover:scale-105 transition-all ease-in-out 2s cursor-pointer text-white flex text-md justify-center items-center text-md rounded-sm w-[130px] h-[40px]'>
      {text}
    </div>
  )
}

export default Button
