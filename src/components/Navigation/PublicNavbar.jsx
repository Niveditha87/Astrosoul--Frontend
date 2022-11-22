
import React, { useState } from 'react'
import Button from './Button';
import logo from '../../images/logo.png'
import { AiOutlineSearch } from "react-icons/ai";
import { Gradient } from 'react-gradient';

const PublicNavbar = () => {
    const gradients = [
        '#800080'
    ];
    let Links = [
        { name: "Home", link: "/" },
        { name: "Product Launch", link: "/wishlist" },
        { name: "ClassRoom", link: "/register" },
        { name: "Career", link: "/" },
        { name: "Consultancy", link: "/wishlist" },
        { name: "Join Us", link: "/register" },

    ];
    let [open, setOpen] = useState(false);
    return (

        <div className='pl-20 pr-20'>
        <nav className='container w-full h-50 sticky top-0 left-0 z-50 max-sm md:max-md md:mr-0 '>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10  '>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                text-gray-800'>

                    <a href="">
                        <img className="h-20 ml-15px" src={logo} alt={logo} />

                    </a>
                </div>
                <div className=" flex justify-center max-w-md items-center  lg:w-full">
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top:8rem ' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-md md:my-0 font-semibold w-auto '>
                                    <div className='bg-white w-[90px] h-10 text-center rounded-lg pt-1  '>
                                    <a href={link.link} className=' text-gray-800 hover:text-gray-400 duration-500  '>{link.name}</a>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>  
                </div>

                <div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {/* <ion-icon name={open ? 'close' : 'menu'}></ion-icon> */}x
                    </div>
                    <div className='flex flex-row h-50'>
                        <div className='h-100 w-100  bg-violet-800 p-2 font-bold text-white border rounded-md'>
                            
                            BOOK A CALL
                        </div>
                            <div className='p-2 ml-5'>
                                <a href=''> Login</a>
                          
                        </div>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default PublicNavbar