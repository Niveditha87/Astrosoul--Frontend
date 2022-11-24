import React from "react";
// import PublicNavbar from "../Navbar/PublicNavbar";
import { BsTelephone } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
const OTPpage = () => {
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
                                            Astrotalk
                                        </h3>
                                    </div>
                                    <div>
                                        <h4>We sent OTP code to verify your number</h4>
                                    </div>
                                    {/* <div className="flex"> */}

                                    {/* </div> */}
                                </div>
                                <div class="grid grid-cols-3 gap-4 place-items-stretch h-56 ">
                                    <div className="border border-slate-400 rounded-lg h-[5rem] items-center justify-center">01</div>
                                    <div className="border border-slate-400 rounded-lg h-[5rem]">02</div>
                                    <div className="border border-slate-400 rounded-lg h-[5rem]">03</div>
                                </div>
                                {/* <h4 className="text-gray-400">Mobile Number</h4> */}

                                {/* <div className="flex items-center pl-6 w-[34rem] mb-6 border border-slate-400 bg-white rounded-lg ">
              <FiPhoneCall />
              {/* Password *
              <input
                value=""
                className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                type="phonenumber"
                placeholder=" +91 45692 36562"
              />
            </div> */}
                                {/* <div className="flex flex-col item-center justify-center"> */}
                                {/* <div> */}
                                <button
                                    type="submit"
                                    className="py-4 w-full bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg transition duration-200"
                                >
                                    Login
                                </button>
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

export default OTPpage;