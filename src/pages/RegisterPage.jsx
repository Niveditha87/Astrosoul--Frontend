import React from "react";
// import lognImg from "../../images/logo.jpeg";
// import PublicNavbar from "../Navbar/PublicNavbar";
// import panditji from "../../images/panditji.png"


const Register = () => {


    return (
        <>
            {/* <PublicNavbar /> */}

            <div className="relative w-full h-screen">

                <div className="flex flex-col justify-center items-center h-full">

                    <div className="flex flex-col items-center justify-center mb-10">
                        <div>
                            <h3 className=" text-2xl font-bold font-heading uppercase">
                                {/* Header */}
                                Astrotalk
                            </h3>
                        </div>
                        <div>
                            <h4>Fill all details Register Now!</h4>
                        </div>
                        {/* <div className="flex"> */}

                        {/* </div> */}
                    </div>

                    {/* card starting */}

                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        {/* <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a> */}
                        <div class="grid grid-cols-3 gap-4 place-items-stretch h-56 ">
                            <div className="border border-slate-400 rounded-full h-[5rem] w-[5rem] items-center justify-center">
                                <img src="" alt="" className="w-full" />
                            </div>
                            <div className="border border-slate-400 rounded-full h-[5rem]">

                            </div>
                            <div className="border border-slate-400 rounded-full h-[5rem]"></div>
                        </div>
                    </div>

                    {/* card ending */}
                    <div className="flex flex-col mb-4">
                        <label className="text-black relative">Name</label>
                        <input
                            className="border relative bg-gray-100 p-2"
                            type="name"

                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-black relative">Email</label>
                        <input
                            className="border relative bg-gray-100 p-2 mb-3"
                            type="email"

                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-black relative">Password</label>
                        <input
                            className="border relative bg-gray-100 p-2"
                            type="password"

                        />
                    </div>



                    {/* <button
              type="submit"
              className="w-full py-3 mt-8 bg bg-indigo-600 hover:bg-indigo-500 text-white relative"
            >
              Sign Up
            </button> */}
                    <button
                        type="submit"
                        className="py-4 w-[8rem] mt-8 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg transition duration-200"
                    >
                        Login
                    </button>


                </div>
            </div>
        </>

    );
};

export default Register;