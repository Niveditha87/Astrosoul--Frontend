import React from "react";
import AstrologerSidebar from "../AstrologerSidebar";
import "./Wallet.css";

const Wallet = () => {
    return (
        <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
            <section class="sidebar md:col-span-1">
                {" "}
                <AstrologerSidebar />
            </section>

            <div className="dashboardContainer">
                {/* toggle start */}

                <div className="flex flex-row gap-4 justify-end pr-3">
                    <div class="flex items-center justify-center  mb-12 ">
                        <label for="toogleA" class="flex items-center cursor-pointer">
                            {/* <!-- toggle --> */}
                            <div class="relative">
                                {/* <!-- input --> */}
                                <input id="toogleA" type="checkbox" class="sr-only" />
                                {/* <!-- line --> */}
                                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                {/* <!-- dot --> */}
                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                            </div>
                            {/* <!-- label --> */}
                            <div class="ml-3 text-gray-700 font-medium">Chat</div>
                        </label>
                    </div>

                    {/* 2 */}
                    <div class="flex items-center justify-center  mb-12 ">
                        <label for="toogleB" class="flex items-center cursor-pointer">
                            {/* <!-- toggle --> */}
                            <div class="relative">
                                {/* <!-- input --> */}
                                <input id="toogleB" type="checkbox" class="sr-only" />
                                {/* <!-- line --> */}
                                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                {/* <!-- dot --> */}
                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                            </div>
                            {/* <!-- label --> */}
                            <div class="ml-3 text-gray-700 font-medium">Call</div>
                        </label>
                    </div>
                    {/* 3 */}
                    <div class="flex items-center justify-center mb-12 ">
                        <label for="toogleC" class="flex items-center cursor-pointer">
                            {/* <!-- toggle --> */}
                            <div class="relative">
                                {/* <!-- input --> */}
                                <input id="toogleC" type="checkbox" class="sr-only" />
                                {/* <!-- line --> */}
                                <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                {/* <!-- dot --> */}
                                <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                            </div>
                            {/* <!-- label --> */}
                            <div class="ml-3 text-gray-700 font-medium">Queue</div>
                        </label>
                    </div>
                </div>
                {/* toggle end */}
                <div className=" container dashboardSummary">
                    <hr />
                    <h1 className="pt-6 font-semibold text-lg">Wallet</h1>
                    <div className="flex flex-row gap-14 pt-8">
                        <div className="flex flex-col">
                            <span className="font-semibold">Available Funds</span>
                            <span className="font-bold text-lg">0.00 ₹</span>
                            <span>Low funds, please top up</span>
                        </div>
                        <div className="flex flex-row gap-6">
                            <div class="relative">
                                <label
                                    class="block text-gray-700 text-sm font-bold mb-2"
                                    for="password"
                                >
                                    Amount
                                </label>
                                <select
                                    class="block appearance-none w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                >
                                    <option>Select Amount</option>
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
                            <div className="uppercase bg-blue-600 rounded-md h-[3rem] w-[12rem] p-3 flex justify-center mt-7">
                                top up wallet
                            </div>
                        </div>
                    </div>
                    <h1 className="pt-6 font-semibold text-sm">Top Up With</h1>
                    <div className="flex flex-row gap-4 mt-4">
                        <div className="bg-gray-400 flex justify-center p-2 w-[5rem]">
                            ₹ 50
                        </div>
                        <div className="bg-gray-400 flex justify-center p-2 w-[5rem]">
                            ₹ 100
                        </div>
                        <div className="bg-gray-400 flex justify-center p-2 w-[5rem]">
                            ₹ 200
                        </div>
                        <div className="bg-gray-400 flex justify-center p-2 w-[5rem]">
                            ₹ 500
                        </div>
                        <div className="bg-gray-400 flex justify-center p-2 w-[5rem]">
                            ₹ 1000
                        </div>
                        <div className="bg-gray-400 flex justify-center p-2 w-[5rem]">
                            ₹ 2000
                        </div>
                        <div className="bg-gray-400 flex justify-center p-2 w-[5rem]">
                            ₹ 5000
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <table className="w-full mt-8 text-sm text-left text-gray-500 dark:text-gray-400 border-l-0">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th
                                    scope="col"
                                    className="py-3 px-6 bg-orange-100 dark:bg-gray-800"
                                >
                                    S.No
                                </th>
                                <th scope="col" className="py-3 px-6 bg-orange-100 dark:bg-gray-800">
                                    Report
                                </th>
                                <th scope="col" className="py-3 px-6 bg-orange-100 dark:bg-gray-800">
                                    Caller Name
                                </th>
                                <th scope="col" className="py-3 px-6 bg-orange-100 dark:bg-gray-800">
                                    Query
                                </th>
                                <th scope="col" className="py-3 px-6 bg-orange-100 dark:bg-gray-800">
                                    Date of Birth
                                </th>
                                <th scope="col" className="py-3 px-6 bg-orange-100 dark:bg-gray-800">
                                    Location of Birth
                                </th>
                                <th scope="col" className="py-3 px-6 bg-orange-100 dark:bg-gray-800">
                                    Type
                                </th>
                                <th scope="col" className="py-3 px-6 bg-orange-100 dark:bg-gray-800">
                                    Allotted Time
                                </th>
                                <th scope="col" className="py-3 px-6  bg-orange-100 dark:bg-gray-800">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td
                                    scope="row"
                                    className="py-4 px-6"
                                >
                                    1
                                </td>

                                <td className="py-4 px-6">
                                    Delete
                                </td>
                                <td className="py-4 px-6">ghj</td>
                                <td className="py-4 px-6">hj</td>
                                <td className="py-4 px-6">fgh</td>
                                <td className="py-4 px-6">gh</td>
                                <td className="py-4 px-6">gv</td>
                                <td className="py-4 px-6">gh</td>
                                <td className="py-4 px-6">fgh</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Wallet;