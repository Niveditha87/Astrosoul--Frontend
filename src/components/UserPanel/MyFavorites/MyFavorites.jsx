import React from 'react'
import UsersideBar from '../UsersideBar'

const MyFavorites= () => {
  return (
    <>
    <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
    <section class="sidebar md:col-span-1">
        {" "}
        <UsersideBar />
    </section>

    <div className="dashboardContainer">
        <div className='ml-2'>
        <div className='font-bold mb-1'>MyFavorites</div>
<hr className='  border-1 border-black border-dotted ' size={30}/>
<div className='flex mt-5 gap-6 font-semibold text-sm '>
    <button className='border border-blue-300 text-blue-500 rounded-md px-2 p-1'>Astrologers</button>
    <button className='border border-blue-300 text-blue-500 rounded-md  px-2 p-1'>Pandith</button>
    <button className='border border-blue-300 text-blue-500 rounded-md  px-2 p-1'>Pooja</button>
    <button className='border border-blue-300 text-blue-500 rounded-md  px-2 p-1'>Reports</button>
    <button className='border border-blue-300 text-blue-500 rounded-md  px-2 p-1'>Magazine</button>
    <button className='border border-blue-300 text-blue-500 rounded-md  px-2 p-1'>Blogs</button>
    <button className='border border-blue-300 text-blue-500 rounded-md  px-2 p-1'>Store</button>

</div>
<div className=' flex'><button className='border shadow-md p-2 mt-5 w-3/4'>No MyFavorite Astrologer</button></div>
</div>
</div>
</div>
    </>
  )
}

export default MyFavorites