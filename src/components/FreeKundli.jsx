import React from "react";
import horoscope from '../images/horoscopee.png'
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";

const FreeKundli = () => {
    return (
        <>
            <section className="overflow-hidden">
                <div className=" bg-orange-500 ">
                    <div className='flex justify-between  w-[20rem] md:w-[100%]'>
                        <div className='ml-10 md:ml-20'>
                            <div className='text-xl md:text-5xl font-semibold mt-10 md:mt-16 border-b-4'>
                                Free Kundli Online
                            </div>
                            <div className='text-lg md:text-3xl mt-5 md:mt-10'>
                                Get instant & accurate, <br></br>Janam Kundli
                            </div>
                        </div>

                        <div>
                            <img src={horoscope} alt="/" className='h-[150px] md:h-[250px] mr-20 mt-9 md:mt-5' />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 flex flex-row pl-20 ">
                    <a href="/" className="mt-4">
                        <AiOutlineHome size={20} />
                    </a>
                    <div className="ml-2 bg-orange-500 border rounded-lg  m-2 p-1 w-52 flex justify-center">
                        Free Kundli
                    </div>
                </div>
                <div className="">
                    <div className="m-5 md:m-20">
                        <div className="flex justify-center text-3xl font-semibold p-3">
                            Free Kundli Online - Get Your Detailed Birth Chart with
                            Predictions
                        </div>
           
                        <div className="">
                            {/* <h1 className='text-lg font-bold'>Today’s horoscope for zodiac signs</h1> */}

                            <div className="mt-2">
                                <p className="text-gray-500 break-all">
                                    Reading your Today’s horoscope is one of the best ways to
                                    predict your future. The foretelling of the future through the
                                    Daily horoscope is an ancient practice and finds relevance
                                    even today. The horoscope prediction is about predicting the
                                    individual's future based on various astrological aspects such
                                    as the position of the planets, Nakshatras, Tithi, and much
                                    more. However, it’s predominantly the movement of planets from
                                    one house of the Kundli to another that influences the life of
                                    the native and thus his Daily horoscope. As planets are in
                                    motion, their position in the chart of the native on a daily
                                    basis virtually decides the course of his life and fortune.
                                </p>
                            </div>
                            <div className="mt-2">
                                <p className="text-gray-500 break-all">
                                    Reading your Today’s horoscope is one of the best ways to
                                    predict your future. The foretelling of the future through the
                                    Daily horoscope is an ancient practice and finds relevance
                                    even today. The horoscope prediction is about predicting the
                                    individual's future based on various astrological aspects such
                                    as the position of the planets, Nakshatras, Tithi, and much
                                    more. However, it’s predominantly the movement of planets from
                                    one house of the Kundli to another that influences the life of
                                    the native and thus his Daily horoscope. As planets are in
                                    motion, their position in the chart of the native on a daily
                                    basis virtually decides the course of his life and fortune.
                                </p>
                            </div>
                            {/* <div className='mt-2'>
                          <p className='text-gray-500 break-all'>Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more. However, it’s predominantly the movement of planets from one house of the Kundli to another that influences the life of the native and thus his Daily horoscope. As planets are in motion, their position in the chart of the native on a daily basis virtually decides the course of his life and fortune.</p>
                      </div>
                      <div className='mt-2'>
                          <p className='text-gray-500 break-all'>Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more. However, it’s predominantly the movement of planets from one house of the Kundli to another that influences the life of the native and thus his Daily horoscope. As planets are in motion, their position in the chart of the native on a daily basis virtually decides the course of his life and fortune.</p>
                      </div> */}
                            {/* <div className="flex flex-row gap-5">
                                <div className="bg-orange-600 text-center pt-3 font-semibold w-[45rem] h-[3rem] mt-4 rounded-lg backdrop-opacity-95">
                                    New Kundli
                                </div>
                                <div className="bg-orange-600 text-center pt-3 font-semibold w-[30rem] h-[3rem] mt-4 rounded-lg backdrop-opacity-95">
                                    Saved Kundli
                                </div>
                            </div> */}
                            {/* card design */}

                            <div className="flex flex-col md:flex-row gap-5">
                                <div class="w-full max-w-[45rem] mt-6">
                                    <div className="bg-orange-600 text-center pt-3 font-semibold md:w-[45rem] h-[3rem] mt-4 rounded-lg backdrop-opacity-95 flex justify-center">
                                        New Kundli
                                    </div>
                                    <form class="bg-white drop-shadow-xl border rounded-lg px-8 pt-6 pb-8 mb-4">
                                        <div class="mb-4">
                                            <label
                                                class="block text-gray-700 text-sm font-bold mb-2"
                                                for="username"
                                            >
                                                Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username"
                                                type="text"
                                                placeholder="Enter Name"
                                            />
                                        </div>
                                        <div class="mb-6">
                                            <label
                                                class="block text-gray-700 text-sm font-bold mb-2"
                                                for="password"
                                            >
                                                Gender<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type="password"
                                                placeholder="Male"
                                            />
                                            {/* error display */}
                                            {/* <p class="text-red-500 text-xs italic">
                                         Please choose a password.
                                          </p> */}
                                        </div>

                                        <div className="flex flex-row gap-1 justify-between ">
                                            <div class="relative">
                                                <label
                                                    class="block text-gray-700 text-sm font-bold mb-2"
                                                    for="password"
                                                >
                                                    Birth Day<span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    class="block appearance-none md:w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state"
                                                >
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                                                    <svg
                                                        class="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="relative">
                                                <label
                                                    class="block text-gray-700 text-sm font-bold mb-2"
                                                    for="password"
                                                >
                                                    Birth Month<span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    class="block appearance-none md:w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state"
                                                >
                                                    <option>Jan</option>
                                                    <option>Feb</option>
                                                    <option>Mar</option>
                                                </select>
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                                                    <svg
                                                        class="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="relative">
                                                <label
                                                    class="block text-gray-700 text-sm font-bold mb-2"
                                                    for="password"
                                                >
                                                    Birth Year<span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    class="block appearance-none md:w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state"
                                                >
                                                    <option>2022</option>
                                                    <option>2021</option>
                                                    <option>2020</option>
                                                </select>
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                                                    <svg
                                                        class="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-row  justify-between mt-3">
                                            <div class="relative">
                                                <label
                                                    class="block text-gray-700 text-sm font-bold mb-2"
                                                    for="password"
                                                >
                                                    Birth Hour<span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    class="block appearance-none md:w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state"
                                                    type="number"
                                                >
                                                    <option>15</option>
                                                    <option>16</option>
                                                    <option>17</option>
                                                </select>
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                                                    <svg
                                                        class="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="relative">
                                                <label
                                                    class="block text-gray-700 text-sm font-bold mb-2"
                                                    for="password"
                                                >
                                                    Birth Minute<span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    class="block appearance-none md:w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state"
                                                    type="month"
                                                >
                                                    <option>22</option>
                                                    <option>23</option>
                                                    <option>24</option>
                                                </select>
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                                                    <svg
                                                        class="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="relative">
                                                <label
                                                    class="block text-gray-700 text-sm font-bold mb-2"
                                                    for="password"
                                                >
                                                    Birth Second<span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    class="block appearance-none md:w-[13rem]   border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="grid-state"
                                                >
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </select>
                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                                                    <svg
                                                        class="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <label
                                                class="block text-gray-700 text-sm font-bold mb-2"
                                                for="username"
                                            >
                                                Birth Place <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="birthplace"
                                                type="text"
                                                placeholder="Enter your birth place"
                                            />
                                        </div>
                                        <div class="flex items-center justify-between ">
                                            <button
                                                class="bg-orange-600 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full "
                                                type="button"
                                            >
                                                Generate Horoscope
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* card design end */}

                                <div>
                                    {/* saved kundli */}

                                    <div class="w-full max-w-[45rem] mt-6 grid content-center">
                                        <div className="bg-orange-600 text-center pt-3 font-semibold md:w-[30rem] h-[3rem] mt-4 rounded-lg backdrop-opacity-95 flex justify-center">
                                            Saved Kundli
                                        </div>
                                        <form class="bg-white drop-shadow-xl border rounded-lg px-[5.2rem] h-[32rem] pt-[14rem] pb-8 mb-4">
                                            <div className="flex flex-col gap-2">
                                                <div>
                                                    <span>
                                                        Please login to check your saved horoscope!
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <button className="bg-orange-600 hover:bg-orange-500 rounded-full w-[6rem] h-9 flex gap-2 pt-1 px-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                                        <FaUserAlt className="mt-1 ml-1" />
                                                        Login
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* saved kundli  end*/}
                                </div>
                            </div>
                            <div className="w-full bg-orange-600 mt-5 rounded">
                                <div className="flex flex-col items-center gap-3 pt-3">
                                    <div>
                                        <p className="text-2xl text-center">
                                            Connect with an Astrologer on Call or Chat for more
                                            personalised <br></br>detailed predictions.
                                        </p>
                                    </div>
                                    <div className="flex flex-row md:gap-4">
                                        <div>
                                            <button className="bg-white hover:bg-black hover:text-white rounded-full w-[8rem] md:w-[15rem] h-[4rem] mb-3 flex px-4 py-4 gap-2 font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                                <BsTelephoneFill
                                                    size={25}
                                                    color={"#ff0000"}
                                                    className="mt-1"
                                                />
                                                Talk to Astrologer
                                            </button>
                                        </div>
                                        <div>
                                            <button className="bg-white hover:bg-black hover:text-white rounded-full w-[8rem] md:w-[15rem] h-[4rem] mb-3 flex px-4 py-4 gap-2 font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                                <TbMessageCircle2
                                                    size={25}
                                                    color={"#ff0000"}
                                                    className="mt-1"
                                                />
                                                Chat with Astrologer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FreeKundli;