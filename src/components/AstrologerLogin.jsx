import React from "react";
import { CgMail } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri"
function AstrologerLogin() {
    return (
        <>
            <div>
                <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden bg-orange-100">
                    <div className="w-full p-2 bg-white rounded-md lg:max-w-xl shadow-md block justify-center items-center">
                        <div className="font-bold text-xl text-center p-2">Astrologer Login</div>
                        <hr />
                        <div className="w-[451px] h-[304px] ml-[61px]">
                            <div className="mb-2 mt-6">
                                <label
                                    for="email"
                                    className="block text-md font-semibold text-gray-800"
                                >
                                    Email id
                                </label>
                                <div className="flex items-center border rounded-md hover:ring-2">
                                    <CgMail size={20} className="ml-2" />
                                    <input

                                        type="email"
                                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white focus:outline-none"
                                    ></input>
                                </div>
                            </div>

                            <div className="mb-2 bg-white ">
                                <label
                                    for="password"
                                    className="block text-md font-semibold text-gray-800"
                                >
                                    Password
                                </label>
                                <div className="flex items-center border rounded-md hover:ring-2 ">
                                    <div className="  ">
                                        <RiLockPasswordLine size={20} className="ml-2" />
                                    </div>
                                    <input

                                        type="password"
                                        className="block w-full px-4 py-2 mt-2 border-none focus:outline-none "
                                    ></input>
                                </div>
                            </div>
                            <div className="text-right"><a className="text-blue-900 underline underline-offset-1" href="">forget password?</a></div>
                            <div className=""><button className="bg-orange-600 rounded-full text-center h-[45px] w-[383px] ml-2 mr-5 mt-5">Login</button></div>
                            <div className="mt-8 text-center">
                                <input
                                    type="checkbox"
                                    id=""
                                    name="fav_language"
                                    value=""
                                    className="mb-4 mr-4"
                                />By signing in, you agree to our <span className="text-red-600 underline underline-offset-1">terms and conditions</span>
                            </div>
                        </div>
                        {/* <p className="text-center m-6 text-slate-600 font-bold">------OR------</p>
                        <div className=""><button className="bg-orange-600 rounded-full text-center h-[45px] w-[383px] ml-16 mr-32 text-white">google</button></div>
                        <div className="mt-8 text-center">
                            <input
                                type="checkbox"
                                id=""
                                name=""
                                value=""
                                className="mb-4 mr-4"
                            />By signing in, you agree to our <span className="text-red-600 underline underline-offset-1">terms and conditions</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AstrologerLogin;