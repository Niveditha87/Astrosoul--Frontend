import React from 'react'
import pro from "../../images/festival.png";

const Navbar = () => {
    return (
        <div className='navbar flex items-center bg-orange-800 h-[50px] p-3 justify-between text-white'>
            <span className='logo font-bold'>chat</span>
            <div className='user flex gap-3'>
                <img src={pro} alt="" className='bg-white h-[24px] w-[24px] rounded-full object-fill' />
                <span>John</span>
                {/* <button className='bg-white text-black'>Logout</button> */}
            </div>
        </div>
    )
}

export default Navbar