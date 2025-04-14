import React from 'react'
import photoTwo from "../images/photoTwo.png" // Adjust the path based on the actual location of the image

const Landing03 = () => {
return (
    <div>
        <div className="page3 flex max-w-[93vw] bg-blue- h-screen m-auto md:flex-row">

            <div className="left w-1/2 bg-amber- flex items-center justify-center">
                <img src={photoTwo} className="mt-14 max-w-full h-[400px] transform transition:transform duration-300 hover:scale-105 " alt="Descriptive Alt Text" />
            </div>

            <div className="right w-1/2 bg-amber flex items-center justify-center">
                <p className="text-white text-lg p-16 text-left">
                    <p className='text-black'>About</p>
                    <p className='text-4xl font-[750] text-black mb-[20px]'>About Me</p>
                    <p className='details text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nisi. Facilis tenetur suscipit ea quae ab eveniet. Enim, eligendi autem. Libero beatae maxime velit ipsam molestiae omnis, sapiente esse, assumenda dolorum soluta voluptatem? Explicabo harum eligendi repellendus modi consequatur quos iste corporis est, accusantium alias, aperiam, error earum aliquid veritatis.</p>
                </p>
            </div>

        </div>
    </div>
)
}

export default Landing03
