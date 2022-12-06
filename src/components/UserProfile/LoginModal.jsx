import React from 'react'
import { useState } from 'react';
import LanguageModal from './LanguageModal';
import { MdToggleOn } from 'react-icons/md'
import { MdToggleOff } from 'react-icons/md'
import Delete from './Delete';

import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import EditProfile from './EditProfile';



function Loginmodal() {
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false)

    return (
        <>
            <div className=' block justify-center items-center w-full min-h-[1070px] md:min-h-[610px] p-10 bg-gray-200'>
              <div className='text-center  text-3xl mb-8 font-semibold '> Profile settings</div>

                <div className='flex flex-col md:flex-row justify-center items-start w-auto gap-10 md:gap-32  '>
                    <div className='bg-white border rounded-md w-full md:w-[500px]  p-3 h-[150px]'>
                        <div className='font-semibold'>Notifications</div>
                        <div className='flex justify-between items-start gap-10 mt-5'>
                            <div>Astromall chat</div>
                            <div><MdToggleOff size={40} color={"gray"} /></div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>Live events</div>
                            <div>
                                <MdToggleOn size={40} color={"gray"} />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white border rounded-md  h-[150px] w-full md:w-[500px]  p-4'>
                        <div className='font-semibold'>My languages</div>
                        <div className='flex justify-center mt-8'>
                            
                            <button type="button" className='text-green-900'
                                onClick={() => setShowModal(true)}>Edit your langauge</button>
                        </div>
                    </div>
                </div>
                <Delete />
                <LanguageModal onclose={handleOnClose} visible={showModal} />

            </div>
        </>
    )
}

export default Loginmodal
