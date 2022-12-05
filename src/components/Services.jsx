import React from 'react'
import { data } from './serviceData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Services() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <>
            <div className=' flex justify-center mt-5 pl-10 pr-10 '>
                <h1 className='w-full h-10  mt-2  md:text-2xl font-bold flex justify-center  text-orange-600  font-Paprika '>
                    SERVICES
                </h1>
            </div>
            <div className=' flex items-center md:pl-40 md:pr-40 w-[100%] '>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                    id='slider'
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    <div className='flex flex-row  h-[350px] w-1/2 md:w-1/3'>
                        {data.map((item) => (
                            <>
                                <div className='flex flex-col w-[140px]  md:w-[270px] h-[320px] md:m-7 border rounded-lg p-5  shadow-lg shadow-orange-600 bg-orange-400'>

                                    <div className='flex justify-center'>
                                        <img
                                            className=' h-32 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300  rounded-full'
                                            src={item.img}
                                            alt='/'
                                        />
                                    </div>
                                    <div className='mt-5 font-semibold text-md md:text-xl  '>
                                        <div>
                                            <a href={item?.link} className='flex justify-center'>{item?.name}</a>
                                        </div>
                                    </div>
                                    <div className=' h-[100px] mt-4 '>
                                        {/* <a href={item?.link} className=" line-clamp-4">{ item.details}</a> */}
                                        <p class="mt-3 text-gray-700 line-clamp-4 ">There is something about skateboarding at sunset. Just like surfing, things seem to just get better when the sun's coming down.</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div>
        </>
    )
}
export default Services