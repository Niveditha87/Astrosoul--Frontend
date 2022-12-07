import React, { useState } from "react";
import horoscope from '../images/horoscopee.png'
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMessageCircle2, TbPhoneCall } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import pic from "../images/festival.png";
import { IoIosVideocam } from "react-icons/io";

const LiveAstrologers = () => {
    const [call, setCall] = useState(true)

    const astrologer = [
        { name: 'fghjk', pic: pic, call: 'true' },
        { name: 'hjkl', pic: pic, call: 'false' },
        { name: 'qrewr', pic: pic, call: 'true' },
        { name: 'adsf', pic: pic, call: 'false' },
        { name: 'pkmnb', pic: pic, call: 'true' },

    ]
    return (
        <>
            <section className="overflow-hidden">
                <div className="container  mx-auto bg-orange-500 h-[300px]">
                    <div className="flex justify-between ml-24">
                        <div className="ml-10">
                            <div className="text-5xl font-semibold mt-16 border-b-4">
                                Live Event
                            </div>
                            <div className="text-3xl mt-10">
                                Live Chat with the Best <br></br>Astrologers
                            </div>
                        </div>

                        <div>
                            <img src={horoscope} alt="/" className="h-[250px] mr-20 mt-5" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 flex flex-row pl-20 ">
                    <div className="mt-4">
                        <Link to="/astroreg">
                            <AiOutlineHome size={20} />
                        </Link>
                    </div>
                    <div className="ml-2 bg-orange-500 border rounded-lg  m-2 p-1 w-52 flex justify-center">
                        Live Event
                    </div>
                </div>
                <div className="container m-4 ">
                    <div className="m-20">
                        {/* <div className="flex justify-center text-3xl font-semibold p-3">
              Free Kundli Online - Get Your Detailed Birth Chart with
              Predictions
            </div> */}
                        {/* <div className='flex justify-center text-xl text-gray-600'>
                      Know Your Today's Horoscope
                  </div> */}
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

                            <div className="flex flex-row gap-5">
                                <div className=" text-start pt-3 font-semibold text-3xl w-[45rem] h-[3rem] mt-4 rounded-lg backdrop-opacity-95">
                                    Live Astrologers
                                </div>
                                <div className="border border-orange-500 text-start pl-3 pt-3 font-semibold w-[30rem] h-[3rem] mt-4 rounded-lg backdrop-opacity-95 flex flex-row ">
                                    <div className="basis-3/4 ">
                                        <input
                                            type="text"
                                            placeholder="Search Event,Astrologer by Name"
                                            className="bg-inherit w-full ml-16 outline-none "
                                        />
                                    </div>
                                    <div className="ml-16 mt-1">
                                        <BiSearchAlt2 color="gray" />
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6 border-gray-300" />
                            {/* card design */}

                            <div className="flex flex-row gap-5">
                                {/* card design end */}

                                <div>
                                    {/* saved kundli */}
                                    <div className="container">
                                        <div className=" grid grid-cols-4 gap-5   ">
                                            {astrologer.map((astro) => (
                                                <div className="grid justify-items-center">
                                                    <div class="w-full max-w-[45rem] mt-6 grid content-center ">
                                                        <div class="bg-white drop-shadow-2xl transform hover:scale-110 motion-reduce:transform-none  border rounded-lg  h-[25rem] w-[16rem]   mb-4 relative overflow-hidden">
                                                            <img
                                                                src={astro.pic}
                                                                alt=""
                                                                className="w-full h-full object-fill"
                                                            />
                                                            <span className="bg-black text-white font-light rounded-lg p-1 absolute text-xl  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">Live</span>
                                                            <span className="absolute text-xl font-semibold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                                {astro.name}
                                                            </span>
                                                            {astro.call == 'true' ?
                                                                <TbPhoneCall
                                                                    size={38}
                                                                    color="black"
                                                                    className="absolute   top-5 right-5 bg-orange-500 rounded-full p-2 cursor-pointer"
                                                                />
                                                                :
                                                                <IoIosVideocam
                                                                    size={38}
                                                                    color="black"
                                                                    className="absolute   top-5 right-5 bg-orange-500 rounded-full p-2 cursor-pointer"
                                                                />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
                                    <div className="flex flex-row gap-4">
                                        <div>
                                            <button className="bg-white hover:bg-black hover:text-white rounded-full w-[15rem] h-[4rem] mb-3 flex px-4 py-4 gap-2 font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                                                <BsTelephoneFill
                                                    size={25}
                                                    color={"#ff0000"}
                                                    className="mt-1"
                                                />
                                                Talk to Astrologer
                                            </button>
                                        </div>
                                        <div>
                                            <button className="bg-white hover:bg-black hover:text-white rounded-full w-[15rem] h-[4rem] mb-3 flex px-4 py-4 gap-2 font-semibold items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
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

export default LiveAstrologers;