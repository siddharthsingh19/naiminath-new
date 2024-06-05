import React from 'react'
import { LuMessageSquare, LuHeart } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Opd = () => {
    const treatment = [
        // { image: "/images/images.jpeg", text: "Kaumarbhritya", link: "https://naiminathayurveda.org/hospital/opd?id=1" },
        { image: "/images/opd2.jpg", text: "Kayachikitsa", link: "https://naiminathayurveda.org/hospital/opd?id=0" },
        { image: "/images/opd3.jpg", text: "Panchkarma", link: "https://naiminathayurveda.org/hospital/opd?id=2" },
        { image: "/images/opd4.jpg", text: "Prasuti & Stri Roga", link: "https://naiminathayurveda.org/hospital/opd?id=3" },
        { image: "/images/opd5.jpg", text: "Shalakya Tantra", link: "https://naiminathayurveda.org/hospital/opd?id=4" },
        { image: "/images/opd6.jpg", text: "Shalya Tantra", link: "https://naiminathayurveda.org/hospital/opd?id=5" },
        { image: "/images/opd7.jpg", text: "Swasthavritta", link: "https://naiminathayurveda.org/hospital/opd?id=6" },
    ]

    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <div className='flex w-full flex-col justify-center mt-[0px] mb-[80px] md:mt-[-43px] md:mb-[50px]'>
            <div className="why-wrapper">
                <h3 className="why-heading lined-heading">Our OPDs</h3>
                {/* <hr className="hr" /> */}
            </div>
            <div className="h-auto px-8 md:px-[40px] mt-16  m-auto  group-hover:bg-black max-w-[1366px] w-full justify-center items-center">

                <Slider {...settings}>
                    {
                        treatment.map((obj, i) => (
                            <a href={obj.link} key={i} className="relative overflow-hidden md:h-[10rem] round-lg">
                                <img
                                    className="h-full w-full max-w-full rounded-lg  object-center transform transition-transform duration-300 "
                                    src={obj.image}
                                    loading='lazy'
                                    alt="gallery-photo"
                                />

                                <div className='absolute inset-0 flex items-center justify-center text-[14px] md:font-extrabold md:text-xl 
                        transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center rounded-lg'>
                                    {obj.text}
                                </div>
                            </a>

                        ))
                    }
                </Slider >
            </div>
        </div>
    )
}

export default Opd
