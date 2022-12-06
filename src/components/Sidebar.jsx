import React, { useState } from 'react';
// import PublicNavbar from '../Navbar/PublicNavbar';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsBookmark, BsQuestionOctagon } from "react-icons/bs"
import { FaHandsHelping, FaRegHandshake } from "react-icons/fa"
import { AiOutlineStar, AiOutlineLogout, AiOutlineLogin } from "react-icons/ai"
import { MdOutlinePrivacyTip } from "react-icons/md"
import { FaSignInAlt } from 'react-icons/fa'
import { RiFilePaper2Line } from "react-icons/ri"
import { ImNewspaper } from "react-icons/im"
import { Link } from "react-router-dom"



const Sidebar = () => {
    const menus = [

        { name: "Boomk Mark", link: "", icon: BsBookmark },
        { name: "Help & Support", link: "", icon: FaHandsHelping },
        { name: "What can i Ask", link: "", icon: BsQuestionOctagon },
        { name: "Share With Friends & Family", link: "", icon: FaRegHandshake },
        { name: " Rate Us", link: "", icon: AiOutlineStar },
        { name: "Privacy Policy", link: "", icon: MdOutlinePrivacyTip },
        { name: "Terms and conditions", link: "", icon: RiFilePaper2Line },
        { name: "Blog", link: "", icon: ImNewspaper },
        // { name: "Logout", link: "", icon: AiOutlineLogout }
        { name: "User Login", link: "/login", icon: AiOutlineLogin },
        { name: "Astrologer Login", link: "/astrologerLogin", icon: AiOutlineLogin },
        { name: "Register", link: "/astrologerRegistration", icon: FaSignInAlt }
    ]

    const [open, setOpen] = useState(true)
    return (
        <>
            {/* <PublicNavbar /> */}

            <section className="flex gap-6">
                <div className={`min-h-screen ${open ? "w-72" : "w-16"} duration-500  px-4`}>
                    <div className="py-3 flex justify-end">
                        <HiMenuAlt3 size={26} className="cursor-pointer"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <Link to='/language'>
                        <a href="" class={`block max-w-sm p-6 bg-white border border-gray-200 rounded-b-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${open ? "" : "hidden"}`}>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Devendra joshi</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">Devendra@gmail.com</p>
                            <p class="font-normal text-gray-700 dark:text-gray-400">+91 6589659654</p>

                        </a>
                    </Link>


                    <div className='mt-4 flex flex-col gap-4 relative'>
                        {menus?.map((menu, i) => (
                            <Link to={menu?.link} key={i} className={`${menu?.margin && "mt-5"}group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                                <h2 style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                    className={`duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                                {/* <h2 className={`${open && "hidden" } absolute left-48 bg-black font-semibold whitespace-pre text-white rounde-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300`}>{menu?.name}</h2> */}
                            </Link>
                        ))}


                    </div>
                </div>
                <div className="m-3 text-xl text-gray-900 font-semibold">

                </div>
            </section>
        </>
    );
}

export default Sidebar;