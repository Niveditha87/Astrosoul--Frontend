import React, { useContext } from "react";
// import { TiTick } from 'react-icons/ti'
import { StepperContext } from "../Contexts/StepperContext";



const OtherPlatformInfo = () => {
    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <>
            <div className="flex flex-col other">
                <div className="w-full mx-2 flex-1">

                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        {" "}
                        Ready To Consult Via
                    </div>
                    <div className="flex justify-between mt-6">
                        <div className="form-check form-check-inline">
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
                                Chat
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
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
                                Call
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
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
                                Video
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
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
                                Reports
                            </label>
                        </div>

                    </div>

                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font">
                        {" "}
                        Available Gadgets
                    </div>
                    <div className="form-check form-check-inline">

                        <select
                            className="block appearance-none w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 other-down"
                            id="grid-state"
                        >
                            <option>Desktop</option>
                            <option>i-phone</option>
                            <option>Laptop</option>
                            <option>Mobile</option>
                            <option>Tablet</option>
                        </select>
                    </div>
                    <div className="w-full mx-2 flex-1">
                        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font ">
                            Are You already Working On Any Other Online Portal
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
                    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase prof-font other-down">
                        {" "}
                        Aadhar No
                    </div>
                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded other-down">
                        <input
                            onChange={handleChange}
                            value={userData["password"] || ""}
                            name="password"
                            placeholder="Aadhar No"
                            type="password"
                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        />
                    </div>
                </div>
            </div>





            {/* <div className="container md:mt-10">
  <div className="flex flex-col items-center">
  <div className="flex-1 flex justify-center flex-wrap p-2">
                    <TiTick className='  w-24 h-24 rounded-full bg-orange-500/90 fill-white' />
                </div>
    
    <div className="mt-3 text-xl font-semibold uppercase text-gray-500">
      Congratulaions!
    </div>
    <div className="text-lg font-semibold text-gray-500">
      Your Account has been created.
    </div>
    <a href="/astroreg" className="mt-10">
      <button className="h-10 px-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-orange-600 hover:text-green-100">
        Close
      </button>
    </a>
  </div>
</div> */}
        </>
    )
}

export default OtherPlatformInfo