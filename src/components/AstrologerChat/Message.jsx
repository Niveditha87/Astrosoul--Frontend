import React from 'react'
import pro from "../../images/festival.png";
import './Message.css'

const Message = () => {

    return (
        <div className='message owner flex gap-3 mb-20'>
            <div className="messageInfo flex flex-col text-gray-400 font-medium">
                <img src={pro} alt="" className='w-[40px] h-[40px] rounded-full object-fill' />
                <span>just now</span>
            </div>
            <div className="messageContent max-w-[80%] flex flex-col gap-6">
                <p className='p bg-white p-3 rounded-b-lg rounded-tr-lg max-w-md'>hello</p>
                <img src={pro} alt="" className='w-[50%] h-[50%]' />

            </div>
        </div>
    )
}

export default Message