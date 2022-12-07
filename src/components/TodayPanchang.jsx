import React from "react";
import horoscope from '../images/horoscopee.png'
import { AiOutlineHome } from "react-icons/ai";
import { BiSun } from "react-icons/bi";
import { HiMoon } from "react-icons/hi";
import astrotalk2 from "../images/astrotalk2.jpg";
import kundali from "../images/kundali.png";
import { MdCall } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";

function TodayPanchang() {
    return (
        <>
            <div className=' bg-orange-500'>
                <div className='flex justify-between  w-[20rem] md:w-[100%]'>
                    <div className='ml-10 md:ml-20'>
                        <div className='text-xl md:text-5xl font-semibold mt-10 md:mt-16 border-b-4'>
                            <p>
                                Today's <span className=" border-b-4">Panchang</span>
                            </p>
                        </div>
                        <div className='text-lg md:text-3xl mt-5 md:mt-10'>Check your today's Panchang</div>
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
                    Today's Horoscope
                </div>
            </div>
            <div className="ml-5 mr-5 md:ml-9 md:mr-12">
                <div className="md:m-16">
                    <div className="flex justify-center text-3xl font-semibold ">
                        TODAY'S PANCHANG
                    </div>
                    <div className="text-xl text-justify mt-4">
                        <p>
                            Panchang is the astrological daily calendar based on the Indian
                            calendar. Daily panchang is one of the most sought Vedic astrology
                            concepts, which conceptualise the day's planetary position to
                            determine auspicious tithis, timing, festivals, vrats, etc. Using
                            this information, a person can choose whether or not to begin or
                            accomplish a particular task after carefully studying the
                            favourability or unfavorability of the planets ruling the
                            particular task. It is a belief among people that doing a thing or
                            two as per Today's panchang timings brings good luck and helps in
                            the accomplishment of the tasks with ease.
                        </p>
                        <br />
                        <p>
                            At Astrotalk, a Panchang calendar is produced by a team of the
                            best astrologers of India. The Daily Panchang details the various
                            astrological elements of the day and based on the same, the level
                            of auspiciousness and inauspiciousness is decided. Right from
                            Today's sunrise time to today's sunset time, Panchang helps you
                            find all of it as per your convenience.
                        </p>
                        <br />
                        <p>
                            Majorly, Panchang is used to get detail of five aspects. These
                            five aspects are - day of the week (vaar); tithi or the lunar day;
                            nakshatra or the constellation; yoga; and karan. With the change
                            in time and date, all of these compartments that make the panchang
                            also change. And thus it’s necessary to keep oneself updated about
                            them for various reasons.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-300 flex  m-0 items-center h-40  w-full">
                    <form className="flex md:gap-9 w-full  ">
                        <select
                            class="block appearance-none md:ml-40 md:w-3/4 bg-white-200 border border-gray-500 text-gray-700 py-3 px-4 md:pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Enter a city"
                            id="grid-state"
                        >
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                        <button class="bg-yellow-500 mr-40 h-16 w-1/4 hover:bg-yellow-700  text-white font-bold py-2 px-4 border border-yellow-700 rounded-md">
                            Button
                        </button>
                    </form>
                </div>
                <div className="md:m-4 w-full">
                    <div className="flex justify-center text-3xl font-semibold p-3 mt-10 ">
                        TODAY'S PANCHANG
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:ml-20 md:mr-20  md:p-6 ">
                    <div className="">
                        <div className="flex  gap-x-12">
                            <div className="h-20 md:w-2/3 bg-red-200 border border-yellow-600 rounded-md">
                                <div className="flex justify-center items-center mt-4">
                                    <div>
                                        <BiSun className="bg-yellow-400" />
                                    </div>
                                    <div>sunrise</div>
                                </div>
                            </div>
                            <div className="h-20 md:w-2/3 bg-blue-200 border border-blue-600 rounded-md">
                                <div className="flex justify-center items-center mt-4">
                                    <div>
                                        <HiMoon size={20} />
                                    </div>
                                    <div>moon rise</div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-blend-darken  shadow-gray-900 shadow-md ml-4 mt-12  border-grey-100 md:w-[600px] h-[300x] block text-center items-center justify-center   rounded-md">
                            <div className=" grid grid-rows-9 grid-cols-2 gap-0 text-center  md:w-[550px] h-[500px] border-gray-300     ">
                                <div className="border border-slate-300 p-1 mt-6 ml-12">
                                    Tithi
                                </div>
                                <div className="border border-slate-300 p-1 mt-6 ">Saptami</div>
                                <div className="border border-slate-300 p-1 ml-12">
                                    Nakshatra
                                </div>
                                <div className="border border-slate-300 p-1">Vyaghata</div>
                                <div className="border border-slate-300 p-1 ml-12">Yoga</div>
                                <div className="border border-slate-300 p-1">Vanij</div>
                                <div className="border border-slate-300 p-1 ml-12">Karana</div>
                                <div className="border border-slate-300 p-1">Shukla</div>
                                <div className="border border-slate-300 p-1 ml-12">Paksha</div>
                                <div className="border border-slate-300 p-1">Weekday</div>
                                <div className="border border-slate-300 p-1 ml-12">Ritu</div>
                                <div className="border border-slate-300 p-1">Hemant</div>
                                <div className="border border-slate-300 p-1 ml-12">
                                    Shaka Samvat
                                </div>
                                <div className="border border-slate-300 p-1">1944 Plava</div>
                                <div className="border border-slate-300 p-1 ml-12">
                                    Vikram Samvat
                                </div>
                                <div className="border border-slate-300 p-1">2079 Nal</div>
                                <div className="border border-slate-300 p-1 mb-6 ml-12">
                                    Shaka Samvat
                                </div>
                                <div className="border border-slate-300 p-1 mb-6">2079 Nal</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex ml-6 border rounded-md">
                        <img
                            src={astrotalk2}
                            className="border  rounded-2xl"
                            height={600}
                            width={600}
                        />
                    </div>
                </div>

                <div className="bg-blend-darken  shadow-gray-900 shadow-md md:ml-20 md:mr-20 mt-12  border-grey-100 md:w-auto h-[300x] block text-center items-center justify-center   rounded-md">
                    <div className="bg-orange-500 p-2 rounded-t-lg  text-lg">
                        Inauspicious Timings (Ashubha Muhurat)
                    </div>
                    <div className="md:text-md md:ml-8">
                        <div className="md:p-4 flex">
                            <div>Kantaka / Mrityu</div>
                            <div className="md:ml-80">From 01-12-22 02:44:38 AM</div>
                            <div className="md:ml-6">To 01-12-22 04:03:04 AM</div>
                        </div>
                        <hr />
                        <div className="md:p-4 flex">
                            <div>Kantaka / Mrityu</div>
                            <div className="md:ml-80">From 01-12-22 02:44:38 AM</div>
                            <div className="md:ml-6">To 01-12-22 04:03:04 AM</div>
                        </div>
                        <hr />
                        <div className="md:p-4  flex">
                            <div>Kantaka / Mrityu</div>
                            <div className="md:ml-80">From 01-12-22 02:44:38 AM</div>
                            <div className="md:ml-6">To 01-12-22 04:03:04 AM</div>
                        </div>
                        <hr />
                        <div className="md:p-4  flex">
                            <div>Kantaka / Mrityu</div>
                            <div className="md:ml-80">From 01-12-22 02:44:38 AM</div>
                            <div className="md:ml-6">To 01-12-22 04:03:04 AM</div>
                        </div>
                        <hr />
                        <div className="md:p-4  flex ">
                            <div>Kantaka / Mrityu</div>
                            <div className="md:ml-80">From 01-12-22 02:44:38 AM</div>
                            <div className="md:ml-6">To 01-12-22 04:03:04 AM</div>
                        </div>
                        <hr />
                        <div className="md:p-4  flex ">
                            <div>Kantaka / Mrityu</div>
                            <div className="md:ml-80">From 01-12-22 02:44:38 AM</div>
                            <div className="md:ml-6">To 01-12-22 04:03:04 AM</div>
                        </div>
                        <hr />
                        <div className="md:p-4  flex ">
                            <div>Kantaka / Mrityu</div>
                            <div className="md:ml-80">From 01-12-22 02:44:38 AM</div>
                            <div className="md:ml-6">To 01-12-22 04:03:04 AM</div>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col md:flex-row gap-6  text-center justify-center mt-6  md:ml-20 md:mr-20 rounded-md">
                    <div className="md:w-1/2  block justify-center text-center items-center bg-blend-darken shadow-gray-900 shadow-md   border-grey-100 gap-6 rounded-md">
                        <div className="bg-orange-500 p-3 rounded-t-lg  text-xl">
                            Inauspicious Timings (Ashubha Muhurat)
                        </div>
                        <div className="md:p-4 mt-8">
                            <img src={kundali} height={900} width={600} />
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-blend-darken  shadow-gray-900 shadow-md ml-2   border-grey-100  block text-center items-center justify-center   rounded-md">
                        <div className="bg-orange-500 md:p-3 rounded-t-lg  text-xl">
                            Inauspicious Timings (Ashubha Muhurat)
                        </div>

                        <div className="md:ml-6 mt-5 ">
                            <table className="border border-gray-300 md:w-[500px] h-[300px] mb-6 ">
                                <tr className="border border-gray-3000  ">
                                    <td className="border border-gray-300 md:w-[100px]  text-md">
                                        Tara Bala
                                    </td>
                                    <td>
                                        <div className="flex flex-wrap gap-5 ml-4 mt-2 mb-1 text-md">
                                            <div className="border border-gray-300 p-2">Bharani,</div>
                                            <div className="border border-gray-300 p-2">Rohini,</div>
                                            <div className="border border-gray-300 p-2 ">Aadra,</div>
                                            <div className="border border-gray-300 p-2">
                                                Ashlesha,
                                            </div>
                                            <div className="border border-gray-300 p-2">
                                                Purva Phalguni,
                                            </div>
                                            <div className="border border-gray-300 p-2">Hasta,</div>
                                            <div className="border border-gray-300 p-2">Swati,</div>
                                            <div className="border border-gray-300 p-2">
                                                Purva Ashadha,
                                            </div>
                                            <div className="border border-gray-300 p-2">
                                                Shravana,
                                            </div>
                                            <div className="border border-gray-300 p-2">
                                                Purva Ashadha,
                                            </div>
                                            <div className="border border-gray-300 p-2">
                                                Purva Ashadha,
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="border border-gray-300 text-md">
                                        chandra Bala
                                    </td>
                                    <td>
                                        <div className="flex flex-wrap gap-4 p-3 mt-3 text-md ">
                                            <div className="border border-gray-300 p-2">Bharani,</div>
                                            <div className="border border-gray-300 p-2">Rohini,</div>
                                            <div className="border border-gray-300 p-2">Aadra,</div>
                                            <div className="border border-gray-300 p-2">
                                                Ashlesha,
                                            </div>
                                            <div className="border border-gray-300 p-2">
                                                Purva Phalguni,
                                            </div>
                                            <div className="border border-gray-300 p-2">Hasta,</div>
                                            <div className="border border-gray-300 p-2">Swati,</div>
                                            <div className="border border-gray-300 p-2">
                                                Purva Ashadha,
                                            </div>
                                            <div className="border border-gray-300 p-2">
                                                Shravana,
                                            </div>
                                            <div className="border border-gray-300 p-2">
                                                Purva Ashadha,
                                            </div>
                                            <div className="border border-gray-300 p-2">
                                                Purva Ashadha,
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className=" bg-blend-darken mt-6 shadow-gray-900 shadow-lg w-[19rem] mr-14 md:w-[100%] border-grey-100  block text-center items-center justify-center md:h-[700px]  rounded-md">
                    <div className="bg-orange-500 p-3 rounded-t-lg  text-lg">
                        Planetary Position at Sunrise
                    </div>
                    <div className="flex justify-center">
                        <table className="border border-gray-300 md:m-5 md:ml-10 w-[1rem] md:w-[1000px] text-sm md:text-md ml-36 mr-44 ">
                            <tr>
                                <th className="border border-gray-300 md:p-3 ">Planets</th>
                                <th className="border border-gray-300 md:p-3">Rashi</th>
                                <th className="border border-gray-300 md:p-3">Longitude</th>
                                <th className="border border-gray-300 md:p-3">Nakshatra </th>
                                <th className="border border-gray-300 md:p-3">Pada</th>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">Ascendant</td>
                                <td className="border border-gray-300 md:p-3">13∘42′29″</td>
                                <td className="border border-gray-300 md:p-3">Anuradh</td>
                                <td className="border border-gray-300 md:p-3">4</td>
                            </tr>
                        </table>
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
                <div className="mt-6 text-xl ml-5 mr-5 md:ml-20 md:mr-20">
                    <div className="">
                        <p className="text-black"> What is Panchang exactly used for?</p>
                    </div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        To be very honest, all your life, panchang has been helping you in
                        some way or the other, but you simply were not aware of it. If you
                        are married, then happens, the muhurat of your marriage was the
                        result of a pandit looking into the panchang to scoop out the most
                        suitable date for you to tie the knot. The suitable time depends on
                        the position of planets ruling marriage or love, the tithi, the
                        nakshatra that compliments marriage and much more. Also, are you
                        pregnant? Well, when the baby would be born, it is the panchang that
                        would help you find out what nakshatra s/he is born in. The
                        nakshatra of a child defines his qualities and also helps a parent
                        understand him better. Apart from this, panchang also comes in handy
                        in finding the shubh muhurat to start a business, for bhoomi pujan
                        and so much more
                    </div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        To be very honest, all your life, panchang has been helping you in
                        some way or the other, but you simply were not aware of it. If you
                        are married, then happens, the muhurat of your marriage was the
                        result of a pandit looking into the panchang to scoop out the most
                        suitable date for you to tie the knot. The suitable time depends on
                        the position of planets ruling marriage or love, the tithi, the
                        nakshatra that compliments marriage and much more. Also, are you
                        pregnant? Well, when the baby would be born, it is the panchang that
                        would help you find out what nakshatra s/he is born in. The
                        nakshatra of a child defines his qualities and also helps a parent
                        understand him better. Apart from this, panchang also comes in handy
                        in finding the shubh muhurat to start a business, for bhoomi pujan
                        and so much more. The purpose of finding Today's panchang, that our
                        astrologers explain, is to use the Hindu calendar at its best and
                        live while being aware of the natural forces that rule or run the
                        world. Though not compulsory, but abiding by these pious timings has
                        its own set of benefits. When you do something during the shubh kaal
                        period, it allows you the blessing of planets and the Gods owing to
                        their favourable position. At AstroTalk, today’s panchang is
                        prepared by the best astrologers after a detailed study. The
                        astrologers can also help you in understanding what aspects means
                        what so the next time, you don't have to rely on us to understand
                        what is panchang and how it works. Now that you might have
                        understood the significance of panchang, let’s look in detail at the
                        5 aspects of panchang and what it means and how you can use panchang
                        for your good.
                    </div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        At AstroTalk, today’s panchang is prepared by the best astrologers
                        after a detailed study. The astrologers can also help you in
                        understanding what aspects means what so the next time, you don't
                        have to rely on us to understand what is panchang and how it works.
                    </div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        Now that you might have understood the significance of panchang,
                        let’s look in detail at the 5 aspects of panchang and what it means
                        and how you can use panchang for your good.
                    </div>
                    <br />
                    <div className="font-semibold text-2xl">1.Vaar</div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        <span className="text-black">Vaar,</span> also called Din, is the
                        easiest thing to understand when considering Panchang reading. Vaar
                        means the day of the week. Each day of the week does not just differ
                        by its name but is also ruled by a different astrological planet.
                        Knowing what planet is ruling what day helps you in understanding
                        what kind of effect the day can have on you. Below are the names of
                        the day and in the bracket is the planet that rules that particular
                        day.
                    </div>
                    <div className="list-disc">
                        <li>Sunday(Sun)</li>
                        <li>Monday (Moon)</li>
                        <li>Tuesday (Mars)</li>
                        <li>Wednesday (Mercury)</li>
                        <li>Thursday (Jupiter)</li>
                        <li>Friday (Venus)</li>
                        <li>Saturday (Saturn)</li>
                    </div>
                    <br />
                    <div className="font-semibold text-2xl">2.Tithi</div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        Tithi (along with Paksha) is the day according to the Hindu lunar
                        calendar. An astrologer would tell you that the Hindu lunar calendar
                        consists of a dark and a bright fortnight also called paksha. When
                        the moon completes 12 degrees of its movement on the Sun, it is
                        called a Tithi or Hindu lunar day.
                    </div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        All in all, there are as many as 30 tithis in a lunar month. When
                        considering Tithis, they either belong to Shukl Paksha or Krishna
                        paksha. In astrology, the beginning and end of a Tithi depends upon
                        the degree of the Moon from that of the Sun. Hence a tithi can start
                        or end at any time of the day. There are several rituals associated
                        with Tithis. Most of the festivals fall on the new moon day
                        (Amavasya) or the full moon day (Poornima).
                    </div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        <p className="font-bold">
                            The Hindu Tithis are classified into five types:
                        </p>
                        <li>
                            <span className=" text-black font-semibold">Nanda Tithi</span> -
                            for happiness and joy
                        </li>
                        <li>
                            <span className=" text-black font-semibold">Bhadra Tithi </span>-
                            is considered good for starting any new work
                        </li>
                        <li>

                            <span className=" text-black font-semibold">Jaya Tithi</span> -
                            the tithi helps you win over your enemies
                        </li>
                        <li>
                            <span className=" text-black font-semibold">Rikta Tithi</span> -
                            most of the time, this tithi is ignored as it is not considered
                            good for any important work.
                        </li>
                        <li>
                            <span className=" text-black font-semibold">Poorna Tithi </span>-
                            very favourable to complete all kinds of job
                        </li>
                    </div>
                    <br />
                    <div className="font-semibold text-2xl">3.Nakshatra </div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        Another important constituent of Today's panchang is Nakshatra. For
                        the unaware, nakshatras are nothing but constellations donning the
                        sky. There are as many as 27 Nakshatras in astrology and all of them
                        are ruled by some God. Naksahstra were invented by the Vedic
                        astrologer to simply further divide the 12 zodiac signs into 27
                        parts for better reading and categorising their different aspects.
                        Nakshatra most of the time is considered the most important element
                        of Panchang reading.
                    </div>
                    <br />
                    <div className="text-slate-600 text-justify">
                        When we divide the 12 zodiac signs into 27 nakshatras, each
                        nakshatra contains thirteen degrees and twenty minutes of the
                        zodiac. You could be born in any of the 27 nakshatras as nakshatras
                        change every one day. Nakshatra are divided into three types: Deva,
                        Manuj and Rakshas. As the name suggests, Rakshas nakshatras and
                        inauspicious while the remaining bring auspicious results for the
                        native most of the time.
                        <br />
                        <br />
                        <div>
                            <p className="font-bold">Here are the names of all 27 nakshatras in astrology:</p>
                            <p className="text-slate-600 text-justify">TABLE</p>
                            <div className="text-slate-600 text-justify">
                                No. English Name Devanagari Name Tamil Name Malayalam Name
                            </div>
                            <div className="list-decimal text-slate-600 text-justify">
                                <li>Ashvini/Aswini अश्विनी Aswini Aswath</li>
                                <li>Krittika/Krithika कृत्तिका Karthigai Kaarthika </li>
                                <li>Rohini रोहिणी Rohini Rohin</li>
                                <li>Rohini रोहिणी Rohini Rohin</li>
                                <li>Punarvasu पुनर्वसु Punarpoosam Punartham</li>
                                <li>Ashlesha आश्ळेषा/आश्लेषा Aayilyam Aayilyam </li>
                                <li> Magha मघा Makam Makham </li>
                                <li>Uttara Phalguni उत्तर फाल्गुनी Uthiram Uthram</li>
                                <li>Ashvini/Aswini अश्विनी Aswini Aswath</li>
                                <li>Krittika/Krithika कृत्तिका Karthigai Kaarthika </li>
                                <li>Rohini रोहिणी Rohini Rohin</li>
                                <li>Rohini रोहिणी Rohini Rohin</li>
                                <li>Punarvasu पुनर्वसु Punarpoosam Punartham</li>
                                <li>Ashlesha आश्ळेषा/आश्लेषा Aayilyam Aayilyam </li>
                                <li> Magha मघा Makam Makham </li>
                                <li>Uttara Phalguni उत्तर फाल्गुनी Uthiram Uthram</li>
                                <li>Ashvini/Aswini अश्विनी Aswini Aswath</li>
                                <li>Krittika/Krithika कृत्तिका Karthigai Kaarthika </li>
                                <li>Rohini रोहिणी Rohini Rohin</li>
                                <li>Rohini रोहिणी Rohini Rohin</li>
                                <li>Punarvasu पुनर्वसु Punarpoosam Punartham</li>
                                <li>Ashlesha आश्ळेषा/आश्लेषा Aayilyam Aayilyam </li>
                                <li> Magha मघा Makam Makham </li>
                                <li>Uttara Phalguni उत्तर फाल्गुनी Uthiram Uthram</li>
                                <li>Uttara Phalguni उत्तर फाल्गुनी Uthiram Uthram</li>
                                <li>Uttara Phalguni उत्तर फाल्गुनी Uthiram Uthram</li>
                                <li>Krittika/Krithika कृत्तिका Karthigai Kaarthika </li>
                            </div>
                            <br />
                            <div className="font-semibold text-black text-2xl">4.Yoga </div>
                            <div className="text-slate-600 text-justify">
                                In Panchang, the literal meaning of the word ‘Yoga’ is addition.
                                a Yoga is derived from the addition of the Sun's and Moon's
                                position in the Zodiac. Each yoga specifies some characteristic
                                of the persona. There are 27 ‘Yogas’, in Panchang. The first yog
                                (Viskumbh) ends when the sum is 13°20'. Second Yog ( Priti) ends
                                when it is 26°40' and so on.
                            </div>
                            <br />
                            <div className="text-slate-600 text-justify">
                                Vaidhriti and Vyatipaat Yogas are mostly avoided when
                                considering performing an auspicious act. Out of the remaining
                                Yogas, the first three Ghatis of Vajra and Vishkumbha, the first
                                half of Parigh, the first five ghatis of Shool, the first nine
                                ghatis of Vyaghat, and the first nine ghatis of Gand and Atigand
                                are to be discarded for all the auspicious acts. A Ghati is an
                                ancient time measurement system, A Ghati is equivalent to the
                                modern 24 Minutes.
                            </div>
                            <br />
                            <div className="font-bold">There are 27 yogas, namely:</div>
                            <br />
                            <div className="list-decimal text-slate-600 ">
                                <li>
                                    <span className="font-bold">. Vishakumbha </span>- Achieving -
                                    (the native is victorious over enemies, gets the property and
                                    wealth)
                                </li>
                                <li>
                                    <span className="font-bold"> Preeti -</span>Happy - (the
                                    native is popular, fascinated to the opposite gender)
                                </li>
                                <li>
                                    <span className="font-bold">Shobhana</span> Beautiful -(The
                                    person is sensualist, passionate about sex)
                                </li>
                                <li>
                                    <span className="font-bold">Sukarma </span>Plentiful -
                                    (performs honourable activities, generous and successful.)
                                </li>
                                <li>
                                    <span className="font-bold">Dhriti</span>Entertainment -
                                    (enjoys life, good time with partner, love to pamper)
                                </li>
                                <li>
                                    <span className="font-bold">Dhruva</span>Dependable - (The
                                    native has a stable personality, is very focused)
                                </li>
                                <li>
                                    <span className="font-bold">Vyaghaata</span>Fierce - (unkind,
                                    certainly may hurt others)
                                </li>
                                <li>
                                    <span className="font-bold">Harshana</span>leasure - (The
                                    native is intellectual, pleasures in cheerfulness and
                                    funniness.)
                                </li>
                                <li>
                                    <span className="font-bold">. Vishakumbha </span>- Achieving -
                                    (the native is victorious over enemies, gets the property and
                                    wealth)
                                </li>
                                <li>
                                    <span className="font-bold"> Preeti -</span>Happy - (the
                                    native is popular, fascinated to the opposite gender)
                                </li>
                                <li>
                                    <span className="font-bold">Shobhana</span> Beautiful -(The
                                    person is sensualist, passionate about sex)
                                </li>
                                <li>
                                    <span className="font-bold">Sukarma </span>Plentiful -
                                    (performs honourable activities, generous and successful.)
                                </li>
                                <li>
                                    <span className="font-bold">Dhriti</span>Entertainment -
                                    (enjoys life, good time with partner, love to pamper)
                                </li>
                                <li>
                                    <span className="font-bold">Dhruva</span>Dependable - (The
                                    native has a stable personality, is very focused)
                                </li>
                                <li>
                                    <span className="font-bold">Vyaghaata</span>Fierce - (unkind,
                                    certainly may hurt others)
                                </li>
                                <li>
                                    <span className="font-bold">Harshana</span>leasure - (The
                                    native is intellectual, pleasures in cheerfulness and
                                    funniness.)
                                </li>
                                <li>
                                    <span className="font-bold">. Vishakumbha </span>- Achieving -
                                    (the native is victorious over enemies, gets the property and
                                    wealth)
                                </li>
                                <li>
                                    <span className="font-bold"> Preeti -</span>Happy - (the
                                    native is popular, fascinated to the opposite gender)
                                </li>
                                <li>
                                    <span className="font-bold">Shobhana</span> Beautiful -(The
                                    person is sensualist, passionate about sex)
                                </li>
                                <li>
                                    <span className="font-bold">Sukarma </span>Plentiful -
                                    (performs honourable activities, generous and successful.)
                                </li>
                                <li>
                                    <span className="font-bold">Dhriti</span>Entertainment -
                                    (enjoys life, good time with partner, love to pamper)
                                </li>
                                <li>
                                    <span className="font-bold">Dhruva</span>Dependable - (The
                                    native has a stable personality, is very focused)
                                </li>
                                <li>
                                    <span className="font-bold">Vyaghaata</span>Fierce - (unkind,
                                    certainly may hurt others)
                                </li>
                                <li>
                                    <span className="font-bold">Harshana</span>leasure - (The
                                    native is intellectual, pleasures in cheerfulness and
                                    funniness.)
                                </li>
                                <li>
                                    <span className="font-bold">. Vishakumbha </span>- Achieving -
                                    (the native is victorious over enemies, gets the property and
                                    wealth)
                                </li>
                                <li>
                                    <span className="font-bold"> Preeti -</span>Happy - (the
                                    native is popular, fascinated to the opposite gender)
                                </li>
                                <li>
                                    <span className="font-bold">Shobhana</span> Beautiful -(The
                                    person is sensualist, passionate about sex)
                                </li>
                                <li>
                                    <span className="font-bold">Sukarma </span>Plentiful -
                                    (performs honourable activities, generous and successful.)
                                </li>
                                <li>
                                    <span className="font-bold">Dhriti</span>Entertainment -
                                    (enjoys life, good time with partner, love to pamper)
                                </li>
                            </div>
                            <br />
                            <div className="font-semibold  text-black text-2xl">5.Karna</div>
                            <div className="text-slate-600 text-justify">
                                Half of Tithi is called `Karna'. In each Tithi, there are two
                                Karans and in total, we have 11 Karnas in total. Four of them
                                occur just once a month and are called the Fixed Karanas:
                                Kintughna, Chatushpada, Sakuni and Naga.
                            </div>
                            <br />
                            <div className="text-slate-600 text-justify">
                                The other seven are movable Karanas. They follow one another in
                                a fixed rotation: Bava, Balava, Kaulava, Taitila, Gara, Vanija
                                and Vishti
                            </div>
                            <br />
                            <div className="flex gap-16">
                                <div>
                                    <div className="font-bold text-slate-600">Movable Karan</div>
                                    <div>Bava</div>
                                    <div>Taitila</div>
                                    <div>Balava</div>
                                    <div>Gara</div>
                                    <div>Vanij</div>
                                    <div>Kaulava</div>
                                    <div>Vishti or Bhadra </div>
                                </div>
                                <div>
                                    <div className="font-bold text-slate-600">Fixed Karan</div>
                                    <div>Sakuni</div>
                                    <div>Balava</div>
                                    <div>Gara</div>
                                    <div>Vanij</div>
                                </div>
                            </div>
                            <div className="text-slate-600 text-justify">
                                Each of the Karanas is said to have its own influence and
                                interpretation. ‘Vishti’ is considered the most inauspicious
                                karana. No important or new work is done during the period of
                                this karana.
                            </div><br />
                            <div className="text-slate-600 text-justify">To get more information about Panchang, you can talk to our astrologers.</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default TodayPanchang;