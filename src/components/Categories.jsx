import React from 'react'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import panditji from '../images/panditji.png'

function Categories() {
  return (
<>

          <div className=''>
              <div className="  grid grid-rows-1 grid-flow-col">
                  <div
                      className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col gap-0'
                  // src={banner}
                  >
                      <div className='flex mx-auto  border rounded-3xl '>
                          <img src={panditji} className="h-14" />
                      </div>
                      <div>
                          <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
                      </div>


                  </div>
                  <div
                      className=' h-36 w-60 border rounded-3xl bg-white flex justify-center flex-col '
                  // src={banner}
                  >
                      <div className='flex mx-auto bg-green-500 border rounded-3xl '>
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
                      <div className='flex mx-auto bg-orange-500 border rounded-3xl '>
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
                      <div className='flex mx-auto bg-blue-500 border rounded-3xl  '>
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

</>

  )
}

export default Categories