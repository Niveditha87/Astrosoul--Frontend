import React, { useContext } from "react";
import { StepperContext } from "../Contexts/StepperContext";

const Details = () => {
    const { userData, setUserData } = useContext(StepperContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-1 justify-evenly date">
                <div className="relative">
                    {/* <div className="w-full mx-2 flex-1"> */}

                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                    >
                        Birth Day<span className="text-red-500">*</span>
                    </label>
                    <select
                        className="block appearance-none w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    {/* </div> */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
                <div className="relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                    >
                        Birth Month<span className="text-red-500">*</span>
                    </label>
                    <select
                        className="block appearance-none w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
                <div className="relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                    >
                        Birth Year<span className="text-red-500">*</span>
                    </label>
                    <select
                        className="block appearance-none w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
                <div className="relative">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                    >
                        Religion<span className="text-red-500">*</span>
                    </label>
                    <select
                        className="block appearance-none w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>Hinduism</option>
                        <option>Sikh</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-1 justify-evenly add">
                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                        Formal Education
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
                <div className="w-full mx-2 flex-1">
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                        Pincode
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
            <div className="w-full mx-2 flex-1 place">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Place
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={userData["address"] || ""}
                        name="address"
                        placeholder="Place"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
            <div className="w-full mx-2 flex-1 place">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Address
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["city"] || ""}
                        name="city"
                        placeholder="Address"
                        type="text"
                        className="p-1 px-2 apperance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
        </div>
    );
};

export default Details;