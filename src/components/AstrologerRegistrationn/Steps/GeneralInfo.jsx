import React, { useContext } from "react";
import { StepperContext } from "../Contexts/StepperContext";

const GenaralInfo = () => {
    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="flex flex-col gene">
            <div className="w-full mx-2 flex-1 gene-check">
                {/* checkBox */}
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
                    {" "}
                    Applying as <span className="text-red-500">*</span>
                </div>
                <div className="flex justify-between mt-6 ">
                    <div className="form-check form-check-inline check-select">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="option1"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            for="inlineCheckbox1"
                        >
                            Astrologer
                        </label>
                    </div>
                    <div className="form-check form-check-inline check-select">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            for="inlineCheckbox2"
                        >
                            Healing
                        </label>
                    </div>
                    <div className="form-check form-check-inline check-select">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            for="inlineCheckbox2"
                        >
                            Numerology
                        </label>
                    </div>
                    <div className="form-check form-check-inline check-select">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            for="inlineCheckbox2"
                        >
                            Palmist
                        </label>
                    </div>
                    <div className="form-check form-check-inline check-select">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            for="inlineCheckbox2"
                        >
                            Pandit
                        </label>
                    </div>
                    <div className="form-check form-check-inline check-select">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            for="inlineCheckbox2"
                        >
                            Tarot Reader
                        </label>
                    </div>
                    <div className="form-check form-check-inline check-select">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            for="inlineCheckbox2"
                        >
                            Vastu Expert
                        </label>
                    </div>
                    <div className="form-check form-check-inline check-select">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            for="inlineCheckbox2"
                        >
                            Yoga Guru
                        </label>
                    </div>
                    <div className="form-check form-check-inline check-select">
                        <input
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            for="inlineCheckbox2"
                        >
                            Others
                        </label>
                    </div>
                </div>
            </div>
            {/* checkBox */}
            {/* phone number */}
            <div className="gene-box">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    {" "}
                    Mobile No <span className="text-red-500">*</span>
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded form-group mt-2 d-inline-block">
                    <span className="country-code px-2">+60</span>
                    <input type="text" className="" placeholder="91257888" />
                </div>
                {/* <div className="w-full mx-2 flex-1"> */}
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    {" "}
                    Email <span className="text-red-500">*</span>
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["password"] || ""}
                        name="password"
                        placeholder="Password"
                        type="password"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
                {/* </div> */}
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    {" "}
                    Name<span className="text-red-500">*</span>
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["name"] || ""}
                        name="name"
                        placeholder="Name"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
            <div className="w-full mx-2 flex-1 gene-box">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    {" "}
                    Gender
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["password"] || ""}
                        name="password"
                        placeholder="Password"
                        type="password"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
            <div className="w-full mx-2 flex-1 gene-box">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase ">
                    {" "}
                    Language
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["password"] || ""}
                        name="password"
                        placeholder="Password"
                        type="password"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
        </div>
    );
};

export default GenaralInfo;