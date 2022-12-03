import React from 'react'
import { data } from '../components/storeData'
function Store() {
    return (
<>
        <div className='container mx-auto'>
            <div className=" flex flex-wrap items-start justify-center ">
                <div className="w-full lg:pl-2 mb-4 ">
                    <h1 className="text-2xl  text-orange-600 font-bold font-Paprika mt-5 flex items-center justify-center ">
                        STORE
                    </h1>
                </div>
                {data && data.map(data => (
                    <div key={data._id} className="flex items-center justify-center  sm:w-full md:w-1/3 lg:w-1/4  mb-5 lg:pl-2 lg:pr-2 mt-5 ">
                        <div className="bg-white rounded-lg m-h-64  transform hover:translate-y-2 hover:shadow-xl transition duration-300 w-[300px] md:w-full shadow-sm shadow-gray-500 hover:bg-orange-100">
                            <figure className="mb-2">
                                <img src={data?.img} alt="" className="h-64 w-64 ml-auto mr-auto p-5" />
                            </figure>

                            <a href={data?.link} className="text-orange-800 text-xl font-bold leading-none flex justify-center mb-3">
                                {data?.name}
                            </a>
                        </div>
                    </div>))}

            </div>
    

        </div>
                <div className='flex justify-center   p-1 mt-5 '>


                <a href='/' className=' h-10 mt-2  text-xl font-bold text-orange-600 mb-3'>
                    View More
                </a>
            </div>
        </>

    )
}

export default Store;