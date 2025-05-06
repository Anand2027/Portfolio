import card_new from './card_detail03';
import React from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Card = ({logo,kuchh,photo,Name})=>(

    <div className="bg-amber-50-100 shadow-2xl rounded-xl p-1  w-70 text-center pt-[20px] items-centre transform transition-transform duration-300 md:80 hover:scale-101 border border-green border-solid ">
        <p className="logo pl-5 flex flex-row pt-2 pb-4">{(logo)} {(logo)} {(logo)} {(logo)} {(logo)}</p>
        <h1 className='text-left pl-3'>{kuchh}</h1>
        <div className="shivang flex ">
        <img src={photo} alt="Card Photo" className="chhota w-[40px] h-[40px] object-cover pt-1.5 pl-3 " />
        <div className="name text-black p-2 font-[550]">{Name}</div>
        </div>
       
    </div>
);



const Cards3Three = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1000, // For small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],

    responsive: [
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "blue",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          zIndex: 1,
          left: "-40px", // Adjust position if needed
        }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "blue",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          zIndex: 1,
          right: "-40px", // Adjust position if needed
        }}
        onClick={onClick}
      />
    );
  };

  settings.prevArrow = <CustomPrevArrow />;
  settings.nextArrow = <CustomNextArrow />;

    return (
        <div className="mt-30  m-auto py-8  ">
          <Slider {...{ ...settings, autoplay: true, autoplaySpeed: 3000, infinite: true }}> {/* Added infinite loop */}
          {card_new.map((cardss, index) => (
            <Card
              key={index}
              logo={cardss.logo}
              kuchh={cardss.kuchh}
              photo={cardss.photo}
              Name={cardss.Name}
            
            />
          ))}
          </Slider>
        </div>
      );
}

export default Cards3Three;









