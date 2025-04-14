import card_new from './card_detail03';
import React from 'react'


const Card = ({logo,kuchh,photo,Name})=>(

    <div className="bg-amber-50-100 shadow-2xl rounded-xl p-1  w-80 text-center pt-[20px] items-centre transform transition-transform duration-300 hover:scale-105 border border-green border-solid ">
        <p className="logo pl-5 flex flex-row pt-2 pb-4">{(logo)} {(logo)} {(logo)} {(logo)} {(logo)}</p>
        <h1 className='text-left pl-3'>{kuchh}</h1>
        <div className="shivang flex ">
        <img src={photo} alt="Card Photo" className="chhota w-[40px] h-[40px] object-cover pt-1.5 pl-3 " />
        <div className="name text-black p-2 font-[550]">{Name}</div>
        </div>
       
    </div>
);



const Cards3Three = () => {
    return (
        <div className="flex flex-wrap justify-center gap-[80px] py-8 ">
          {card_new.map((cardss, index) => (
            <Card
              key={index}
              logo={cardss.logo}
              kuchh={cardss.kuchh}
              photo={cardss.photo}
              Name={cardss.Name}
            
    
    
            />
          ))}
        </div>
      );
}

export default Cards3Three;


// import card_detail_new from "./card_detail03";
// import React from "react";

// const Card = ({ logo, kuchh }) => (
//   <div className="bg-white shadow-2xl rounded-2xl p-1 w-80 text-center items-center transform transition-transform duration-300 hover:scale-105">
//     <p className="logo">{logo}</p>
//     <h1>{kuchh}</h1>
//   </div>
// );

// const Cards3Three = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-[80px] py-8">
//       {card_detail_new.map((cardss, index) => (
//         <Card key={index} logo={cardss.logo} kuchh={cardss.kuchh} />
//       ))}
//     </div>
//   );
// };

// export default Cards3Three;








