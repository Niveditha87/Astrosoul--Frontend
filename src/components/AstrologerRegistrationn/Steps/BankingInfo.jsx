import React, { useContext } from "react";
import { StepperContext } from "../Contexts/StepperContext";

const BankingInfo = () => {
    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="flex flex-col bank">
            <div className="w-full mx-2 flex-1">
                <div className="flex flex-row gap-1 justify-evenly bank-brake">
                    <div className="w-full mx-2 flex-1">
                        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                            Upload Photo (jpg/png) size 1024kb
                        </div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input
                                type="file"
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
                            Upload Photo ID (jpg/png/pdf) size 1024kb
                        </div>
                        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input
                                type="file"
                                onChange={handleChange}
                                value={userData["address"] || ""}
                                name="address"
                                placeholder="Select Year"
                                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                            />
                        </div>
                    </div>
                </div>



                <div className="flex flex-row gap-1 justify-evenly bank-brake">
                    <div className="w-full mx-2 flex-1">
                        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                            Bank Name
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
                            Account Holder Name
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




                <div className="flex flex-row gap-1 justify-evenly bank-brake">
                    <div className="w-full mx-2 flex-1">
                        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                            Account Type
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
                            Bank Account Number
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




                <div className="flex flex-row gap-1 justify-evenly">
                    <div className="w-full mx-2 flex-1">
                        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                            IFSC Code
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

                </div>




            </div>
        </div>
    )
}

export default BankingInfo