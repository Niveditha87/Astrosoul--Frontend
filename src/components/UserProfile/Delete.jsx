import React from 'react'
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import EditProfile from './EditProfile';

function EditeDelete() {
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false)
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-start w-auto gap-10 md:gap-32 mt-12  ' >
                <div className='bg-white border rounded-lg  h-[50px] w-full md:w-[500px] p-4 flex justify-center items-center' onClick={() => setShowModal(true)}>
                    <div>
                        <BiEdit size={20} />
                    </div>
                    <div type="button"
                        onClick={() => setShowModal(true)}>Edit profile</div>
                </div>
                <div className='bg-white border rounded-lg  h-[50px] w-full  md:w-[500px] p-4 flex justify-center items-center '>
                    <div>
                        <AiOutlineDelete size={20} color={"red"} />
                    </div>
                    <div className='text-red-500/100'>Delete my account</div>
                </div>
                <EditProfile onclose={handleOnClose} visible={showModal} />
            </div></>
    )
}

export default EditeDelete