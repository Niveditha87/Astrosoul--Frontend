import React, { useContext } from "react";
import { StepperContext } from "../Contexts/StepperContext";



const TeachingWriting = () => {
    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="flex flex-col teach">
            <div className="w-full mx-2 flex-1 teach-down">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font relative top-1">
                    Do You Have Any Writing Experience(Books/blogs/article)
                </div>
                <div className="flex">
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
                            Yes
                        </label>
                    </div>
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
                </div>
            </div>
            {/* If it is yes open this otherwise hide */}

            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                {" "}
                Writing Language
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

            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                {" "}
                Details of Writing
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
            {/* If it is yes open this otherwise hide */}

            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                    Do You Have Any Teaching Experience
                </div>
                <div className="flex">
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
                            Yes
                        </label>
                    </div>
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
                </div>
            </div>
            {/* If it is yes open this otherwise hide */}

            <div className="flex flex-row gap-1 justify-evenly">
                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        Teaching Subject
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                        <input
                            type="text"
                            onChange={handleChange}
                            value={userData["address"] || ""}
                            name="address"
                            placeholder="Write Subject"
                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />
                    </div>
                </div>
                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        Teaching Since
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
            </div>
            {/* If it is yes open this otherwise hide */}

        </div>
    );
};

export default TeachingWriting;