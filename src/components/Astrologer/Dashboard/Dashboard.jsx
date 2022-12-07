import React from "react";
import AstrologerSidebar from "../AstrologerSidebar";
import "./Dashboard.css";

const Dashboard = () => {
    const slot = [
        { time: "12 AM - 04 AM", day: "Today", active: "false" },
        { time: "04 AM - 08 AM", day: "Today", active: "false" },
        { time: "08 AM - 12 PM", day: "Today", active: "false" },
        { time: "12 PM - 04 PM", day: "Today", active: "false" },
        { time: "04 PM - 08 PM", day: "Today", active: "false" },
        { time: "08 PM - 12 AM", day: "Today", active: "true" },
        { time: "12 AM - 04 AM", day: "Tomorrow", active: "true" },
        { time: "04 AM - 08 AM", day: "Tomorrow", active: "true" },
        { time: "08 AM - 12 PM", day: "Tomorrow", active: "true" },
        { time: "12 PM - 04 PM", day: "Tomorrow", active: "true" },
        { time: "04 PM - 08 PM", day: "Tomorrow", active: "true" },
        { time: "08 PM - 12 AM", day: "Tomorrow", active: "true" },
    ];
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

                        <label
                            for="toogleA"
                            class="flex items-center cursor-pointer"
                        >
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
                            <div class="ml-3 text-gray-700 font-medium">
                                Chat
                            </div>
                        </label>
                    </div>

                    {/* 2 */}
                    <div class="flex items-center justify-center  mb-12 ">

                        <label
                            for="toogleB"
                            class="flex items-center cursor-pointer"
                        >
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
                            <div class="ml-3 text-gray-700 font-medium">
                                Call
                            </div>
                        </label>
                    </div>
                    {/* 3 */}
                    <div class="flex items-center justify-center mb-12 ">

                        <label
                            for="toogleC"
                            class="flex items-center cursor-pointer"
                        >
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
                            <div class="ml-3 text-gray-700 font-medium">
                                Queue
                            </div>
                        </label>
                    </div>
                </div>
                {/* toggle end */}
                <div className=" container dashboardSummary">

                    <hr />
                    <div className="flex flex-row justify-evenly gap-8 p-6">
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Display Name</span>
                            <span className="font-semibold">Astro Ajay</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">GotoAstro ID</span>
                            <span className="font-semibold">GT1046B</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Referal Code</span>
                            <span className="font-semibold">AJA46B</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Current Rate</span>
                            <span className="font-semibold">₹ 10</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Ongoing Promotion</span>
                            <span className="font-semibold">No</span>
                        </div>
                    </div>
                    <hr />

                    <div className="flex flex-row justify-evenly gap-8 p-6">
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Personal Wallet</span>
                            <span className="font-semibold">₹ 0.00</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Income</span>
                            <span className="font-semibold">₹ 1813.78</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Commissions</span>
                            <span className="font-semibold">₹ 0.00</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Under Processing</span>
                            <span className="font-semibold">₹ 1813.78</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Net amount</span>
                            <span className="font-semibold">₹ 0.00</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-gray-400">Total Paid Till Date</span>
                            <span className="font-semibold">₹ 0.00</span>
                        </div>
                    </div>
                    <hr />
                    <h1 className="pt-6 font-semibold text-lg">Your Availablity For Today And Tomorrow</h1>
                    <div className=" grid grid-cols-6 gap-3 p-6">
                        {slot.map((s) => (
                            <div className={`flex flex-col items-center ${s.active == 'true' ? "bg-orange-500" : "bg-orange-300"} w-[10rem] h-[5rem] p-3`}>
                                <span className="text-white">{s.time}</span>
                                <span className="text-white">{s.day}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;