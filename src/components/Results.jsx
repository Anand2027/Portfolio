
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";






const Data = [
  {
    title: "CBSE 2018-2020",
    description:`CBSE CLASS 10 RESULT`,
    
    button:"Download ->",
    link:"//drive.google.com/file/d/1-L2PihDq2oUIo4M9fGdtB-KRT9Sora_V/view?usp=drive_link"
  },
  {
    title: "CBSE 2020-2022",
    description: `CBSE CLASS 12 RESULT`,
    
     button:"Download ->",
     link:"//drive.google.com/file/d/1hE_-wcuNdT_7XWnIx8oTPuSUCxN5GBzy/view?usp=drive_link"
  },
  {
    title: "B.Tech SEM I",
    description:"AKTU B.TECH SEM I RESULT",
 
    button:"Download ->",
    link:" https://drive.google.com/file/d/1eZmblPMFmBHZe06MDb29fth9gbWIyqZN/view?usp=drive_link "
  },

  {
    title: "B.Tech SEM II",
    description:"AKTU B.TECH SEM II RESULT",
 
    button:"Download ->",
    link:"https://drive.google.com/file/d/1pMLl08v0ApIJIEhdJRfA3r4u-pEWJjqq/view?usp=drive_link"
  },
 
];






const Results = () => {


  const settings = {
    dots: true,
    infinite: true,
    // width:90%,
    speed: 2000,
    slidesToShow:4,
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
  <div>
    <div className="upper  pl-20 pb-10">
      <h1 className='text-3xl font-bold'>Academic Results</h1>
      <p className='text-2xl font-bold'>and Performances</p>
    </div>


    {/* <div className="down grid gap-6 grid-cols-1 p-10 md:grid-cols-4 md:p-15"> */}

    <div className="down pb-10 w-[70%] mx-auto p">

    <Slider {...{ ...settings, autoplay: true, autoplaySpeed: 3000, infinite: true}}> 
       {Data.map((certi, index) => (
       <div 
        className={`cards hover:scale-95 transition-transform duration-300  rounded-2xl shadow-lg  hover:shadow-2xl  overflow-hidden `} 
        key={index}
       >
         
         <div className={`h-48 flex items-center justify-center p-1 ${index % 2 == 0 ? 'bg-purple-600' : 'bg-green-600'}`}>

          <h1 className='font-bold text-3xl text-center text-white'>{certi.description}</h1>
           
          </div>
          
          <div className='bg-[#262634] text-white p-5 text-center'>
            <div className="title text-2xl text-center font-bold pb-1">{certi.title}</div>
            <br />
            <a href={certi.link} target='_main'> 
              <button className='bg-green-600 px-5 py-2 rounded-xl font-bold hover:bg-green-700 hover:scale-105 duration-700'>
                {certi.button}
              </button>
            </a>
          </div>
       </div>
       ))}
       </Slider>
    </div>
  </div>
)
}

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: .7, ease: "linear" },
  },
};

const ResultsWithMotion = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
  >
    <Results />
  </motion.div>
);

export default ResultsWithMotion;

