import React from 'react'
import { BsCalendarDate } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'


function EditProfile({ visible, onclose }) {
    if (!visible) return null;
    return (
        <>
            <div className='fixed top-0 inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center  p-4'>
                <div className='block rounded-lg bg-white w-[700px]'>
                    <div className='bg-orange-500 p-2 flex justify-evenly items-center'>
                        <h1>Select Languages You Know</h1>
                        <button onClick={onclose} className="text-2xl">x</button>
                    </div>
                    <div>image</div>
                    <div className='p-6 mt-3 flex '>
                        <div className="p-2">
                            <label
                                for=""
                                className="block text-md font-semibold text-gray-800"
                            >
                                First Name
                            </label>
                            <div className="flex items-center border rounded-md">
                                <input
                                    placeholder='Enter Last name'
                                    type="text"
                                    className="block w-[300px] p-2 text-indigo-700 bg-white  focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                ></input>
                            </div>
                        </div>
                        <div className="p-2">
                            <label
                                for=""
                                className="block text-md font-semibold text-gray-800"
                            >
                                Last Name
                            </label>
                            <div className="flex items-center border rounded-md">
                                <input
                                    placeholder='Enter first name'
                                    type="text"
                                    className="block w-[300px] p-2 text-indigo-700 bg-white  focus:border-indigo-900 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-20"
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className='px-8 flex gap-2'>
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
                                    className="block w-[300px] p-2 text-indigo-700 bg-white focus:outline-none  "
                                ></input>
                            </div>
                        </div>
                        <div className="p-2">
                            <label
                                for=""
                                className="block text-md font-semibold text-gray-800"
                            >
                                time
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
                    <div className='px-8 flex gap-2 mb-8'>

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
                </div>
            </div>

        </>
    )
}

export default EditProfile