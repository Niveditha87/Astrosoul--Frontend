import React from 'react';
import { data } from './mockData';
import StarRating from './StarRating';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { BiPhoneCall, BiChat } from 'react-icons/bi';


function Astrologers() {
    const slideLeft = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft - 200;
    };

    const slideRight = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft + 200;
    };

    return (
        <>
            <div>
                <div className='flex justify-center p-1 mt-5'>
                    <h1 className='h-10 ml-3 mt-2  text-lg font-bold flex  text-orange-600 font-Paprika  text-center'>

                        TALK TO ASTROLOGERS
                    </h1>
                </div>
            </div>
            <div className='relative flex items-center '>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                    id='slider2'
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    <div className='flex flex-row  h-[350px]  justify-center pl-10'>
                        {data.map((item) => (
                            <>
                                <div className='flex flex-col  w-[200px] h-[300px] mr-10 mt-10 border rounded-lg shadow-md shadow-black '>
                                    
                                    <div> 
                                        <img
                                            className='mt-3 w-[170px]  inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 border rounded-full'
                                            src={item.img}
                                            alt='/'
                                        />
                                    </div>
                                    <div className='flex flex-row justify-center mt-4 gap-2'>
                                        <div className='flex justify-center h-7 w-10 bg-orange-600 border rounded-xl'>
                                            <BiPhoneCall className='mt-1' size={20} color={"white"} />
                                        </div>
                                        <div className='flex justify-center h-7 w-10 bg-orange-600 border rounded-xl'>
                                            <BiChat className='mt-1' size={20} color={"white"} />   
                                      </div>

                                        
                                    </div>
                                    <div className='mt-2'> 
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