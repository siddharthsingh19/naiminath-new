import React from 'react'
import { LuMessageSquare, LuHeart } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Treatment = () => {
    const treatment = [
        { image: "/images/ayd_treate1.jpg", text: "Abhyangam", link: "https://naiminathayurveda.org/hospital/opd?id=7" },
        { image: "/images/ayd_treate2.jpg", text: "Shirodhara", link: "https://naiminathayurveda.org/hospital/opd?id=8" },
        { image: "/images/ayd_treate3.jpg", text: "Kashayadhara", link: "https://naiminathayurveda.org/hospital/opd?id=9" },
        { image: "/images/ayd_treate4.jpg", text: "Greeva Basti", link: "https://naiminathayurveda.org/hospital/opd?id=10" },
        { image: "/images/ayd_treate5.jpg", text: "Janu Basti", link: "https://naiminathayurveda.org/hospital/opd?id=11" },
        { image: "/images/ayd_treate6.jpg", text: "Kati Basti", link: "https://naiminathayurveda.org/hospital/opd?id=12" },
        { image: "/images/ayd_treate7.jpg", text: "Spine Basti", link: "https://naiminathayurveda.org/hospital/opd?id=13" },
        { image: "/images/ayd_treate8.jpg", text: "Kizhi", link: "https://naiminathayurveda.org/hospital/opd?id=14" },

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
        <div className='flex w-full flex-col justify-center mt-[0px] md:my-[80px]'>
            <div className="why-wrapper">
                <h3 className="why-heading lined-heading">List of Ayurvedic Treatment</h3>
                {/* <hr className="hr" /> */}
            </div>
            <div className="h-auto px-8 md:px-[40px] mt-10  m-auto  group-hover:bg-black max-w-[1366px] w-full justify-center items-center">

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

export default Treatment
