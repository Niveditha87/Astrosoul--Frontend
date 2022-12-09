import React from "react";
import UsersideBar from "../UsersideBar";

const MyCallRequest= () => {
  return (
    <>
      <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
        <section class="sidebar md:col-span-1">
          {" "}
          <UsersideBar />
        </section>

        <div className="dashboardContainer">
          <div className=" container dashboardSummary">
            <div className="">
            <div className="font-bold"> MyCallRequest</div>
            <hr className="  border-1 border-black border-dotted " size={30} />
            
              </div>
              <table className="w-full mt-8 text-sm text-left text-gray-500 dark:text-gray-400 border-l-0">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 text-black-200 border  dark:bg-gray-800"
                    >
                      Astrologer
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 text-black-200 border  dark:bg-gray-800"
                    >
                   Call Query
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 text-black-200 border  dark:bg-gray-800"
                    >
                    Time Slot
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 text-black-200 border  dark:bg-gray-800"
                    >
                    Date
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 text-black-200 border  dark:bg-gray-800"
                    >
                    Info
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 bg-orange-100 text-black-200 border  dark:bg-gray-800"
                    >
                     Action
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
                 
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-between mt-5">
                <div>
                    <div>Showing 1 to 1 of entries</div>
                </div>
                <div>
                    <button className="border rounded-sm  p-1 border-gray-800">previous</button>
                    <button className="border rounded-sm  p-1 border-gray-800">Next</button>
                </div>
              </div>
            </div>
            </div>
          </div>
    </>
  );
};

export default MyCallRequest;
