import React from 'react'
import { IoVideocam } from 'react-icons/io5'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineMore } from 'react-icons/ai'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
    return (
        <div className='chat flex-1' >
            <div className="chatInfo h-[50px] bg-orange-400 flex items-center justify-between p-5 text-gray-200">
                <span>Jane</span>
                <div className="chatIcons flex gap-3">
                    <IoVideocam size={24} className="hover:cursor-pointer" />
                    <IoIosCall size={24} className="hover:cursor-pointer" />
                    <AiOutlineMore size={24} className="hover:cursor-pointer" />

                </div>
            </div>

            {/* <div className='flex flex-col justify-'> */}
            <Messages />

            <Input />

            {/* </div> */}
        </div>
    )
}

export default Chat