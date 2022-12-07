import React from "react";
import AstrologerSidebar from "../AstrologerSidebar";
import "./CallChat.css";

const CallChat = () => {
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
                    <h1 className="pt-6 font-semibold text-lg">Ongoing Call/Chat</h1>

                    {/* table start */}

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

                    {/* table end */}
                    <hr />
                    <h1 className="pt-6 font-semibold text-lg">Queue Call/Chat</h1>

                    {/* table start */}

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

                    {/* table end */}
                </div>
            </div>
        </div>
    );
};

export default CallChat;