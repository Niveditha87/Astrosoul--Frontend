import React from 'react'
import { data } from './serviceData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import * as DOMPurify from "dompurify";

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
        <div className='container flex justify-center mt-5 pl-10 pr-10'>
          
                  <h1 className='h-10 ml-3 mt-2  text-2xl font-bold flex  text-orange-600  font-Paprika '>
                ASTROLOGY SERVICES
                  </h1>

               
          </div>
          <div className='relative flex items-center mr-40 ml-40 '>
              <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
              <div
                  id='slider'
                  className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
              >
                  <div className='flex flex-row  h-[350px]   justify-center  '>
                      {data.map((item) => (
                          <>
                            <div className='flex flex-col  w-[270px] h-[320px] m-7 border rounded-lg p-5  shadow-lg shadow-orange-600 bg-orange-400'>

                                  <div className='flex justify-center'>
                                      <img
                                          className=' h-32 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300  rounded-full'
                                          src={item.img}
                                          alt='/'
                                      />
                                  </div>
                                  <div className='mt-5 font-semibold text-xl  '>
                                      <div>
                                          <a href={item?.link} className='flex justify-center'>{item?.name}</a> 
                                      </div>
                                 
                                      {/* <div className='flex justify-center'>
                                          <StarRating />
                                      </div> */}
                          
                                       
                                     
                                  </div>
                                  <div className='line-clamp-4  h-auto mt-4 '>
                                 
                                      <a href={item?.link} className=" line-clamp-4">{ item.details}</a>
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