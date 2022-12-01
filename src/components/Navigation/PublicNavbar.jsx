
// import React, { useState } from 'react'
// import Button from './Button';
// import logo from '../../images/logo.png'
// import logo1 from '../../images/logo1.png'
// import { AiOutlineSearch } from "react-icons/ai";
// import { Gradient } from 'react-gradient';

// const PublicNavbar = () => {
//     const gradients = [
//         '#800080'
//     ];
//     let Links = [
//         { name: "Free Kundli", link: "/" },
//         { name: "Kundli Matching", link: "/wishlist" },
//         { name: "Live Astrologers", link: "/register" },
//         { name: "Today Panchang", link: "/" },
//         { name: "Horoscopes", link: "/wishlist" },
//         { name: "Login", link: "/register" },
//         { name: "Language", link: "/register" },

//     ];
//     let Link = [
//         { name: "                   ", link: "/" },
//         { name: "Chat with Astrologer", link: "/" },
//         { name: "Taik to Astrologer", link: "/wishlist" },
//         { name: "Shub Muhurat", link: "/register" },
//         { name: "Collaboration", link: "/" },
//         { name: "Astromall", link: "/wishlist" },
//         { name: "Blog", link: "/register" },


//     ];
//     let [open, setOpen] = useState(false);
//     return (
//         <>

//     <div className='container w-screen'>
//         <nav className=' w-full h-50 sticky top-0 left-0 z-50 max-sm md:max-md md:mr-0  shadow-md '>
//                     <div className='md:flex items-center justify-between  py-4 md:px-10 bg-orange-600 '>
//                 <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
//                 text-gray-800'>

//                     <a href="">
//                         <img className="h-14 w-30 ml-20 " src={logo1} alt={logo} />

//                             </a>
//                             <h1 className='3xl ml-2 font-sans '>AstroSoul</h1>
//                 </div>
//                 

//<div className=" ml-10 grid grid-rows-2 grid-flow-col items-end gap-3 ">
//                     <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-600 md:z-auto z-[-1] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
//                         {
//                             Links.map((link) => (
//                                 <li key={link.name}>
//                                     {/* <div className='bg-white w-[90px] h-10 text-center rounded-lg pt-1  '> */}
//                                     <a href={link.link} className='font-serif text-black hover:text-orange-800 duration-500 mr-8 '>{link.name}</a>
//                                     {/* </div> */}
//                                 </li>
//                             ))
//                         }

//                     </ul>
//                         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-600 md:z-auto z-[-1] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
//                             {
//                                 Link.map((link) => (
//                                     <li key={link.name} >
//                                         {/* <div className='bg-white w-[90px] h-10 text-center rounded-lg pt-1  '> */}
//                                             <a href={link.link} className='font-serif text-black hover:text-orange-800 duration-500 mr-8 '>{link.name}</a>
//                                         {/* </div> */}
//                                     </li>
//                                 ))
//                             }

//                         </ul>
//                 </div>

//                 <div>
//                     <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//                         {/* <ion-icon name={open ? 'close' : 'menu'}></ion-icon> */}x
//                     </div>
//                     {/* <div className='flex flex-row h-50'>
//                         <div className='h-100 w-100  bg-violet-800 p-2 font-bold text-white border rounded-md'>
                            
//                             BOOK A CALL
//                         </div>
//                             <div className='p-2 ml-5'>
//                                 <a href='/login'> Login</a>
                          
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//             </nav>
//         </div>
    
//         </>
//     )
// }

// export default PublicNavbar
import React, { useState } from 'react'
import { Disclosure } from "@headlessui/react";
// import { Link } from "react-router-dom";
import Sidebar from '../Sidebar';

import {
    MenuIcon,
    XIcon,
    LoginIcon,
    BookOpenIcon,
} from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import logo1 from '../../images/logo1.png'



let Links = [
        { name: "Book Mark", link: "" },
        { name: "Help & Support", link: "" },
        { name: "What can I Ask?", link: "" },
        { name: "Share With Friend & Family", link: "" },
        { name: "Rate Us", link: "" },
        { name: "Privacy Policy", link: "" },
     

    ];
let Linknew = [
    { name: "Terms and Conditions", link: "" },
        { name: "Blog", link: "" },
        { name: "Login", link: "/login" },
        { name: "Register", link: "/register" },

    ]
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const PublicNavbar = () => {
    return (
        <Disclosure
            as="nav"
            className="container-fluid bg-orange-700 shadow-md shadow-gray-300 sticky top-0 z-50 "
        >
            {({ open }) => (
                <>
                    <div className=" container px-4 sm:px-8 lg:px-8 h-[100px] w-screen">
                        <div className="flex  h-24">
                            <div className="flex ">
                                <div className="-ml-2 mr-2 flex items-center md:hidden ">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-white sm:justify-start md:text-white hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        {/* <span className="sr-only">Open main menu</span> */}
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-shrink-0 flex items-center justify-start ">
                                    {/* Logo */}
                                    <a href="/">
                                   <img className="h-14 w-30  " src={logo1} alt={logo1} />

                                    </a>
                                    <p className=' text-3xl ml-2 font-inria '>AstroSoul</p>
                                  
                                </div>
                                {/* grid grid-rows-2 grid-flow-col w-auto ml-[500px] gap-x-1 */}
                                <div className=" ml-96 mt-5">
                                    <ul className={`gap-0 justify-end sm: hidden md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-700 md:z-auto z-[-1] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
                                        {
                                            Links.map((link) => (
                                                <li key={link.name} >

                                                    <a href={link.link} className='font-serif text-white hover:text-orange-900 duration-500 mr-8 '>{link.name}</a>

                                                </li>
                                            ))
                                        }

                                    </ul>
                                    <ul className={`mt-3 gap-4 justify-end sm: hidden md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-700 md:z-auto z-[-1] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
                                        {
                                            Linknew.map((link) => (
                                                <li key={link.name} >
                                         
                                                    <a href={link.link} className='font-serif text-white hover:text-orange-900 duration-500 mr-8 '>{link.name}</a>
                                                
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                   


                            </div>
                           
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        {/* <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col ">
                            <ul className={`w-full  md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-700 md:z-auto z-[-1] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
                                {
                                    Links.map((link) => (
                                        <li key={link.name}>
                                        
                                            <a href={link.link} className='font-serif text-black hover:text-orange-700 duration-500 mr-8 '>{link.name}</a>
                                       
                                        </li>
                                    ))
                                }

                            </ul>
                            <ul className={` w-full md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-700 md:z-auto z-[-1] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
                                {
                                    Linknew.map((link) => (
                                        <li key={link.name} >
                                 
                                            <a href={link.link} className='font-serif text-black hover:text-orange-800 duration-500 mr-8 '>{link.name}</a>
                                        
                                        </li>
                                    ))
                                }

                            </ul>
                            
                        </div> */}
                        <Sidebar/>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default PublicNavbar;
