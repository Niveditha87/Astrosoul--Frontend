import React from 'react'
import pro from "../../images/festival.png";

const Chats = () => {
    return (
        <div className='chats'>
            <div className="userChat p-5 flex items-center gap-6 cursor-pointer hover:bg-orange-700">
                <img src={pro} alt="" className='w-[50px] h-[50px] rounded-full object-fill' />
                <div className="userChatInfo">
                    <span className='font-bold text-lg'>hjkjkj</span>
                    <p className='font-light text-black-100'>hello</p>

                </div>
            </div>
            <div className="userChat p-5 flex items-center gap-6 cursor-pointer hover:bg-orange-700">
                <img src={pro} alt="" className='w-[50px] h-[50px] rounded-full object-fill' />
                <div className="userChatInfo">
                    <span className='font-bold text-lg'>ghjkjmbn</span>
                    <p className='font-light text-black-100'>ertyu</p>

                </div>
            </div>
        </div>
    )
}

export default Chats