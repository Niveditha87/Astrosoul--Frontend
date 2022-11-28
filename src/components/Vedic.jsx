import React from 'react';
import { data } from './mockData';
import StarRating from './StarRating';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Vedic() {
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
            <div className='relative flex items-center'>
                {/* <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} /> */}
                <div
                    id='slider'
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    <div className='flex flex-row  h-[350px]  justify-center '>
                        {data.map((item) => (
                            <>
                                <div className='flex flex-col  w-[600px] h-[280px] m-10 border rounded-lg'>
                                    
                                    <div> 
                                        <img
                                            className='mt-3 ml-10 w-[170px]  inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 border rounded-full'
                                            src={item.img}
                                            alt='/'
                                        />
                                     </div>
                                    <div className='mt-5'> 
                                        <h1 className='flex justify-center'>{item?.name}</h1>
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
                {/* <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} /> */}
            </div>
        </>
    );
}

export default Vedic;