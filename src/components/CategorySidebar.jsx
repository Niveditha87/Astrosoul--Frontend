import React from 'react'
import { Category } from '../components/CategoryData'

function CategorySidebar() {
  return (
      <div>
          <>
              {/* <div className="h-screen flex item-end justify-end px-4 pb-6">
                  <button className=" relative z-30 lg:hidden peer top-0 h-14 w-14 rounded-full bg-slate-700 hover:bg-slate-800 focus:bg-slate-700 transition mb-[660px]">
                      <span className="text-white">
                          <GiHamburgerMenu className="w-6 m-auto" />
                      </span>
                  </button> */}
                  {/* <div className="z-20 fixed top-0-left-92 lg:left-0 h-screen w-9/12 lg:w-72 bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                      <nav role="navigation" className="p-6"> */}
                          {/* <div className="flex item-center gap-4 pb-4">
                        <h2 className="text-3xl textslate-700 font-bold">Department</h2>
                           </div> */}
                          <div className=" categoryContainer mt-4 mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh">
                              <ul >
                                  <li className="category-linkAll cursor-pointer " >All Categories</li>

                                  {Category && Category.map((data) => (
                                      <>
                                          <div>
                                              {data.title}
                                          </div>
                                      </>
                                  ))
                                  }

                              </ul>
                          </div>
                      {/* </nav>
                  </div> */}
              {/* </div> */}
            
          </>
    </div>
  )
}

export default CategorySidebar