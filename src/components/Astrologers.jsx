import React from 'react';
import { data } from './mockData';
import StarRating from './StarRating';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Astrologers() {
    const slideLeft = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft + 500;
    };

    return (
        <>
            <div>
                <div className='flex justify-center p-1 mt-5'>
                    <h1 className='h-10 ml-3 mt-2  text-2xl font-bold flex  text-orange-600 font-Paprika  text-center'>

                        TALK TO ASTROLOGERS
                    </h1>
                </div>
            </div>
            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                    id='slider2'
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    <div className='flex flex-row  h-[350px]  justify-center '>
                        {data.map((item) => (
                            <>
                                <div className='flex flex-col  w-[600px] h-[280px] m-10 border rounded-lg shadow-md shadow-black'>
                                    
                                    <div> 
                                        <img
                                            className='mt-3 ml-3  w-[170px]  inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 border rounded-full'
                                            src={item.img}
                                            alt='/'
                                        />
                                     </div>
                                    <div className='mt-5'> 
                                        <a href='/astrologerDetails' className='flex justify-center font-inria font-semibold'>{item?.name}</a>
                                        <div className='flex justify-center'>
                                            <StarRating />
                                        </div>
                                        <h1 className='flex justify-center' >{item.rate}</h1>
                                    </div>
                                
                                </div> 
                                
                              
                            </>
                        ))}
                    </div>
                    
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div>
            <div className='flex justify-center  p-1 mt-5 '>
               

                <a href='/astrologers' className='h-10 mt-2  text-xl font-bold text-orange-600 '>
                    View More
                </a>
            </div>
        </>
    );
}

export default Astrologers;