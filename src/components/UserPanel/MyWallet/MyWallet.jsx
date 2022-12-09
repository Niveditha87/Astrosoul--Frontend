import React from "react";
import UsersideBar from "../UsersideBar";

const MyWallet = () => {
  return (
    <>
      <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
        <section class="sidebar md:col-span-1">
          {" "}
          <UsersideBar />
        </section>

        <div className="dashboardContainer">
          <div className=" container dashboardSummary">
            <div className="font-bold">My Wallet</div>
            <hr className="  border-1 border-black border-dotted " size={30} />

            {/* toggle end */}
            <div className=" container dashboardSummary">
              <div className="flex flex-row gap-14 pt-8">
                <div className="flex flex-col">
                  <span className="font-semibold">Available Funds</span>
                  <span className="font-bold text-lg text-blue-500">
                    0.00 ₹
                  </span>
                  <span className="text-red-300">Low funds, please top up</span>
                </div>
                <div className="flex flex-row gap-6">
                  <div class="relative">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="password"
                    >
                      Amount
                    </label>
                    <select
                      class="block appearance-none w-[13rem]  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Select Amount</option>
                      <option>2</option>
                      <option>3</option>
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
                  <div className="uppercase bg-orange-600 rounded-md h-[3rem] w-[12rem] p-3 flex justify-center mt-7">
                    top up wallet
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <h1 className="pt-6 font-semibold text-sm">Top Up With</h1>
              <div className="flex flex-row gap-4 mt-4">
                <div className="bg-white border rounded-md border-gray-400 text-blue-500 font-bold flex justify-center p-2 w-[5rem]">
                  ₹ 50
                </div>
                <div className="bg-white border rounded-md border-gray-400 text-blue-500 font-bold flex justify-center p-2 w-[5rem]">
                  ₹ 100
                </div>
                <div className="bg-white border rounded-md border-gray-400 text-blue-500 font-bold flex justify-center p-2 w-[5rem]">
                  ₹ 200
                </div>
                <div className="bg-white border rounded-md border-gray-400 text-blue-500 font-bold flex justify-center p-2 w-[5rem]">
                  ₹ 500
                </div>
                <div className="bg-white border rounded-md border-gray-400 text-blue-500 font-bold flex justify-center p-2 w-[5rem]">
                  ₹ 1000
                </div>
                <div className="bg-white border rounded-md border-gray-400 text-blue-500 font-bold flex justify-center p-2 w-[5rem]">
                  ₹ 2000
                </div>
                <div className="bg-white border rounded-md border-gray-400 text-blue-500 font-bold flex justify-center p-2 w-[5rem]">
                  ₹ 5000
                </div>
              </div>
              <hr className="mt-4" />
              <div className="flex justify-between items-center">
              <div className="flex mt-6 items-center gap-1">
                <div>Show</div>
                <div>
                  <button className="border p-2 rounded-md">10</button>
                </div>
                <div>entries</div>
              </div>
              <div>
                <input type="text" placeholder="Search here" className="focus:outline-none border border-gray-500 rounded-md "/>
              </div>
              </div>
              <table className="w-full mt-8 text-sm text-left text-gray-500 dark:text-gray-400 border-l-0">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 dark:bg-orange-400"
                    >
                      S.No
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 dark:bg-orange-400"
                    >
                   Payment Id
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 dark:bg-orange-400"
                    >
                      Order Id
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 dark:bg-orange-400"
                    >
                    Date
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 dark:bg-orange-400"
                    >
                     Pay with
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 dark:bg-orange-400"
                    >
                     Amount
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 dark:bg-orange-400"
                    >
                      Type In/Out
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td scope="row" className="py-4 px-6">
                      1
                    </td>

                    <td className="py-4 px-6">Delete</td>
                    <td className="py-4 px-6">ghj</td>
                    <td className="py-4 px-6">hj</td>
                    <td className="py-4 px-6">fgh</td>
                    <td className="py-4 px-6">gh</td>
                    <td className="py-4 px-6">gv</td>
                 
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-between mt-5">
                <div>
                    <div>Showing 1 to 1 of entries</div>
                </div>
                <div>
                    <button className="border  p-1 border-gray-800">previous</button>
                    <button className="border bg-yellow-300 p-1 border-gray-500">1</button>
                    <button className="border  p-1 border-gray-800">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWallet;
