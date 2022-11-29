import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import StarRating from '../components/StarRating'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { MdOutlineSummarize, MdOutlineLanguage, MdOutlineReviews } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa';
import { BiRupee, BiPhoneCall, BiMessageDetail } from 'react-icons/bi'
import { GiRibbonMedal } from 'react-icons/gi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
function AstrologerDetails() {
    return (
        <>
            <div className="">
                <div className="bg-orange-600 pl-20 flex justify-between">
                    <div>
                        <MdChevronLeft size={50} className='text-white' />
                        <img src=" https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="h-[150px] border rounded-full p-3 mb-10" />
                    </div>
                    <div className='pt-24 mr-96'>
                        <h1>Astrologer Name</h1>
                        <p>vedic</p>
                        <StarRating />
                        <div className='flex flex-row '>
                            <button className='border rounded-md bg-orange-400 m-5 w-[300px] flex justify-center h-11 pt-2'>
                                <BiPhoneCall size={20} className="mr-2"/>
                             Start a Chat Now
                            </button>
                            <button className='border rounded-md bg-orange-400 m-5 w-[300px] flex justify-center h-11 pt-2'>
                                <BiMessageDetail size={20} className="mr-2" />
                             Start a Call Now
                            </button>
                        </div>

                    </div>
                    <div className='mr-20 mt-5'>
                        <AiOutlineShareAlt size={30} className="text-white  " />
                    </div>
                </div>
                <div className=' m-10 flex border rounded-md flex-col'>
                    <div className='flex  justify-center text-2xl font-inria '>
                        <MdOutlineSummarize className='mt-3 mr-2  flex  justify-center' />
                        <h1 className='mt-2'>Profile Summary</h1>
                    </div>

                    <div className='border ml-44 mr-44 mt-5 flex justify-center rounded-lg p-5'>
                        <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className='border-b-2 flex flex-row  ml-44 p-3 mr-44'>
                        <div className='m-3'>
                            <FaGraduationCap />
                        </div>

                        <div className='flex flex-col m-1'>
                            <div>
                                Experience
                            </div>
                            <div>
                                12 Year
                            </div>

                        </div>

                    </div>
                    <div className='border-b-2 flex flex-row  ml-44 p-3 mr-44'>
                        <div className='m-3'>
                            <BiRupee />
                        </div>

                        <div className='flex flex-col m-1'>
                            <div>
                                Consultaion Charges
                            </div>
                            <div>
                              50.0/min
                            </div>

                        </div>

                    </div>
                    <div className='border-b-2 flex flex-row  ml-44 p-3 mr-44'>
                        <div className='m-3'>
                            < GiRibbonMedal />
                        </div>

                        <div className='flex flex-col m-1'>
                            <div>
                                Expertise
                            </div>
                            <div>
                                Vedic Assistant
                            </div>

                        </div>

                    </div>
                    <div className='border-b-2 flex flex-row  ml-44 p-3 mr-44'>
                        <div className='m-3'>
                            <MdOutlineLanguage />
                        </div>

                        <div className='flex flex-col m-1'>
                            <div>
                                Languages
                            </div>
                            <div>
                                Hindi,English
                            </div>

                        </div>

                    </div>
                    <div className='border-b-2 flex flex-row  ml-44 p-3 mr-44'>
                        <div className='m-3'>
                            <HiOutlineLocationMarker />
                        </div>

                        <div className='flex flex-col m-1'>
                            <div>
                                Location
                            </div>
                            <div>
                               Surat ,Gujrat-234678
                            </div>

                        </div>

                    </div>
                    <div className=' flex flex-row  ml-44 p-3 mr-44'>
                        <div className='m-3'>
                            <MdOutlineReviews />
                        </div>

                        <div className='flex flex-col m-1'>
                            <div>
                                Reviews
                            </div>
                            <div className='border rounded-lg mt-3'>
                                <div className='flex flex-col'>
                                    <div className='  p-3 flex flex-row text-gray-500 '>
                                        <h1 className='text-gray-700'>Shweta Patel</h1> ,
                                        <p className='ml-3 text-gray-500'>20 April 2022</p>
                                        <label className="bg-orange-800 ml-20 border rounded-md w-12 flex justify-center text-white"> <svg aria-hidden="true" className="w-5 h-5 text-yellow-400 mt-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>5</label>
                                    </div>
                                    <div className='border-b-2 text-gray-500 pl-5 pr-5 pb-5'>
                                        <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='  p-3 flex flex-row text-gray-500'>
                                        <h1 className='text-gray-700'>user 1</h1> ,
                                        <p className='ml-3 text-gray-500'>20 April 2022</p>
                                        <label className="bg-orange-800 ml-20 border rounded-md w-12 flex justify-center text-white"> <svg aria-hidden="true" className="w-5 h-5 text-yellow-400 mt-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>5</label>

                                    </div>
                                    <div className='border-b-2 text-gray-500 pl-5 pr-5 pb-5'>
                                        <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                                    </div>
                                </div>

                                <div className='flex flex-col'>
                                    <div className='  p-3 flex flex-row text-gray-500'>
                                        <h1 className='text-gray-700'>user 2</h1> ,
                                        <p className='ml-3 text-gray-500'>20 April 2022</p>
                                        <label className="bg-orange-800 ml-20 border rounded-md w-12 flex justify-center text-white"> <svg aria-hidden="true" className="w-5 h-5 text-yellow-400 mt-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>5</label>

                                    </div>
                                    <div className='border-b-2 text-gray-500 pl-5 pr-5 pb-5'>
                                        <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                                    </div>
                                </div>
                               
                                <div className='flex flex-col'>
                                    <div className='  p-3 flex flex-row text-gray-500'>
                                        <h1 className='text-gray-700'>user 3</h1> ,
                                        <p className='ml-3 text-gray-500'>20 April 2022</p>
                                        <label className="bg-orange-800 ml-20 border rounded-md w-12 flex justify-center text-white"> <svg aria-hidden="true" className="w-5 h-5 text-yellow-400 mt-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>5</label>

                                    </div>
                                    <div className='border-b-2 text-gray-500 pl-5 pr-5 pb-5'>
                                        <p>survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
                                    </div>
                                </div>
                           </div>

                        </div>

                    </div>
                    

                </div>
                <div>

                    {/* kmvlfk;l */}
                </div>
            </div>
        </>
    )
}

export default AstrologerDetails