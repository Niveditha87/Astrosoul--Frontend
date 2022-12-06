import React from 'react'
import { BsCalendarDate } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'


function EditProfile({ visible, onclose }) {
    if (!visible) return null;
    return (
        <>
            <div className='absolute md:fixed top-0 inset-0  bg-opacity-30 backdrop-blur-md flex justify-center items-center p-4 h-[900px] md:h-[700px] overflow-visible  overflow-y-auto '>
                <div className='block rounded-lg bg-white md:w-[700px]    md:mt-20    '>
                    <div className='bg-orange-500 p-2 flex justify-evenly items-center mt-52 md:mt-0'>
                        <div className='flex mx-auto text-xl '> <h1>Edit Your Profile</h1></div>
                        <div className='flex '>  <button onClick={onclose} className=" text-xl"><AiOutlineClose /></button></div>
                      
                    </div>
                 <div className='flex justify-center '><img className='h-20 border rounded-full mt-5' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="/"/></div>
                 <div className=' w-[20rem] md:w-full fle flex-col md:flex-row'>
                    <div className=' mt-3 flex flex-col md:flex-row md:ml-8'>
                        <div className="p-2">
                            <label
                                for=""
                                className="block text-md font-semibold text-gray-800"
                            >
                                First Name
                            </label>
                            <div className="flex items-center border rounded-md">
                                <input
                                    placeholder='Enter First name'
                                    type="text"
                                    className="block  w-[300px] p-2 text-indigo-700 bg-white  focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                ></input>
                            </div>
                        </div>
                        <div className="p-2 md:ml-2">
                            <label
                                for=""
                                className="block text-md font-semibold text-gray-800"
                            >
                                Last Name
                            </label>
                            <div className="flex items-center border rounded-md">
                                <input
                                    placeholder='Enter Last name'
                                    type="text"
                                    className="block w-[300px] p-2 text-indigo-700 bg-white  focus:border-indigo-900 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-20"
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className='md:px-8 flex flex-col md:flex-row gap-2'>
                        <div className="p-2">
                            <label
                                for=""
                                className="block text-md font-semibold text-gray-800"
                            >
                                Date of Birth
                            </label>
                            <div className="flex items-center border rounded-md   ">
                                {/* <div><BsCalendarDate/></div> */}
                                <input
                                    placeholder='Enter date of birth'
                                    type="date"
                                        className="block w-[300px] p-2 text-indigo-700 bg-white  focus:border-indigo-900 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-20"
                                ></input>
                            </div>
                        </div>
                        <div className="p-2">
                            <label
                                for=""
                                className="block text-md font-semibold text-gray-800"
                            >
                                Time
                            </label>
                            <div className="flex items-center border rounded-md">
                                {/* <div><BiTimeFive/></div> */}
                                <input
                                    placeholder='Time of birth'
                                    type="time"
                                        className="block w-[300px] p-2 text-indigo-700 bg-white  focus:border-indigo-900 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-20"
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className='md:px-8 flex flex-col md:flex-row gap-2 mb-8'>

                        <div className="p-2">
                            <label
                                for=""
                                className="block text-md font-semibold text-gray-800"
                            >
                                Place of birth
                            </label>
                            <div className="flex items-center border rounded-md">
                                <input
                                    placeholder='Place of birth'
                                    type="text"
                                        className="block w-[300px] p-2 text-indigo-700 bg-white  focus:border-indigo-900 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-20"
                                ></input>
                            </div>
                        </div>
                        <div className="p-2">
                            <label
                                for=""
                                className="block text-md font-semibold text-gray-800"
                            >
                                Current Address
                            </label>
                            <div className="flex items-center border rounded-md">
                                <input
                                    placeholder='current adress'
                                    type="text"
                                        className="block w-[300px] p-2 text-indigo-700 bg-white  focus:border-indigo-900 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-20"
                                ></input>
                            </div>
                            </div>
                            
                        </div>
                        <div className='flex justify-center mb-10 bg-orange-600 w-[300px] h-[50px] mx-auto rounded-lg '>
                            <button>Update Profile</button>
                        </div>
                    </div>
             
                </div>
               
            </div>

        </>
    )
}

export default EditProfile