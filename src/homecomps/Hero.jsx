import React, { useState } from "react";
import "./hero.css";
import ShowModal from "./modal/ShowModal";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Hero = () => {

  const [showModal, setshowModal] = useState(false)
  const closeModal = () => setshowModal(false)

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
  };

  const slides = [
    // {
    //   id: 1,
    //   image: '/public/nan.avif',
    //   text: 'Slide Title 1',
    //   description: 'This is the description for slide 1.',
    // },
    {
      id: 2,
      image: '/public/certificate.png',
      text: 'Slide Title 2',
      description: 'This is the description for slide 2.',
    },
    {
      id: 3,
      image: '/public/BW.png',
      text: 'Slide Title 2',
      description: 'This is the description for slide 2.',
    },
    // Add more items as needed
  ];

  return (
    <div className="relative ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="element bg-black ">
            <div
              className="absolute inset-0 w-[99vw] h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center z-[999] ">
              <h2 className="text-white text-3xl font-bold">{slide.text}</h2>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;


//  <section className="hero">
//       <div className="hero-wrapper">
//         <div class="element">
//           <div class="content" style={{ color: "#eef1f2" }}>
//             {/* <div class="content" style={{ color: "black" }}> */}
//             <h2 className="hero-heading">
//               Discover The World of Possibilities with Naiminath
//             </h2>
//             <p className="hero-para">APPLICATIONS ARE NOW OPEN</p>
//             <button className="btns hero-btn" onClick={() => setshowModal(!showModal)}>Apply Now</button>
//           </div>
//           {showModal && <ShowModal closeModal={closeModal} />}
//         </div>
//       </div>
//     </section> 