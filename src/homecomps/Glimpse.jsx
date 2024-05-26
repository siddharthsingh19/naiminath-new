import React from 'react'
import { LuMessageSquare, LuHeart } from "react-icons/lu";

const Glimpse = () => {
    const Gallery = [
        {
            imageLink:
                "/glimpse/classroom.JPG",
        },
        {
            imageLink:
                "/glimpse/herbal.JPG",
        },
        {
            imageLink:
                "/glimpse/couter.JPG",
        },
        {
            imageLink:
                "/glimpse/dance.JPG",
        },

    ]
    return (
        <div className='flex w-full flex-col justify-center my-[100px]'>
            <div className="why-wrapper">
                <h3 className="why-heading">A Glimpse Of Campus</h3>
                <hr className="hr" />
            </div>
            <div className="h-auto px-8 md:px-[44px] mt-16 gap-4 grid grid-cols-1 m-auto md:grid-cols-4 group-hover:bg-black max-w-[1366px] justify-center items-center">
                {Gallery.map((obj, index) => (
                    <div key={index} className="relative overflow-hidden h-[16rem] round-lg">
                        <img
                            className="h-full w-full max-w-full rounded-lg  object-center transform transition-transform duration-300 hover:scale-110"
                            src={obj.imageLink}
                            loading='lazy'
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Glimpse
