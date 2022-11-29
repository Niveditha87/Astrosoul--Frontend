import React from 'react'
import StarRating from './StarRating';

function AstrologersCard(list) {
  return (
    <>

                <div className='flex flex-col  w-[600px] h-[280px] m-10 border rounded-lg'>
                  <div>
                    <img
                      className='mt-3 ml-3  w-[170px]  inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 border rounded-full'
                      src={list?.img}
                      alt='/'
                    />
                  </div>
                  <div className='mt-5'>
                <h1 className='flex justify-center'>{ list?.name}</h1>
                    <div className='flex justify-center'>
                      <StarRating />
                    </div>
                <h1 className='flex justify-center' >{ list?.rate}</h1>
                  </div>

                </div>


    
   

    </>
  )
}

export default AstrologersCard