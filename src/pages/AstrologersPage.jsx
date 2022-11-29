import React from 'react'
import { data } from '../components/mockData';
import StarRating from '../components/StarRating';
import CategorySidebar from '../components/CategorySidebar';

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
          <div className="container grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3
                ">
            {data && data.map((item) => (
              <div className='flex flex-col  w-[240px] h-[280px] m-5 border rounded-lg'>
                <div>
                  <img
                    className='mt-3 ml-7  w-[170px]  inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 border rounded-full'
                    src={item?.img}
                    alt='/'
                  />
                </div>
                <div className='mt-5'>
                  <h1 className='flex justify-center'>{item?.name}</h1>
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