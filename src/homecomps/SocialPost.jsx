import React from 'react'
import { LuMessageSquare, LuHeart } from "react-icons/lu";

const SocialPost = () => {
    const Gallery = [
        {
            imageLink:
                "/insta/insta.jpg",
        },
        {
            imageLink:
                "/insta/insta3.jpg",
        },
        {
            imageLink:
                "/insta/insta6.jpg",
        },
        {
            imageLink:
                "/insta/insta4.jpg",
        },
        {
            imageLink:
                "/insta/insta2.jpg",
        },
        {
            imageLink:
                "/insta/insta5.jpg",
        },
        {
            imageLink:
                "/insta/insta7.jpg",
        },
        {
            imageLink:
                "/insta/insta8.jpg",
        },

    ]
    return (
        <div className='flex w-full flex-col justify-center my-[100px]'>
            <div className="why-wrapper">
                <h3 className="why-heading">See our world! Follow us on Instagram</h3>
                <hr className="hr" />
            </div>
            <div className="h-auto px-8 md:px-[44px] mt-16 gap-4 grid grid-cols-1 m-auto md:grid-cols-4 group-hover:bg-black max-w-[1366px] justify-center items-center">
                {Gallery.map(({ imageLink }, index) => (
                    <div key={index} className="relative overflow-hidden h-[20rem] round-lg">
                        <img
                            className="h-full w-full max-w-full rounded-lg  object-center transform transition-transform duration-300 hover:scale-110"
                            src={imageLink}
                            loading='lazy'
                            alt="gallery-photo"
                        />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 
                        transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center rounded-lg">
                            <div className='flex justify-between gap-[40px] '>
                                <a href='https://www.instagram.com/namcagra/' target='_blank' className='flex items-center gap-2'>
                                    <span className='font-white font-extrabold text-3xl'>
                                        <LuHeart />
                                    </span>
                                    <div>
                                        0
                                    </div>
                                </a>
                                <a href='https://www.instagram.com/namcagra/' target='_blank' className='flex items-center gap-2'>
                                    <span className='font-white font-extrabold text-3xl'>
                                        <LuMessageSquare />
                                    </span>
                                    <div>
                                        0
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SocialPost
