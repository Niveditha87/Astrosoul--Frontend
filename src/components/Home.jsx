import React from 'react'
import banner from '../images/Home2.jpg'
import image1 from '../images/image1.jpg'
import pic from '../images/new.png'
import panditji from '../images/panditji.png'
import "./Home.css";
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { AiOutlineVideoCamera } from 'react-icons/ai'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
function Home() {


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

      <div className="container w-screen ">
        <div className='w-[100%]'>
          <div className="banner slide flex items-center justify-center  w-full  flex-col scroll-hide ">
            <div className="h-[300px] w-[1200px]  mt-32 bg-orange-100 border rounded-xl flex justify-between ">
              <div className='ml-10 mt-10 font-bold'>
                <div>
                  <a href="" >e-Pooja</a>
                </div>
                <div>
                  <a href="" >Marriage Ceremony</a>
                </div>
                <div>
                  <a href="" >Sanskar Vidhi</a>
                </div>
              </div>
              {/* <div className='flex justify-start'> */}
              <img
                className=' h-48 mb-8 mt-14 mr-96'
                src={pic}
              />
              <div className='mb-16'>
                <h1 className='text-3xl font-bold mt-10 '>Pandit Online</h1>
                <div className=' bg-orange-600 mt-5 border rounded-md'>
                  <button className='flex mx-auto p-2 font-bold'>Book Now</button>
                </div>
              
              </div>
              {/* </div> */}
              
              <div className=' font-bold mt-44 mb-5 mr-5'>
                
                <div>
                  <a href="" >Kath</a>
                </div>
                <div>
                  <a href="" >Festival Pooja</a>
                </div>
                <div>
                  <a href="" >Diwali Aarti</a>
                </div>
              </div>
            </div>

            <div>
              <div className="  grid grid-rows-1 grid-flow-col  gap-10 mb-5 mt-5">
                <div
                  className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                // src={banner}
                >
                  <div className='flex mx-auto  border rounded-3xl p-2'>
                    <img src={ panditji} className="h-14" />
                  </div>
                  <div>
                    <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
                  </div>


                </div>
                <div
                  className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                // src={banner}
                >
                  <div className='flex mx-auto bg-green-500 border rounded-3xl p-2'>
                    <BsTelephone size={35} />
                  </div>
                  <div>
                    <h1 className='flex justify-center mx-auto mt-5 text-lg'>Pooja Samagri Store</h1>
                  </div>
                </div>
                <div
                  className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                // src={banner}
                >
                  <div className='flex mx-auto bg-orange-500 border rounded-3xl p-2'>
                    <HiOutlineBookOpen size={35} />
                  </div>
                  <div>
                    <h1 className='flex justify-center mx-auto mt-5 text-lg'>Horoscope</h1>
                  </div>
                </div>
                <div
                  className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                // src={banner}
                >
                  <div className='flex mx-auto bg-blue-500 border rounded-3xl p-2 '>
                    <AiOutlineVideoCamera size={35} />
                  </div>
                  <div>
                    <h1 className='flex justify-center mx-auto mt-5 text-lg'>Live Astrologers</h1>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="  grid grid-rows-1 grid-flow-col  gap-10 ">
                <div
                  className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                // src={banner}
                >
                  <div className='flex mx-auto bg-red-500 border rounded-3xl p-2'>
                    <BiMessageRoundedDots size={35} />
                  </div>
                  <div>
                    <h1 className='flex justify-center mx-auto mt-5 text-lg'>Chat with Astrologer</h1>
                  </div>


                </div>
                <div
                  className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                // src={banner}
                >
                  <div className='flex mx-auto bg-green-500 border rounded-3xl p-2'>
                    <BsTelephone size={35} />
                  </div>
                  <div>
                    <h1 className='flex justify-center mx-auto mt-5 text-lg'>Talk to Astrologer</h1>
                  </div>
                </div>
                <div
                  className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                // src={banner}
                >
                  <div className='flex mx-auto bg-orange-500 border rounded-3xl p-2'>
                    <HiOutlineBookOpen size={35} />
                  </div>
                  <div>
                    <h1 className='flex justify-center mx-auto mt-5 text-lg'>Astrotalk Blog</h1>
                  </div>
                </div>
                <div
                  className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                // src={banner}
                >
                  <div className='flex mx-auto bg-blue-500 border rounded-3xl p-2 '>
                    <AiOutlineVideoCamera size={35} />
                  </div>
                  <div>
                    <h1 className='flex justify-center mx-auto mt-5 text-lg'>Live Astrologers</h1>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
          {/* <div className='w-[100%]'>
            <div>
              <h1 className='text-2xl flex justify-center mx-auto mt-32'>COMPLIMENTARY ASTROLOGY SERVICES</h1>
            </div>
            <div>
              <div className='relative flex items-center m-20 '>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                  id='slider'
                  className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >

                  <div className="  grid grid-rows-1 grid-flow-col  gap-10 mb-5 ">

                    <div
                      className=' h-72 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                    // src={banner}
                    >
                      <div className='flex mx-auto bg-red-500 border rounded-3xl p-2'>
                        <BiMessageRoundedDots size={35} />
                      </div>
                      <div>
                        <h1 className='flex justify-center mx-auto mt-5 text-lg'>Heading</h1>
                      </div>
                      <div>
                        <p > In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                      </div>


                    </div>
                    <div
                      className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                    // src={banner}
                    >
                      <div className='flex mx-auto bg-red-500 border rounded-3xl p-2'>
                        <BiMessageRoundedDots size={35} />
                      </div>
                      <div>
                        <h1 className='flex justify-center mx-auto mt-5 text-lg'>Chat with Astrologer</h1>
                      </div>


                    </div>
                    <div
                      className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                    // src={banner}
                    >
                      <div className='flex mx-auto bg-red-500 border rounded-3xl p-2'>
                        <BiMessageRoundedDots size={35} />
                      </div>
                      <div>
                        <h1 className='flex justify-center mx-auto mt-5 text-lg'>Chat with Astrologer</h1>
                      </div>


                    </div>
                    <div
                      className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                    // src={banner}
                    >
                      <div className='flex mx-auto bg-red-500 border rounded-3xl p-2'>
                        <BiMessageRoundedDots size={35} />
                      </div>
                      <div>
                        <h1 className='flex justify-center mx-auto mt-5 text-lg'>Chat with Astrologer</h1>
                      </div>


                    </div>
                    <div
                      className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                    // src={banner}
                    >
                      <div className='flex mx-auto bg-red-500 border rounded-3xl p-2'>
                        <BiMessageRoundedDots size={35} />
                      </div>
                      <div>
                        <h1 className='flex justify-center mx-auto mt-5 text-lg'>Chat with Astrologer</h1>
                      </div>


                    </div>
                    <div
                      className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                    // src={banner}
                    >
                      <div className='flex mx-auto bg-red-500 border rounded-3xl p-2'>
                        <BiMessageRoundedDots size={35} />
                      </div>
                      <div>
                        <h1 className='flex justify-center mx-auto mt-5 text-lg'>Chat with Astrologer</h1>
                      </div>


                    </div>
                    <div
                      className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col'
                    // src={banner}
                    >
                      <div className='flex mx-auto bg-red-500 border rounded-3xl p-2'>
                        <BiMessageRoundedDots size={35} />
                      </div>
                      <div>
                        <h1 className='flex justify-center mx-auto mt-5 text-lg'>Chat with Astrologer</h1>
                      </div>


                    </div>
                  </div>

                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
              </div>
            </div> */}

          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default Home