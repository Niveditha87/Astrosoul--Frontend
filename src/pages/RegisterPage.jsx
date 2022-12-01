


import React from "react";

import panditji from "../images/panditji.png";
import shopkeeper from "../images/shopkeeper.png";
import officeman from "../images/user.jpeg";
import { FaRegUser } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { GoMail } from 'react-icons/go';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Register = () => {


    return (
        <>
          

            <div className="relative w-full ">

                <div className="flex flex-col justify-center items-center h-full">

                    <div className="flex flex-col items-center justify-center mb-10 ">
                        <div>
                            <h3 className=" text-2xl font-bold font-heading uppercase">
                                {/* Header */}
                                AstroSoul
                            </h3>
                        </div>
                        <div>
                            <h4>Fill all details Register Now!</h4>
                        </div>
                        {/* <div className="flex"> */}

                        {/* </div> */}

                    </div>

                    {/* card starting */}

                    <div class="max-w-sm h-[8rem] p-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">


                        <div class="grid grid-cols-3 gap-4 place-items-stretch h-56 ">
                            {/* <div className="border border-slate-400 rounded-full h-[5rem] w-[5rem] items-center justify-center">  */}
                            <div className="flex flex-col">
                                <div>
                                    <img src={panditji} className="border border-slate-400 rounded-full h-[5rem] w-[5rem]" />

                                </div>
                                <div>
                                    <span className="ml-4 text-sm text-slate-400 ">Panditji</span>

                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <img src={shopkeeper} className="border border-slate-400 rounded-full h-[5rem] w-[5rem]" />

                                </div>
                                <div>
                                    <span className="ml-4 text-sm text-slate-400 ">Shopkeeper</span>

                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <img src={officeman} className="border border-slate-400 rounded-full h-[5rem] w-[5rem]" />

                                </div>
                                <div>
                                    <span className="ml-4 text-sm text-slate-400 ">Yajman</span>

                                </div>
                            </div>


                        </div>
                    </div>

                    {/* card ending */}
                    <div className="flex flex-col w-[21rem] mb-2 p-1">
                        <label className="text-slate-400 relative">User name</label>
                        <div className="flex items-center pl-4 w-[21rem]  border border-slate-400 bg-white rounded-lg ">
                            <FaRegUser />
                            {/* Password */}
                            <input
                                value=""
                                className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                                type="phonenumber"
                                placeholder=" abcd"
                            />
                        </div>
                        {/* <FaRegUser/>
            <input
              className="border relative bg-white-100 p-3 rounded-lg border-black"
              type="name"
              placeholder="abcd"
            
            /> */}
                    </div>

                    <div className="flex flex-col w-[21rem] mb-2 p-1">
                        <label className="text-slate-400 relative">Location/Area</label>
                        <div className="flex items-center pl-6 w-[21rem]  border border-slate-400 bg-white rounded-lg ">
                            <SlLocationPin />
                            {/* Password */}
                            <input
                                value=""
                                className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                                type="location"
                                placeholder=" Surat, Gujarat"
                            />
                        </div>
                        {/* <SlLocationPin/>
            <input
              className="border relative bg-white-100 p-3 rounded-lg border-black"
              type="text"
              placeholder="Surat, Gujarat"
            
            /> */}
                    </div>

                    <div className="flex flex-col w-[21rem] mb-2 p-1">
                        <label className="text-slate-400 relative">Email Address</label>
                        <div className="flex items-center pl-6 w-[21rem]  border border-slate-400 bg-white rounded-lg ">
                            <GoMail />
                            {/* Password */}
                            <input
                                value=""
                                className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                                type="email"
                                placeholder=" abc@gmail.com"
                            />
                        </div>
                        {/* <GoMail/>
            <input
              className="border relative bg-white-100 p-3 rounded-lg border-black"
              type="password"
              placeholder="abc@gmail.com"
           
            /> */}
                    </div>

                    <div className="flex flex-col w-[21rem] mb-2 p-1">
                        <label className="text-slate-400 relative">Mobile Address</label>
                        <div className="flex items-center pl-6 w-[21rem]  border border-slate-400 bg-white rounded-lg ">
                            <FiPhoneCall />
                            {/* Password */}
                            <input
                                value=""
                                className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                                type="phonenumber"
                                placeholder=" +91 45692 36562"
                            />
                        </div>
                        {/* <input
              className="border relative bg-white-100 p-3 rounded-lg border-black"
              type="name"
              placeholder="+91 45692 36562"
            
            /> */}
                    </div>
                    <div className="flex flex-col w-[21rem] mb-2 p-1">
                        <label className="text-slate-400 relative">Password</label>
                        <div className="flex items-center pl-6 w-[21rem]  border border-slate-400 bg-white rounded-lg ">
                            <RiLockPasswordLine />
                            {/* Password */}
                            <input
                                value=""
                                className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                                type="password"
                                placeholder="........"
                            />
                        </div>
                        {/* <RiLockPasswordLine/>
            <input
              className="border relative bg-white-100 p-3 rounded-lg border-black"
              type="name"
              placeholder="........"
            
            /> */}
                    </div>

                    {/* <button
              type="submit"
              className="w-full py-3 mt-8 bg bg-indigo-600 hover:bg-indigo-500 text-white relative"
            >
              Sign Up
            </button> */}
                    <Link to="/otp">
                        <button
                            type="submit"
                            className="py-3 w-[8rem] mt-2 mb-2 bg-[#ff0000] hover:bg-[#ff4d00] text-white font-bold rounded-lg transition duration-200"
                        >
                            Register
                        </button>
                    </Link>



                </div>
            </div>
        </>

    );
};

export default Register;