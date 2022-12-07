import React from 'react';
import { MdOutlineAttachFile } from 'react-icons/md';
import { BiImages } from 'react-icons/bi';

const Input = () => {
    return (
        <div className='input h-[70px] pt-2 pl-1 bg-orange-50 flex flex-row items-center justify-between'>
            <input type="text" placeholder='Type something...' name="" id="" className='w-[100%] border-none outline-none bg-orange-50 text-gray-400 font-bold placeholder:text-lg' />
            <div className="send flex items-center p-2 gap-1">
                {/* <img src="" alt="" /> */}
                <MdOutlineAttachFile size={24} color='#94a3b8' className="cursor-pointer" />
                {/* <input type="file" className='border-none outline-none' /> */}
                <label htmlFor="file border-none outline-none hidden">
                    {/* <img src="" alt="" /> */}
                    <BiImages size={24} color='#94a3b8' className="cursor-pointer" />
                </label>
                <button className='border-none p-3 rounded-2xl text-white bg-orange-500'>Send</button>
            </div>
        </div>
    )
}

export default Input