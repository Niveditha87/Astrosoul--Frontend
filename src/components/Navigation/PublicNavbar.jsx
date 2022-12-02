import React from 'react'
import { Disclosure } from "@headlessui/react";
import Sidebar from '../Sidebar';
import {
    MenuIcon,
    XIcon,
    LoginIcon,
    BookOpenIcon,
} from "@heroicons/react/outline";
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
                    <div className=" container px-4 sm:px-8 lg:px-8 h-[100px] ">
                        <div className="flex  h-24">

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

                    <Disclosure.Panel className="md:hidden">

                        <Sidebar />
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default PublicNavbar;
