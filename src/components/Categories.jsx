import React, { Fragment, useEffect, useRef, useState } from "react";
import { BiMessageRoundedDots } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import panditji from '../images/panditji.png'
import store from '../images/store.png'
import horoscope from '../images/horoscope.png'
import panchang from '../images/panchang.png'
import calender from '../images/festival.png'
import compass from '../images/compass.jpg'
import marriage from '../images/marriage.jpg'
import carrer from '../images/carrer.jpg'
import love from '../images/love.png'
import './Categories.css'

function Categories() {
    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);


    const switchTabs = (e, tab) => {
        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }

        if (tab === "register") {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
    };



  return (
<>

          <div className="container LoginSignUpContainer ">

            <div className="LoginSignUpBox xs:mt-[50px] md:mt-0 lg:mt-0  ">
                  <div className="bg-white text-black  ">
                      <div className="Login_signUp_toggle flex flex-row ">
                          <div className="mx-auto text-xl font-bold text-orange-700">
                              <p className="mt-5" onClick={(e) => switchTabs(e, "login")}>Panditji</p>
                          </div>
                          <div className="mx-auto text-xl font-bold text-orange-700">
                              <p className="ml-12 mt-5 " onClick={(e) => switchTabs(e, "register")}>Astroyogi</p>
                          </div>
                    </div>
                      <button className="" ref={switcherTab}></button> 
                 </div>
                 <form
                      action=""
                      className="loginForm mt-10  "
                      ref={loginTab}
                     
                  >
                      

                 <div className="  grid grid-cols-3 gap-4 justify-center  mt-10 ">

                     <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col  m-10  '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={panditji} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
                              </div>


                    </div>
                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={store} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Pooja Samagthi/Store</h1>
                              </div>


                          </div>
                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={horoscope} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Horoscope</h1>
                              </div>


                          </div>
                          
                          
                      </div>


                      {/* <div className="  grid grid-cols-3 gap-4 justify-center  mt-10 ">

                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col  m-10  '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={panchang} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
                              </div>


                          </div>
                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={calender} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
                              </div>


                          </div>
                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={compass} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
                              </div>


                          </div> */}


                      {/* </div> */}
                      

                     
                      
               

          </form>
          


                  <form
                      action=""
                      className="signUpForm mt-3"
                      ref={registerTab}
                      encType="multipart/form-data"
        
                  >
                      

                      <div className="  grid grid-cols-3 gap-4 justify-center  mt-10 ">

                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col  m-10  '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={love} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>love & Relationship</h1>
                              </div>


                          </div>
                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={marriage} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Marriage & Kundli</h1>
                              </div>


                          </div>
                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={carrer} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Carrer</h1>
                              </div>


                          </div>


                      </div>


                      {/* <div className="  grid grid-cols-3 gap-4 justify-center  mt-10 ">

                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col  m-10  '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={panchang} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
                              </div>


                          </div>
                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={calender} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
                              </div>


                          </div>
                          <div
                              className=' h-36 w-60  bg-white flex justify-center flex-col m-10 '
                          // src={banner}
                          >
                              <div className='flex mx-auto '>
                                  <img src={compass} className="h-24 border rounded-full" />
                              </div>
                              <div>
                                  <h1 className='flex justify-center mx-auto mt-5 text-lg'>Find Panditji</h1>
                              </div>


                          </div> */}


                      {/* </div> */}
                      
                  </form>

              </div>

          </div>

</>

  )
}

export default Categories