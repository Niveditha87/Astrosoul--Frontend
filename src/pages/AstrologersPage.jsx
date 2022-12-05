import React from 'react'
import { data } from '../components/mockData';
import StarRating from '../components/StarRating';
import CategorySidebar from '../components/CategorySidebar';
import { BiPhoneCall, BiChat } from 'react-icons/bi';

function AstrologersPage() {
  return (

<div class="container md:h-screen md:grid md:grid-cols-6">
      <section class="sidebar  md:col-span-1">
        <div className='mt-4'>
          <input type='text' className="border  outline-none ml-3  lg:w-full " placeholder="Search" />
        </div>
    <CategorySidebar />    
  </section>
  {/* <main class=" md:col-span-5"> */}

        <div className=" col-span-5 mt-14  mb-14">
          <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3
                ">
            {data && data.map((item) => (
              <div className='flex flex-col w-[14rem] md:w-[240px] h-[300px] md:m-5 border rounded-lg'>
                <div>
                  <img
                    className='mt-3 ml-7  w-[170px]  inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 border rounded-full'
                    src={item?.img}
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
                  <a href='/astrologerDetails' className='flex justify-center'>{item?.name}</a>
                  <div className='flex justify-center'>
                    <StarRating />
                  </div>
                  <h1 className='flex justify-center' >{item?.rate}</h1>
                </div>

              </div>
            ))}

          </div>
        </div>

  {/* </main> */}
</div>


  )
}

export default AstrologersPage