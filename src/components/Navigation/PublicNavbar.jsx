
import React, { useState } from 'react'
import Button from './Button';
import logo from '../../images/logo.png'
import logo1 from '../../images/logo1.png'
import { AiOutlineSearch } from "react-icons/ai";
import { Gradient } from 'react-gradient';

const PublicNavbar = () => {
    const gradients = [
        '#800080'
    ];
    let Links = [
        { name: "Free Kundli", link: "/" },
        { name: "Kundli Matching", link: "/wishlist" },
        { name: "Live Astrologers", link: "/register" },
        { name: "Today Panchang", link: "/" },
        { name: "Horoscopes", link: "/wishlist" },
        { name: "Login", link: "/register" },
        { name: "Language", link: "/register" },

    ];
    let Link = [
        { name: "                   ", link: "/" },
        { name: "Chat with Astrologer", link: "/" },
        { name: "Taik to Astrologer", link: "/wishlist" },
        { name: "Shub Muhurat", link: "/register" },
        { name: "Collaboration", link: "/" },
        { name: "Astromall", link: "/wishlist" },
        { name: "Blog", link: "/register" },


    ];
    let [open, setOpen] = useState(false);
    return (
        <>

    <div className='container w-screen'>
        <nav className=' w-full h-50 sticky top-0 left-0 z-50 max-sm md:max-md md:mr-0  shadow-md '>
                    <div className='md:flex items-center justify-between  py-4 md:px-10 bg-orange-600 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                text-gray-800'>

                    <a href="">
                        <img className="h-14 w-30 ml-20 " src={logo1} alt={logo} />

                            </a>
                            <h1 className='3xl ml-2 font-sans '>AstroSoul</h1>
                </div>
                <div className=" ml-10 grid grid-rows-2 grid-flow-col items-end gap-3 ">
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-600 md:z-auto z-[-1] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name}>
                                    {/* <div className='bg-white w-[90px] h-10 text-center rounded-lg pt-1  '> */}
                                    <a href={link.link} className='font-serif text-black hover:text-orange-800 duration-500 mr-8 '>{link.name}</a>
                                    {/* </div> */}
                                </li>
                            ))
                        }

                    </ul>  
                        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-orange-600 md:z-auto z-[-1] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
                            {
                                Link.map((link) => (
                                    <li key={link.name} >
                                        {/* <div className='bg-white w-[90px] h-10 text-center rounded-lg pt-1  '> */}
                                            <a href={link.link} className='font-serif text-black hover:text-orange-800 duration-500 mr-8 '>{link.name}</a>
                                        {/* </div> */}
                                    </li>
                                ))
                            }

                        </ul>  
                </div>

                <div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {/* <ion-icon name={open ? 'close' : 'menu'}></ion-icon> */}x
                    </div>
                    {/* <div className='flex flex-row h-50'>
                        <div className='h-100 w-100  bg-violet-800 p-2 font-bold text-white border rounded-md'>
                            
                            BOOK A CALL
                        </div>
                            <div className='p-2 ml-5'>
                                <a href='/login'> Login</a>
                          
                        </div>
                    </div> */}
                </div>
            </div>
            </nav>
        </div>
    
        </>
    )
}

export default PublicNavbar