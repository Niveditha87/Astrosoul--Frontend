import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import pro from "../../images/festival.png";

const Search = () => {
    return (
        <div className='search border-b-2'>
            <div className="searchForm p-4 flex bg-orange-300">
                <BiSearchAlt color='orange' size={25} className='mr-2 mt-1' />
                <input type="text" className='bg-orange-300 outline-none placeholder:text-gray-50' placeholder='Find a user' />
            </div>
            <div className="userChat p-5 flex items-center gap-6 cursor-pointer hover:bg-orange-700">
                <img src={pro} alt="" className='w-[50px] h-[50px] rounded-full object-fill' />
                <div className="userChatInfo">
                    <span>hjkjkj</span>
                </div>
            </div>
        </div>
    )
}

export default Search