import React from "react";
// import PublicNavbar from "../Navbar/PublicNavbar";
import { BsTelephone } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
            {/* <PublicNavbar /> */}
            <section className="max-h-screen overflow-y-hidden">
                <div className="container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div class="flex h-screen overflow-y-hidden">
                            <div class="m-auto">
                                <div className="flex flex-col items-center justify-center mb-10">
                                    <div>
                                        <h3 className=" text-2xl font-bold font-heading uppercase">
                                            {/* Header */}
                                            AstroSoul
                                        </h3>
                                    </div>
                                    <div>
                                        <h4>Enter mobile number and login</h4>
                                    </div>
                                    {/* <div className="flex"> */}

                                    {/* </div> */}
                                </div>
                                <h4 className="text-gray-400">Mobile Number</h4>

                                <div className="flex items-center pl-6 w-[34rem] mb-6 border border-slate-400 bg-white rounded-lg ">
                                    <FiPhoneCall />
                                    {/* Password */}
                                    <input
                                        value=""
                                        className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                                        type="phonenumber"
                                        placeholder=" +91 45692 36562"
                                    />
                                </div>
                                {/* <div className="flex flex-col item-center justify-center"> */}
                                {/* <div> */}
                                <Link to="/">
                                    <button
                                        type="submit"
                                        className="py-4 w-full bg-[#ff0000] hover:bg-[#ff4d00] text-white font-bold rounded-lg transition duration-200"
                                    >
                                        Login
                                    </button>
                                </Link>

                                {/* </div> */}

                                {/* </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;