import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'

const AstrologerChat = () => {
    return (
        <>
            {/* <div className='bg-orange-600 w-[100%] h-[10rem] rounded-b-lg'></div> */}
            <div className="home bg-white-300 h-[100vh] flex items-center justify-center" >
                <div className=" border rounded-md w-[65%] h-[80%] flex overflow-hidden">
                    <Sidebar />
                    <Chat />
                </div>
            </div>
        </>
    )
}

export default AstrologerChat