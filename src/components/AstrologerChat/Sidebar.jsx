import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'

const Sidebar = () => {
    return (
        <div className='flex-none border-r-1 bg-orange-600 '>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar