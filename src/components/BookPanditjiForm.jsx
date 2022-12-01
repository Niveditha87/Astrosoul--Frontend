import React from "react";
import { IoMdContact } from "react-icons/io"
import { TfiLocationPin } from "react-icons/tfi"
import { WiFire } from "react-icons/wi"
import { IoIosArrowBack } from "react-icons/io"
import Image from '../images/flag.png'

function BookPanditjiForm() {
    return (
        <div>
            <div className="text-center flex items-center gap-96 p-3 bg-red-600 ">
                <IoIosArrowBack className="text-center ml-7 " size={25} color={"white"} />
                <div className="text-center  ml-60 text-white font-bold text-2xl">Book Panditji</div>
            </div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
                <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Full Name
                            </label>
                            <div className="flex items-center border rounded-md">
                                <IoMdContact size={20} className="ml-2" />
                                <input

                                    type="name"
                                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white  focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                ></input>
                            </div>


                        </div>
                        <div className="mb-2 mt-3">
                            <label
                                for="location"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Location
                            </label>
                            <div className=" d-flex items-center border rounded-md ">
                                <TfiLocationPin size={20} className="ml-2 mt-1" />
                                <input
                                    type="text"
                                    className="block w-full items-center text-indigo-700 bg-white  focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="mb-2 mt-3">
                            <label
                                for="pojatype"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                poja type
                            </label>
                            <div className=" d-flex items-center border rounded-md ">
                                <WiFire size={20} className="ml-2 " />

                                <input
                                    type="text"
                                    className="block w-full  text-indigo-700 bg-white  focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>

                        <div className="mb-2 mt-3">
                            <p>mode of pooja</p>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="online">online/video call pooja</label>
                            <input
                                type="radio"
                                id="online"
                                name="fav_language"
                                value="online"
                                className="ml-5 "
                            />
                            <label for="amagri"> Pooja samagri</label>
                            <br />
                            <input
                                type="checkbox"
                                id="samagri"
                                name="fav_language"
                                value="samagri"
                                className="mb-4"
                            />
                            <label for="samagri">With Pooja samagri</label>
                        </div>
                        <div className="mb-2 mt-3">
                            <label
                                for="number"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Mobile Number
                            </label>
                            <div className="flex items-center border rounded-md ">
                                <img src={Image} alt='no' height={20} width={30} className="ml-4" />
                                <input
                                    type="tel"
                                    placeholder="+91 6361945713"
                                    className="block w-full p-3 text-indigo-700 bg-white  focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="mb-2 mt-3">
                                <label
                                    for="Date"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Date
                                </label>
                                <input
                                    type="date"
                                    className="block w-50 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-2 mt-3">
                                <label
                                    for="Time"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Time
                                </label>
                                <input
                                    type="Time"
                                    className="block w-50 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>



                        <div className="mt-6 text-center">
                            <button className="w-60  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                Send inquiry
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}

export default BookPanditjiForm;