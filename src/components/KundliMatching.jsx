import React from 'react'
import horoscope from '../images/horoscopee.png'
import { AiOutlineHome } from 'react-icons/ai'
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";


function TodayHoroscope() {
    return (
        <>
            <section className='overflow-y-hidden'>
                {/* <div> */}
                <div className=' bg-orange-500'>
                    <div className='flex justify-between  w-[20rem] md:w-[100%]'>
                        <div className='ml-10 md:ml-20'>
                            <div className='text-xl md:text-5xl font-semibold mt-10 md:mt-16 border-b-4'>
                                Kundli Matching
                            </div>
                            <div className='text-lg md:text-3xl mt-5 md:mt-10'>
                                Find your right one,
                                <br />
                                through matchmaking
                            </div>
                        </div>
                        <div>
                            <img src={horoscope} alt="/" className='h-[150px] md:h-[250px] mr-20 mt-14 md:mt-5' />
                        </div>
                    </div>
                </div>
                    <div className='bg-gray-200 flex flex-row md:pl-20 '>
                        <a href='/' className='mt-4'>
                            <AiOutlineHome size={20} />
                        </a>
                        <div className='ml-2 bg-orange-500 border rounded-lg  m-2 p-1 w-52 flex justify-center'>
                            Kundli Matching
                        </div>
                    </div>
                    <div className='md:ml-20 md:mr-20 mb-5 mt-5'>
                        <div className='m-5 md:ml-20 md:mr-20'>

                            <div>
                                <h1 className='text-center text-2xl font-semibold font-Paprika'>Free Kundli Matching and Check possibilities of Marriage</h1>
                            </div>
                            <div className='mt-5'>
                                <p className='break-all'> Kundli milan or kundali matching is an important consideration to make when you decide to get married. Kundli matching, also called Gun matching or Horoscope matching is the first step towards marriage when the parents decide to match the kundlis of the girl and the boy to ensure the couple is compatible. The gun milan exercise has been a part of India's culture for 1000s of years now and continues to be so.</p>
                            </div>
                            <div className='mt-2'>
                                <p className='break-all'>So, if you too are the lucky one who is planning to get married, and hence looking for a horoscope matching with someone you have started liking, then Astrotalk can help you. The Kundali milan online software on Astrotalk has been prepared by the top astrologers of Astrotalk. The software caters to the free Kundli milan needs of the individuals and gives you insights; such as the number of guns matching for the girl and the boy, what they are compatible in, what their future would be like if they get married, and so much more. The online gun milan software can save you time and the hassle of going out to look for an astrologer to get the gun milan exercise done. Also, in case you have any doubts about the free kundali milan offered by Astrotalk, you can always connect with the astrologers on board and get those doubts sorted for yourself.</p>
                            </div>
                        </div>
                    </div>
            
                    <div>
                        <div className='md:mr-20 md:ml-20'>
                            {/* <div className="flex flex-row gap-5 justify-center">
                                <div className="bg-orange-600 text-center pt-3 font-semibold w-[45rem] h-[3rem] mt-4 rounded-lg backdrop-opacity-95">
                                    Fill Up Partner's Detail
                                </div>
                                <div className="bg-orange-600 text-center pt-3 font-semibold w-[30rem] h-[3rem] mt-4 rounded-lg backdrop-opacity-95">
                                    Saved Matches
                                </div>
                            </div> */}
                            <div className='flex flex-col md:flex-row md:mr-20 md:ml-20'>
                              <div>
                                  <div className='flex flex-col md:flex-row md:w-[44rem]'>
                           
                                    <div class=" w-[20rem] md:w-[22rem] h-[30rem]">
                                        <div className="bg-orange-600 ml-8 md:ml-0 text-center pt-3 font-semibold md:w-[45rem] h-[3rem] mt-4 rounded-lg backdrop-opacity-95 flex justify-center">
                                            Fill Up Partner's Details
                                        </div>
                                            <form class="bg-white drop-shadow-xl md:border rounded-lg px-8 pt-6 pb-8 mb-4 mt-4 ml-8 md:ml-0">
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
                                                            class="block appearance-none   border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                            class="block appearance-none  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                            class="block appearance-none   border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                            class="block appearance-none  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                            class="block appearance-none   border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                            class="block appearance-none    border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                {/* <div class="flex items-center justify-between ">
                                                    <button
                                                        class="bg-orange-600 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full "
                                                        type="button"
                                                    >
                                                        Generate Horoscope
                                                    </button>
                                                </div> */}
                                            </form>
                                        </div>
                                 
                                    <div class=" w-[20rem] mt-10 md:mt-0 md:w-[22rem] md:ml-5 h-[30rem]">
                                        
                                        <form class="bg-white drop-shadow-xl  rounded-lg px-8 pt-6 pb-8 mb-4 mt-20 md:border ml-5 md:ml-0">
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
                                                        class="block appearance-none   border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                        class="block appearance-none  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                        class="block appearance-none   border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                        class="block appearance-none  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                        class="block appearance-none   border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                        class="block appearance-none    border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                            {/* <div class="flex items-center justify-between ">
                                                    <button
                                                        class="bg-orange-600 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full "
                                                        type="button"
                                                    >
                                                        Generate Horoscope
                                                    </button>
                                                </div> */}
                                        </form>

                                    </div>

                                 
                                </div>
                               
                                <div class="flex mx-auto">
                                    <button
                                        class="bg-orange-600 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[20rem] mt-36 md:mt-24 ml-5 md:ml-0  md:w-full "
                                        type="button"
                                    >
                                        Generate Horoscope
                                    </button>
                                </div>
                                </div>
                                {/* <div className='w-[30rem] ml-10 '> */}
                                <div class="w-full max-w-[45rem] md:ml-5 grid content-center">
                                    <div className="bg-orange-600 text-center pt-3 font-semibold md:w-[30rem] h-[3rem] mt-1  rounded-lg backdrop-opacity-95 flex justify-center ">
                                        Saved Matches
                                    </div>
                                    <form class="bg-white drop-shadow-xl border rounded-lg px-[5.1rem] h-[32rem] pt-[14rem] pb-8 mb-4 mt-3 ">
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
                                {/* </div> */}
                            </div>

                              

                        </div>
                        
                    </div>

                    {/* <div className='w-full'> */}
                        {/* <div className="m-20  bg-black"> */}
                            <div className='bg-orange-300 md:m-20 border border-orange-600 p-5 rounded-lg flex flex-row justify-between mb-5 md:mb-0'>
                                <div className='md:ml-32 mt-2'>
                                    <h1 className='flex justify-center text-2xl font-bold'>Will You Get Married in 2023</h1>  
                                    <p className='flex justify-center mt-2 text-xl font-semibold'> Astrologer can tell</p>
                                    <button className=' mt-10 bg-orange-600 text-white md:ml-16 h-12 w-44 border rounded-md'>Talk to Astrologers</button>
                                </div>
                                <div>
                                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/indian-marriage-rep.jpg" className='mt-5 md:mt-0 h-32 md:h-44 border rounded-xl'/>
                                </div>

                            </div>
                    <div className="md:m-20 bg-orange-600  p-5 rounded-lg flex flex-row justify-center">
                                <div className="flex flex-col items-center gap-3 pt-3 w-[100%]">
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
                      {/* </div> */}
                   {/* </div>
                     */}


                {/* </div> */}
            </section>
        </>
    )
}

export default TodayHoroscope