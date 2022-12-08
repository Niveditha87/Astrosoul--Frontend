import React from "react";
import horoscopebook from "./images/horoscopebook.jpg";
import { BiEdit } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { GiMale } from "react-icons/gi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

function KundaliHoroscope() {
  return (
    <div className="lg:flex justify-center gap-11 m-10 ">
      <div className="md:m-11">
        <img src={horoscopebook} size={40} height="400px" width="400px" />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">Kundali Horoscope(free)</div>
          <div className="absolute top-28 right-5">
            <AiOutlineShareAlt size={20} />
          </div>
        </div>
        <div>
          kundali is an astrological chart which shows the exact position of
          planets at a particular <br />
          time.it constructed by birth Date.Birth Place and Birth Time of an
          individual.
        </div>
        <br />
        <hr />
        <div className="lg:flex gap-7">
          <div className="block">
            <div>
              <label className="font-bold">Languages:</label>
            </div>
            <select
              name="languages"
              id="cars"
              className="border rounded-md w-[300px]"
            >
              <option value="volvo">Kannada</option>
              <option value="saab">English</option>
              <option value="opel">Hindi</option>
              <option value="audi">Telugu</option>
            </select>
          </div>
          <div className="block">
            <div>
              <label className="font-bold">chartstyle:</label>
            </div>
            <select
              name="languages"
              id="Languages"
              className="border rounded-md w-[300px]"
            >
              <option value="volvo">North</option>
              <option value="saab">South</option>
              <option value="opel">East</option>
              <option value="audi">West</option>
            </select>
          </div>
        </div>
        <br />
        <hr />
        <div className="flex border shadow-lg m-2  w-fit gap-8 p-2">
          <div>
            <div className="flex lg:gap-8">
              <div className="text-sm font-semibold">Ajaychaubey</div>
              <div className="flex text-blue-900 items-center border border-blue-500 rounded-md px-3">
                <BiEdit color={"blue"} />
                Edit
              </div>
              <div className="flex items-center border text-blue-900 border-blue-500 rounded-md px-3">
                <BsCardList color={"blue"} />
                List
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <GiMale />
                Male|Single
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center gap-1">
                <BsFillCalendarDateFill />
                08/10/2022|
              </div>
              <div className="flex items-center gap-1">
                <BiTime />
                06:30:00 AM
              </div>
            </div>
            <div className="flex items-center gap-1">
              <CiLocationOn />
              Bangalore,Karnataka
            </div>
          </div>
        </div>
        <hr />
        <div className="m-3">
          <div className="text-bold">Price of report</div>
          <div className="text-green-700 font-Poppins text-3xl">FREE</div>
        </div>
        <hr />
        <div>
          <div className="flex items-center text-center justify-center m-3 border bg-blue-500 rounded-md p-2">
            <div>
              <AiOutlineFile />
            </div>
            <button>GENERATE REPORT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KundaliHoroscope;
