import React, { useContext } from "react";
import { StepperContext } from "../Contexts/StepperContext";

const Payment = () => {
    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="flex flex-col prof">
            <div className="w-full mx-2 flex-1 prof-box">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-9 uppercase prof-font">
                    {" "}
                    Education/Certification in Astrology/Vastu
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["username"] || ""}
                        name="username"
                        placeholder="Education/Certification in Astrology/Vastu"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
            <div className="flex flex-row gap-1 justify-evenly prof-exp">
                <div className="w-full mx-2 flex-1 prof-box">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        Expertise (in Category)
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                        <input
                            type="text"
                            onChange={handleChange}
                            value={userData["address"] || ""}
                            name="address"
                            placeholder="Address"
                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />
                    </div>
                </div>
                <div className="w-full mx-2 flex-1 prof-box">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        Expertise (In Issue)
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                        <input
                            type="text"
                            onChange={handleChange}
                            value={userData["address"] || ""}
                            name="address"
                            placeholder="Address"
                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-1 justify-evenly prof-year ">
                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        Experince Since
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                        <input
                            type="text"
                            onChange={handleChange}
                            value={userData["address"] || ""}
                            name="address"
                            placeholder="Select Year"
                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />
                    </div>
                </div>
                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        Years of Experience
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                        <input
                            type="text"
                            onChange={handleChange}
                            value={userData["address"] || ""}
                            name="address"
                            placeholder="Years of Experience"
                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full mx-2 flex-1 prof-box">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font ">
                    {" "}
                    Award Received
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["password"] || ""}
                        name="password"
                        placeholder="Name of Award"
                        type="password"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>

            <div className="flex flex-row gap-1 justify-evenly">
                <div className="w-full mx-2 flex-1 ">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        Do You Have Any Exisiting Website Yes/No
                    </div>

                    <div className="flex prof-radio">
                        <div className="flex items-center mr-4">
                            <input
                                id="inline-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="inline-radio"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                No
                            </label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input
                                id="inline-2-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="inline-2-radio"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Yes
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-2 flex-1 ">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        Are you Associated With Any Temple/temples
                    </div>
                    <div className="flex prof-radio">
                        <div className="flex items-center mr-4 ">
                            <input
                                id="inline-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="inline-radio"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                No
                            </label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input
                                id="inline-2-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="inline-2-radio"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Yes
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-1 justify-evenly prof-box prof-down">
                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-9 uppercase prof-font">
                        {" "}
                        You Exisiting Consulting Fees
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                        <input
                            onChange={handleChange}
                            value={userData["username"] || ""}
                            name="username"
                            placeholder="Consulting Fees"
                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;