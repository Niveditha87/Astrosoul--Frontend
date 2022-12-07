import React from "react";

const UserChatForm = () => {
    return (
        <>
            <div className="h-[100vh] flex items-center justify-center ">
                <div className=" border border-slate-300 rounded-md w-[65%] h-[80%]  overflow-hidden drop-shadow-2xl">
                    <div className="flex flex-row w-full  justify-center ">
                        <span
                            className="uppercase mt-4 font-bold text-2xl 
        "
                        >
                            chat intake form
                        </span>
                    </div>

                    <div className="flex flex-col mt-12  gap-3 ">
                        <div className="flex flex-row gap-16 justify-evenly ">
                            <div className="">
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        First Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Last Name "
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mb-4 relative">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Gender<span className="text-red-500">*</span>
                                    </label>
                                    {/* <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Select Gender "
                  /> */}
                                    <select
                                        class="block appearance-none w-[13rem] h-10  text-gray-700 py-2 px-4 pr-8 rounded leading-tight outline-none focus:outline-none focus:bg-white focus:border-gray-500 "
                                        id="grid-state"
                                    >
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>

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
                            </div>
                        </div>

                        <div className="flex flex-rows gap-16 justify-evenly">
                            <div className="">
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Mobile Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Mobile Number"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Date of Birth <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        class="shadow appearance-none border rounded w-[13rem]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="date"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Time of Birth<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        class="shadow appearance-none border rounded  w-[13rem]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="time"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-16 justify-evenly ">
                            <div className="">
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Place of Birth City<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="City"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Place of Birth State<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="State"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Place of Birth Country<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Country"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-16 justify-evenly ">
                            <div className="">
                                <div class="mb-4 relative">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Marital Status<span className="text-red-500">*</span>
                                    </label>
                                    {/* <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Select Marital Status"
                  /> */}
                                    <select
                                        class="block appearance-none w-[13rem] h-10  text-gray-700 py-2 px-4 pr-8 rounded leading-tight outline-none focus:outline-none focus:bg-white focus:border-gray-500 "
                                        id="grid-state"
                                    >
                                        <option>Select Marital Status</option>
                                        <option>Single</option>
                                        <option>Married</option>

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
                            </div>

                            <div>
                                <div class="mb-4 relative">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Occupation
                                    </label>
                                    {/* <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Select Employed in"
                  /> */}
                                    <select
                                        class="block appearance-none w-[13rem] h-10  text-gray-700 py-2 px-4 pr-8 rounded leading-tight outline-none focus:outline-none focus:bg-white focus:border-gray-500 "
                                        id="grid-state"
                                    >
                                        <option>Select Employed in</option>
                                        <option>aaa</option>
                                        <option>bbb</option>
                                        <option>ccc</option>

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
                            </div>

                            <div>
                                <div class="mb-4 relative">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="username"
                                    >
                                        Topic of concern
                                    </label>
                                    {/* <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Select topic of concern "
                  /> */}
                                    <select
                                        class="block appearance-none w-[13rem] h-10  text-gray-700 py-2 px-4 pr-8 rounded leading-tight outline-none focus:outline-none focus:bg-white focus:border-gray-500 "
                                        id="grid-state"
                                    >
                                        <option>Select topic of concern</option>
                                        <option>ddfghj</option>
                                        <option>fghj</option>
                                        <option>ghjm</option>

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
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="bg-orange-600  w-[10rem] h-[3rem] rounded-full hover:bg-orange-500">Start Chat</button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default UserChatForm;