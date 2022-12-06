import React from 'react'
import { data } from '../components/vastuData'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import Counter from '../components/Counter'

function Products() {
  return (
      <>
          <div className='container mx-auto'>
              <div className=" flex flex-wrap items-start justify-center ">
                
                  {data && data.map(data => (
                      <div key={data._id} className="flex items-center justify-center  sm:w-full md:w-1/3 lg:w-1/4 md:p-2 lg:p-1 mb-5 mt-5  ">
                          <div className="bg-white rounded-lg  transform hover:translate-y-2 hover:shadow-xl transition duration-300 w-[300px] md:w-[250px] shadow-sm shadow-gray-500 hover:bg-orange-100">
                              <div className='flex justify-end p-3'>
                                  <AiOutlineHeart size={25} color={'orange'} />
                                  </div>
                              <figure className="mb-2">
                                  <img src={data?.img} alt="" className="h-44 w-44 ml-auto mr-auto p-5" />
                              </figure>

                              <a href=" " className="text-orange-800 text-xl font-bold leading-none flex justify-center ">
                                  {data?.name}
                              </a>
                              <p className='flex justify-center mb-3 text-orange-900 font-semibold text-xl'>{data?.price}</p>
                              <div className='flex flex-row justify-center gap-2'>
                                  <div><Counter />  </div>
                                  <div className='ml-3'> <button><AiOutlineShoppingCart size={25} color={'orange'} /></button></div>
                                   
                                 
                              </div>
                            
                          </div>
                      </div>))}

              </div>


          </div>
      </>
  )
}

export default Products