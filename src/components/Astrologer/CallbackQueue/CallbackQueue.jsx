import React from "react";
import AstrologerSidebar from "../AstrologerSidebar";
import "./CallbackQueue.css";
import { AiFillInfoCircle } from 'react-icons/ai';

const Callbackqueue = () => {
    const call = [
        { customer: "abcd", callQuery: "Education", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Completed", color: "true" },
        { customer: "fgh", callQuery: "Love Marriage", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Missed", color: "false" },
        { customer: "tyui", callQuery: "Career", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Missed", color: "false" },
        { customer: "abcokjd", callQuery: "Other", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Call Failed", color: "false" },
        { customer: "pol", callQuery: "Other", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Call Failed", color: "false" },
        { customer: "mhg", callQuery: "Match Making", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Call Failed", color: "false" },

    ]
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
                    <h1 className="pt-6 font-semibold text-lg">My Call Request</h1>

                    {/* table start */}

                    <table className="w-full mt-8 text-sm text-left text-gray-500 dark:text-gray-400 border-l-0">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th
                                    scope="col"
                                    className="py-3 px-6 bg-orange-100 dark:bg-gray-800"
                                >
                                    Customer
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 bg-orange-100 dark:bg-gray-800"
                                >
                                    Call Query
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 bg-orange-100 dark:bg-gray-800"
                                >
                                    Time Slot
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 bg-orange-100 dark:bg-gray-800"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 bg-orange-100 dark:bg-gray-800"
                                >
                                    Info
                                </th>
                                <th
                                    scope="col"
                                    className="py-3 px-6 bg-orange-100 dark:bg-gray-800"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {call.map((c) => (
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td scope="row" className="py-4 px-6">
                                        {c.customer}
                                    </td>

                                    <td className="py-4 px-6">{c.callQuery}</td>
                                    <td className="py-4 px-6">{c.timeslot}</td>
                                    <td className="py-4 px-6">{c.date}</td>
                                    <td className="py-4 px-6"><div className="bg-blue-600 rounded-full w-[2rem] h-[2rem] flex items-center justify-center">{c.info}</div></td>
                                    <td className="py-4 px-6"> <div className={`${c.color == 'true' ? "bg-green-600" : "bg-red-600"} text-white rounded-full p-1 w-fit`}>{c.action}</div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* table end */}
                    <h3 className="pt-6 font-semibold text-md">Showing 1 to 6 of 6 entries</h3>
                    <div className="flex flex-row justify-center">
                        <div className="border p-2">Previous</div>
                        <div className="bg-orange-400 p-2">1</div>
                        <div className="border p-2">Next</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Callbackqueue;