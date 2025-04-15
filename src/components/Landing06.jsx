import React from 'react'

const Landing06 = () => {
  return (
    <div className='text-center items-center'>
      <div className="upper text-center items-center pt-[40px]">
        <p className="font-[500]">Get In Touch</p>
        <h1 className='text-3xl font-[650]'>Contact Me</h1>
        <p className=' max-[400px]:p-5 font-[500]'>Lorem ipsum dolor sit amet conas, aedit nostrum optio quia aperiam id? Illum!</p>
      </div>


      <div className="lower ">
        {/* <label for="fname">First Name:  </label>
         <span className='border-2 border-blue-600'><input type="text" id="fname" nane="firstname" placeholder='  enter first name' required></input></span> */}





    <div className="  bg-white flex items-center justify-center p-4 mb-10">
      <form className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl border-1 border-blue-500 rounded0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className=" flex text-xs mb-1">First name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full p-2 border-1 border-blue-500 rounded text-sm"
            />
          </div>
          <div>
            <label className="flex text-xs mb-1 ">Last name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full p-1 border-1 border-blue-500 rounded text-sm"
            />
          </div>
          <div>
            <label className="flex text-xs mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-1 border-1 border-blue-500 rounded text-sm"
            />
          </div>
          <div>
            <label className="flex text-xs mb-1 ">Phone number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full p-1 border-1 border-blue-500 rounded text-sm"
            />
          </div>
          <div className="md:col-span-2">
            <label className="flex text-xs mb-1">Choose a topic</label>
            <select className="w-full p-2 border-1 border-blue-500 rounded text-sm">
              <option value="">Select one...</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="flex text-xs mb-1 ">Message</label>
            <textarea
              placeholder="Type your message..."
              rows="4"
              className="w-full p-2 border-1 border-blue-500 rounded text-sm"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm">
            I accept the terms
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  










         </div>
            
    </div>
  )
}

export default Landing06
